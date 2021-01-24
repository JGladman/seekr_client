import { configureStore } from '@reduxjs/toolkit';
import jobReducer from "../features/JobInfo/jobsSlice";
    
export default configureStore({
  reducer: {
    jobs: jobReducer,
    applications: applicationsReducer,
  },
});
