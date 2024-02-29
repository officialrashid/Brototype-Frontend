// reducers/registerReducer.js
import { createSlice } from '@reduxjs/toolkit';

const superleadSlice = createSlice({
  name: 'superlead',
  initialState: {
    superleadData: {}
  },
  
  reducers: {
    setSuperleadData: (state, action) => {
        console.log(action.payload,"[][][[][]]]]");
        
      state.superleadData = action.payload;
    },
 
    }
  });

export const {
    setSuperleadData,
 
} = superleadSlice.actions;

export default superleadSlice.reducer;