
const AddNote = () =>{              /* here it come and first return section written in return section and than every thing is works */
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
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="body">Note Description: <sup>*</sup></label>
                    <textarea 
                        id="body"
                        className="form-control"
                       >
                    </textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="category">Note Category:</label>
                    <select
                        id="category"
                        className="form-control"
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
                    <button>
                        Save
                        </button>
                </div>
            </form>
        </div>
    );
};
 
export default AddNote;
