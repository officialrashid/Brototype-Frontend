import Api from "../baseUrl/baseUrl";

////********   get enquirie methods  *****////

export const getEnquiryStudents = async () => {
  
    
  try {
    const response = await Api.get('/api/fumigation/getEnquery');
    return response;
  } catch (error) {
    console.error("Error in getEnquiriesApi:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};
// get enquirie methods end //


//***** */ get Students methods *****//

export const getProfile = async (studentId: string) => {
  try {
    const response = await Api.get(`/api/student/get-profile/${studentId}`);
    console.log(response,"response i api fetch place");
    return response;
  } catch (err) {
    return { status: false, message: "There is some issue in fetching the profile" };
  }
};
