import { useEffect, useState } from "react";
import NotesService from "../services/NotesService";
import { useParams } from "react-router-dom";


const NoteDetails = () => {
   
    const {id} = useParams();
    const[currentNote, setCurrentNote] = useState('');

    useEffect(() => {
        NotesService.details(id)          
            .then(note => {     
                setCurrentNote(note.data);     

                                         
            })
            .catch(error => {
                console.log('something went wrong in getting details of note.', error);
            })
    }, []);

    return (                
        <div className="note-details main-content">             
            {currentNote && (
                <div>
                    <article>
                        <h5 className="text-capitalize primary-color">{currentNote.title}</h5>        
                        <div className="mb-3 font-italic metadata">
                            
                            <span className="text-capitalize">{currentNote.category}</span>
                        </div>
                        <div className="mb-3">{currentNote.body}</div>
                    </article>
                    <button >Edit</button>
                    <button className="ml-3">Delete</button>
                </div>
            )}
        </div>

    );
};

export default NoteDetails;