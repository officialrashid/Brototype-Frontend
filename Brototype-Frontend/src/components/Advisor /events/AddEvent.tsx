import { useState } from "react"
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import "react-datepicker/dist/react-datepicker.css"

const AddEvent=({isVisible,onClose})=>{
  const [value, onChange] = useState('10:00')

      const [startDate,setStartDate]=useState(new Date())
    if(!isVisible) return null
    return (
        <>
               <div className="fixed inset-0 bg-opacity-10   bg-black/60 flex justify-center items-center   overflow-y-scroll overflow-hidden z-40 ">
        <div className="border border-2px rounded-md w-1/2 m-10 bg-white  ">
  <div className="flex justify-between m-7 mt-5 ml-6 mb-3">
     <div className="">
     <span className="text-xl"> New Event</span>
   </div>
  
   <div onClick={()=>{onClose()}} className="cursor-pointer   items-center flex justify-center">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:h-8 w-8   hover:rounded-full hover:bg-gray-200">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>


   </div>

  </div>
  <div className="border-t "></div>
  

  <div className="m-3 ml-6">
    <div className="mt-2">
      <div className="mb-2">
        <span className="text-gray-500">Event Type</span>

      </div>
       

<input type="text " className=" w-full mb-2 border border-2px py-3 px-2 rounded-md outline-black" placeholder="Enter your event type...."/>

    </div>
    <div className="mt-2">
      <div className="mb-2">
        <span className="text-gray-500">Event Platform</span>

      </div>
       

<input type="text " className=" w-full mb-2 border border-2px py-3  px-2 rounded-md outline-black" placeholder="Enter your event platform...."/>

    </div>
    <div className="mt-2  ">
     
     
       
{/* 
<input type="text " className=" w-full mb-2 border border-2px py-3  px-2 rounded-md outline-black" placeholder="Enter your event time...."/> */}
<div>
  <div className="flex gap-2">
  <div>
    <div>
    <span className="text-gray-500 ">Start Date</span>
    </div>
    
<DatePicker selected={startDate} dateFormat='yyyy/MM/dd' onChange={(date) => setStartDate(date)}  />

</div>


<div>
<div>
    <span className="text-gray-500 ">End Date</span>
    </div>
<DatePicker selected={startDate} dateFormat='yyyy/MM/dd' onChange={(date) => setStartDate(date)}  />

</div>
<div>
<div>
    <span className="text-gray-500 ">Time</span>
    </div>
    <div>
      <TimePicker onChange={onChange} value={value} />
    </div>
   

</div>

  </div>
  
    </div>
    </div>
    
    <div className="mt-2">
      <div className="mb-2">
        <span className="text-gray-500">Event location</span>

      </div>
       

<input type="text " className=" w-full mb-2 border border-2px py-3  px-2 rounded-md outline-black" placeholder="Enter your event location...."/>

    </div>
    <div className="mt-2">
      <div className="mb-2">
        <span className="text-gray-500">Event Description</span>

      </div>
       
<textarea name="" id=""  rows={5} placeholder="Add description......" className="border w-full rounded-md outline-black px-2 py-2" ></textarea>



    </div>
   

    <div className="flex gap-2 justify-end mt-3" >

      <div >
        <button className="px-4 bg-black text-white rounded-md py-1" onClick={()=>{onClose()}}>Cancel</button>

      </div>
      <div>
         <button className="px-4 bg-black text-white rounded-md py-1">Submit</button>
        
      </div>

    </div>
    
    
   



  </div>
  <div className="border-t mb-16">

  </div>

 



  </div>
  
  </div>
        
        
        </>
    )
}

export default AddEvent