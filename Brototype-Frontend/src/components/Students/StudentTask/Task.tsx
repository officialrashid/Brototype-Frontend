import { useNavigate } from 'react-router-dom';
import { getReviewDetails } from '../../../utils/methods/get';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Task = () => {
  const studentId:any = useSelector((state: any) => state?.student?.studentData?.studentId);
  const batchId = "657aa5093476c843c28a377d";
  const navigate = useNavigate();
 const [taskView,setTaskView] = useState(false)
 useEffect(()=>{
  const fetchReviewDetails =async  ()=>{
    try {
      const data = {
        studentId,
        batchId
      };
      const response = await getReviewDetails(data);
      console.log(response,"response coming yarrr");
      
      if(response.status===true){
        setTaskView(response.response)
      }else{

      }
    } catch (error) {
      console.error("Error fetching review details:", error);
      // Handle the error, show a message, or take appropriate action
    }
  }
 fetchReviewDetails()
},[])

const handleViewTask = async (weekName: string) => {
  console.log(taskView);
  console.log(weekName);
  
  const foundWeek = taskView.find((data:any) => data.week === weekName);
   
  if (foundWeek && foundWeek.status === true && foundWeek.week !== 'week1') {
    navigate('/viewTask', { state: { weekName } });
  } else if (foundWeek && foundWeek.week === 'week1') {
    navigate('/viewTask', { state: { weekName } });
  } else {
    toast.warn("You're not eligible for this task");
  }
};



  const Mernstack = [
    {
      week1: [],
      week2: [],
      week3: [],
      week4: [],
      week5: [],
      week6: [],
      week7: [],
      week8: [],
      week9: [],
      week10: [],
      // Add more weeks as needed
    },
  ];

  return (
    <>
    {Mernstack.map((weeksObject, index) => (
      Object.keys(weeksObject).map((weekName, weekIndex) => {
        const isStatusTrue = Array.isArray(taskView) && (
          // For the first week, consider it as unlocked by default
          (weekIndex === 0) ||
          // For other weeks, check if there is a status for the current week
          taskView.some((item) => item.week === weekName && item.status)
        );

        return (
          <div key={index} className="ml-5 mr-5 mt-5 border border-gray-300 flex gap-4 h-fit rounded-2xl px-8 py-2 bg-white shadow-md">
            <div onClick={() => handleViewTask(weekName)}>
              <span className="font-roboto text-sm">{weekName}</span>
            </div>
            <div>
              {isStatusTrue ? (
                <img src="/padlock.png" alt="" className="w-5 h-5 item item-center ml-5" />
              ) : (
                <img src="/lock.png" alt="" className="w-5 h-5 item item-center ml-5" />
              )}
            </div>
          </div>
        );
      })
    ))}
  </>
  );
};

export default Task;
