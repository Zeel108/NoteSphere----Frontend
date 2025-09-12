import httpClient from "../http-common";

const getAll = () => {      //4.  it calls getmapping of with url /notes to spring than if data is there than spring do work as instruction and return json response
    return httpClient.get("/notes");
}
 
export default {getAll};