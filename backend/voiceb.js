


import express from 'express';
import { AssemblyAI } from 'assemblyai';

const router = express.Router();

const client = new AssemblyAI({
  apiKey: "8325cb230a194946950cf5438e8987b6"
});

router.post('/transcribe', async (req, res) => {
  const { audioUrl } = req.body;

  if (!audioUrl || !audioUrl.toLowerCase().endsWith('.mp3')) {
    return res.status(400).json({ error: 'Only MP3 URLs are allowed' });
  }

  try {
    const transcript = await client.transcripts.transcribe({ audio_url: audioUrl });
    res.json({ text: transcript.text });
  } catch (error) {
    console.error("Transcription error:", error);
    res.status(500).json({ error: 'Transcription failed' });
  }
});

export default router;
