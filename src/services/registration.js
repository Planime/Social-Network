import api from "./model/api";
import {toast} from "react-toastify";

export async function registrationApi(body) {
    try {
        const response = await api.post("registration", body, {withCredentials: true});
        // console.log(response.headers['set-cookie']);
        console.log(response);
    }
    catch (e) {
        toast.error('Error registration')
    }
}


