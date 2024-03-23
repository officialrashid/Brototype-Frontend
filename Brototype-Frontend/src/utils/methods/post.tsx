import Api from "../baseUrl/baseUrl";
import { AxiosResponse } from "axios";
import studentApi from "../baseUrl/studentBaseUrl"

//***********  fumigation service Api  **********/
// Enquirie interface
interface EnquiryData {
  // Define the structure of the data parameter here
  name: string;
  email: string;
  phone: string;
  qualification: string;
  prefferredLocation: string;
}
// invigilators Interface
interface invigilatorLogin {
  // Define the structure of the data parameter here
  uniqueId: string;

}
interface studentLogin {
  // Define the structure of the data parameter here
  uniqueId: string;

}

interface invigilatorData {
   name: String,
   email:String,
   phone: Number,
   batch: String
}


// batch interface
 interface createBatch {
   batchName: string,
   hubLocation: string
 }

 //student interface
 interface updatePersonalDetails{

  dateOfBirth: string;
  age: string;
  email: string;
  gender: string;
  phone: string;
  fathersName: string;
  fathersContact: string;
  mothersName: string;
  mothersContact: string;

 }
 interface updateAddressDetails{
  houseName: string;
  village: string;
  taluk: string;
  district: string;
  state: string;
  pincode: string;
 }
 interface updateEducationDetails{
  highestQualification: string;
  yearOfPassing: string;
  passPercentage: string;
  schoolOrCollegeOrInstituteName: string;

 }
 //********* */ Enquirie Apis ***********////
export const EnquiriesApi = async (data: EnquiryData): Promise<AxiosResponse> => {
  try {
    const response = await Api.post('/api/fumigation/enquery', data);
    return response;
  } catch (error) {
    console.error("Error in EnquiriesApi:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};

// End Enquirie Apis


//***** */ Invigilator post Apis ******//
export const invigilatorLogin = async (data:invigilatorLogin): Promise<AxiosResponse> =>{
   
  try{

    const response = await Api.post('/api/fumigation/invigilator-login',data);
    return response
  } catch(error){
    console.log("Error in the invigilatorLogin",error);
    throw error;  
  }

}

export const invigilatorGoogleLogin = async (email:string)=>{
    try{
      const response= await Api.post('/api/fumigation/invigilator-google-login',email)
      return response
    } catch (err){
      return {status:false,message:"Some issue in Google Sign in"}
    }
}
export const createInvigilator = async (data:invigilatorData)=>{
  try{
    const response = await Api.post('/api/fumigation/create-invigilator',data)
    return response;
  } catch(err){
    return {status:false,message:"Some issue in createInvigilator"}
  }
}
//***// End INvigilator Api */


///****** Batch Apis *****//

export const createBatch = async (data:createBatch)=>{
    
  try{
     const response = await Api.post('/api/fumigation/create-batch',data)
     return response
  } catch(err){
    return {status:false,message:"Some isuues in Create Batch"}
  }

}

///***Student-servcie Post Apis */

export const updatePersonalDetails = async (data:updatePersonalDetails,studentId:string)=>{
    try {
      const personalData = {
         data,
         studentId
      }
      console.log(personalData,"personalData");
      
      const resposne = await Api.post('/api/student/update-personal-details',personalData)
      return resposne;
    } catch(err){
      return {status:false,message:"some issue in personal deatils update"}
    }
}

export const updateAddressDetails = async (data:updateAddressDetails,studentId:string)=>{
  try {
    const addressData = {
         data,
         studentId
    }
   const resposne = await Api.post('/api/student/update-address-details',addressData)
   return resposne
  } catch(err){
    return {status:false,message:"some issue in the Address details update"}
  }

}
export const updateEducationDetails = async (data:updateEducationDetails,studentId:string)=>{
  try {
    const educationData = {
         data,
         studentId
    }
   const resposne = await Api.post('/api/student/update-education-details',educationData)
   return resposne
  } catch(err){
    return {status:false,message:"some issue in the Address details update"}
  }

}
export const requestExtention = async (data:any)=>{
  try {
   const resposne = await Api.post('/api/student/request-extention',data)
   return resposne
  } catch(err){
    return {status:false,message:"some issue in the Address details update"}
  }

}
export const studentLogin = async (data:studentLogin) :Promise<AxiosResponse> =>{
   console.log(data,"dATAAAA");
   
  try{

    const response = await Api.post('/api/auth/student-login',data);
    return response
  } catch(error){
    console.log("Error in the Student Login",error);
    throw error;  
  }

}
export const secondExtendRequest = async (extendId:string)=>{

 try{
   

   const response = await Api.post(`/api/student/second-extend-request/${extendId}`,);

   return response
 } catch(error){
   console.log("Error in the Student Login",error);
   throw error;  
 }

}
export const updateGovernmentApprovedId = async (data:any)=>{
  try {
    console.log(data,"gevernmrntId comngggg");
  
   const resposne = await Api.post('/api/student/update-governmentId',data)
   return resposne
  } catch(err){
    return {status:false,message:"some issue in the Address details update"}
  }

}

///// ****** reviewer-sevice post datas api section /////
export const createEvents = async (data:any)=>{
  try {
   const resposne = await Api.post('/api/reviewer/schedule-event',data)
   return resposne
  } catch(err){
    return {status:false,message:"some issue in the Address details update"}
  }


}
export const reviewerLogin = async (data:any)=>{
  try {
   const resposne = await Api.post('/api/auth/reviewer-login',data)
   return resposne
  } catch(err){
    return {status:false,message:"some issue in the Address details update"}
  }


}
export const updateReviewerWorkDetails = async (data:any,reviewerId:string)=>{
  try {
    const workData = {
      data,
      reviewerId
 }
   const resposne = await Api.post('/api/reviewer/update-work-details',workData)
   return resposne
  } catch(err){
    return {status:false,message:"some issue in the Address details update"}
  }


}

//// ******* task service ********///
export const updatePersonalWorkout = async (data:any)=>{
  console.log(data,"datasssssssss234343433");
  
  try {
   const resposne = await Api.post('/api/task/update-personal-workout',data)
   return resposne.data
  } catch(err){
    return {status:false,message:"some issue in task  pdate"}
  }


}
export const updateTechnicalWorkout = async (data:any)=>{
  try {
   const resposne = await Api.post('/api/task/update-technical-workout',data)
   return resposne.data
  } catch(err){
    return {status:false,message:"some issue in task  pdate"}
  }


}
export const updateMiscellaneousWorkout = async (data:any)=>{
  try {
   const resposne = await Api.post('/api/task/update-miscellaneous-workout',data)
   return resposne.data
  } catch(err){
    return {status:false,message:"some issue in task  pdate"}
  }


}

/// ******* superlead post method section *****///
export const superleadLogin = async (data:any)=>{
  console.log(data,"data uniqueId in superlEadsss");
  
  try {
   const resposne = await Api.post('/api/auth/superlead-login',data)
   return resposne
  } catch(err){
    return {status:false,message:"some issue in the Address details update"}
  }


}
export const addReviewers = async (data:any)=>{

  try {
   const resposne = await studentApi.post('/api/auth/add-reviewer',data)
   return resposne?.data
  } catch(err){
    return {status:false,message:"some issue in the add Reviewer"}
  }


}
export const addStudents = async (data:any)=>{

  try {
   const resposne = await studentApi.post('/api/auth/add-student',data)
   return resposne?.data
  } catch(err){
    return {status:false,message:"some issue in the add Reviewer"}
  }


}
export const addAdvisors = async (data:any)=>{

  try {
   const resposne = await studentApi.post('/api/auth/add-advisor',data)
   return resposne?.data
  } catch(err){
    return {status:false,message:"some issue in the add Reviewer"}
  }


}


////// POST METHOD FOR CHAT AND VIDEO SERVICES //////


export const createChat = async (data:any)=>{
  console.log(data,"dataaaaa");
  

  try {
   const resposne = await Api.post('/api/chat-and-video/create-chat',data)
   return resposne?.data
  } catch(err){
    return {status:false,message:"some issue in the add Reviewer"}
  }


}
export const sendMessage = async (data:any)=>{

  try {
   const resposne = await Api.post('/api/chat-and-video/send-message',data)
   return resposne?.data
  } catch(err){
    return {status:false,message:"some issue in the add Reviewer"}
  }


}

export const createActivityEvents = async (data:any)=>{
console.log(data,"superlead eventsss");

  try {
   const resposne = await Api.post('/api/superlead/create-activity-event',data)
   return resposne?.data
  } catch(err){
    return {status:false,message:"some issue in the add Reviewer"}
  }


}

export const storeChatAudio = async (data:any)=>{
  console.log(data,"superlead eventsss");
  
    try {
     const resposne = await Api.post('/api/chat-and-video/store-chat-audio',data)
     return resposne?.data
    } catch(err){
      return {status:false,message:"some issue in the add Reviewer"}
    }
  
  
  }
  export const storeChatImage = async (data:any)=>{
    console.log(data,"superlead eventsss");
    
      try {
       const resposne = await Api.post('/api/chat-and-video/store-chat-image',data)
       return resposne?.data
      } catch(err){
        return {status:false,message:"some issue in the add Reviewer"}
      }
    
    
    }
    export const storeChatVideo = async (data:any)=>{
      console.log(data,"superlead eventsss");
      
        try {
         const resposne = await Api.post('/api/chat-and-video/store-chat-video',data)
         return resposne?.data
        } catch(err){
          return {status:false,message:"some issue in the add Reviewer"}
        }
      
      
      }
      export const storeChatDocument = async (data:any)=>{
        console.log(data,"superlead eventsss");
        
          try {
           const resposne = await Api.post('/api/chat-and-video/store-chat-document',data)
           return resposne?.data
          } catch(err){
            return {status:false,message:"some issue in the add Reviewer"}
          }
        
        
        }
      