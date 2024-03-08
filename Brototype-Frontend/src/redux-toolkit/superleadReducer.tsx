import { createSlice } from '@reduxjs/toolkit';

const superleadSlice = createSlice({
  name: 'superlead',
  initialState: {
    superleadData: {},
    superleadProfileImage:null
  },
  
  reducers: {
    setSuperleadData: (state, action) => {
      console.log(action.payload, "[][][[][]]]]");

      state.superleadData = action.payload;
    },
    setSuperleadProfileImage: (state, action) => { // Corrected action name
      console.log(action.payload, "[][][[][]]]]");
      console.log(typeof action.payload, "[][][[][]]]]");
      state.superleadProfileImage = action.payload;
    }
  }
});

export const {
  setSuperleadData,
  setSuperleadProfileImage // Corrected export name
} = superleadSlice.actions;

export default superleadSlice.reducer;
