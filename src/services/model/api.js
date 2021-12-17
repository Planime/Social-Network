import axios from "axios";

let url = "http://localhost:4444/api/";

const api = axios.create({
    baseURL: url
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
});


export default api;