///// **********   //////

import Api from "../baseUrl/baseUrl"
import studentApi from "../baseUrl/studentBaseUrl"
export const updateEvents = async (data:any)=>{
    console.log(data,")()((&&&&&&&&");
    
    try {
     const resposne = await Api.patch('/api/reviewer/update-event',data)
     return resposne.data
    } catch(err){
      return {status:false,message:"some issue in the Address details update"}
    }
  
  }
  export const updateStudentStatus = async (data:any)=>{
    try {
     const resposne = await Api.patch('/api/auth/update-student-status',data)
     return resposne?.data?.response
    } catch(err){
      return {status:false,message:"some issue in the Address details update"}
    }
  
  }
  export const updateReviewerStatus = async (data:any)=>{
    try {
     const resposne = await studentApi.patch('/api/auth/update-reviewer-status',data)
     return resposne?.data?.response
    } catch(err){
      return {status:false,message:"some issue in the Address details update"}
    }
  
  }
  export const updatePlacedStatus = async (data:any)=>{
    try {
     const resposne = await Api.patch('/api/auth/update-student-placed-status',data)
     return resposne?.data?.response
    } catch(err){
      return {status:false,message:"some issue in the Address details update"}
    }
  
  }
  export const updateSuperleadProfile = async (data:any)=>{
    console.log(data,"data in patchssss");
    
    try {
     const resposne = await Api.patch('/api/superlead/update-superlead-profile',data)
     return resposne?.data
    } catch(err){
      return {status:false,message:"some issue in the Address details update"}
    }
  
  }

  
  
  