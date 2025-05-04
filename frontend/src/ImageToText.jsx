


import React, { useState } from 'react';
import axios from 'axios';

const ImageToText = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:5000/api/image-to-text/upload', formData);
      setText(res.data.text);
    } catch (err) {
      console.error(err);
      setText('Failed to extract text.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'extracted-text.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Image to Text</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading} style={{ marginLeft: '10px' }}>
        {loading ? 'Processing...' : 'Upload & Extract'}
      </button>

      {text && (
        <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>
          <strong>Extracted Text:</strong>
          <p>{text}</p>
          <button
            onClick={handleDownload}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            ⬇️ Download Text
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageToText;
