import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/generate", async (req, res) => {
  const { inputText } = req.body;

  if (!inputText) {
    return res.status(400).json({ error: "Text is required" });
  }

  const prompt = `generate question: ${inputText}`;

  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/mrm8488/t5-base-finetuned-question-generation-ap',
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json"
        },
        timeout: 20000
      }
    );

    const question = response.data[0]?.generated_text || "No question generated.";

    const mcq = {
      question,
      options: ["A", "B", "C", "D"],
      answer: "A" // Placeholder – since model doesn't return options
    };

    res.json({ mcqs: [mcq] });

  } catch (error) {
    console.error("Hugging Face error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to generate MCQ from Hugging Face" });
  }
});

export default router;
