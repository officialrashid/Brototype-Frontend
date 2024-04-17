import JaasMeet from "../jaasmeet/JaasMeet"
import { axiosInstance } from "../services/api/apiClient"


const ReviewRow=()=>{


    const handleMeetLink= async ()=>{

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
    return(
        <>
              <div className='mx-auto pt-2 mb-1 mt-2' >
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
        <button className="bg-black text-white px-6 rounded-md  py-1">View</button>
        </th>
        <th scope="col" className="w-1/4 px-4 py-6 text-center rounded-r-lg ">
        {/* <button className="bg-black text-white px-4 rounded-md  py-1"  onClick={()=>{handleMeetLink()}}>Start</button> */}
        <JaasMeet/>
        </th>
       
      </tr>
    </thead>
  </table>
</div>
        

        
        </>
    )
}

export default ReviewRow