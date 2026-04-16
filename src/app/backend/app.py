# ============================================================
#  PeriodCare AI — Production Backend
#  FastAPI + Gemini + Ollama (local fallback) + RAG + Email
# ============================================================

# ─── Standard Library ───────────────────────────────────────
import asyncio
import json
import logging
import os
import random
import re
import time
from contextlib import asynccontextmanager
from email.message import EmailMessage
from pathlib import Path
from typing import Optional

# ─── Third-Party ────────────────────────────────────────────
import aiosmtplib
import httpx
from dotenv import load_dotenv
from fastapi import Body, FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from google import genai
from pydantic import BaseModel, EmailStr, Field, field_validator
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.util import get_remote_address

# ─── Local ──────────────────────────────────────────────────
# from rag_utils import query_vector_db   # uncomment when RAG is ready

load_dotenv()

# ============================================================
#  Logging
# ============================================================
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)-8s | %(name)s | %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
log = logging.getLogger("periodcare")

# ============================================================
#  Config / Env Validation
# ============================================================
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
SMTP_EMAIL     = os.getenv("SMTP_EMAIL", "")
SMTP_PASSWORD  = os.getenv("SMTP_PASSWORD", "")
OLLAMA_URL     = os.getenv("OLLAMA_URL", "http://localhost:11434").rstrip("/")
OLLAMA_MODEL   = os.getenv("OLLAMA_MODEL", "phi3:mini")
ALLOWED_ORIGINS = os.getenv(
    "ALLOWED_ORIGINS",
    "http://localhost:3000,http://127.0.0.1:3000"
).split(",")
CACHE_FILE_PATH = Path(os.getenv("CACHE_FILE", "ai_cache.json"))
CACHE_TTL_SEC   = int(os.getenv("CACHE_TTL_SEC", 3600))   # 1 hour default
RATE_LIMIT      = os.getenv("RATE_LIMIT", "30/minute")

if not GEMINI_API_KEY:
    raise EnvironmentError("❌  GEMINI_API_KEY is required but not set.")

gemini_client = genai.Client(api_key=GEMINI_API_KEY)

# ============================================================
#  Cache  (RAM  + JSON file)
# ============================================================
RAM_CACHE:  dict[str, dict] = {}   # key → {result, expires_at}
FILE_CACHE: dict[str, dict] = {}
_cache_lock = asyncio.Lock()


def _load_file_cache() -> dict:
    if CACHE_FILE_PATH.exists():
        try:
            return json.loads(CACHE_FILE_PATH.read_text())
        except json.JSONDecodeError:
            log.warning("Cache file corrupted — starting fresh.")
    return {}


async def _save_file_cache() -> None:
    async with _cache_lock:
        CACHE_FILE_PATH.write_text(json.dumps(FILE_CACHE, indent=2))


def _cache_key(question: str, language: str, user_description: str) -> str:
    """Include all fields that affect the response."""
    raw = f"{question.lower().strip()}|{language.lower()}|{user_description.lower().strip()}"
    return raw


def _get_cache(key: str) -> Optional[dict]:
    entry = RAM_CACHE.get(key) or FILE_CACHE.get(key)
    if entry and time.time() < entry.get("expires_at", 0):
        return entry["result"]
    return None


async def _set_cache(key: str, result: dict) -> None:
    payload = {"result": result, "expires_at": time.time() + CACHE_TTL_SEC}
    RAM_CACHE[key] = payload
    async with _cache_lock:
        FILE_CACHE[key] = payload
    asyncio.create_task(_save_file_cache())


# ============================================================
#  App Lifespan (startup / shutdown)
# ============================================================
http_client: httpx.AsyncClient = None   # type: ignore[assignment]


@asynccontextmanager
async def lifespan(app: FastAPI):
    global http_client, FILE_CACHE
    FILE_CACHE  = _load_file_cache()
    http_client = httpx.AsyncClient(timeout=90)
    log.info("🌸  PeriodCare AI server started")
    yield
    await http_client.aclose()
    log.info("Server shut down cleanly.")


# ============================================================
#  Rate Limiter
# ============================================================
limiter = Limiter(key_func=get_remote_address)

# ============================================================
#  FastAPI App
# ============================================================
app = FastAPI(
    title="PeriodCare AI",
    description="Private, empathetic menstrual health assistant.",
    version="2.0.0",
    lifespan=lifespan,
)

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================================================
#  Request / Response Models
# ============================================================
class ChatRequest(BaseModel):
    question:         str   = Field(..., min_length=1, max_length=2000)
    language:         str   = Field("English", max_length=50)
    user_description: str   = Field("", max_length=500)
    partner_email:    str   = Field("", max_length=320)

    @field_validator("question")
    @classmethod
    def no_empty(cls, v: str) -> str:
        if not v.strip():
            raise ValueError("question cannot be blank")
        return v.strip()


class AlertFlags(BaseModel):
    partner:   bool = False
    doctor:    bool = False
    emergency: bool = False


class ChatResponse(BaseModel):
    route:       str
    answer:      str
    model_used:  str        = "unknown"
    alerts:      AlertFlags = AlertFlags()
    cached:      bool       = False


# ============================================================
#  Small-Talk Detection
# ============================================================
_SMALL_TALK_TOKENS = frozenset([
    "hi", "hello", "hey", "ok", "okay", "thanks",
    "thank you", "bye", "goodbye", "hii", "hlo",
])

_SMALL_TALK_REPLIES = [
    "Hi 💗 I'm here with you. What's bothering you?",
    "Hello 🌸 Feel free to tell me anything — no judgment here.",
    "Hey! I'm listening. You can talk to me freely 😊",
    "I'm here for you 💜 What would you like to know?",
]


def is_small_talk(text: str) -> bool:
    cleaned = re.sub(r"[^\w\s]", "", text.lower().strip())
    return cleaned in _SMALL_TALK_TOKENS


def small_talk_response() -> str:
    return random.choice(_SMALL_TALK_REPLIES)


# ============================================================
#  Gemini Helper
# ============================================================
async def gemini_generate(prompt: str, max_retries: int = 2) -> str:
    for attempt in range(max_retries + 1):
        try:
            res = await asyncio.to_thread(
                gemini_client.models.generate_content,
                model="gemini-2.5-flash",
                contents=prompt,
            )
            return (res.text or "").strip()
        except Exception as exc:
            log.warning("Gemini attempt %d failed: %s", attempt + 1, exc)
            if attempt < max_retries:
                await asyncio.sleep(1.5 ** attempt)
    return ""


# ============================================================
#  Normalization  (raw → clean English)
# ============================================================
async def normalize_input(text: str) -> str:
    prompt = (
        "Translate the following into clear, standard English. "
        "Preserve the original meaning exactly. Output only the translation:\n\n"
        f"{text}"
    )
    result = await gemini_generate(prompt)
    return result if result else text


# ============================================================
#  Intent Classifier
# ============================================================
async def classify_intent(text: str) -> str:
    """
    Returns one of: IDENTITY | PERSONAL | GENERAL
    """
    prompt = f"""You are a classifier for a menstrual health app. Classify the user message into one category:

IDENTITY  – user is asking about their own stored profile / memory (e.g. "what did I tell you?", "do you know me?")
PERSONAL  – user is describing symptoms, body feelings, pain, emotions related to their cycle
GENERAL   – user wants educational or general information about menstrual health

Respond with exactly one word: IDENTITY, PERSONAL, or GENERAL.

User message: {text}
"""
    label = (await gemini_generate(prompt)).upper().strip()
    if "IDENTITY" in label:
        return "IDENTITY"
    if "PERSONAL" in label:
        return "PERSONAL"
    return "GENERAL"


# ============================================================
#  Risk Detection Engine
# ============================================================
_PARTNER_WORDS = frozenset([
    "low", "sad", "cry", "crying", "lonely", "mood", "emotional",
    "need someone", "overthinking", "anxious", "depressed", "hopeless",
    "no one", "alone", "scared", "overwhelmed",
])
_DOCTOR_WORDS = frozenset([
    "heavy bleeding", "large clots", "blood clots", "pain 9", "pain 10",
    "vomiting", "fever", "fainted", "passed out", "unbearable pain",
    "can't move", "bleeding won't stop", "soaking pad",
])
_EMERGENCY_WORDS = frozenset([
    "unconscious", "not waking", "won't wake", "continuous faint",
    "severe blood loss", "can't breathe", "losing consciousness",
    "ambulance", "emergency",
])


def _contains(text: str, keywords: frozenset) -> bool:
    t = text.lower()
    return any(kw in t for kw in keywords)


def detect_partner(text: str)   -> bool: return _contains(text, _PARTNER_WORDS)
def detect_doctor(text: str)    -> bool: return _contains(text, _DOCTOR_WORDS)
def detect_emergency(text: str) -> bool: return _contains(text, _EMERGENCY_WORDS)


# ============================================================
#  Email Helper
# ============================================================
async def send_partner_email(partner_email: str, user: str) -> None:
    if not partner_email:
        log.warning("📭  EMAIL SKIPPED — no partner_email provided in request.")
        return
    if not (SMTP_EMAIL and SMTP_PASSWORD):
        log.warning("📭  EMAIL SKIPPED — SMTP_EMAIL or SMTP_PASSWORD missing in .env")
        return

    log.info("📧  EMAIL TRIGGERED — attempting to send to: %s", partner_email)
    log.info("    From      : %s", SMTP_EMAIL)
    log.info("    For user  : %s", user or "(no name provided)")

    try:
        msg = EmailMessage()
        msg["From"]    = SMTP_EMAIL
        msg["To"]      = partner_email
        msg["Subject"] = "She might need you ❤️"
        msg.set_content(
            f"Hi,\n\n"
            f"{user or 'Someone you care about'} may be going through a tough time "
            f"with their cycle right now and might need some emotional support.\n\n"
            f"— PeriodCare AI"
        )

        log.info("    Connecting to smtp.gmail.com:587 ...")
        await aiosmtplib.send(
            msg,
            hostname="smtp.gmail.com",
            port=587,
            start_tls=True,
            username=SMTP_EMAIL,
            password=SMTP_PASSWORD,
        )
        log.info("✅  EMAIL SENT SUCCESSFULLY to %s", partner_email)

    except Exception as exc:
        log.error("❌  EMAIL FAILED — reason: %s", exc)
        log.error("    Check: correct App Password in .env? Gmail 2FA enabled?")


# ============================================================
#  Ollama Local Model
# ============================================================
async def ask_local(prompt: str) -> tuple[str, str]:
    """Returns (response_text, model_label). Falls back to Gemini."""
    try:
        r = await http_client.post(
            f"{OLLAMA_URL}/api/generate",
            json={"model": OLLAMA_MODEL, "prompt": prompt, "stream": False},
        )
        if r.status_code == 200:
            text = r.json().get("response", "").strip()
            if text:
                log.info("Response served by local Ollama (%s)", OLLAMA_MODEL)
                return text, f"ollama/{OLLAMA_MODEL}"
    except Exception as exc:
        log.warning("Ollama unavailable (%s) — falling back to Gemini.", exc)

    # Gemini fallback
    text = await gemini_generate(prompt)
    log.info("Response served by Gemini (Ollama fallback)")
    return text, "gemini/gemini-2.5-flash"


# ============================================================
#  RAG Stub  (replace with real import)
# ============================================================
def query_vector_db(text: str) -> str:
    """
    Replace with your real RAG call, e.g.:
        from rag_utils import query_vector_db
    """
    return ""   # empty context falls back to model knowledge


# ============================================================
#  Translation Helper
# ============================================================
async def maybe_translate(text: str, language: str) -> str:
    if language.lower() == "english":
        return text
    translated = await gemini_generate(
        f"Translate the following to {language}. Output only the translation:\n\n{text}"
    )
    return translated if translated else text


# ============================================================
#  CHAT ENDPOINT
# ============================================================
@app.post("/chat", response_model=ChatResponse)
@limiter.limit(RATE_LIMIT)
async def chat(request: Request, body: ChatRequest):

    question         = body.question
    language         = body.language
    user_description = body.user_description
    partner_email    = body.partner_email

    # ── 1. Small talk ──────────────────────────────────────
    if is_small_talk(question):
        return ChatResponse(
            route="SMALL_TALK",
            answer=small_talk_response(),
            model_used="rule_based",
        )

    # ── 2. Normalize FIRST (clean text for all downstream) ─
    normalized = await normalize_input(question)
    log.info("Normalized: %s", normalized[:120])

    # ── 3. Intent classification on clean text ─────────────
    intent = await classify_intent(normalized)
    log.info("Intent: %s", intent)

    # ── 4. Identity — checked BEFORE cache (never cache these) ─
    if intent == "IDENTITY":
        ans = (
            f"Here's what you told me about yourself: {user_description}"
            if user_description
            else "I don't have any details about you yet. Feel free to share!"
        )
        # NEVER cache — every user has a different profile
        return ChatResponse(route="IDENTITY", answer=ans, model_used="memory")

    # ── 5. Cache check (skip for IDENTITY — already handled above) ─
    key    = _cache_key(question, language, user_description)
    cached = _get_cache(key)
    if cached:
        log.info("Cache HIT for key: %s", key[:60])
        cached["cached"] = True
        return ChatResponse(**cached)

    # ── 6. Risk detection (on normalized text) ─────────────
    is_partner   = detect_partner(normalized)
    is_doctor    = detect_doctor(normalized)
    is_emergency = detect_emergency(normalized)

    log.info("🔍  Risk flags — partner: %s | doctor: %s | emergency: %s",
             is_partner, is_doctor, is_emergency)

    alerts = AlertFlags(partner=is_partner, doctor=is_doctor, emergency=is_emergency)

    if is_emergency:
        # Never cache emergency responses
        return ChatResponse(
            route="EMERGENCY",
            answer=(
                "⚠️ This sounds like a medical emergency. "
                "Please call emergency services or go to your nearest hospital immediately. "
                "Do not wait."
            ),
            model_used="rule_based",
            alerts=alerts,
        )

    # ── 7. Route: PERSONAL ─────────────────────────────────
    if intent == "PERSONAL":
        rag_context = query_vector_db(normalized)

        if is_emergency:
            tone = "urgently advise the user to seek immediate medical help"
        elif is_doctor:
            tone = "calmly advise the user to consult a doctor soon, explain why"
        elif is_partner:
            tone = "provide warm emotional support and comfort"
        else:
            tone = "give clear, empathetic menstrual health guidance"

        context_block = f"\nRelevant context:\n{rag_context}\n" if rag_context else ""
        prompt = f"""You are a safe, private, and empathetic menstrual health assistant.
Your task: {tone}.
{context_block}
User's question: {normalized}

Respond in a warm, non-judgmental, supportive tone. Keep it concise (3–5 sentences max).
Do NOT diagnose. Do NOT mention you are an AI unless asked."""

        raw, model_used = await ask_local(prompt)

        # Translate if needed
        answer = await maybe_translate(raw, language)

        # Fire partner email in background (non-blocking)
        if is_partner and partner_email:
            log.info("💌  Scheduling partner email task to: %s", partner_email)
            asyncio.create_task(send_partner_email(partner_email, user_description))
        elif is_partner and not partner_email:
            log.warning("⚠️  Partner flag is TRUE but no partner_email in request — skipping email.")

        result_dict = ChatResponse(
            route="PERSONAL_AI",
            answer=answer,
            model_used=model_used,
            alerts=alerts,
        ).model_dump()

        # Don't cache personal results with alert flags — too session-specific
        if not (is_partner or is_doctor):
            await _set_cache(key, result_dict)

        return ChatResponse(**result_dict)

    # ── 8. Route: GENERAL ──────────────────────────────────
    raw = await gemini_generate(
        f"Explain the following menstrual health topic simply and accurately in 3–5 sentences:\n{normalized}"
    )
    answer = await maybe_translate(raw, language)

    result_dict = ChatResponse(
        route="GENERAL_AI",
        answer=answer,
        model_used="gemini/gemini-2.5-flash",
        alerts=alerts,
    ).model_dump()

    await _set_cache(key, result_dict)
    return ChatResponse(**result_dict)


# ============================================================
#  HEALTH CHECK
# ============================================================
@app.get("/health")
async def health():
    ollama_ok = False
    try:
        r = await http_client.get(f"{OLLAMA_URL}/api/tags", timeout=3)
        ollama_ok = r.status_code == 200
    except Exception:
        pass

    return {
        "status": "ok",
        "gemini": "configured",
        "ollama": "reachable" if ollama_ok else "unreachable (will use Gemini fallback)",
        "smtp":   "configured" if (SMTP_EMAIL and SMTP_PASSWORD) else "not configured",
        "cache_entries": len(RAM_CACHE),
    }


# ============================================================
#  CACHE MANAGEMENT ENDPOINTS  (admin use only — add auth!)
# ============================================================
@app.delete("/cache")
async def clear_cache():
    """Clear all in-memory and file cache."""
    RAM_CACHE.clear()
    FILE_CACHE.clear()
    await _save_file_cache()
    return {"status": "cache cleared"}


@app.get("/cache/stats")
async def cache_stats():
    now = time.time()
    active  = sum(1 for v in RAM_CACHE.values() if v["expires_at"] > now)
    expired = len(RAM_CACHE) - active
    return {"total": len(RAM_CACHE), "active": active, "expired": expired}


# ============================================================
#  GLOBAL ERROR HANDLER
# ============================================================
@app.exception_handler(Exception)
async def global_error_handler(request: Request, exc: Exception):
    log.exception("Unhandled error on %s: %s", request.url, exc)
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={"detail": "An internal error occurred. Please try again."},
    )

# # ================= IMPORTS =================
# from fastapi import FastAPI, Body, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# import httpx, asyncio, random, json, os
# from pathlib import Path
# from dotenv import load_dotenv
# from google import genai
# from rag_utils import query_vector_db
# import aiosmtplib
# from email.message import EmailMessage

# load_dotenv()

# # ================= CONFIG =================
# GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
# SMTP_EMAIL = os.getenv("SMTP_EMAIL")
# SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")

# if not GEMINI_API_KEY:
#     raise ValueError("Missing GEMINI_API_KEY")

# client = genai.Client(api_key=GEMINI_API_KEY)

# app = FastAPI(title="PeriodCare AI Full System")

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000","http://127.0.0.1:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# http_client: httpx.AsyncClient = None
# RAM_CACHE = {}

# # ================= FILE CACHE =================
# CACHE_FILE = Path("ai_cache.json")
# FILE_CACHE = json.load(open(CACHE_FILE)) if CACHE_FILE.exists() else {}

# def save_cache():
#     json.dump(FILE_CACHE, open(CACHE_FILE,"w"), indent=2)

# def clean_key(text): return text.lower().strip()

# # ================= STARTUP =================
# @app.on_event("startup")
# async def startup():
#     global http_client
#     http_client = httpx.AsyncClient(timeout=120)
#     print("Server started")

# @app.on_event("shutdown")
# async def shutdown():
#     await http_client.aclose()

# # ================= SMALL TALK =================
# def is_small_talk(text):
#     small = ["hi","hello","hey","ok","okay","thanks","thank you"]
#     return text.lower().strip() in small

# def small_talk_response():
#     return random.choice([
#         "Hi 💗 I’m here with you",
#         "Hello 🌸 Tell me what’s bothering you",
#         "Hey! You can talk to me freely",
#         "I’m listening 😊"
#     ])

# # ================= GEMINI =================
# async def gemini_generate(prompt):
#     try:
#         res = await asyncio.to_thread(
#             client.models.generate_content,
#             model="gemini-2.5-flash",
#             contents=prompt
#         )
#         return (res.text or "").strip()
#     except Exception as e:
#         print("Gemini error:", e)
#         return ""

# # ================= NORMALIZATION =================
# async def normalize_input(text):
#     prompt=f"Translate into clear English:\n{text}"
#     result=await gemini_generate(prompt)
#     return result if result else text

# # ================= INTENT CLASSIFIER =================
# async def classify_intent(text):
#     prompt=f"""
# Classify:
# IDENTITY → asking personal memory
# PERSONAL → symptoms/body feelings
# GENERAL → educational

# Return one word.

# {text}
# """
#     label=(await gemini_generate(prompt)).upper()
#     if "IDENTITY" in label: return "IDENTITY"
#     if "PERSONAL" in label: return "PERSONAL"
#     return "GENERAL"

# # ================= RISK ENGINE =================
# def detect_partner(text):
#     emotional=["low","sad","cry","lonely","mood","emotional","need someone","overthinking"]
#     return any(e in text.lower() for e in emotional)

# def detect_doctor(text):
#     risks=["heavy bleeding","large clots","pain 9","pain 10","vomiting","fever","fainted"]
#     return any(r in text.lower() for r in risks)

# def detect_emergency(text):
#     emerg=["unconscious","not waking","continuous faint","severe blood loss"]
#     return any(e in text.lower() for e in emerg)

# # ================= EMAIL =================
# async def send_partner_email(partner_email,user):
#     if not partner_email: return
#     try:
#         msg=EmailMessage()
#         msg["From"]=SMTP_EMAIL
#         msg["To"]=partner_email
#         msg["Subject"]="She might need you ❤️"
#         msg.set_content(f"{user or 'Someone'} may need emotional support right now.")
#         await aiosmtplib.send(msg,hostname="smtp.gmail.com",port=587,start_tls=True,username=SMTP_EMAIL,password=SMTP_PASSWORD)
#         print("Partner notified")
#     except Exception as e:
#         print("Email failed:",e)

# # ================= LOCAL MODEL =================
# async def ask_local(prompt):
#     try:
#         r=await http_client.post("http://localhost:11434/api/generate",
#                                  json={"model":"phi3:mini","prompt":prompt,"stream":False})
#         if r.status_code==200:
#             return r.json().get("response","").strip()
#     except: pass
#     return ""

# # ================= CHAT =================
# @app.post("/chat")
# async def chat(
#     question:str=Body(...),
#     language:str=Body("English"),
#     user_description:str=Body(""),
#     partner_email:str=Body("")
# ):

#     # small talk
#     if is_small_talk(question):
#         return {"route":"SMALL_TALK","answer":small_talk_response()}

#     key=clean_key(question)
#     if key in RAM_CACHE: return RAM_CACHE[key]
#     if key in FILE_CACHE: return FILE_CACHE[key]

#     # intent
#     intent=await classify_intent(question)

#     # identity
#     if intent=="IDENTITY":
#         ans=f"You told me: {user_description}" if user_description else "I don’t have your details yet."
#         result={"route":"IDENTITY","answer":ans}
#         RAM_CACHE[key]=FILE_CACHE[key]=result; save_cache()
#         return result

#     # normalize
#     normalized=await normalize_input(question)

#     # risk detection BEFORE AI
#     partner=detect_partner(normalized)
#     doctor=detect_doctor(normalized)
#     emergency=detect_emergency(normalized)

#     if emergency:
#         return {"route":"EMERGENCY","answer":"Please seek immediate medical help immediately."}

#     # PERSONAL ROUTE
#     if intent=="PERSONAL":
#         context=query_vector_db(normalized)

#         tone="emotional comforting support" if partner else "clear menstrual guidance"
#         if doctor: tone="calmly advise medical consultation"

#         prompt=f"""
# You are a safe menstrual health assistant.
# Provide {tone}.

# Context:{context}
# Question:{normalized}
# """

#         raw=await ask_local(prompt)
#         if not raw: raw=await gemini_generate(prompt)

#         # refine language
#         if language.lower()!="english":
#             raw=await gemini_generate(f"Translate to {language}:\n{raw}")

#         if partner:
#             asyncio.create_task(send_partner_email(partner_email,user_description))

#         result={
#             "route":"LOCAL_PRIVATE_AI",
#             "answer":raw,
#             "alerts":{"partner":partner,"doctor":doctor}
#         }

#     # GENERAL ROUTE
#     else:
#         raw=await gemini_generate(f"Explain simply:\n{normalized}")
#         if language.lower()!="english":
#             raw=await gemini_generate(f"Translate to {language}:\n{raw}")
#         result={"route":"DIRECT_GEMINI","answer":raw}

#     RAM_CACHE[key]=FILE_CACHE[key]=result
#     save_cache()
#     return result

# @app.get("/health")
# def health(): return {"status":"ok"}

# from fastapi import FastAPI, Body, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# import httpx
# from rag_utils import query_vector_db
# from google import genai
# import os
# from dotenv import load_dotenv
# import asyncio
# import random
# import json
# from pathlib import Path
# import aiosmtplib
# from email.message import EmailMessage

# load_dotenv()

# # ================= CONFIG =================
# GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
# if not GEMINI_API_KEY:
#     raise ValueError("❌ Missing GEMINI_API_KEY")

# client = genai.Client(api_key=GEMINI_API_KEY)

# SMTP_EMAIL = os.getenv("SMTP_EMAIL")
# SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
# PARTNER_NOTIFY = os.getenv("PARTNER_NOTIFY", "false").lower() == "true"

# app = FastAPI(title="PeriodCare Chatbot")

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000","http://127.0.0.1:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# http_client: httpx.AsyncClient = None
# RAM_CACHE = {}

# # ================= FILE CACHE =================
# CACHE_FILE = Path("ai_cache.json")

# def load_cache():
#     if CACHE_FILE.exists():
#         with open(CACHE_FILE, "r", encoding="utf-8") as f:
#             return json.load(f)
#     return {}

# def save_cache(cache):
#     with open(CACHE_FILE, "w", encoding="utf-8") as f:
#         json.dump(cache, f, indent=2, ensure_ascii=False)

# FILE_CACHE = load_cache()

# def clean_key(text: str) -> str:
#     return text.lower().strip()

# # ================= STARTUP =================
# @app.on_event("startup")
# async def startup():
#     global http_client
#     http_client = httpx.AsyncClient(timeout=90)
#     print("✅ Server started")

# @app.on_event("shutdown")
# async def shutdown():
#     await http_client.aclose()

# # ================= SMALL TALK =================
# def is_small_talk(text: str) -> bool:
#     small = ["hi","hello","hey","hii","ok","okay","thanks","thank you"]
#     return text.lower().strip() in small

# def small_talk_response():
#     return random.choice([
#         "Hi! I'm here for you 💗",
#         "Hello! Tell me how you feel 🌸",
#         "Hey! You can talk to me anytime",
#         "Hi there 😊"
#     ])

# def detect_partner_need(text: str):
#     emotional_words = [
#         "low", "sad", "cry", "crying", "lonely",
#         "mood swings", "irritated", "depressed",
#         "emotional", "need someone", "overthinking"
#     ]

#     count = 0
#     t = text.lower()

#     for w in emotional_words:
#         if w in t:
#             count += 1

#     return count >= 1   # single emotional signal enough

# # ================= GEMINI =================
# async def gemini_generate(prompt: str) -> str:
#     try:
#         response = await asyncio.to_thread(
#             client.models.generate_content,
#             model="gemini-2.5-flash",
#             contents=prompt
#         )
#         return (response.text or "").strip()
#     except:
#         return ""

# # ================= INTENT =================
# async def classify_intent(question: str) -> str:
#     prompt = f"""
# Classify:

# IDENTITY → name/memory/profile
# HEALTH_PERSONAL → symptoms/body feelings
# GENERAL → educational info

# Return only one word.

# Question: {question}
# """
#     label = await gemini_generate(prompt)
#     label = label.upper()

#     if "IDENTITY" in label:
#         return "IDENTITY"
#     if "HEALTH_PERSONAL" in label:
#         return "HEALTH_PERSONAL"
#     return "GENERAL"

# # ================= NORMALIZE =================
# async def normalize_input(text: str) -> str:
#     prompt = f"Convert to clear English:\n{text}"
#     result = await gemini_generate(prompt)
#     return result if result else text

# # ================= LOCAL MODEL =================
# async def ask_local_model(prompt: str) -> str:
#     try:
#         res = await http_client.post(
#             "http://localhost:11434/api/generate",
#             json={"model":"phi3:mini","prompt":prompt,"stream":False},
#         )
#         if res.status_code == 200:
#             return res.json().get("response","").strip()
#     except:
#         pass
#     return ""

# # ================= RISK ANALYSIS =================
# def analyze_risk(text: str):

#     t = text.lower()

#     # PARTNER CONDITIONS (2)
#     partner_keywords = [
#         "cry", "emotional", "need someone", "lonely",
#         "very sad", "mood swings", "depressed"
#     ]

#     # DOCTOR CONDITIONS (3)
#     doctor_keywords = [
#         "severe pain", "heavy bleeding", "fainted",
#         "vomiting", "fever", "large clots",
#         "pain 9", "pain 10", "cannot stand"
#     ]

#     partner_alert = any(k in t for k in partner_keywords)
#     doctor_alert = any(k in t for k in doctor_keywords)

#     return partner_alert, doctor_alert

# # ================= EMAIL =================
# async def send_partner_email(partner_email: str, user_name: str):

#     if not partner_email or not PARTNER_NOTIFY:
#         return

#     try:
#         msg = EmailMessage()
#         msg["From"] = SMTP_EMAIL
#         msg["To"] = partner_email
#         msg["Subject"] = "She might need you ❤️"

#         msg.set_content(f"""
# Hi,

# {user_name or "Someone"} may not be feeling well during her cycle.

# This is a good time to check on her and support her 💗

# — PeriodCare AI
# """)

#         await aiosmtplib.send(
#             msg,
#             hostname="smtp.gmail.com",
#             port=587,
#             start_tls=True,
#             username=SMTP_EMAIL,
#             password=SMTP_PASSWORD,
#         )

#         print("📧 Partner Notified")

#     except Exception as e:
#         print("Email error:", e)

# # ================= CHAT =================
# @app.post("/chat")
# async def chat(
#     question: str = Body(..., embed=True),
#     language: str = Body("English", embed=True),
#     user_description: str = Body("", embed=True),
#     partner_email: str = Body("", embed=True),
# ):

#     if is_small_talk(question):
#         return {"route":"SMALL_TALK","answer":small_talk_response()}

#     key = clean_key(question)

#     if key in RAM_CACHE:
#         return RAM_CACHE[key]

#     if key in FILE_CACHE:
#         RAM_CACHE[key] = FILE_CACHE[key]
#         return FILE_CACHE[key]

#     intent = await classify_intent(question)

#     # ---------- IDENTITY ----------
#     if intent == "IDENTITY":
#         answer = f"You told me: {user_description}" if user_description else "I don't have your details yet."
#         result = {"route":"LOCAL_MEMORY","answer":answer}

#     # ---------- PERSONAL ----------
#     elif intent == "HEALTH_PERSONAL":

#         normalized = await normalize_input(question)
#         context = query_vector_db(normalized)

#         partner_alert, doctor_alert = analyze_risk(normalized)

#         prompt = f"""
# You are a calm menstrual health assistant.
# Give short comforting advice.

# Context: {context}
# Question: {normalized}
# """

#         raw = await ask_local_model(prompt)
#         if not raw:
#             raw = await gemini_generate(prompt)

#         if partner_alert:
#             asyncio.create_task(send_partner_email(partner_email, user_description))

#         result = {
#             "route":"LOCAL_PRIVATE_AI",
#             "answer":raw,
#             "alerts":{
#                 "partner_support_needed":partner_alert,
#                 "doctor_consultation_needed":doctor_alert
#             }
#         }

#     # ---------- GENERAL ----------
#     else:
#         normalized = await normalize_input(question)
#         raw = await gemini_generate(f"Answer simply:\n{normalized}")
#         result = {"route":"DIRECT_GEMINI","answer":raw}

#     RAM_CACHE[key] = result
#     FILE_CACHE[key] = result
#     save_cache(FILE_CACHE)

#     return result

# # ================= HEALTH =================
# @app.get("/health")
# def health():
#     return {"status":"healthy"}

# from fastapi import FastAPI, Body, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# import httpx
# from rag_utils import query_vector_db
# from google import genai
# import os
# from dotenv import load_dotenv
# import asyncio
# import random
# import json
# from pathlib import Path

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
# RAM_CACHE = {}

# # ================= FILE CACHE =================
# CACHE_FILE = Path("ai_cache.json")

# def load_cache():
#     if CACHE_FILE.exists():
#         with open(CACHE_FILE, "r", encoding="utf-8") as f:
#             return json.load(f)
#     return {}

# def save_cache(cache):
#     with open(CACHE_FILE, "w", encoding="utf-8") as f:
#         json.dump(cache, f, indent=2, ensure_ascii=False)

# FILE_CACHE = load_cache()

# def clean_key(text: str) -> str:
#     return text.lower().strip()

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

#     key = clean_key(question)

#     # ---- RAM CACHE ----
#     if key in RAM_CACHE:
#         print("⚡ RAM cache hit")
#         return RAM_CACHE[key]

#     # ---- FILE CACHE ----
#     if key in FILE_CACHE:
#         print("💾 File cache hit")
#         RAM_CACHE[key] = FILE_CACHE[key]
#         return FILE_CACHE[key]

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

# Give reassuring explanation and helpful tips.
# Do NOT panic or over-warn.
# Suggest doctor only if symptoms persist multiple cycles.

# Context: {context}
# User Profile: {user_description}
# Question: {normalized}
# """

#             raw_answer = await ask_local_model(prompt)

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

#         # ---- SAVE CACHE ----
#         RAM_CACHE[key] = result
#         FILE_CACHE[key] = result
#         save_cache(FILE_CACHE)

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