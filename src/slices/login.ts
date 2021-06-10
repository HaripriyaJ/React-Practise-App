import { createSlice } from "@reduxjs/toolkit";

export const isLoggedIn = (): boolean => {
    return localStorage.getItem('email') ? true : false;
}

const initialState = isLoggedIn();

const loginSlice = createSlice({
    name: "login",
    initialState: {
        loggedIn: initialState
    },
    reducers: {
        success: (state, action) => {
            state.loggedIn = true;
        },
        failure: (state, action) => {
            state.loggedIn = false;
        }
    }
});

export const { success, failure } = loginSlice.actions;
export default loginSlice.reducer;