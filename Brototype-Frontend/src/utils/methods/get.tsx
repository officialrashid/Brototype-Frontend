import fumigationApi from "../baseUrl/baseUrl";

////********   get enquirie methods  *****////

export const getEnquiryStudents = async () => {
  
    
  try {
    const response = await fumigationApi.get('/api/fumigation/getEnquery');
    return response;
  } catch (error) {
    console.error("Error in getEnquiriesApi:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};
// get enquirie methods end //


//***** */ get invigilators methods *****//
