
const ExtHead=()=>{
    return (
        <>
      <div className='mx-auto '>
  <table className="w-full text-sm text-left divide-y divide-y-8  table-auto table-fixed">
    <thead className="text-xs text-gray-700 uppercase bg-gray-300  dark:text-gray">
      <tr>
        <th scope="col" className="w-1/4 px-5 py-7 text-center rounded-l-md   ">
        Name
        </th>
        <th scope="col" className="w-1/4 px-5 py-7 text-center ">
       Batch
        </th>
        <th scope="col" className="w-1/4 px-5 py-7 text-center ">
        Week
        </th>
        <th scope="col" className="w-1/4 px-5 py-7 text-center ">
      Domain
        </th>
        <th scope="col" className="w-1/4 px-5 py-7 text-center ">
Date
        </th>
        <th scope="col" className="w-1/4 px-5 py-7 text-center ">
    Reason
        </th>
        <th scope="col" className="w-1/4 px-5 py-7 text-center  rounded-r-md ">
        Action
        </th>
       
      </tr>
    </thead>
  </table>
</div>

        </>
    )
}

export default ExtHead