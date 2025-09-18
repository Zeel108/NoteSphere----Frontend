import httpClient from "../http-common";

const getAll = () => {     
    return httpClient.get("/notes");
}

const create = data => {
    return httpClient.post("/createnote",data);    
}                                                  
 
export default {getAll, create};