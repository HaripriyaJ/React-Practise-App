import { createSlice } from "@reduxjs/toolkit";
import { FetchFromLS } from "../common/services/LocalStorageOperations";
import { loginActions } from "../configs/actions/Login";

export const isLoggedIn = (): boolean => {
    return FetchFromLS('email') ? true : false;
}

const initialState = isLoggedIn();

const loginSlice = createSlice({
    name: "login",
    initialState: {
        loggedIn: initialState
    },
    reducers: {
        success: (state, action) => {
            action.type === loginActions.LOGIN_SUCCESS && ( state.loggedIn = true);
        },
        failure: (state, action) => {
            action.type === loginActions.LOGIN_FAILURE && (state.loggedIn = false);
        }
    }
});

export const { success, failure } = loginSlice.actions;
export default loginSlice.reducer;