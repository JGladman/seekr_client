import { createSlice } from '@reduxjs/toolkit'

const initialState = { windows: null }

const ContainersSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    sortMenu(state) {
      state.windows = 'Sort'
    },
    applicationMenu(state) {
      state.windows = 'Application'
    },
    closeMenu(state){
      state.windows = null
    }
  },
})

export const { sortMenu, applicationMenu, closeMenu } = ContainersSlice.actions
export default CountainersSlice.reducer
