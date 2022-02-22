import {createAsyncThunk} from '@reduxjs/toolkit';
import {editProfileApi, getProfileApi, uploadAvatarProfileApi} from "../../services/profile"

export const getProfileAction = createAsyncThunk(
    'profile/getProfile',
    async () => {
        const response = await getProfileApi();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);


export const editProfileAction = createAsyncThunk(
    'profile/editProfile',
    async (body) => {
        console.log("body", body)
        const response = await editProfileApi(body);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const uploadAvatarProfileAction = createAsyncThunk(
    'profile/uploadAvatarProfile',
    async (formData) => {
        const response = await uploadAvatarProfileApi(formData);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);