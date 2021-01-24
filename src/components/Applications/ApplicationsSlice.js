import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  applications: [],
  status: 'idle',
  error: null,
};

export const fetchApplications = createAsyncThunk(
  'posts/fetchApplications',
  async (criteria) => {
    let response;
    switch (criteria) {
      case 'job':
        response = await axios.get(
          'http://138.197.109.106:3001/applications/sort/job',
        );
        return response.data;
      case 'category':
        response = await axios.get(
          'http://138.197.109.106:3001/applications/sort/category',
        );
        return response.data;
      case 'company':
        response = await axios.get(
          'http://138.197.109.106:3001/applications/sort/company',
        );
        return response.data;
      case 'priority':
        response = await axios.get(
          'http://138.197.109.106:3001/applications/sort/priority',
        );
        return response.data;
      case 'step':
        response = await axios.get(
          'http://138.197.109.106:3001/applications/sort/step',
        );
        return response.data;
      // Unsorted
      default:
        response = await axios.get('http://138.197.109.106:3001/applications');
        return response.data.reverse();
    }
  },
);

export const createApplication = createAsyncThunk(
  'applications/createNewApplication',
  async (newApplication) => {
    const response = await axios.post(
      'http://138.197.109.106:3001/applications',
      { ...newApplication },
    );
    return response.post;
  },
);

export const updateApplication = createAsyncThunk(
  'applications/updateApplication',
  async (fields, id) => {
    const response = await axios.put(
      `http://138.197.109.106:3001/applications/${id}`,
      { ...fields },
    );
    return response;
  },
);

export const deleteApplication = createAsyncThunk(
  'applications/deleteApplication',
  async (id) => {
    const response = await axios.delete(
      `http://138.197.109.106:3001/applications/${id}`,
    );
    return response;
  },
);

const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchApplications.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchApplications.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.applications = action.payload;
    },
    [fetchApplications.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    // [createApplication.fulfilled]: (state, action) => {
    //   state.applications = state.applications.concat(action.payload);
    // },
  },
});

export default applicationsSlice.reducer;

export const selectAllApplications = (state) => state.applications.applications;

export const selectApplicationById = (state, applicationId) =>
  state.applications.applications.find(
    (application) => application._id === applicationId,
  );
