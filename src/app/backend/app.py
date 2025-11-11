from fastapi import FastAPI, Body, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx
from rag_utils import query_vector_db
import google.generativeai as genai
import os
from dotenv import load_dotenv


load_dotenv()
GEMINI_API_KEY = "AIzaSyBwuJgKA2fXh1rK1-d_Nf9RK_v-BaxCq5c" # Replace with your actual Gemini API key
genai.configure(api_key=GEMINI_API_KEY)

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
Make the text sound clear, kind, and natural.
Translate it into {target_language} if requested.

Input:
{text}

Output (improved and translated if needed):
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
        prompt = f"""You are a helpful women's health assistant.
Use the following context to answer clearly and kindly.

Context:
{context}

Question: {normalized_question}

Answer:"""

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
