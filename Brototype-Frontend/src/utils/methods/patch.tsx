///// **********   //////

import Api from "../baseUrl/baseUrl"

export const updateEvents = async (data:any)=>{
    console.log(data,")()((&&&&&&&&");
    
    try {
     const resposne = await Api.patch('/api/reviewer/update-event',data)
     return resposne.data
    } catch(err){
      return {status:false,message:"some issue in the Address details update"}
    }
  
  }