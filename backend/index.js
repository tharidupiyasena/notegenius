const express = require('express');
const multer = require('multer');
const Tesseract = require('tesseract.js');

const app = express();
const port = 5002;

// Set up file upload using multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Test route for backend
app.get("/", (req, res) => {
  res.send("Backend is running successfully! 🚀");
});

// Create the OCR endpoint
app.post('/ocr', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Use Tesseract to extract text from the image
  Tesseract.recognize(
    req.file.path,
    'eng', // Language (English in this case)
    {
      logger: (m) => console.log(m), // Optional: log OCR progress
    }
  )
    .then(({ data: { text } }) => {
      res.json({ text }); // Send extracted text as response
    })
    .catch((err) => {
      res.status(500).json({ error: 'OCR failed', details: err });
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
