import { useState } from "react";
import NotesService from "../services/NotesService";


const AddNote = () =>{  
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('Personal');

    const savenote = (e) => {          
        e.preventDefault();
        const note = {title, body, category};     
        NotesService.create(note)                    
            .then(response => {                                   
                console.log("Note created successfully", response.data);
            })
            .catch(error => {
                console.log("something went wrong", error);
                
            });
            

    }


    return (
        <div className="create">
            <div className="text-center">
                <h5>Add New Note</h5>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Note Title: <sup>*</sup></label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}     
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="body">Note Description: <sup>*</sup></label>
                    <textarea 
                        type="text"
                        id="body"
                        className="form-control"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                       >
                    </textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="category">Note Category:</label>
                    <select
                        id="category"
                        className="form-control"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                       >
                        <option value="None">select one category</option>
                        <option value="programming">Programming</option>
                        <option value="vacation">Vacation</option>
                        <option value="meeting">Meeting</option>
                        <option value="Personal">Personal</option>
                        <option value="blogging">Blogging</option>
                    </select>
                </div>

                <div className="text-center">
                    <button onClick={(e) => savenote(e)}>          
                        Save                        </button>
                </div>
            </form>
        </div>
    );
};
 
export default AddNote;
