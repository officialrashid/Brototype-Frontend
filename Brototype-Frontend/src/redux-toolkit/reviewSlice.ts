import { createSlice } from "@reduxjs/toolkit";


const reviewSlice=createSlice({
    name:"reviews",
    initialState:{
        reviewData:[],
        changeScreen:false,
        scheduledData:[],
        extendReqData:[]
    },
    reducers:{
        getReviewData:(state,action)=>{
            console.log(action.payload,'reviewDatafifjsjofjsoj');
            
            state.reviewData=action.payload.map((student:any)=>{
                console.log(student,'studentsjnnfcccscs');
               
      
            return {studentId:student.studentId,name:student.name,batch:student.batch,currentWeek:student.currentWeek,domain:student.domain,reviewId:student._id,scheduledDate:student.scheduledDate,batchId:student.batchId,profileUrl:student.profileUrl}

        

                
                
            })
        },
        changeFrame:(state,action)=>{
            console.log(action.payload,"[[[[");
            
            state.changeScreen=action.payload
        },
        getScheduledReviewData:(state,action)=>{
            console.log(action.payload,'payload');
            
            state.scheduledData = action.payload.map((data:any)=>{
                return {name:data.name,scheduledDate:data.scheduledDate,batch:data.batch,reviewerId:data.reviewerId,reviewId:data._id,slotId:data.slotId,eventId:data.eventId,domain:data.domain,startTime:data.startTime,meetingLink:data.meetingLink,studentId:data.studentId,currentWeek:data.currentWeek}
            })
        },
        getExtendRequestData:(state,action)=>{
            state.extendReqData=action.payload.map((student:any)=>{
                console.log(student,'studentsjnnfcccscs');
                return {studentId:student.studentId,name:student.name,batch:student.batch,currentWeek:student.currentWeek,domain:student.domain,reviewId:student._id,scheduledDate:student.scheduledDate,batchId:student.batchId,profileUrl:student.profileUrl,extReqWeek:student.extReqWeek,extndReason:student.extendReason,extendDays:student.extendDays,extReqDate:student.extReqDate}

        

                
                
            })

        }
    }
})


export const {getReviewData,changeFrame,getScheduledReviewData,getExtendRequestData}=reviewSlice.actions
export default reviewSlice.reducer