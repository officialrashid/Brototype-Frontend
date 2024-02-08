import SearchBar from "../SearchBar"
import ScheduledHead from "./ScheduledHead"
import ScheduledRow from "./ScheduledRow"


const Scheduled=()=>{
    return (
        <>
      
         <div className="bg-white rounded-md max-h-full"> 
         
<div>
    jojfojejif
</div>
         
        <div className="ml-3  ">
            <div className="mb-3">
            <span className="font-bold text-xl mt-8">Reviews </span>
            </div>
        </div>

        <div className="m-3">
        <SearchBar/>
        </div>

             
        <div className="m-2">
        <ScheduledHead/>
        <ScheduledRow/>
        <ScheduledRow/>
        <ScheduledRow/>
        <ScheduledRow/>
        <ScheduledRow/>
        <ScheduledRow/>
        <ScheduledRow/>
       
            </div>
            <div className="m-2">
                <div></div>
            
        </div>
            </div>
       

  
     
        
        </>
    )
}

export default Scheduled