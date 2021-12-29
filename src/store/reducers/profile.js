import { createSlice } from '@reduxjs/toolkit';
import {getProfileAction, editProfileAction, uploadAvatarProfileAction} from "../actions/profile";

const initialState = {
    isLoading: false,
    email: null,
    firstName: null,
    lastName: null,
    avatar: null,
    work: null,
    currentCity: null,
    aboutMe: null,

};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        resetProfile: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfileAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProfileAction.fulfilled, (state, action) => {
                if (!action.payload) return;
                state.isLoading = false;
                state.email = action.payload?.email;
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.avatar = action.payload.avatar;
                state.work = action.payload.work;
                state.currentCity = action.payload.currentCity;
                state.aboutMe = action.payload.aboutMe;
            })
            .addCase(editProfileAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(editProfileAction.fulfilled, (state, action) => {
                if (!action.payload) return;
                console.log(action);
                state.isLoading = false;
                state.email = action.payload?.email;
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.work = action.payload.work;
                state.currentCity = action.payload.currentCity;
                state.aboutMe = action.payload.aboutMe;
            })
            .addCase(uploadAvatarProfileAction.fulfilled, (state, action) => {
                state.avatar = action.payload
            })

    }
});

// Action creators are generated for each case reducer function
export const { resetProfile } = profileSlice.actions;

export default profileSlice.reducer