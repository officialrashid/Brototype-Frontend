import { useEffect, useState } from "react";
import ExtendModal from "../Extend/ExtendModal";
import ReactGA from 'react-ga';
import { useSelector } from "react-redux";
import { getAdvisorDetails, getRequestExtendDetails, getStudentReview } from "../../../utils/methods/get";
import { updateMeetUrl } from "../../../utils/methods/patch";
const UpcomingReviews = () => {
  const studentId: string = useSelector((state: any) => state?.student?.studentData?.studentId);
  const [extendRequests, setExtendRequests] = useState([])
  const [newRequest, setNewRequets] = useState(false)
  const [studentReview,setStudentReview] = useState({})
  useEffect(() => {
    console.log("keriyannuuuuu");
    ReactGA.pageview(window.location.pathname);
  }, []);

  const trackreview = (selectedWeek: string) => {
    // Track a custom event when a week is selected
    ReactGA.event({
      category: 'Weekly Performance Graph',
      action: 'Week Selected',
      label: selectedWeek,
      value: 1
    });

    console.log("afterrrr");


  };

  useEffect(() => {
    const fetchExtendDetails = async () => {
      try {
        const response = await getRequestExtendDetails(studentId);
        if (response) {
          console.log(response.response, "upcoming review extend deatils");

          setExtendRequests(response.response);
        } else {

        }
      } catch (err) {
        console.error("Error fetching extension details:", err);

      }
    };

    fetchExtendDetails();
  }, []);

  useEffect(() => {
    const fetchStudentReview = async () => {
      try {
        const combinedData:any = [];
        const response = await getStudentReview(studentId)
        console.log(response,"+++++++++++???????????????000000?????????");
        // for (const data of response) {
          // Fetch advisor details for each review
          const advisorDetails = await getAdvisorDetails(response.coordinatorId);
          if (advisorDetails.status === true && advisorDetails.response.length > 0) {
            // Combine review data with advisor details
            console.log("kidannittillaaaaaaaaa");
            
            const reviewData = {
              response,
              advisorName: `${advisorDetails.response[0].firstName} ${advisorDetails.response[0].lastName}`,
              phone: advisorDetails.response[0].phone
            };
            // Push the combined data to the array
            console.log(combinedData,"PPPPPPP99*&^^%%5555555####");
            
            combinedData.push(reviewData);
          }
        // }
        setStudentReview(combinedData)
      } catch (error) {

      }
    }
    fetchStudentReview()
  },[])
  
  const handleMeetStart = async (advisorId:string,reviewId:string,meetingUrl:string) =>{
    const response = await updateMeetUrl(advisorId,reviewId,meetingUrl)
}
  return (
    <>
      <div className="border m-5 h-fit rounded-xl shadow-sm bg-white">
        <ExtendModal isVisible={newRequest} isClose={() => { setNewRequets(false) }} />
        {/* <div className="flex m-2 gap-2">

          <div className="px-4  border border-2px rounded-md hover:bg-custom-background py-1 cursor-pointer font-roboto"><span className="text-center
    " onClick={() => trackreview('week1')}> Upcoming</span></div>
          <div className="px-4  border  border-2px rounded-md cursor-pointer  hover:bg-custom-background  py-1 font-roboto "><span className="text-center
    "> Re-scheduled</span></div>
          <div className="px-4  border border-2px rounded-md hover:bg-custom-background  py-1 cursor-pointer font-roboto"><span className="text-center
    "> Postponded</span></div>
          <div className="px-4  border border-2px rounded-md hover:bg-custom-background  py-1 cursor-pointer font-roboto"><span className="text-center
    "> Cancelled</span></div>




        </div> */}
        <div className='mx-auto p-2 mt-4 '>
          <table className="w-full text-sm text-left  table-fixed">
            <thead className="text-xs text-gray-700 uppercase bg-custom-background shadow-xl dark:text-gray font-roboto">
              <tr>
                <th scope="col" className="w-1/4 px-5 py-6 text-center  rounded-s-md">
                  Week
                </th>
                <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                  Date
                </th>
                <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                  StartTime
                </th>
                <th scope="col" className="w-1/4 px-5 py-6  text-center">
                  Advisor
                </th>
                <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                  contact
                </th>
                <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                  Chat
                </th>
                <th scope="col" className="w-1/4 px-5 py-6 text-center">
                  Extend
                </th>
                <th scope="col" className="w-1/4 px-5 py-6 text-center rounded-e-md ">
                  Status
                </th>

              </tr>
            </thead>
          </table>
        </div>
        
        <div className='mx-auto p-2 mb-2 '>
          <table className="w-full text-sm text-left divide-y divide-y-8 border table-fixed border-gray-400 rounded-md font-roboto ">
            <thead className="text-md text-gray-700 bg-gray-100 shadow-2xl dark:text-gray-800">
              <tr className="">
                <th scope="col" className="w-1/4 px-4 py-6  text-center " style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>Week 1

                </th>
                <th scope="col" className="w-1/4 px-4 py-6 text-center">{studentReview[0]?.response?.reviews?.scheduledDate}

                </th>
                <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>
                  {studentReview[0]?.response?.reviews?.startTime}

                </th>
                <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>{studentReview[0]?.advisorName}

                </th>
                <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>{studentReview[0]?.phone}

                </th>
                <th scope="col" className="w-1/4 px-4 py-6 text-center ">
                  <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer"onClick={(()=>handleMeetStart(data?.data?.advisorId,data?.data?.reviewId,data.data.meetingUrl))}>Join Meet</span>
                </th>
                <th scope="col" className="w-1/4 px-4 py-6 text-center">
                  {!extendRequests.some(item => item.currentWeek === "week6" && item.requestCount === 1 || item.requestCount === 2) ? (
                    <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer" onClick={() => { setNewRequets(true) }}>Request</span>
                  ) : "---"}
                </th>


                <th scope="col" className="w-1/4 px-4 py-6 text-center  ">
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">Completed</span>
                </th>

              </tr>
            </thead>
          </table>
        </div>



      </div>

    </>

  );
}

export default UpcomingReviews;




