import fumigationApi from "../baseUrl/baseUrl";
import { AxiosResponse, AxiosError } from "axios";


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
 //********* */ Enquirie Apis ***********////
export const EnquiriesApi = async (data: EnquiryData): Promise<AxiosResponse> => {
  try {
    const response = await fumigationApi.post('/api/fumigation/enquery', data);
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

    const response = await fumigationApi.post('/api/fumigation/invigilator-login',data);
    return response
  } catch(error){
    console.log("Error in the invigilatorLogin",error);
    throw error;  
  }

}

export const invigilatorGoogleLogin = async (email:string)=>{
    try{
      const response= await fumigationApi.post('/api/fumigation/invigilator-google-login',email)
      return response
    } catch (err){
      return {status:false,message:"Some issue in Google Sign in"}
    }
}
export const createInvigilator = async (data:invigilatorData)=>{
  try{
    const response = await fumigationApi.post('/api/fumigation/create-invigilator',data)
    return response;
  } catch(err){
    return {status:false,message:"Some issue in createInvigilator"}
  }
}
//***// End INvigilator Api */


///****** Batch Apis *****//

export const createBatch = async (data:createBatch)=>{
    
  try{
     const response = await fumigationApi.post('/api/fumigation/create-batch',data)
     return response
  } catch(err){
    return {status:false,message:"Some isuues in Create Batch"}
  }

}