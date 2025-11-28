from fastapi import FastAPI, Body, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx
from rag_utils import query_vector_db
import google.generativeai as genai
import os
from dotenv import load_dotenv


load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)

if not GEMINI_API_KEY:
    raise ValueError("❌ Missing GEMINI_API_KEY in environment variables")

app = FastAPI(title="PeriodCare Chatbot")

# Allow frontend (Next.js) to communicate
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Reusable HTTP client for Ollama
http_client = None


@app.on_event("startup")
async def startup():
    global http_client
    http_client = httpx.AsyncClient(timeout=60.0)
    print("✅ Server started - Vector DB ready")


@app.on_event("shutdown")
async def shutdown():
    await http_client.aclose()


# === 1️⃣ Input Normalization ===
def normalize_input(text: str) -> str:
    """
    Detect and translate user input (e.g. Marathi in English letters)
    into clean English before passing to the LLM.
    """
    try:
        prompt = f"""
You are a language detector and translator.
The user input may be English, Marathi, Hindi, or transliterated (like 'Marathi written in English letters').
Your job:
1. Detect the actual meaning and intent.
2. Translate it accurately to clear English.
3. Output only the English translation.

Input: {text}
Output:
"""
        model = genai.GenerativeModel("gemini-2.0-flash")
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        print(f"⚠️ Translation Error: {e}")
        return text


# === 2️⃣ Gemini Refinement ===
def refine_with_gemini(text: str, target_language: str = "English") -> str:
    """Make output more natural, friendly, and optionally translate."""
    try:
        prompt = f"""
You are a smart and empathetic language assistant.
Make the text sound clear, kind, and natural but meaning of contaxt should be origin cotaxt and meaning should not be change.
only provide transalte not with english.
Translate it into {target_language} if requested.
Input:
{text}
Output (improved and translated if needed and traslated then only provide transalte do not provide english with it):
"""


        model = genai.GenerativeModel("gemini-2.0-flash")
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        print(f"⚠️ Gemini Error: {e}")
        return text


# === 3️⃣ Main Chat Endpoint ===
@app.post("/chat")
async def chat(
    question: str = Body(..., embed=True),
    language: str = Body("English", embed=True),  # Default language is English
    user_description:str=Body(..., embed=True)
    
):
    """
    Main chat endpoint.
    - Normalizes user input (detects transliteration)
    - Queries vector DB for context
    - Uses local Ollama model for reasoning
    - Refines and translates response with Gemini
    """
    try:
        # Step 1: Normalize input
        normalized_question = normalize_input(question)
        print(f"🧠 Normalized question: {normalized_question}")

        # Step 2: Get relevant context from Vector DB
        context = query_vector_db(normalized_question)

        # Step 3: Build prompt for local model
        prompt = f"""# Goal
        Provide compassionate, evidence-based guidance on women's health questions while maintaining appropriate boundaries around medical advice and safety.
        # Chatbot Behavior & Safety Rules
        You are a women’s health assistant designed to give short, safe, friendly, and easy-to-understand answers. Always stay empathetic, supportive, and judgment-free. Use the user’s personal data only when it is actually helpful for the answer. Do not give long paragraphs, emotional speeches, or unnecessary advice. You must never diagnose diseases, prescribe medicines, or act like a doctor. If the user asks about periods, food, exercise, hygiene, remedies, mood, symptoms, or general women’s health, respond clearly and simply, suitable for teenagers and adults.
        # Emergency, Risk, and Boundary Rules
        If the user mentions high-risk or emergency symptoms—such as extremely heavy bleeding, severe pain (8–10/10), fainting, dizziness, fever with cramps, blood clots, or periods lasting longer than 7–10 days—politely recommend seeing a doctor and provide brief supportive steps (like rest, hydration, monitoring symptoms) until they seek care. Never delay or discourage medical help. For mild/common symptoms, provide only basic home remedies or self-care tips. Avoid sexual content, psychological diagnoses, or suggesting strong treatments.
        # Return Format
        A clear, kind response that:
        - Directly addresses the user's question
        - Uses accessible language appropriate for a general audience
        - Includes a recommendation to consult a healthcare provider when relevant
        - Is 2–4 paragraphs in length, unless a shorter answer is more appropriate
        # Warnings
        The assistant should:
        - Never prescribe medications, supplements, or medical treatments
        - Never provide advice related to self-harm or suicide; instead, direct the user to crisis resources
        - Recognize when a question requires professional medical evaluation and recommend consulting a doctor or gynecologist
        - Avoid making assumptions about medical history or circumstances
        - Not diagnose conditions or provide definitive medical conclusions
        - Acknowledge limitations of text-based guidance
        # Context
        You are an expert women's health information assistant with knowledge of reproductive health, menstrual health, pregnancy, menopause, sexual health, and common women’s health concerns. Provide supportive, non-judgmental information that empowers users and offers clarity while respecting safety rules.
        Use the following document-based context when answering: {context}
        Use the provided user profile only when it truly improves personalization: {user_description}
        # User Question
        Address the user's question directly: {normalized_question}"""

        # Step 4: Ask local Ollama model
        response = await http_client.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "phi3:mini",
                "prompt": prompt,
                "stream": False
            }
        )

        if response.status_code != 200:
            raise HTTPException(status_code=500, detail="Local model service error")

        result = response.json()
        raw_answer = result.get("response", "").strip()
        print(raw_answer)

        if not raw_answer:
            raw_answer = "Sorry, I couldn't generate a response."

        # Step 5: Refine and translate using Gemini
        refined_answer = refine_with_gemini(raw_answer, language)

        # Step 6: Return both for transparency
        return {
            "answer": refined_answer,
            "raw_answer": raw_answer,
            "language_used": language,
            "normalized_input": normalized_question
        }

    except Exception as e:
        print(f"❌ Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


# === 4️⃣ Health Check ===
@app.get("/health")
def health():
    return {"status": "healthy"}