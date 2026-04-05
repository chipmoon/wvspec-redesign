# WVSPEC Redesign - Production Project

A premium, "Deep Tech" redesign of the WVSPEC Precision Technology website, built with modern web standards and a scalable backend architecture.

## 🚀 Key Features

### 👁️ Advanced UI/UX
- **Pro Metrology Aesthetic**: Dark mode design with Cyan/Violet accents, tailored for the precision engineering industry.
- **Precision Cursor Trail**: Interactive mouse trailing effect reflecting the "Precision" brand identity.
- **Glassmorphism Detail**: Polished translucent cards and navigation for a futuristic feel.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices.

### 🔬 Technical Integrity
- **Original Assets**: Integrated all original high-resolution hardware modules and technical diagrams from the original Wix site (wafer bumping, SiC charts, spectral diagrams).
- **Dynamic Showcase**: Interactive tabs for Hardware Modules and Software Algorithms.
- **Precision Animations**: Intersection Observer-based scroll reveals and stat counters.

### 🧠 Backend Readiness (Pro Edition)
- **FastAPI Integration**: A modern Python-based backend handling lead management.
- **Lead Pipeline**: Contact form and Live Chat messages are logged to a JSON "leads" file, ready for CRM integration.
- **Real-time Chat Widget**: Custom-built chat interface for immediate customer engagement.

## 🛠️ Tech Stack
- **Frontend**: Vanilla HTML5, CSS3 (Modern Grid/Flexbox), ES6+ JavaScript.
- **Backend**: Python 3.14 + FastAPI + Uvicorn.
- **Imagery**: Original WVSPEC technical assets.

## 🏃 Running Locally

1. **Install Dependencies**:
   ```bash
   pip install fastapi uvicorn
   ```

2. **Start the Production Server**:
   ```bash
   python -m uvicorn server:app --port 8089 --reload
   ```

3. **View the Project**:
   Open [http://localhost:8089](http://localhost:8089) in your browser.

## 📁 Project Structure
```text
wvspec-redesign/
├── assets/           # Original WVSPEC high-res images & diagrams
├── index.html        # Main semantic structural code
├── style.css         # Premium design system & animations
├── app.js            # Interactive logic & backend connection
├── server.py         # FastAPI backend server
├── leads.json        # Simulated database for customer inquiries
└── README.md         # Project documentation
```

---
*Redesigned with precision by Antigravity*
