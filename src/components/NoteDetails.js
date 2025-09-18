import { useEffect, useState } from "react";
import NotesService from "../services/NotesService";
import { useParams } from "react-router-dom";


const NoteDetails = () => {
    {/*  5. now we come here and it call service method name details also it takes id from url as we passs it throgh app.js   */}
    const {id} = useParams();
    const[currentNote, setCurrentNote] = useState('');

    useEffect(() => {
        NotesService.details(id)           //8. now data in form of json that is sent by spring comes here and gives value to currentNote
            .then(note => {     
                setCurrentNote(note.data);      // also .data is important here beacuse we pass json in data object

                                          /*      axios wraps the HTTP response in an object with many fields:

                                            {
                                            data: {...},        //  actual JSON body from Spring
                                            status: 200,
                                            statusText: "OK",
                                            headers: {...},
                                            config: {...},
                                            request: {...}
                                            }


                                            That’s why you must write .data → because the JSON your Spring controller sent back is inside response.data.   */
            })
            .catch(error => {
                console.log('something went wrong in getting details of note.', error);
            })
    }, []);

    return (                
        <div className="note-details main-content">             {/*3. now you will see this html code to web */}
            {currentNote && (
                <div>
                    <article>
                        <h5 className="text-capitalize primary-color">{currentNote.title}</h5>          {/*4. this will call above function for currentnote   */}
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