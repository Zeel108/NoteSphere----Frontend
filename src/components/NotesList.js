import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";   
import NotesService from "../services/NotesService";

const NotesList  = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        NotesService.getAll()
            .then((response) => {
                console.log('printing response', response.data);
                setNotes(response.data);
            })
            .catch((error) => {
                console.log('something went wrong', error);
            });
    }, []);

    return ( 
        <div className="main-content">
            <h1>List of notes</h1>
            <div className="notes-list mt-4">
            {
                notes.length > 0 ? notes.map(note => (
                    <div key={note.noteId} className="notes-preview mt-3">
                        <Link to={`/notedetail/${note.noteId}`}>     {/* 1. you hit this url to open single note that this url must match to app.js url so that u can asscces notesdetails.js   */}
                            <h5 className="primary-color text-capitalize">{note.title}</h5>
                            <div className="text-italic">
                                {moment(note.updatedAt).fromNow()}  
                            </div>
                        </Link>
                    </div>
                )) : <div>No Notes available</div>
             }
            </div>
        </div>
     );
}
 
export default NotesList;
