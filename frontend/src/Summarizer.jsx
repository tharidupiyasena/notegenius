




import { useState } from 'react';
import { summarizeText } from './utils/summarizeText';

function Summarizer() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false); // For copy feedback

  const handleSummarize = async () => {
    setLoading(true);
    const result = await summarizeText(inputText);
    setSummary(result);
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    });
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([summary], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'summary.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Text Summarizer</h2>
      <textarea
        rows={10}
        cols={80}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Paste your transcript here"
        style={{ padding: '1rem', width: '100%' }}
      />
      <br />
      <button
        onClick={handleSummarize}
        style={{ marginTop: '1rem', padding: '0.75rem 1.5rem' }}
      >
        Summarize
      </button>

      {loading && <p>Summarizing...</p>}
      {summary && (
        <div style={{ marginTop: '2rem', position: 'relative' }}>
          <h3>
            Summary:
            <button
              onClick={handleCopy}
              title="Copy summary"
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
          <p>{summary}</p>
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
            ⬇️ Download Summary
          </button>
        </div>
      )}
    </div>
  );
}

export default Summarizer;
