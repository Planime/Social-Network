import api from "./model/api";
import {toast} from "react-toastify";

export async function loginApi(body) {
    try {
        console.log(body)
        const response = await api.post("login", body);
        // console.log(response.headers['set-cookie']);
        localStorage.setItem("token", response.data.token);
        return true;
    }
    catch (e) {
        toast.error('Login error')
        return false;
    }
}


