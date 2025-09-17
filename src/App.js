import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import NotesList from './components/NotesList';
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import AddNote from "./components/AddNote";

function App() {
  return (
    <BrowserRouter>

              <div>
                <Navbar />
              </div>
        
        <Routes>
            <Route path="/" element={<NotesList /> } />
            <Route path="*" element={<NotFound />} />
            <Route path="/addnote" element={<AddNote />} /> {/*here we come for path /addnote and app redirect us to Addnote Function which is in AddNote.js   */}
        </Routes>                                           {/* here we import AddNote function at import section so that our app can reach to that fun/ method  */}
    
    </BrowserRouter>
  );
}

export default App;
