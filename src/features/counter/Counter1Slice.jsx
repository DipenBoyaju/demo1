import { createSlice, createAction } from "@reduxjs/toolkit"

export const reset = createAction('app/reset');

export const counterSlice1 = createSlice({

  name: 'count1Slice',
  initialState: {
    count1: 1
  },

  reducers: {
    incre: (state, action) => {
      state.count1 = state.count1 + 1;
    },

    decre: (state, action) => {
      if (state.count1 > 0) {
        state.count1 = state.count1 - 1
      }
    }
  },

  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      state.count1 = 0;
    })
  }
})

export const { incre, decre } = counterSlice1.actions;