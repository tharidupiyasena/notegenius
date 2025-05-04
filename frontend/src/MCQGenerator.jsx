// frontend/src/components/MCQGenerator.jsx
import React, { useState } from 'react';
import axios from 'axios';

const MCQGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [mcqs, setMcqs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/mcq/generate', {
        inputText: inputText,
      });
      
      setMcqs(response.data.mcqs || []);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">MCQ Generator</h2>
      <textarea
        className="w-full border p-2 rounded"
        rows="6"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to generate MCQs"
      ></textarea>
      <button
        onClick={handleGenerate}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate MCQs'}
      </button>

      <div className="mt-4">
        {mcqs.map((q, index) => (
          <div key={index} className="mb-4 p-3 border rounded">
            <p className="font-semibold">Q{index + 1}: {q.question}</p>
            <ul className="list-disc ml-5">
              {q.options.map((choice, idx) => (
                <li key={idx}>{choice}</li>
              ))}
            </ul>
            <p className="text-sm text-green-600 mt-1">Answer: {q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MCQGenerator;
