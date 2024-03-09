import { LayoutGroup } from "framer-motion";
import Api from "../baseUrl/baseUrl";
import studentApi from "../baseUrl/studentBaseUrl"
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
    const response = await studentApi.get(`/api/student/get-profile/${studentId}`);
    console.log(response, "response i api fetch place");
    return response;
  } catch (err) {
    return { status: false, message: "There is some issue in fetching the profile" };
  }

};
export const getBestFiveStudents = async (batchId: string) => {
  try {
    const response = await studentApi.get(`/api/student/get-best-students/${batchId}`);
    return response;
  } catch (err) {
    return { status: false, message: "There is some issue in " }
  }
}
// Frontend
export const getWeeklyPerformance = async (data: {
  batchId: string; studentId: string;
  ////********   get enquirie methods  *****////
  selectWeek: string;
}) => {
  try {
    console.log(data, "::::::;;;;;;;;");
    const response = await studentApi.get(`/api/student/get-weekly-performance`, { params: data });
    return response.data; // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}
export const getCourseCompletion = async (data: { batchId: string; studentId: string; }) => {
  try {
    console.log(data, "::::::;;;;;;;;");
    const response = await studentApi.get(`/api/student/get-course-completion`, { params: data });
    return response.data; // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}
export const getAllPerformance = async (data: { batchId: string; studentId: string; }) => {
  try {
    console.log(data, "::::::;;;;;;;;");
    const response = await studentApi.get(`/api/student/get-all-performance`, { params: data });
    return response.data; // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}
export const getExtendDetails = async (data: { batchId: string; studentId: string; }) => {
  try {
    console.log(data, "::::::;;;;;;;;");
    const response = await studentApi.get(`/api/student/get-extend-details`, { params: data });
    return response.data; // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}
export const getRequestExtendDetails = async (studentId: string) => {
  try {

    const response = await studentApi.get(`/api/student/get-request-extend/${studentId}`);
    return response.data; // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}
export const getReviewDetails = async (data: { batchId: string; studentId: string; }) => {
  try {

    const response = await studentApi.get(`/api/student/get-review-details`, { params: data });
    return response.data; // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}


////****** get methods for reviewer sectiob */
export const getScheduleEvents = async (reviewerId: string) => {
  try {

    const response = await Api.get(`/api/reviewer/get-schedule-events/${reviewerId}`);
    return response.data; // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}
export const getTimeLineUp = async (data: { reviewerId: string; dayTimeLine: string; }) => {
  try {

    const response = await Api.get(`/api/reviewer/get-day-timeLine`, { params: data });
    console.log(response, "resposne get metho");
    if (response.data.sortedResponse) {
      return response.data.sortedResponse;
    } else {
      return response.data
    }
    // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}
export const getReviewerDetails = async (reviewerId: string) => {
  try {

    const response = await Api.get(`/api/reviewer/get-reviewer-details/${reviewerId}`);
    return response.data; // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}
export const getReviewerProfile = async (reviewerId: string) => {
  try {

    const response = await Api.get(`/api/reviewer/get-reviewer-profile/${reviewerId}`);
    return response.data; // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}
export const getReviewTakeCount = async (reviewerId: string) => {
  try {

    const response = await Api.get(`/api/reviewer/review-take-count/${reviewerId}`);
    return response?.data?.response; // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}

//// **** Get Method for Task Service ///

export const getUpdateTask = async (studentId: string) => {


  try {

    const response = await Api.get(`/api/task/get-update-task/${studentId}`);
    return response?.data?.response; // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}
export const getEditTaskDetails = async (data: { studentId: string, mainQuestionNumber: number, taskType: string, weekName: string }) => {


  try {

    const response = await Api.get(`/api/task/get-edit-task-details`, { params: data });
    return response?.data?.response; // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}

export const getPersonalWorkout = async (week: string) => {
  try {
    const response = await Api.get(`/api/task/get-personalWorkout-task/${week}`);
    return response?.data?.response; // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}
export const getmiscellaneousWorkout = async (week: string) => {
  try {
    const response = await Api.get(`/api/task/get-miscellaneousWorkout-task/${week}`);
    return response?.data?.response; // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}

export const getTechnicalWorkout = async (data:any) => {
  console.log(data,"opp987686877======");
  
  try {
    const response = await Api.get(`/api/task/get-technicalWorkout-task`,{ params: data });
    return response?.data?.response; // Assuming your API response has a 'data' property
  } catch (err) {
    return { status: false, message: "There is some issue" };
  }
}

//// ****** Get Api For Superleads ******* ///////


export const getStudents = async (data:{superleadUniqueId:string,currentPage:number}) =>{
  
   
   try {
      const response = await studentApi.get(`/api/student/get-all-students`,{params:data})
      return response?.data;
   } catch (error) {
    
   }

}
export const getStudentStatus = async (data:{superleadUniqueId:string,currentPage:number}) =>{

  
  try {
     const response = await Api.get(`/api/auth/get-all-students-status`,{params:data})
     return response?.data;
  } catch (error) {
   
  }

}
export const getHubWiseStudentsDetails = async (uniqueId:string) =>{
  try {
     const response = await Api.get(`/api/auth/get-hubwise-students-details/${uniqueId}`)
     return response?.data;
  } catch (error) {
   
  }

}
export const getAllReviewers = async (currentPage:number) =>{
  try {
     const response = await Api.get(`/api/reviewer/get-all-reviewers-profile/${currentPage}`)
     return response?.data?.response;
  } catch (error) {
   
  }

}
export const getReviewerStatus = async () =>{
  try {
     const response = await studentApi.get(`/api/auth/get-all-reviewers-status`)
     return response?.data;
  } catch (error) {
   
  }

}
export const getAllFumigationStudents = async (data:{hubLocation:string,currentPage:number}) =>{
 
  try {
   
     const response = await studentApi.get(`/api/fumigation/get-all-fumigation-students`,{params:data})
     return response?.data?.response;
  } catch (error) {
   
  }

}
export const getSuperleadHubLocation = async (uniqueId:string) =>{
 
  try {
     const response = await Api.get(`/api/auth/get-superlead-hub-location/${uniqueId}`)
     return response?.data?.response;
  } catch (error) {
   
  }

}
export const getBestReviewers = async () =>{
 
  try {
     const response = await Api.get(`/api/reviewer/get-best-reviewers`)
     return response?.data;
  } catch (error) {
   
  }

}
export const getReviewCountAnalyze = async () =>{
 
  try {
     const response = await Api.get(`/api/reviewer/get-review-count-analyze`)
     return response?.data?.response;
  } catch (error) {
   
  }

}
export const getStudentsAndPlacedStudents = async (uniqueId:string) =>{
 
  try {
     const response = await studentApi.get(`/api/auth/get-students-and-placed-students/${uniqueId}`)
     return response?.data;
  } catch (error) {
   
  }

}
export const getSuperleadProfile = async (superleadId:string) =>{
 
  try {
     const response = await Api.get(`/api/superlead/get-superlead-profile/${superleadId}`)
     return response?.data;
  } catch (error) {
   
  }

}
export const getPerPageStudents = async (data:{superleadUniqueId:string,perPage:number}) =>{
 console.log(data,"sbsbfnsdsvghdvsghfshfhsfvsfsvsfgs");
 
  try {
     const response = await studentApi.get(`/api/student/get-per-page-students`,{params:data})
     return response?.data;
  } catch (error) {
   
  }

}
export const getPerPageStudentStatus = async (data:{superleadUniqueId:string,perPage:number}) =>{

   try {
      const response = await Api.get(`/api/auth/get-per-page-students-status`,{params:data})
      return response?.data;
   } catch (error) {
    
   }
 
 }
 export const getPerPageReviewers = async (perPage:number) =>{

  try {
     const response = await Api.get(`/api/reviewer/get-per-page-reviewers/${perPage}`,)
     return response?.data?.response;
  } catch (error) {
   
  }

}
export const getPerPageFumiagtionStudents = async (data:{hubLocation:string,selectedPerPage:number}) =>{

  try {
     const response = await studentApi.get(`/api/fumigation/get-per-page-students`,{params:data})
     return response?.data?.response;
  } catch (error) {
   
  }

}
 
