import { useEffect, useState } from "react"; 
import NotesService from "../services/NotesService";

const NotesList = () => {  
    const [notes,   setNotes] = useState([]);       //2.  notes variable use usestate and call useeffect

    useEffect(() => {

        NotesService.getAll()       //3.   it will call service getall method
            .then(response => {     //6.  then and catch is used to catch response from spring it return then if correct response is come from spring else it return catch if any error or no data will come
                console.log('printing response', response.data);  //it will be not mendatory but it is a good practice to do it because it give you clearity than everything is perfect or not and you can esaly find any error
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
                notes.map(note => (      //1. it calls this notes variable
                    //5. return or print data if any there           
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