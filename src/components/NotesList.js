import { useState } from "react"; 

const NotesList = () => {  
    const [notes,   setNotes] = useState([

        {title: "First note", body: "some description", category: "genral"},       
        {title: "Second note", body: "some description", category: "genral"},      
        {title: "Third note", body: "some description", category: "genral"}       
    ])


    return ( 
        <div>
            <h1>NotesList</h1>
            {                                                                                                     
                notes.map(note => (                 
                    <div>                               
                        <p>{note.title}</p>
                        <p>{note.body}</p>
                        <p>{note.category}</p>
                    </div>
                ))
            }
        </div>
     );
}
 
export default NotesList;