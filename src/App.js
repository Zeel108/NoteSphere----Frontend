import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import NotesList from './components/NotesList';
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import AddNote from "./components/AddNote";
import NoteDetails from "./components/NoteDetails";

function App() {
  return (
    <BrowserRouter>

              <div>
                <Navbar />
              </div>
        
        <Routes>
            <Route path="/" element={<NotesList /> } />
            <Route path="*" element={<NotFound />} />
            <Route path="/addnote" element={<AddNote />} />
            <Route path="/notedetail/noteupdate/:id" element={<AddNote />} />
            <Route path="/notedetail/:id" element={<NoteDetails />} />    
        </Routes>                                           
    
    </BrowserRouter>
  );
}

export default App;
