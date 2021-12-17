import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profile'
import sessionReducer from './reducers/session'

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        session: sessionReducer
    },
})

