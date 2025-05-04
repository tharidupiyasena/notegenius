




import express from 'express';
import multer from 'multer';
import axios from 'axios';
import fs from 'fs/promises';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('image'), async (req, res) => {
  const imagePath = req.file?.path;
  const apiKey = process.env.OCR_API_KEY;

  if (!imagePath) {
    return res.status(400).json({ error: 'Image upload failed' });
  }

  try {
    const imageBuffer = await fs.readFile(imagePath);
    const base64Image = imageBuffer.toString('base64');

    const response = await axios.post(
      'https://api.ocr.space/parse/image',
      new URLSearchParams({
        apikey: apiKey,
        base64Image: `data:image/png;base64,${base64Image}`,
        language: 'eng',
        isOverlayRequired: 'false',
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    );

    await fs.unlink(imagePath); // Cleanup

    const parsedText = response.data?.ParsedResults?.[0]?.ParsedText || 'No text found';
    res.json({ text: parsedText });
  } catch (error) {
    await fs.unlink(imagePath);
    res.status(500).json({ error: 'OCR failed', details: error.message });
  }
});

export default router;
