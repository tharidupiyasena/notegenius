



import { useState } from 'react';
import axios from 'axios';

function Voice() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const res = await axios.post('http://localhost:5000/api/voice/transcribe', {
        audioUrl: url
      });
      setResult(res.data.text);
    } catch (err) {
      setResult(err.response?.data?.error || 'Something went wrong');
    }

    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([result], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'transcription.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Voice-to-Text (MP3 URL)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter MP3 file URL"
          style={{ padding: '0.5rem', width: '300px' }}
        />
        <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem' }}>
          Transcribe
        </button>
      </form>

      {result && (
        <div style={{ marginTop: '2rem' }}>
          <h3>
            Transcription:
            <button
              onClick={handleCopy}
              title="Copy transcription"
              style={{
                marginLeft: '0.5rem',
                cursor: 'pointer',
                fontSize: '1rem',
                padding: '0.2rem 0.5rem',
              }}
            >
              📋
            </button>
            {copied && <span style={{ marginLeft: '0.5rem', color: 'green' }}>Copied!</span>}
          </h3>
          <p>{result}</p>

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
            ⬇️ Download Transcription
          </button>
        </div>
      )}

      {loading && <p style={{ marginTop: '2rem' }}>Transcribing...</p>}
    </div>
  );
}

export default Voice;
