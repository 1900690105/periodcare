# main.py
from fastapi import FastAPI, Body, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx
from rag_utils import query_vector_db
import google.generativeai as genai

# === CONFIG ===
GEMINI_API_KEY = "AIzaSyCdNTFgE3L1b2gp7TJm2nlHniFBEOPAYzE"  # Replace with your real key
genai.configure(api_key=GEMINI_API_KEY)

app = FastAPI(title="PeriodCare Chatbot")

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

# Global HTTP client for reuse
http_client = None


@app.on_event("startup")
async def startup():
    global http_client
    http_client = httpx.AsyncClient(timeout=60.0)
    print("✅ Server started - Vector DB ready")


@app.on_event("shutdown")
async def shutdown():
    await http_client.aclose()


def refine_with_gemini(text: str, target_language: str = "English") -> str:
    """Improve and optionally translate model output using Gemini."""
    try:
        prompt = f"""
You are an expert AI assistant that improves and translates text.
Your goals:
- Make the text clear, kind, natural, and conversational.
- Fix grammar or tone issues.
- Translate to {target_language} if needed.
- Keep all important facts correct.

Input:
{text}

Output only the improved and translated text — nothing else.
"""
        model = genai.GenerativeModel("gemini-2.5-flash")
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        print(f"⚠️ Gemini Error: {e}")
        return text  # Fallback to raw output


@app.post("/chat")
async def chat(
    question: str = Body(..., embed=True),
    language: str = Body(..., embed=True)  # Optional: specify output language
):
    try:
        # 1️⃣ Get context from vector DB
        context = query_vector_db(question)

        # 2️⃣ Build full prompt for local model
        prompt = f"""Use the following context to answer clearly and kindly:

Context:
{context}

Question: {question}

Answer:"""

        # 3️⃣ Ask local LLM (Ollama)
        response = await http_client.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "phi3:mini",
                "prompt": prompt,
                "stream": False
            }
        )

        if response.status_code != 200:
            raise HTTPException(status_code=500, detail="Model service error")

        result = response.json()
        raw_answer = result.get("response", "").strip()

        if not raw_answer:
            raw_answer = "Sorry, I couldn't generate a response."

        # 4️⃣ Refine and translate with Gemini
        refined_answer = refine_with_gemini(raw_answer, language)

        # 5️⃣ Return both versions for debugging (optional)
        return {
            "answer": refined_answer,
            "raw_answer": raw_answer
        }

    except Exception as e:
        print(f"❌ Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/health")
def health():
    return {"status": "healthy"}



# from fastapi import FastAPI, Body
# import subprocess
# from rag_utils import build_vector_db, query_vector_db

# app = FastAPI(title="PeriodCare Chatbot")

# # initialize DB once
# build_vector_db("data/PeriodCare.pdf")

# @app.post("/chat")
# def chat(question: str = Body(..., embed=True)):
#     context = query_vector_db(question)
#     prompt = f"Use the following context to answer clearly and kindly:\n{context}\n\nQuestion: {question}"
#     cmd = ["ollama", "run", "phi3:mini", prompt]
    
#     # Run subprocess safely with UTF-8
#     result = subprocess.run(
#         cmd,
#         capture_output=True,
#         text=True,
#         encoding="utf-8",
#         errors="replace"
#     )
    
#     answer = result.stdout.strip()
#     if not answer:
#         answer = "Sorry, I couldn't get a response from the model."
    
#     return {"answer": answer}
