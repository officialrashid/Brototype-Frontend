// reducers/registerReducer.js
import { createSlice } from '@reduxjs/toolkit';

const chatOppositPersonDataSlice = createSlice({
  name: 'chat',
  initialState: {
    chatOppositPersonData: {}
  },
  
  reducers: {
    setchatOppositPersonData: (state, action) => {
        console.log(action.payload,"[][][[][]]]]");
        
      state.chatOppositPersonData = action.payload;
    },
 
    }
  });

export const {
    setchatOppositPersonData,
 
} = chatOppositPersonDataSlice.actions;

export default chatOppositPersonDataSlice.reducer;