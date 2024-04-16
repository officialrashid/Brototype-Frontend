import AllSearchTab from "../../../components/Admin/AllSearchTab"
import EnquiryHead from "../../../components/Admin/enquiries/EnquiryHead"
import EnquiryRow from "../../../components/Admin/enquiries/EnquiryRow"


const EnquiryComp=()=>{

    let buttonContent=''
    return (
        <>
           <div className="bg-white rounded-md h-fit mt"> 
         <div className="">
  
</div>
         
        <div className="ml-3  ">
            <div className="mb-3 ">
            <span className="font-bold text-xl mt-8">Enquiries</span>
            </div>
        </div>
        <div className="m-3">
        <AllSearchTab content={buttonContent}/>
        </div>
         <div className="m-2 mt-4 ">
        <EnquiryHead/>
        <EnquiryRow/>
        </div>
        </div>

        
        </>
    )
}

export default EnquiryComp