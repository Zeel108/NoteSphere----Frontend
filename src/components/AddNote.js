import { useState } from "react";
import NotesService from "../services/NotesService";


const AddNote = () =>{  
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('Personal');

    const savenote = (e) => {           //3. data comes here
        e.preventDefault();
        const note = {title, body, category};       //4. all data stored in note variable
        NotesService.create(note)                   //5. sent the json data to service folder   
            .then(response => {                                     //8. response data comes here and genrate respone to console of web browser
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
                        onChange={(e) => setTitle(e.target.value)}      // 1.  set user enter value use state in variable title
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
                    <button onClick={(e) => savenote(e)}>           {/*2. after click on save onclick will trigger and call saveuser method   */}
                        Save                        </button>
                </div>
            </form>
        </div>
    );
};
 
export default AddNote;
