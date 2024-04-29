import ReviewRow from "./ReviewRow"
import ReviewHead from "./ReviewHead"
import ReviewSearchBar from "../schedule /RevieSearchBar"
import { useState } from "react"


const Review=()=>{

    //const  scheduledReviewDatas=useSelector(state=>state?.review?.reviewData)
    const scheduledReviewDatas:any=[]
    const [filteredData,setFilteredData]=useState(scheduledReviewDatas)
    const searchFn=(searInp:string)=>{

        console.log(searInp,'hellloo');

       const searchData=scheduledReviewDatas.filter((data:any)=>
     {
        console.log(data.name);
        
         return    data.name.toLowerCase().includes(searInp.toLowerCase())

        }
           
        
        
    )
       setFilteredData(searchData) 


    }

    return (
        <>
    <ReviewSearchBar searchFn={searchFn} />
        <ReviewHead/>
        { <ReviewRow reviewData={filteredData}/>}
        </>
    )
}



export default Review