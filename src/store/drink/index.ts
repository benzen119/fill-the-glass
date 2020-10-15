import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  progress: 0,
  waterConsumed: 0,
  dailyGoal: '',
}

const todosSlice = createSlice({
  name: 'drink',
  initialState,
  reducers: {
    setProgress(state, { payload }) {
      state.progress = payload
    },
    setWaterConsumed(state, { payload }) {
      state.waterConsumed = payload
    },
    setDailyGoal(state, { payload }) {
      state.dailyGoal = payload
    },
  },
})

export const {
  setProgress,
  setWaterConsumed,
  setDailyGoal 
} = todosSlice.actions

export default todosSlice.reducer
