import httpClient from "../http-common";

const getAll = () => {     
    return httpClient.get("/notes");
}

const create = data => {
    return httpClient.post("/createnote",data);    
}                                                  

const details = id => {          
    return httpClient.get(`/notedetails/${id}`);
} 
 
export default {getAll, create, details};