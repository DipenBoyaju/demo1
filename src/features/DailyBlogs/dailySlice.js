import { createSlice } from "@reduxjs/toolkit";


export const dailySlice = createSlice({
  name: 'dailySlice',

  initialState: {
    blogs: []
  },

  reducers: {
    addToBLogs: (state, action) => {
      state.blogs = [...state.blogs, action.payload];
    },
    updateToBLogs: (state, action) => {

    },
    removeBLogs: (state, action) => {

    },


  },



});


export const { addToBLogs, updateToBLogs, removeBLogs } = dailySlice.actions;

