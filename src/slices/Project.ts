import { createSlice } from "@reduxjs/toolkit";
import { GetProjects } from "../apis/Projects";

let initialState:any[] = [];

const projectSlice = createSlice({
    name: "projects",
    initialState: {
        projects: initialState
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetProjects.fulfilled, 
          (state, action) => {
            state.projects = action.payload;
        });
        builder.addCase(GetProjects.rejected, 
            (state, action) => {
                action.error && (state.projects = []);
        });
    },
});

export default projectSlice.reducer;