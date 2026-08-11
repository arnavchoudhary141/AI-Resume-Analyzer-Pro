# 🚀 AI Resume Analyzer

An AI-powered Resume Analyzer that evaluates resumes using Large Language Models (LLMs) and provides an ATS score, strengths, weaknesses, and actionable improvement suggestions.

## ✨ Features

- 🔐 User Authentication (Register/Login with JWT)
- 📄 Upload PDF Resume
- 🤖 AI-powered Resume Analysis
- 📊 ATS Score Generation
- ✅ Strengths Identification
- ❌ Weaknesses Detection
- 💡 Personalized Improvement Suggestions
- 💾 MongoDB Database Integration
- 🎨 Responsive Modern UI using React + Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Multer (File Upload)
- pdf-parse (PDF Text Extraction)

### AI
- OpenRouter API
- Google Gemini 2.5 Flash

---

## 📂 Project Structure

```
AI-Resume-Analyzer-Pro/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/AI-Resume-Analyzer-Pro.git
```

```bash
cd AI-Resume-Analyzer-Pro
```

---

### Install Frontend

```bash
cd client
npm install
```

---

### Install Backend

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

OPENROUTER_API_KEY=your_openrouter_api_key
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd server
npm run dev
```

Backend runs on:

```
http://localhost:8000
```

---

### Start Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---



## 🚀 Future Improvements

- Resume History
- Download Analysis as PDF
- ATS Score Charts
- Drag & Drop Upload
- Multiple Resume Comparison
- Job Description Matching
- Cover Letter Generator

---

## 👨‍💻 Author

**Arnav Choudhary**




---

## 📄 License

This project is licensed under the MIT License.
