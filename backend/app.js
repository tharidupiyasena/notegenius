const express = require("express");
const cors = require("cors");
const ocrRoutes = require("./routes/ocr.routes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/ocr", ocrRoutes);

module.exports = app;
