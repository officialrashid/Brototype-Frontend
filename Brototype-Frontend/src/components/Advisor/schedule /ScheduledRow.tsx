import { useNavigate } from "react-router-dom"


const ScheduledRow=({reviewData})=>{


  const navigate=useNavigate()
    return (
        <>
{
  reviewData?.map((student)=>{
   return (
    <div className='mx-auto pt-2 mb-1 mt-2' >
    <table className="w-full text-sm text-left divide-y divide-y-8 table-fixed  rounded-full">
      <thead className="text-md text-gray-700 bg-gray-100  dark:text-gray-800 " >
        <tr className="   ">
    
          <th scope="col" className="w-1/4 px-4 py-6  text-center rounded-l-lg   " style={{ whiteSpace: 'normal',wordWrap: 'break-word',  textOverflow: 'ellipsis' }}>
        {student.name}
          </th>
          <th scope="col" className="w-1/4 px-4 py-6 text-center">
              {student.batch}
         
          </th>
          <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal',wordWrap: 'break-word',  textOverflow: 'ellipsis' }}>
 {student.currentWeek}
              </th>
          <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal',wordWrap: 'break-word',  textOverflow: 'ellipsis' }}>
          {student.domain}
          </th>
          <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal',wordWrap: 'break-word',  textOverflow: 'ellipsis' }}>
         what
          </th>
         
          <th scope="col" className="w-1/4 px-4 py-6 text-center ">
          <button className="bg-black text-white px-6 rounded-md  py-1">View</button>
          </th>
          <th scope="col" className="w-1/4 px-4 py-6 text-center rounded-r-lg ">
          <button className="bg-black text-white px-4 rounded-md  py-1"  onClick={()=>{navigate(`/advisor/schedule/domain-reviewer/${student.domain}`)}}>Schedule</button>
          </th>
         
        </tr>
      </thead>
    </table>
  </div>
   )
  })
}
        


        
        </>
    )
}


export default ScheduledRow