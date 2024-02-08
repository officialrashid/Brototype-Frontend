import ExtHead from "./ExtHead"
import ExtRow from "./ExtRow"


const ExtPage=()=>{
    return (
        <>
        <div className="bg-white rounded-md">
            
           
        <div className="m-4 mt-0">
            <span className="font-bold text-xl">Extend requests</span>
        </div>
        <div className="m-2 mt-6 ">
        <ExtHead/>
        <ExtRow/>
        <ExtRow/>
        <ExtRow/>
        <ExtRow/>

        </div>

        </div>
      
 
        
        </>
    )
}

export default ExtPage