import { useEffect } from "react"
import SearchBar from "../components/SearchBar"
import ScheduledHead from "./ScheduledHead"
import ScheduledRow from "./ScheduledRow"
import axios from "axios"
import Api from "../../../utils/baseUrl/reviewerBaseUrl"
import { getReviewData } from "../../../redux-toolkit/reviewSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux-toolkit/store"

const Scheduled=()=>{

    const  reviewDatas=useSelector(state=>state?.review?.reviewData)
    const advisorId:any = useSelector((state: RootState) => state?.advisor?.advisorData?.advisorId);
    console.log(reviewDatas,'/////');
    console.log(advisorId,"oooooo*******");
    
const dispatch=useDispatch()
    useEffect(()=>{
   const   getStudentDetails=async ()=>{
        const studentData=await axios.get(`http://localhost:6001/review/assigned-reviews/${advisorId}`)

       dispatch (getReviewData(studentData.data))

        console.log(studentData,'studeny');
        

     }

getStudentDetails()

    },[])
    return (
        <>
      

         

         
        

        <div className="m-2 mt-0">
        <SearchBar/>
        </div>

             
        <div className="m-2">
        <ScheduledHead/>
        <ScheduledRow reviewData={reviewDatas}/>
  
            </div>
            <div className="m-2">
                <div></div>
            
        </div>
          
       

  
     
        
        </>
    )
}

export default Scheduled