import { createSlice } from "@reduxjs/toolkit";
import { GetProjects } from "../apis/Projects";
import { FetchFromLS, StoreToLS } from "../common/services/LocalStorageOperations";
import { projectFilterActions, projectStatus, projectListLSKey, sortOrder } from "../configs/actions/Projects";
import { IProjectDetails } from "../interfaces/ProjectDetails";

let initialState:any[] | string = [];

const applyFilter = (selectedFilter:string, response: IProjectDetails[]) => {
    return selectedFilter ? response.filter(res=> res.status === selectedFilter.split('/').pop()) : response;
}

const applySort = (key:string, response: IProjectDetails[]) => {
    return key === sortOrder.ASC ? 
            response.sort((a,b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()) : 
            response.sort((a,b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
}

const projectSlice = createSlice({
    name: "projects",
    initialState: {
        projects: initialState,
        selectedFilter: '',
        sortOption: ''
    },
    reducers: {
        filterProjects: (state, action) => {
            const result = FetchFromLS(projectListLSKey);
            state.selectedFilter = action.payload;
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
            state.sortOption = action.payload;
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
                const result = applySort(key, data);
                StoreToLS(projectListLSKey, result);
                return applyFilter(state.selectedFilter, result);
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetProjects.fulfilled, 
          (state, action) => {
            action.payload = applyFilter(state.selectedFilter, action.payload);
            action.payload = applySort(state.sortOption, action.payload);
            state.projects = action.payload;
            !state.selectedFilter && StoreToLS(projectListLSKey, JSON.stringify(action.payload));
        });
        builder.addCase(GetProjects.rejected, 
            (state, action) => {
                action.error && (state.projects = []);
        });
    },
});

export const { filterProjects, sortProjects } = projectSlice.actions;
export default projectSlice.reducer;