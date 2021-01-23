import { createSlice } from '@reduxjs/toolkit';
import jobPlaceholderContainers from "../../asset/placeholder";

const generateJobPlaceholders = num => {
  const arr = [];
  for (let i = 0; i < num; i++){
    arr.push({...jobPlaceholderContainers[i]})
  }
  return arr;
}

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: generateJobPlaceholders(10),
  },
  reducers: {
    deletePost: (state, action) => {
      state.jobs.filter(job => job.id !== action.id);
    },
    

    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 3;
    // },
    // decrement: state => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { deletePost } = jobsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const sortAlphabetically = (state) => dispatch => {
  setTimeout(() => {
    dispatch(console.log("get array of jobs alphabetically sorted from the server"))
  }, 2000);
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectJobs = state => state.jobs.jobs;

export default jobsSlice.reducer;
