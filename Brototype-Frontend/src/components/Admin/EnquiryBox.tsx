import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCompanyData } from "../../redux-toolkit/companySlice"


const EnquiryBox =()=>{

  const dispatch=useDispatch()
   const count= useSelector(state=>state.companyReducer.companyData)

   console.log(count,'selecroooooo');
   
  // useEffect(()=>{
  
  // try{
  //   const companyData=async  ()=>{
  //     // const data =await getCompanyData()
  //     //  console.log(data,'in-component');
  //     //   dispatch(getCompanyData(data.data))
  //   }  

  //   companyData()
   
   
   
  // }
  // catch(error){
  //   throw error

  // }
  // },[])

return(

    <>
      <div className="border w-1/4 rounded-md m-2 bg-white mr-0 ">

<div className="flex gap-6 m-2 mr-0">
   <div className="border flex items-center justify-center h-10 w-10  mt- rounded-md">
     <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className="w-6 h-6">
<path  stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

</div>
<div>
   <div >
    <span className="font-bold">{count[0]?.placementCount}</span>
  </div>
  <div>
    <span className="font-semibold">Enquiries</span>
  </div>
</div>

</div>


</div>
    
    </>
)

}

export default EnquiryBox