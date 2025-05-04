# 🧠 NoteGenius

NoteGenius is a powerful MERN stack web application built with Vite that allows users to:
- ✍️ Create manual notes
- 🗣 Convert voice (MP3 URL) to text
- 🖼 Extract text from uploaded images
- 📄 Summarize long texts
- 🧪 Generate MCQs from text
- 🔐 Securely log in using Google Authentication

---

## 🔧 Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB Atlas (for notes storage)
- **Authentication**: Google OAuth (client-side only)
- **OCR**: Tesseract.js
- **Voice-to-Text**: OpenAI Whisper API or similar
- **Text Summarization & MCQ**: OpenAI GPT API

---

## 🚀 Features

- 🔐 Google Login (user must log in to access app)
- 📝 Manual Note creation and storage
- 🗣 Voice-to-text conversion using MP3 URLs
- 📷 Image-to-text extraction via OCR
- 🧠 Summarizer powered by AI
- 🎯 MCQ generator from text
- 📄 Download generated content as `.txt` files
- ✅ Protected routes with client-side access control

---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/notegenius.git
cd notegenius

# 2. Install dependencies for both frontend and backend
cd backend
npm install

cd ../frontend
npm install

# 3. Configure environment variables
# In /backend/.env
MONGO_URI=your_mongodb_connection_string
PORT=5000

# 4. Start the servers
# In /backend
npm start

# In /frontend
npm run dev
