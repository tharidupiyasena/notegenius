import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function NoteApp() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div style={{ padding: '20px' }}>
      <h1>NoteApp</h1>
      <NoteForm onNoteAdded={triggerRefresh} />
      <NoteList key={refresh} />
    </div>
  );
}

export default NoteApp;
