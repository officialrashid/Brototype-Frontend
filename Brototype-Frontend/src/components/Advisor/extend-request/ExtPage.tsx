import SearchBar from "../components/SearchBar"
import ExtHead from "./ExtHead"
import ExtRow from "./ExtRow"


const ExtPage=()=>{
    return (
        <>
       
        <div className="m-2 mt-0">
        <SearchBar/>
        </div>
        <div className="m-2 mt-6 ">
        <ExtHead/>
        <ExtRow/>
        <ExtRow/>
        <ExtRow/>
        <ExtRow/>
        <ExtRow/>
        <ExtRow/>
        <ExtRow/>
  
     

        </div>

  
      
 
        
        </>
    )
}

export default ExtPage