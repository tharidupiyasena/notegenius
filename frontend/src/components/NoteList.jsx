import { useEffect, useState } from 'react';
import axios from 'axios';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await axios.get('http://localhost:5000/api/notes');
    setNotes(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/notes/${id}`);
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
      {notes.map((note) => (
        <div key={note._id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => handleDelete(note._id)} style={{ color: 'red' }}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;