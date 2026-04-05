from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, JSONResponse
from pydantic import BaseModel
import json
import os
from datetime import datetime

app = FastAPI()

# Configuration
LEADS_FILE = "leads.json"

# In-memory leads as fallback
leads_cache = []

if not os.path.exists(LEADS_FILE):
    with open(LEADS_FILE, "w") as f:
        json.dump([], f)

class ContactForm(BaseModel):
    name: str
    email: str
    company: str | None = None
    interest: str | None = None
    message: str

class ChatLead(BaseModel):
    session_id: str
    message: str
    timestamp: str

@app.post("/api/contact")
async def contact_form(form: ContactForm):
    lead = {
        "id": len(leads_cache) + 1,
        "timestamp": datetime.now().isoformat(),
        "type": "contact_form",
        "data": form.model_dump()
    }
    
    # Save to file
    try:
        with open(LEADS_FILE, "r") as f:
            data = json.load(f)
        data.append(lead)
        with open(LEADS_FILE, "w") as f:
            json.dump(data, f, indent=4)
        leads_cache.append(lead)
    except Exception as e:
        print(f"Error saving lead: {e}")
        return JSONResponse(status_code=500, content={"message": "Failed to save lead"})

    return {"message": "Thank you! Our technical team will reach out shortly."}

@app.post("/api/chat-lead")
async def chat_lead(chat: ChatLead):
    # Log chat interactions for CRM simulation
    print(f"Chat interaction from {chat.session_id}: {chat.message}")
    return {"status": "received"}

# Serve the redesigned frontend
app.mount("/", StaticFiles(directory=".", html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    # Use python -m uvicorn server:app --reload locally
    uvicorn.run(app, host="127.0.0.1", port=8089)
