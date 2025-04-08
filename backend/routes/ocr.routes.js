const express = require("express");
const multer = require("multer");
const Tesseract = require("tesseract.js");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// Set up multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// POST /api/ocr/upload
router.post("/upload", upload.single("image"), async (req, res) => {
  const imagePath = req.file.path;

  try {
    const {
      data: { text },
    } = await Tesseract.recognize(imagePath, "eng");

    // Optional: Delete file after reading
    fs.unlinkSync(imagePath);

    res.json({ text });
  } catch (error) {
    console.error("OCR error:", error);
    res.status(500).json({ error: "Failed to process image" });
  }
});

module.exports = router;
