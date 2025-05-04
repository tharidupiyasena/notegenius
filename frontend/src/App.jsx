

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Voice from './Voice';
import Summarizer from './Summarizer';
import MCQGenerator from './MCQGenerator';
import ImageToText from './ImageToText';
import NoteApp from './NoteApp';
// import Login from './Login';
// import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voice-to-text" element={<Voice />} />
        <Route path="/Summarizer" element={<Summarizer/>} />
        <Route path="/mcq-generator" element={<MCQGenerator/>} />
        <Route path="/image-to-text" element={<ImageToText/>} />
        <Route path="/manual-note" element={<NoteApp/>}/>
        {/* <Route path='/login' element={<Login/>}/>  */}
        
       

          
        {/* <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />       
        <Route path="/voice-to-text" element={<ProtectedRoute><Voice /></ProtectedRoute>} />
        <Route path="/summarizer" element={<ProtectedRoute><Summarizer /></ProtectedRoute>} />
        <Route path="/mcq-generator" element={<ProtectedRoute><MCQGenerator /></ProtectedRoute>} />
        <Route path="/image-to-text" element={<ProtectedRoute><ImageToText /></ProtectedRoute>} />
        <Route path="/manual-note" element={<ProtectedRoute><NoteApp /></ProtectedRoute>} />
         */}
      </Routes>
    </Router>
  );
}

export default App;

 


