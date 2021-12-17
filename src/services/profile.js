import api from "./model/api";
import {toast} from "react-toastify";

export async function getProfileApi() {
    try {
        const response = await api.get("profile");
        return response;
    }
    catch (e) {
        toast.error('Error loading profile');
        return false;
    }
}
