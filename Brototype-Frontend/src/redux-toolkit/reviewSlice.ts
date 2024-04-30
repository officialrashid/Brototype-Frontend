import { createSlice } from "@reduxjs/toolkit";


const reviewSlice=createSlice({
    name:"reviews",
    initialState:{
        reviewData:[],
        changeScreen:false,
        scheduledData:[]
    },
    reducers:{
        getReviewData:(state,action)=>{
            state.reviewData=action.payload.map((student:any)=>{
           return {studentId:student._id,name:student.firstName,lastName:student.lastName,batch:student.batch,currentWeek:student.currentWeek,domain:student.domain,reviewId:student._id}
            })
        },
        changeFrame:(state,action)=>{
            state.changeScreen=action.payload
        },
        getScheduledReviewData:(state,action)=>{
            state.scheduledData = action.payload.filter((data:any)=>{
                return data.reviewStatus == "scheduled"
            })
        }
    }
})


export const {getReviewData,changeFrame,getScheduledReviewData}=reviewSlice.actions
export default reviewSlice.reducer