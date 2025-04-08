"use client";

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [extractedText, setExtractedText] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setExtractedText("");
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await fetch("http://localhost:5000/api/ocr/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setExtractedText(data.text);
    } catch (err) {
      console.error("Upload error:", err);
      setExtractedText("Failed to extract text.");
    }
  };

  return (
    <div className="min-h-screen p-8 bg-white text-black">
      <h1 className="text-3xl font-bold mb-4">NoteGenius - Handwriting to Text</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />

      {preview && (
        <div className="mb-4">
          <img src={preview} alt="Preview" className="w-64 h-auto rounded border" />
        </div>
      )}

      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Upload and Convert
      </button>

      {extractedText && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Extracted Text:</h2>
          <textarea
            value={extractedText}
            onChange={(e) => setExtractedText(e.target.value)}
            className="w-full p-4 border rounded min-h-[200px]"
          />
        </div>
      )}
    </div>
  );
}
