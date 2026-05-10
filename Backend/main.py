import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from google import genai
from pydantic import BaseModel, Field

ROOT_DIR = Path(__file__).resolve().parent.parent
load_dotenv(ROOT_DIR / ".env")


def get_allowed_origins():
    configured_origins = os.getenv("ALLOWED_ORIGINS", "")
    if configured_origins.strip():
        return [origin.strip() for origin in configured_origins.split(",") if origin.strip()]

    return [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ]


def get_genai_client():
    api_key = os.getenv("GEMINI_API") or os.getenv("GOOGLE_API_KEY")
    if not api_key:
        raise RuntimeError(
            "Gemini API key is missing. Set GEMINI_API or GOOGLE_API_KEY in the project .env file."
        )
    return genai.Client(api_key=api_key)


app = FastAPI(title="Halimah Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=get_allowed_origins(),
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=2000)


SYSTEM_PROMPT = """
You are the AI assistant for Halimah Ibrahim-Akinoso, a Full Stack AI Developer.
Answer questions about her skills, background, and projects.
Keep responses under 3 sentences and stay grounded in the provided portfolio context.
""".strip()

PORTFOLIO_CONTEXT = {
    "name": "Halimah Ibrahim-Akinoso",
    "role": "Full Stack AI Developer",
    "skills": [
        "Python",
        "FastAPI",
        "React",
        "LLM integration",
        "Vector databases",
        "Docker",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Git",
    ],
    "projects": [
        "ShopperAI, a full-stack AI shopping assistant with a modern storefront and RAG-powered support.",
        "SpendWise, a privacy-first personal expense tracker with budgeting alerts and spending insights.",
    ],
}


def build_fallback_response(message: str) -> str:
    normalized_message = message.lower()

    if any(keyword in normalized_message for keyword in ["skill", "stack", "tech", "technology", "tools"]):
        return (
            "Halimah is a Full Stack AI Developer who works with Python, FastAPI, React, "
            "LLM integration, vector databases, Docker, JavaScript, TypeScript, Node.js, and Git."
        )

    if any(keyword in normalized_message for keyword in ["project", "build", "portfolio", "work"]):
        return (
            "Two featured projects are ShopperAI, an AI shopping assistant with RAG-powered support, "
            "and SpendWise, a personal expense tracker focused on budgeting and spending insights."
        )

    if any(keyword in normalized_message for keyword in ["contact", "reach", "email", "hire"]):
        return (
            "You can reach Halimah through the contact section on the portfolio site, and the portfolio "
            "highlights her work as a Full Stack AI Developer focused on intelligent, user-friendly systems."
        )

    if any(keyword in normalized_message for keyword in ["who", "about", "introduce", "halimah"]):
        return (
            "Halimah Ibrahim-Akinoso is a Full Stack AI Developer who builds intelligent applications, "
            "specializing in LLM integration, scalable backend systems, and polished frontend experiences."
        )

    return (
        "Halimah Ibrahim-Akinoso is a Full Stack AI Developer focused on building intelligent applications "
        "with Python, FastAPI, React, and modern AI workflows."
    )


@app.get("/")
async def root():
    return {"message": "Halimah Portfolio API is running."}


@app.get("/health")
async def health():
    return {
        "status": "ok",
        "geminiConfigured": bool(os.getenv("GEMINI_API") or os.getenv("GOOGLE_API_KEY")),
    }


@app.post("/chat")
async def chat(request: ChatRequest):
    message = request.message.strip()

    try:
        client = get_genai_client()
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=message,
            config={
                "system_instruction": SYSTEM_PROMPT,
                "temperature": 0.7,
            },
        )
    except Exception as exc:
        print(f"Gemini request failed: {exc}")
        return {"response": build_fallback_response(message)}

    response_text = getattr(response, "text", None)
    if not response_text:
        return {"response": build_fallback_response(message)}

    return {"response": response_text}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
