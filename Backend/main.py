import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai  # New package import
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the new Client
# It will look for an environment variable named GOOGLE_API_KEY by default
client = genai.Client(api_key=os.getenv("GEMINI_API"))

class ChatRequest(BaseModel):
    message: str

SYSTEM_PROMPT = """
You are the AI assistant for Halimah Ibrahim-Akinoso, a Full Stack AI Developer. 
Answer questions about her skills (Python, FastAPI, React, LLMs) and projects. 
Keep responses under 3 sentences.
"""

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        # The new SDK uses client.models.generate_content
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=request.message,
            config={
                "system_instruction": SYSTEM_PROMPT,
                "temperature": 0.7,
            }
        )
        return {"response": response.text}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="Gemini API Error")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)