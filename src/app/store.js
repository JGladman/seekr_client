import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import jobReducer from "../features/JobInfo/jobsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    jobs: jobReducer
  },
});
