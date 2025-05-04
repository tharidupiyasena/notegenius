import { useState } from 'react';
import axios from 'axios';

const NoteForm = ({ onNoteAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/notes', { title, content });
      onNoteAdded(res.data);
      setTitle('');
      setContent('');
    } catch (err) {
      console.error('Error creating note:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: '10px', padding: '5px' }}
        required
      />
      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ marginRight: '10px', padding: '5px' }}
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;