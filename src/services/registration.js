import api from "./model/api";
import {toast} from "react-toastify";

export async function registrationApi(body) {
    try {
        const response = await api.post("registration", body);
        // console.log(response.headers['set-cookie']);
        localStorage.setItem("token", response.data.token);
        return true;
    }
    catch (e) {
        toast.error('Error registration')
        return false;
    }
}


