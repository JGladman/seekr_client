import { configureStore } from '@reduxjs/toolkit';
import applicationsReducer from '../components/Applications/ApplicationsSlice';

export default configureStore({
  reducer: {
    applications: applicationsReducer,
  },
});
