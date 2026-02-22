from fastapi import FastAPI, Body, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx
from rag_utils import query_vector_db
from google import genai
import os
from dotenv import load_dotenv
import asyncio
import random
import json
from pathlib import Path

load_dotenv()

# ================= CONFIG =================
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise ValueError("❌ Missing GEMINI_API_KEY")

client = genai.Client(api_key=GEMINI_API_KEY)

app = FastAPI(title="PeriodCare Chatbot")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000","http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

http_client: httpx.AsyncClient = None
RAM_CACHE = {}

# ================= FILE CACHE =================
CACHE_FILE = Path("ai_cache.json")

def load_cache():
    if CACHE_FILE.exists():
        with open(CACHE_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}

def save_cache(cache):
    with open(CACHE_FILE, "w", encoding="utf-8") as f:
        json.dump(cache, f, indent=2, ensure_ascii=False)

FILE_CACHE = load_cache()

def clean_key(text: str) -> str:
    return text.lower().strip()

# ================= STARTUP =================
@app.on_event("startup")
async def startup():
    global http_client
    http_client = httpx.AsyncClient(timeout=60)
    print("✅ Server started")

@app.on_event("shutdown")
async def shutdown():
    await http_client.aclose()

# ================= SMALL TALK =================
def is_small_talk(text: str) -> bool:
    small_talk = [
        "hi","hello","hey","hii","hiii",
        "good morning","good evening",
        "ok","okay","thanks","thank you",
        "hmm","hmmm","👍","🙂"
    ]
    return text.lower().strip() in small_talk

def small_talk_response():
    responses = [
        "Hi! I'm here for you 💗",
        "Hello! How can I help you today?",
        "Hey! Feel free to ask anything about your health 🌸",
        "Hi there 😊 What would you like to talk about?",
        "Hello! I'm listening."
    ]
    return random.choice(responses)

# ================= SAFE GEMINI =================
async def gemini_generate(prompt: str) -> str:
    try:
        response = await asyncio.to_thread(
            client.models.generate_content,
            model="gemini-2.5-flash",
            contents=prompt
        )
        return (response.text or "").strip()
    except Exception as e:
        print("⚠️ Gemini failed:", e)
        return ""

# ================= INTENT CLASSIFIER =================
async def classify_intent(question: str) -> str:
    prompt = f"""
Classify the user query into ONE category:

IDENTITY → asking name, profile, memory, who am I
HEALTH_PERSONAL → symptoms, pain, discharge, mood, cycle
GENERAL → educational info

Return only one word.

Question: {question}
Answer:
"""
    label = await gemini_generate(prompt)
    label = label.upper().strip()

    if "IDENTITY" in label:
        return "IDENTITY"
    elif "HEALTH_PERSONAL" in label:
        return "HEALTH_PERSONAL"
    return "GENERAL"

# ================= NORMALIZATION =================
async def normalize_input(text: str) -> str:
    prompt = f"""
Convert into clear English.
Handle Hindi/Marathi transliteration.
Only output English.

Input: {text}
Output:
"""
    translated = await gemini_generate(prompt)
    return translated if translated else text

# ================= REFINE LANGUAGE =================
async def refine_language(text: str, lang: str):
    if lang.lower() == "english":
        return text

    prompt = f"""
Translate to {lang}.
Keep meaning same.

{text}
"""
    translated = await gemini_generate(prompt)
    return translated if translated else text

# ================= LOCAL MODEL =================
async def ask_local_model(prompt: str) -> str:
    try:
        res = await http_client.post(
            "http://localhost:11434/api/generate",
            json={"model": "phi3:mini", "prompt": prompt, "stream": False},
        )
        if res.status_code != 200:
            return ""
        return res.json().get("response", "").strip()
    except Exception as e:
        print("⚠️ Ollama error:", e)
        return ""

# ================= IDENTITY HANDLER =================
def handle_identity(user_description: str):
    if not user_description.strip():
        return "I don’t have your personal details saved yet."
    return f"You told me: {user_description}"

# ================= CHAT =================
@app.post("/chat")
async def chat(
    question: str = Body(..., embed=True),
    language: str = Body("English", embed=True),
    user_description: str = Body("", embed=True),
):

    # ---- SMALL TALK ----
    if is_small_talk(question):
        return {"route": "SMALL_TALK", "answer": small_talk_response()}

    key = clean_key(question)

    # ---- RAM CACHE ----
    if key in RAM_CACHE:
        print("⚡ RAM cache hit")
        return RAM_CACHE[key]

    # ---- FILE CACHE ----
    if key in FILE_CACHE:
        print("💾 File cache hit")
        RAM_CACHE[key] = FILE_CACHE[key]
        return FILE_CACHE[key]

    try:
        intent = await classify_intent(question)
        print("🧠 Intent:", intent)

        # -------- IDENTITY --------
        if intent == "IDENTITY":
            answer = handle_identity(user_description)
            result = {"route": "LOCAL_MEMORY", "answer": answer}

        # -------- PERSONAL HEALTH --------
        elif intent == "HEALTH_PERSONAL":
            normalized = await normalize_input(question)
            context = query_vector_db(normalized)

            prompt = f"""
You are a calm menstrual health support assistant.

Give reassuring explanation and helpful tips.
Do NOT panic or over-warn.
Suggest doctor only if symptoms persist multiple cycles.

Context: {context}
User Profile: {user_description}
Question: {normalized}
"""

            raw_answer = await ask_local_model(prompt)

            if not raw_answer:
                raw_answer = await gemini_generate(prompt)

            answer = await refine_language(raw_answer, language)

            result = {
                "route": "LOCAL_PRIVATE_AI",
                "answer": answer,
                "normalized_input": normalized,
            }

        # -------- GENERAL --------
        else:
            normalized = await normalize_input(question)

            prompt = f"""
You are a friendly women's health educator.
Answer clearly and simply.

Question: {normalized}
"""

            raw_answer = await gemini_generate(prompt)
            answer = await refine_language(raw_answer, language)

            result = {
                "route": "DIRECT_GEMINI",
                "answer": answer,
                "normalized_input": normalized,
            }

        # ---- SAVE CACHE ----
        RAM_CACHE[key] = result
        FILE_CACHE[key] = result
        save_cache(FILE_CACHE)

        return result

    except Exception as e:
        print("❌ ERROR:", e)
        raise HTTPException(status_code=500, detail="Server error")

# ================= HEALTH =================
@app.get("/health")
def health():
    return {"status": "healthy"}

# from fastapi import FastAPI, Body, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# import httpx
# from rag_utils import query_vector_db
# from google import genai
# import os
# from dotenv import load_dotenv
# import asyncio
# import random

# load_dotenv()

# # ================= CONFIG =================
# GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
# if not GEMINI_API_KEY:
#     raise ValueError("❌ Missing GEMINI_API_KEY")

# client = genai.Client(api_key=GEMINI_API_KEY)

# app = FastAPI(title="PeriodCare Chatbot")

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000","http://127.0.0.1:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# http_client: httpx.AsyncClient = None
# CACHE = {}

# # ================= STARTUP =================
# @app.on_event("startup")
# async def startup():
#     global http_client
#     http_client = httpx.AsyncClient(timeout=60)
#     print("✅ Server started")

# @app.on_event("shutdown")
# async def shutdown():
#     await http_client.aclose()

# # ================= SMALL TALK =================
# def is_small_talk(text: str) -> bool:
#     small_talk = [
#         "hi","hello","hey","hii","hiii",
#         "good morning","good evening",
#         "ok","okay","thanks","thank you",
#         "hmm","hmmm","👍","🙂"
#     ]
#     return text.lower().strip() in small_talk

# def small_talk_response():
#     responses = [
#         "Hi! I'm here for you 💗",
#         "Hello! How can I help you today?",
#         "Hey! Feel free to ask anything about your health 🌸",
#         "Hi there 😊 What would you like to talk about?",
#         "Hello! I'm listening."
#     ]
#     return random.choice(responses)

# # ================= SAFE GEMINI =================
# async def gemini_generate(prompt: str) -> str:
#     try:
#         response = await asyncio.to_thread(
#             client.models.generate_content,
#             model="gemini-2.5-flash",
#             contents=prompt
#         )
#         return (response.text or "").strip()
#     except Exception as e:
#         print("⚠️ Gemini failed:", e)
#         return ""

# # ================= INTENT CLASSIFIER =================
# async def classify_intent(question: str) -> str:
#     prompt = f"""
# Classify the user query into ONE category:

# IDENTITY → asking name, profile, memory, who am I
# HEALTH_PERSONAL → symptoms, pain, discharge, mood, cycle
# GENERAL → educational info

# Return only one word.

# Question: {question}
# Answer:
# """
#     label = await gemini_generate(prompt)
#     label = label.upper().strip()

#     if "IDENTITY" in label:
#         return "IDENTITY"
#     elif "HEALTH_PERSONAL" in label:
#         return "HEALTH_PERSONAL"
#     return "GENERAL"

# # ================= NORMALIZATION =================
# async def normalize_input(text: str) -> str:
#     prompt = f"""
# Convert into clear English.
# Handle Hindi/Marathi transliteration.
# Only output English.

# Input: {text}
# Output:
# """
#     translated = await gemini_generate(prompt)
#     return translated if translated else text

# # ================= REFINE LANGUAGE =================
# async def refine_language(text: str, lang: str):
#     if lang.lower() == "english":
#         return text

#     prompt = f"""
# Translate to {lang}.
# Keep meaning same.

# {text}
# """
#     translated = await gemini_generate(prompt)
#     return translated if translated else text

# # ================= LOCAL MODEL =================
# async def ask_local_model(prompt: str) -> str:
#     try:
#         res = await http_client.post(
#             "http://localhost:11434/api/generate",
#             json={"model": "phi3:mini", "prompt": prompt, "stream": False},
#         )
#         if res.status_code != 200:
#             return ""
#         return res.json().get("response", "").strip()
#     except Exception as e:
#         print("⚠️ Ollama error:", e)
#         return ""

# # ================= IDENTITY HANDLER =================
# def handle_identity(user_description: str):
#     if not user_description.strip():
#         return "I don’t have your personal details saved yet."
#     return f"You told me: {user_description}"

# # ================= CHAT =================
# @app.post("/chat")
# async def chat(
#     question: str = Body(..., embed=True),
#     language: str = Body("English", embed=True),
#     user_description: str = Body("", embed=True),
# ):

#     # ---- SMALL TALK ----
#     if is_small_talk(question):
#         return {"route": "SMALL_TALK", "answer": small_talk_response()}

#     # ---- CACHE ----
#     if question in CACHE:
#         return CACHE[question]

#     try:
#         intent = await classify_intent(question)
#         print("🧠 Intent:", intent)

#         # -------- IDENTITY --------
#         if intent == "IDENTITY":
#             answer = handle_identity(user_description)
#             result = {"route": "LOCAL_MEMORY", "answer": answer}

#         # -------- PERSONAL HEALTH --------
#         elif intent == "HEALTH_PERSONAL":
#             normalized = await normalize_input(question)
#             context = query_vector_db(normalized)

#             prompt = f"""
# You are a calm menstrual health support assistant.

# Your role:
# Help the user understand symptoms in a reassuring, practical way.
# Do NOT act like an emergency alarm unless truly dangerous.

# Response Style:
# - Warm, human, gentle tone
# - Talk like a caring health educator
# - Avoid repeating "consult doctor" unless necessary
# - Avoid long lectures

# Safety Logic:

# MILD / COMMON symptoms:
# → Explain why it happens
# → Give 3 simple comfort tips

# MODERATE symptoms:
# → Add lifestyle suggestions
# → Mention when to monitor

# SEVERE but COMMON (like strong cramps):
# → Give coping steps first
# → Only suggest doctor IF persists multiple cycles

# EMERGENCY symptoms (fainting, very heavy bleeding, fever):
# → Recommend medical care

# Never diagnose diseases.
# Never prescribe medicines.

# User profile: {user_description}
# Context knowledge: {context}
# User message: {normalized}
# """

#             raw_answer = await ask_local_model(prompt)

#             # fallback to Gemini if local fails
#             if not raw_answer:
#                 raw_answer = await gemini_generate(prompt)

#             answer = await refine_language(raw_answer, language)

#             result = {
#                 "route": "LOCAL_PRIVATE_AI",
#                 "answer": answer,
#                 "normalized_input": normalized,
#             }

#         # -------- GENERAL --------
#         else:
#             normalized = await normalize_input(question)

#             prompt = f"""
# You are a friendly women's health educator.
# Answer clearly and simply.

# Question: {normalized}
# """

#             raw_answer = await gemini_generate(prompt)
#             answer = await refine_language(raw_answer, language)

#             result = {
#                 "route": "DIRECT_GEMINI",
#                 "answer": answer,
#                 "normalized_input": normalized,
#             }

#         CACHE[question] = result
#         return result

#     except Exception as e:
#         print("❌ ERROR:", e)
#         raise HTTPException(status_code=500, detail="Server error")

# # ================= HEALTH =================
# @app.get("/health")
# def health():
#     return {"status": "healthy"}

# from fastapi import FastAPI, Body, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# import httpx
# from rag_utils import query_vector_db
# from google import genai
# import os
# from dotenv import load_dotenv

# load_dotenv()

# # -------------------- CONFIG --------------------
# GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
# client = genai.Client(api_key=GEMINI_API_KEY)

# if not GEMINI_API_KEY:
#     raise ValueError("❌ Missing GEMINI_API_KEY in environment variables")

# app = FastAPI(title="PeriodCare Chatbot")

# origins = [
#     "http://localhost:3000",
#     "http://127.0.0.1:3000",
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# http_client = None

# # -------------------- STARTUP --------------------
# @app.on_event("startup")
# async def startup():
#     global http_client
#     http_client = httpx.AsyncClient(timeout=90.0)
#     print("✅ Server started")

# @app.on_event("shutdown")
# async def shutdown():
#     await http_client.aclose()

# # -------------------- CLASSIFIER --------------------
# def requires_personal_context(question: str) -> bool:
#     try:
#         prompt = f"""
# Classify the query.

# PERSONAL → user symptoms, cycle info, body condition
# GENERAL → educational question

# Return only PERSONAL or GENERAL.

# Question: {question}
# Answer:
# """
#         response = client.models.generate_content(
#             model="gemini-2.5-flash",
#             contents=prompt
#         )

#         label = response.text.strip().upper()
#         return "PERSONAL" in label

#     except Exception as e:
#         print("⚠️ Classifier failed:", e)
#         return True
# # -------------------- NORMALIZATION --------------------
# def normalize_input(text: str) -> str:
#     try:
#         prompt = f"""
# Translate into clear English. Detect Hindi/Marathi transliteration.
# Only output English.

# Input: {text}
# Output:
# """
#         response = client.models.generate_content(
#             model="gemini-2.5-flash",
#             contents=prompt
#         )

#         return response.text.strip()

#     except Exception as e:
#         print("⚠️ Translation Error:", e)
#         return text
# # -------------------- REFINE --------------------
# def refine_with_gemini(text: str, target_language: str = "English") -> str:
#     try:
#         prompt = f"""
# Make response friendly and natural.
# Keep meaning same.
# Translate into {target_language}.

# Text:
# {text}
# """
#         response = client.models.generate_content(
#             model="gemini-2.5-flash",
#             contents=prompt
#         )

#         return response.text.strip()

#     except Exception as e:
#         print("⚠️ Gemini refine error:", e)
#         return text
# # -------------------- MAIN CHAT --------------------
# @app.post("/chat")
# async def chat(
#     question: str = Body(..., embed=True),
#     language: str = Body("English", embed=True),
#     user_description: str = Body("", embed=True)
# ):
#     try:
#         # Step 0 — Route decision
#         is_personal = requires_personal_context(question)
#         print("🔍 Personal Query:", is_personal)

#         # ================= PERSONAL ROUTE =================
#         if is_personal:

#             normalized_question = normalize_input(question)
#             context = query_vector_db(normalized_question)

#             prompt = f"""
# You are a safe women's health assistant.

# Rules:
# - No diagnosis
# - No medicine prescription
# - Short clear supportive answers
# - Suggest doctor for serious symptoms

# Context: {context}
# User Profile: {user_description}
# Question: {normalized_question}
# """

#             response = await http_client.post(
#                 "http://localhost:11434/api/generate",
#                 json={
#                     "model": "phi3:mini",
#                     "prompt": prompt,
#                     "stream": False
#                 }
#             )

#             if response.status_code != 200:
#                 raise HTTPException(status_code=500, detail="Local AI failed")

#             raw_answer = response.json().get("response", "").strip()

#             if not raw_answer:
#                 raw_answer = "I couldn't generate a response."

#             refined = refine_with_gemini(raw_answer, language)

#             return {
#                 "route": "LOCAL_PRIVATE_AI",
#                 "answer": refined,
#                 "raw_answer": raw_answer,
#                 "normalized_input": normalized_question
#             }

#         # ================= GENERAL ROUTE =================
#         else:
#             normalized_question = normalize_input(question)

#             prompt = f"""
# You are a helpful women's health educator.
# Answer clearly and simply.

# Question: {normalized_question}
# """

#             response = client.models.generate_content(
#     model="gemini-2.5-flash",
#     contents=prompt
# )

#             refined = refine_with_gemini(response.text.strip(), language)

#             return {
#                 "route": "DIRECT_GEMINI",
#                 "answer": refined,
#                 "normalized_input": normalized_question
#             }

#     except Exception as e:
#         print("❌ ERROR:", e)
#         raise HTTPException(status_code=500, detail=str(e))

# # -------------------- HEALTH --------------------
# @app.get("/health")
# def health():
#     return {"status": "healthy"}

# from fastapi import FastAPI, Body, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# import httpx
# from rag_utils import query_vector_db
# import google.generativeai as genai
# import os
# from dotenv import load_dotenv


# load_dotenv()
# GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
# genai.configure(api_key=GEMINI_API_KEY)

# if not GEMINI_API_KEY:
#     raise ValueError("❌ Missing GEMINI_API_KEY in environment variables")

# app = FastAPI(title="PeriodCare Chatbot")

# # Allow frontend (Next.js) to communicate
# origins = [
#     "http://localhost:3000",
#     "http://127.0.0.1:3000",
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Reusable HTTP client for Ollama
# http_client = None


# @app.on_event("startup")
# async def startup():
#     global http_client
#     http_client = httpx.AsyncClient(timeout=60.0)
#     print("✅ Server started - Vector DB ready")


# @app.on_event("shutdown")
# async def shutdown():
#     await http_client.aclose()


# # === 1️⃣ Input Normalization ===
# def normalize_input(text: str) -> str:
#     """
#     Detect and translate user input (e.g. Marathi in English letters)
#     into clean English before passing to the LLM.
#     """
#     try:
#         prompt = f"""
# You are a language detector and translator.
# The user input may be English, Marathi, Hindi, or transliterated (like 'Marathi written in English letters').
# Your job:
# 1. Detect the actual meaning and intent.
# 2. Translate it accurately to clear English.
# 3. Output only the English translation.

# Input: {text}
# Output:
# """
#         model = genai.GenerativeModel("gemini-2.5-flash")
#         response = model.generate_content(prompt)
#         return response.text.strip()
#     except Exception as e:
#         print(f"⚠️ Translation Error: {e}")
#         return text

# def requires_personal_context(question: str) -> bool:
#     """
#     Decide whether the user query requires personal data analysis
#     or is a general knowledge question.
#     """
#     try:
#         prompt = f"""
# You are a classifier.

# Determine if the question requires personal health context
# (like symptoms, cycle history, body condition, mood, user-specific advice).

# Return ONLY one word:

# PERSONAL -> needs user data analysis
# GENERAL -> general knowledge question

# Examples:
# "I have pain before my periods" -> PERSONAL
# "Why do periods happen?" -> GENERAL
# "Is PCOS dangerous?" -> GENERAL
# "My bleeding is heavy and irregular" -> PERSONAL
# "What food helps cramps?" -> GENERAL

# Question: {question}
# Answer:
# """

#         model = genai.GenerativeModel("gemini-2.5-flash")
#         response = model.generate_content(prompt)

#         label = response.text.strip().upper()
#         return "PERSONAL" in label

#     except Exception as e:
#         print("⚠️ Classifier failed:", e)
#         return True  # safer fallback → private path

# # === 2️⃣ Gemini Refinement ===
# def refine_with_gemini(text: str, target_language: str = "English") -> str:
#     """Make output more natural, friendly, and optionally translate."""
#     try:
#         prompt = f"""
# You are a smart and empathetic language assistant.
# Make the text sound clear, kind, and natural but meaning of contaxt should be origin cotaxt and meaning should not be change.
# only provide transalte not with english.
# Translate it into {target_language} if requested.
# Input:
# {text}
# Output (improved and translated if needed and traslated then only provide transalte do not provide english with it):
# """


#         model = genai.GenerativeModel("gemini-2.5-flash")
#         response = model.generate_content(prompt)
#         return response.text.strip()
#     except Exception as e:
#         print(f"⚠️ Gemini Error: {e}")
#         return text


# # === 3️⃣ Main Chat Endpoint ===
# @app.post("/chat")
# async def chat(
#     question: str = Body(..., embed=True),
#     language: str = Body("English", embed=True),  # Default language is English
#     user_description:str=Body(..., embed=True)
    
# ):
#     """
#     Main chat endpoint.
#     - Normalizes user input (detects transliteration)
#     - Queries vector DB for context
#     - Uses local Ollama model for reasoning
#     - Refines and translates response with Gemini
#     """
#     try:
#         # Step 1: Normalize input
#         normalized_question = normalize_input(question)
#         print(f"🧠 Normalized question: {normalized_question}")

#         # Step 2: Get relevant context from Vector DB
#         context = query_vector_db(normalized_question)

#         # Step 3: Build prompt for local model
#         prompt = f"""# Goal
#         Provide compassionate, evidence-based guidance on women's health questions while maintaining appropriate boundaries around medical advice and safety.
#         # Chatbot Behavior & Safety Rules
#         You are a women’s health assistant designed to give short, safe, friendly, and easy-to-understand answers. Always stay empathetic, supportive, and judgment-free. Use the user’s personal data only when it is actually helpful for the answer. Do not give long paragraphs, emotional speeches, or unnecessary advice. You must never diagnose diseases, prescribe medicines, or act like a doctor. If the user asks about periods, food, exercise, hygiene, remedies, mood, symptoms, or general women’s health, respond clearly and simply, suitable for teenagers and adults.
#         # Emergency, Risk, and Boundary Rules
#         If the user mentions high-risk or emergency symptoms—such as extremely heavy bleeding, severe pain (8–10/10), fainting, dizziness, fever with cramps, blood clots, or periods lasting longer than 7–10 days—politely recommend seeing a doctor and provide brief supportive steps (like rest, hydration, monitoring symptoms) until they seek care. Never delay or discourage medical help. For mild/common symptoms, provide only basic home remedies or self-care tips. Avoid sexual content, psychological diagnoses, or suggesting strong treatments.
#         # Return Format
#         A clear, kind response that:
#         - Directly addresses the user's question
#         - Uses accessible language appropriate for a general audience
#         - Includes a recommendation to consult a healthcare provider when relevant
#         - Is 2–4 paragraphs in length, unless a shorter answer is more appropriate
#         # Warnings
#         The assistant should:
#         - Never prescribe medications, supplements, or medical treatments
#         - Never provide advice related to self-harm or suicide; instead, direct the user to crisis resources
#         - Recognize when a question requires professional medical evaluation and recommend consulting a doctor or gynecologist
#         - Avoid making assumptions about medical history or circumstances
#         - Not diagnose conditions or provide definitive medical conclusions
#         - Acknowledge limitations of text-based guidance
#         # Context
#         You are an expert women's health information assistant with knowledge of reproductive health, menstrual health, pregnancy, menopause, sexual health, and common women’s health concerns. Provide supportive, non-judgmental information that empowers users and offers clarity while respecting safety rules.
#         Use the following document-based context when answering: {context}
#         Use the provided user profile only when it truly improves personalization: {user_description}
#         # User Question
#         Address the user's question directly: {normalized_question}"""

#         # Step 4: Ask local Ollama model
#         response = await http_client.post(
#             "http://localhost:11434/api/generate",
#             json={
#                 "model": "phi3:mini",
#                 "prompt": prompt,
#                 "stream": False
#             }
#         )

#         if response.status_code != 200:
#             raise HTTPException(status_code=500, detail="Local model service error")

#         result = response.json()
#         raw_answer = result.get("response", "").strip()
#         print(raw_answer)

#         if not raw_answer:
#             raw_answer = "Sorry, I couldn't generate a response."

#         # Step 5: Refine and translate using Gemini
#         refined_answer = refine_with_gemini(raw_answer, language)

#         # Step 6: Return both for transparency
#         return {
#             "answer": refined_answer,
#             "raw_answer": raw_answer,
#             "language_used": language,
#             "normalized_input": normalized_question
#         }

#     except Exception as e:
#         print(f"❌ Error: {e}")
#         raise HTTPException(status_code=500, detail=str(e))


# # === 4️⃣ Health Check ===
# @app.get("/health")
# def health():
#     return {"status": "healthy"}