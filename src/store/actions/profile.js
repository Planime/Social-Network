import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfileApi } from "../../services/profile"

export const getProfileAction = createAsyncThunk(
    'profile/getProfile',
    async () => {
        const response = await getProfileApi();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);