import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../features/counter/counterSlice'
import { counterSlice1 } from '../features/counter/Counter1Slice'

export const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    counterSlice1: counterSlice1.reducer
  }
})