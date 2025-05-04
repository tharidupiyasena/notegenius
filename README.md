# 🧠 NoteGenius

AI-powered web app that allows users to transcribe audio, extract text from images, summarize content, generate MCQs, and more. Built using the MERN stack with Vite for the frontend.

---

## 🚀 Features

- 🎙️ Voice-to-Text using MP3 URLs
- 🖼️ Image-to-Text via OCR
- ✂️ Text Summarization (TensorFlow.js powered)
- 🧪 MCQ Generator
- 📝 Manual Note Editor
- 🔐 Google Login Authentication (Required)

---

## 🛠️ Installation & Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/notegenius.git
cd notegenius
```

---

### 2. Install Dependencies (Frontend & Backend)

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

---

### 3. Install Additional AI Libraries (Optional / Required per feature)

#### If you're using **TensorFlow.js** for summarization:
```bash
npm install @tensorflow/tfjs @tensorflow-models/universal-sentence-encoder
```

#### If you're using **AssemblyAI** (e.g., for speech-to-text):
```bash
npm install axios
# Then use AssemblyAI's API in backend routes
```

#### If you're using **OpenAI API** (e.g., for GPT summaries or MCQ generation):
```bash
npm install openai
```

#### If you want to use **HuggingFace Transformers** with Node.js:
```bash
npm install @xenova/transformers
# Note: This runs models in-browser (with WebAssembly), no server needed
```

---

### 4. Configure Environment Variables

Create a `.env` file in the `/backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
OPENAI_API_KEY=your_openai_key
ASSEMBLYAI_API_KEY=your_assemblyai_key
```

> 🔐 **Never expose this file publicly!** Add `.env` to `.gitignore`.

---

### 5. Start the Servers

In two terminal windows or tabs:

```bash
# Terminal 1: Start backend
cd backend
npm start
```

```bash
# Terminal 2: Start frontend
cd frontend
npm run dev
```

---

### 6. Google Login Setup (Frontend Only)

Install Google login packages:

```bash
npm install @react-oauth/google jwt-decode
```

Create a `.env` in the `/frontend` folder if needed:

```env
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
```

---

### ✅ You're Ready!

Open your browser at:  
`http://localhost:5173` (Frontend)  
`http://localhost:5000` (Backend)

---

## 📂 Project Structure

```
notegenius/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   └── ...
│
├── frontend/
│   ├── App.jsx
│   ├── components/
│   └── main.jsx
│
└── README.md
```


