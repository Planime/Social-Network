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


export async function editProfileApi(body) {
    try {
        const response = await api.put("profile", body);
        return response;
    }
    catch (e) {
        toast.error('Error loading profile');
        return false;
    }
}

export async function uploadAvatarProfileApi(formData) {


    try {
        const response = await api.post("profile/avatar", formData);
        return response;
    }
    catch (e) {
        toast.error('Error loading profile');
        return false;
    }
}
