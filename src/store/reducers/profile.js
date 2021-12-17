import { createSlice } from '@reduxjs/toolkit';
import { getProfileAction } from "../actions/profile";

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

    },
    extraReducers: (builder) => {
        builder
            .addCase(getProfileAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProfileAction.fulfilled, (state, action) => {
                console.log('>>>>>>', action)
                state.isLoading = false;
                state.email = action.payload.email;
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.avatar = action.payload.avatar;
                state.work = action.payload.work;
                state.currentCity = action.payload.currentCity;
                state.aboutMe = action.payload.aboutMe;
            });

    }
})

// Action creators are generated for each case reducer function
export const {  } = profileSlice.actions;

export default profileSlice.reducer