import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './slices/Login';
import projectSlice from './slices/Project';

const store = configureStore({
    reducer: {
        login: loginSlice,
        projects: projectSlice
    }
});

export default store;
