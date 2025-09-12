import { useState } from "react";  //we import state to use state

const NotesList = () => {  
//declaringconstant variable noteslist and using arrow function" = () => {....} " to hold component  () means components takes no argument
//and {} is a body of component
    const [notes,   setNotes] = useState([
    /*       |         |           |
        store list  fun used    initialize state current it store array of 3 notes
        of notes    to update 
                    state

        Why useState?
        Because plain variables don’t re-render the UI in React. Using useState, 
        when you call setNotes, React automatically re-renders the component and updates the view.

      */{title: "First note", body: "some description", category: "genral"},        //  ----|
        {title: "Second note", body: "some description", category: "genral"},       //      |---> when components render
        {title: "Third note", body: "some description", category: "genral"}         //  ----|       , notes variable already have value of 3 array
    ])


    return ( 
        <div>
            <h1>NotesList</h1>
            {                                           /* {...} used to write js code if content is not wrap in{..} it gives error
                                                           so to tell jsx that evaluates js here inside {..}
                                                        */
                                                           
                notes.map(note => (                 //  .map() is a JavaScript array method that loops through each item and returns a new array.
                                                    //  Here, you loop over every note object inside your notes state.
                                                    //  For each note, you return a block of JSX (a <div> with p tags).
                                                      
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