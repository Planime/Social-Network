import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from "../../services/login";

export const signInAction = createAsyncThunk(
    'session/signIn',
    async (body) => {
        const response = await loginApi(body);
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);