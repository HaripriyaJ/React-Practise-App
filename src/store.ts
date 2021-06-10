import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './slices/login';

const store = configureStore({
    reducer: {
        login: loginSlice
    }
});

export default store;
