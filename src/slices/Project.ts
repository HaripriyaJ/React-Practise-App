import { createSlice } from "@reduxjs/toolkit";
import { GetProjects } from "../apis/Projects";
import { FetchFromLS, StoreToLS } from "../common/services/LocalStorageOperations";
import { projectFilterActions, projectStatus, projectListLSKey, sortOrder } from "../configs/actions/Projects";
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
        },
        sortProjects: (state, action) => {
            const result = FetchFromLS(projectListLSKey);
            switch(action.payload) {
                case sortOrder.ASC:
                    state.projects = sortByKey(sortOrder.ASC, typeof result === 'string' ? state.projects : result);
                    return state;
                case sortOrder.DESC:
                    state.projects = sortByKey(sortOrder.DESC, typeof result === 'string' ? state.projects : result);
                    return state;
                default: return state;
            }
            function sortByKey (key:string, data:IProjectDetails[]) {
                let result;
                key === sortOrder.ASC ? 
                    (result = data.sort((a,b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())) : 
                    (result = data.sort((a,b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()));
                StoreToLS(projectListLSKey, result);
                return result;
            }
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

export const { filterProjects, sortProjects } = projectSlice.actions;
export default projectSlice.reducer;