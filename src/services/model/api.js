import axios from "axios";

let url = "http://localhost:4444/api/";

const api = axios.create({
    baseURL: url
});


export default api;

