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