const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Parse incoming JSON
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Backend is running with CORS enabled!");
});

// Add your routes here (e.g., /api/ocr)
app.use("/api/ocr", require("./routes/ocrRoutes")); // example route

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
