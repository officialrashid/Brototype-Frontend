import { useState } from "react"
import ReqModal from "./ReqModal"
import ExtActionModal from "./ExtActionModal"
import ExtRejectModal from "./ExtActionModal"
import ExtApproveModal from "./ExtApproveModal"




const ExtRow=({extData})=>{
  
  const [reqModal,setReqModal]=useState(false)
  const [action,setActionModal]=useState(false)
  const [approve,setApprove]=useState(false)

  const rejectFn=()=>{

  }
  const approveFn=()=>{
    
  }

    return (
        <>
             <div className='mx-auto pt-2 mb-2 mt-2' >
  <table className="w-full text-sm text-left divide-y divide-y-8 table-fixed  rounded-full">
    <thead className="text-md text-gray-700 bg-gray-100  dark:text-gray-800 " >
      <tr className="   ">
        <th scope="col" className="w-1/4 px-4 py-6  text-center rounded-l-lg   " style={{ whiteSpace: 'normal',wordWrap: 'break-word',  textOverflow: 'ellipsis' }}>
sachin
        </th>
        <th scope="col" className="w-1/4 px-4 py-6 text-center">
            hello
       
        </th>
        <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal',wordWrap: 'break-word',  textOverflow: 'ellipsis' }}>
haiiii
            </th>
        <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal',wordWrap: 'break-word',  textOverflow: 'ellipsis' }}>
       what
        </th>
        <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal',wordWrap: 'break-word',  textOverflow: 'ellipsis' }}>
       what
        </th>
       
        <th scope="col" className="w-1/4 px-4 py-6 text-center ">
        <button className="bg-black text-white px-6 rounded-md  py-1" onClick={()=>{setReqModal(true)}}>View</button>
        </th>
        <th scope="col" className="w-1/4 px-4 py-6 text-center rounded-r-lg ">
        <button className="bg-black text-white px-4 rounded-md  py-1"  onClick={()=>{setApprove(true)}}>Approve</button>
        </th>
        <th scope="col" className="w-1/4 px-4 py-6 text-center rounded-r-lg ">
        <button className="bg-black text-white px-4 rounded-md  py-1"onClick={()=>{setActionModal(true)}}  >Reject</button>
        </th>
       
      </tr>
    </thead>
  </table>
</div>
     <ReqModal isVisible={reqModal} onClose={()=>{setReqModal(false)}}/>   
     <ExtRejectModal  isVisible={action} onClose={()=>{setActionModal(false)}} rejectFn={rejectFn}/>
     <ExtApproveModal isVisible={approve} onClose={()=>{setApprove(false)}} approveFn={approveFn}/>
        </>
    )
}

export default ExtRow