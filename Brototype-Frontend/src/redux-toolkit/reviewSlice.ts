import { createSlice } from "@reduxjs/toolkit";


const reviewSlice=createSlice({
    name:"reviews",
    initialState:{
        reviewData:[],
        changeScreen:false
    },
    reducers:{
        getReviewData:(state,action)=>{
            state.reviewData=action.payload.map((student:any)=>{
           return {studentId:student._id,name:student.firstName,lastName:student.lastName,batch:student.batch,currentWeek:student.currentWeek,domain:student.domain}
            })
        },
        changeFrame:(state,action)=>{
            state.changeScreen=action.payload
        }
    }
})


export const {getReviewData,changeFrame}=reviewSlice.actions
export default reviewSlice.reducer