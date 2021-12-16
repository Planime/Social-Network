import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: false,
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
        logout: (state) => {
            state = initialState
        },
        setLogin: (state) => {
            state.isLogin = true
        }
    },
});

// Action creators are generated for each case reducer function
export const { logout, setLogin } = profileSlice.actions;

export default profileSlice.reducer