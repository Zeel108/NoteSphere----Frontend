import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import NotesList from './components/NotesList';
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>

              <div>
                <Navbar />
              </div>
        
        <Routes>
            <Route path="/" element={<NotesList /> } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
