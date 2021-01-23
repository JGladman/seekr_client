import { configureStore } from '@reduxjs/toolkit';

import applicationsReducer from '../components/ApplicationsSlice';

export default configureStore({
  reducer: {
    applications: applicationsReducer,
  },
});
