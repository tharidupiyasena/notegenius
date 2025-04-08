const express = require("express");
const router = express.Router();

// Sample OCR route
router.post("/", (req, res) => {
  // This is where your OCR logic will go
  res.json({ message: "OCR route is working!" });
});

module.exports = router;
