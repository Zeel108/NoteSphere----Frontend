import { useEffect, useState } from "react"; 
import NotesService from "../services/NotesService";

const NotesList = () => {  
    const [notes,   setNotes] = useState([]);      

    useEffect(() => {

        NotesService.getAll()       
            .then(response => {     
                console.log('printing response', response.data); 
                setNotes(response.data);
            })
            .catch(error => {
                console.log('something went wrong', error);
            })

    })


    return ( 
        <div className="main-content">
            <h4>NotesList</h4>
            <div className="notes--list mt-4">
            {                                                                                                     
                notes.map(note => (        
                    <div key={note.noteId} className="notes-preview mt-3">                               
                        
                        <h5 className="primary-color text-capitalize">{note.title}</h5>    
                        <p>{note.body}</p>
                        
                    </div>
                ))
            }
            </div>
        </div>
     );
}
 
export default NotesList;