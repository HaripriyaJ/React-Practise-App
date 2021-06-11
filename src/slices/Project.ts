import { createSlice } from "@reduxjs/toolkit";
import { GetProjects } from "../apis/Projects";
import { FetchFromLS, StoreToLS } from "../common/services/LocalStorageOperations";
import { projectFilterActions, projectStatus, projectListLSKey } from "../configs/actions/Projects";
import { IProjectDetails } from "../interfaces/ProjectDetails";

let initialState:any[] | string = [];

const projectSlice = createSlice({
    name: "projects",
    initialState: {
        projects: initialState
    },
    reducers: {
        filterProjects: (state, action) => {
            const result = FetchFromLS(projectListLSKey);
            switch(action.payload) {
                case projectFilterActions.BY_ACTIVE:
                    state.projects = filterByKey(projectStatus.ACTIVE, typeof result === 'string' ? state.projects : result);
                    return state;
                case projectFilterActions.BY_ON_HOLD:
                    state.projects = filterByKey(projectStatus.INACTIVE, typeof result === 'string' ? state.projects : result);
                    return state;
                case projectFilterActions.BY_CLOSED:
                    state.projects = filterByKey(projectStatus.CLOSED, typeof result === 'string' ? state.projects : result);
                    return state;
                case projectFilterActions.REVERT:
                    state.projects = typeof result === 'string' ? state.projects : result;
                    return state;
                default: return state;
            }

            function filterByKey (key:string, data:IProjectDetails[]) {
                return data.filter(project => project.status === key);
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetProjects.fulfilled, 
          (state, action) => {
            state.projects = action.payload;
            StoreToLS(projectListLSKey, JSON.stringify(action.payload));
        });
        builder.addCase(GetProjects.rejected, 
            (state, action) => {
                action.error && (state.projects = []);
        });
    },
});

export const { filterProjects } = projectSlice.actions;
export default projectSlice.reducer;