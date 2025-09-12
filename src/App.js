import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import NotesList from './components/NotesList';
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            
            <Route path="/*" element={<Navbar />} />
            <Route path="/" element={<NotesList /> } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
