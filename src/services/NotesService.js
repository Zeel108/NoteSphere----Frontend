import httpClient from "../http-common";

const getAll = () => {     
    return httpClient.get("/notes");
}

const create = data => {
    return httpClient.post("/createnote",data);    
}                                                  

const details = id => {           /* 6. now we come here and using axios it make request from backend with url extension /notedetails    */
    return httpClient.get(`/notedetails/${id}`);
} 
 
export default {getAll, create, details};