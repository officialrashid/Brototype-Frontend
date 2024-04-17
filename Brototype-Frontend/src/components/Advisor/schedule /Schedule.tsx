import SearchBar from "../components/SearchBar"
import ScheduledHead from "./ScheduledHead"
import ScheduledRow from "./ScheduledRow"


const Scheduled=()=>{
    return (
        <>
      

         

         
        

        <div className="m-2 mt-0">
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
          
       

  
     
        
        </>
    )
}

export default Scheduled