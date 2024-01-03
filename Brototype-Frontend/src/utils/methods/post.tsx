import Api from "../baseUrl/baseUrl";
import { AxiosResponse } from "axios";


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
  firstName: string;
  lastName: string;
  middleName: string;
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

//// ******* task service ********///
export const updatePersonalWorkout = async (data:any)=>{
  try {
   const resposne = await Api.post('/api/task/update-personal-workout',data)
   return resposne.data
  } catch(err){
    return {status:false,message:"some issue in task  pdate"}
  }


}


