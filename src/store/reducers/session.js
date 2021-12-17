import { createSlice } from '@reduxjs/toolkit';
import {signInAction} from "../actions/session";

const initialState = {
    isLogin: false,
};

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setIsLogin: (state) => {state.isLogin = true}
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInAction.fulfilled, (state, action) => {
                console.log('>>>>>>', action)
                state.isLogin = action.payload;
            });

    }
});

// Action creators are generated for each case reducer function
export const { setIsLogin } = sessionSlice.actions;

export default sessionSlice.reducer