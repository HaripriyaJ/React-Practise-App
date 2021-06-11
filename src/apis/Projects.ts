import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { projectActions } from "../configs/actions/Projects";
import { IProjectDetails } from "../interfaces/ProjectDetails";

const baseURL = `https://${process.env.REACT_APP_PROJECT_ID}.firebaseio.com/`;

export const GetProjects = createAsyncThunk<IProjectDetails[]>(
  projectActions.GET_LIST,
   
  async (_, thunkApi) => {
    const response = await axios.get(`${baseURL}projects.json`);
    
    if (response.status !== 200) {
      return thunkApi.rejectWithValue("fetch failed");
    }
    return response.data;
  }
);
