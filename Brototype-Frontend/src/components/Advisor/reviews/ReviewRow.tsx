import { useState } from "react"

import TaskUpdate from "../Scheduled/TaskUpdate"
import JaasMeet from "../jaasmeet/JaasMeet"
import { axiosInstance } from "../services/api/apiClient"
import { useDispatch } from "react-redux"
import { changeFrame } from "../../../redux-toolkit/reviewSlice"
import TaskView from "../Scheduled/TaskView"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ReviewRow = ({ reviewData }: { reviewData: any }) => {

  const [taskView, setTaskView] = useState(false)
  const [taskModal, setTaskModal] = useState(false)
  const [frame, setFrame] = useState(false)
  const[meetState,setMeetState]=useState(false)
  const createFullFrame = () => {

  }


  const handleToast = (message: any, error: any) => {
    if (!error) {
      toast.success(message, {
        position: 'top-center',
        autoClose: 3500
      });
      //setModal(false)
    }
    else {
      toast.error(message, {
        position: 'top-center',
        autoClose: 3000
      });



    }
  }

  const dispatch = useDispatch()

  const handleMeetLink = async () => {
    console.log('meet');
    
    setMeetState(true)

     //dispatch(changeFrame(true))

   // window.open('https://8x8.vc/vpaas-magic-cookie-40d1ade414824ac88ae740a12fcf994e/my-meet','_blank')

    //  try{
    //     const response=await   axiosInstance.get('/create-meet/1234')
    //     if(response){

    //         window.open('https://8x8.vc/vpaas-magic-cookie-40d1ade414824ac88ae740a12fcf994e/my-meet','_blank')

    //     }

    //  }catch(error){
    //     console.log(error);


    //  }
  }
  return (
    <>
    {
    console.log(reviewData,'reviewData')

    }
      {
       
        
      
      reviewData?.map((reviewData: any, index: number) => {
        return (
          <div className='mx-auto pt-2 mb-1 mt-' >
          <table className="w-full text-sm text-left divide-y divide-y-8 table-fixed  rounded-full">
            <thead className="text-md text-gray-700 bg-gray-100  dark:text-gray-800 " >
              <tr className="   ">

                <th scope="col" className="w-1/4 px-4 py-6  text-center rounded-l-lg   " style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>
                  {reviewData.name} {reviewData.lastName}
                </th>
                <th scope="col" className="w-1/4 px-4 py-6 text-center">
                  {reviewData.batch}

                </th>
                <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>
                  {reviewData.startTime}
                </th>
                <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>
                 {reviewData.domain}
                </th>
                <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>
                  {reviewData.scheduledDate}
                </th>
                <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>
                  <button className="bg-black text-white px-3 rounded-md  py-1" onClick={() => { setTaskView(true) }}>View</button>
                </th>
                <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>
                  <button className="bg-black text-white px-3 rounded-md  py-1" onClick={() => { setTaskModal(true) }}>Update</button>
                </th>

                <th scope="col" className="w-1/4 px-4 py-6 text-center rounded-r-lg ">
              <JaasMeet/>
                 
                </th>

                <th scope="col" className="w-1/4 px-4 py-6 text-center ">
                  <button className="bg-black text-white px-3 rounded-md  py-1">Cancel</button>
                </th>

              </tr>
            </thead>
          </table>
        </div>
        )
       
      })}
      <TaskView isVisible={taskView} onClose={() => { setTaskView(false) }} />

      <TaskUpdate isVisible={taskModal} onClose={() => { setTaskModal(false) }} handleToast={handleToast} />
      <ToastContainer />
    </>
  )
}

export default ReviewRow