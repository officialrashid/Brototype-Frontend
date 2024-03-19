///// ****** reviewer delete api section ////

import Api from "../baseUrl/baseUrl"

export const deleteEvents = async (data: {id: string; reviewerId: string;})=>{
    console.log(data,")()((&&&&&&&&");
    
    try {
     const resposne = await Api.delete('/api/reviewer/delete-event',{ params: data })
     return resposne.data
    } catch(err){
      return {status:false,message:"some issue in the Address details update"}
    }
  
  }
  export const deleteActivityEvents = async (data: {id: string; superleadId: string;})=>{
    console.log(data,")()((&&&&&&&&");
    
    try {
     const resposne = await Api.delete('/api/superlead/delete-activity-event',{ params: data })
     return resposne.data
    } catch(err){
      return {status:false,message:"some issue in the Address details update"}
    }
  
  }

  