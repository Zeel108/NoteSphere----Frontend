import httpClient from "../http-common";

const getAll = () => {     
    return httpClient.get("/notes");
}

const create = data => {
    return httpClient.post("/createnote",data);     //6. json data comes here and in backend /createnote restpoint triggers
}                                                   //7. spring run as commanded and after successes full saving data json response come to addnote.js
 
export default {getAll, create};