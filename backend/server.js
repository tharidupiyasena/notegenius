



import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import imageToTextRoute from './routes/imageToText.js';
import mcqRoute from './mcq.js';
import voiceRoute from './voiceb.js';
import notesRoute from './routes/notes.js'; // ✅ Notes route added

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:5173'] }));
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/image-to-text', imageToTextRoute);
app.use('/api/mcq', mcqRoute);
app.use('/api/voice', voiceRoute);
app.use('/api/notes', notesRoute); // ✅ New route for notes

// Start server
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
