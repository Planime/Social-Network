import { createSlice } from '@reduxjs/toolkit';
import {signInAction} from "../actions/session";

const initialState = {
    isLogin: false,
};


export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setIsLogin: (state) => {state.isLogin = true},

        logOut: () =>  initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInAction.fulfilled, (state, action) => {
                state.isLogin = action.payload;
            });

    }
});

// Action creators are generated for each case reducer function
export const { setIsLogin, logOut } = sessionSlice.actions;

export default sessionSlice.reducer