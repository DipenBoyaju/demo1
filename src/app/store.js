import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../features/counter/counterSlice'
import { counterSlice1 } from '../features/counter/Counter1Slice'
import { dailySlice } from '../features/DailyBlogs/dailySlice'

export const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    counterSlice1: counterSlice1.reducer,
    dailySlice: dailySlice.reducer,
  }
})