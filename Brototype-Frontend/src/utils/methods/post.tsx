import fumigationApi from "../baseUrl/baseUrl";
import { AxiosResponse, AxiosError } from "axios";


//***********  fumigation service Api  **********/

interface EnquiryData {
  // Define the structure of the data parameter here
  name: string;
  email: string;
  phone: string;
  qualification: string;
  prefferredLocation: string;
}
interface invigilatorData {
  // Define the structure of the data parameter here
  name: string;
  email: string;
}
 
 
export const EnquiriesApi = async (data: EnquiryData): Promise<AxiosResponse> => {
    console.log(data,"==========");
    
  try {
    const response = await fumigationApi.post('/api/fumigation/enquery', data);
    return response;
  } catch (error) {
    console.error("Error in EnquiriesApi:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};

export const invigilatorLogin = async (data:invigilatorData): Promise<AxiosResponse> =>{
   
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
      console.log(email,"email in function comig");
      
      const response= await fumigationApi.post('/api/fumigation/invigilator-google-login',email)
      return response
    } catch (err){
      return {status:false,message:"Some issue in Google Sign in"}
    }
}