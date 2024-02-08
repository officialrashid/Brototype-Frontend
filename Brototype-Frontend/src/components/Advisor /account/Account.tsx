import Calendar from "react-calendar"
import CalendarComp from "../CalendarComp"
import PerformanceGraph from "../dashboard/PerformanceGraph"

 


const Account=()=>{
    return (
        <>
        <div className=" border  border-2px rounded-lg  ">
      <div className="grid grid-cols-3  gap-3 ">
      <div className="border border-2px     rounded-md bg-white">
      
  <div className="">
    <div className="ml-4 mt-2">
    <span className="font-bold text-">Your Details</span>
    </div>

 
 
  <div className="flex ml-4  gap-20">
    <div >
      <div className="mt-4">
         <span className="font-bold text-xl">John Doe</span>

      </div>
      <div>
         <span className="text-gray-400 text-sm">Review Coordinator</span><br />
         <span className="text-gray-400 text-sm">review@gmail.com</span>

      </div>
      <div className="border w-fit rounded-md mt-4  bg-darkBlue">
        <span className="m-2 px-1 text-white text-sm font-bold py-1 ">Edit Profile</span>
      </div>
     
      

    </div>
    <div className="border h-24 w-24 rounded-full flex items-center bg-gray-200 relative">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  stroke="grey" className="w-40 h-48 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>


      
    </div>
  
  </div>
  
  <div className=" ml-72 -mt-20  rounded-full absolute bg-gray-200  h-8 w-8 flex items-center justify-center" >
      <label htmlFor="drop">
    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5"  stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
</svg>
<input type="file" name="" id="drop"  className="hidden" />
</label>

    </div>
   

</div>
<div className="grid grid-cols-2 gap-3 m-4 mt-4 max-h-96 " >
    <div className="border h-20 w-36 rounded-md " >
      <div className="m-2">
        <div><span>197</span></div>
      <div>
        <span className="font-bold">Total reviews</span>
      </div>
      </div>

    </div>
     <div className="border h-20 w-36 rounded-md " >
      <div className="m-2">
        <div><span>197</span></div>
      <div>
        <span className="font-bold">Total reviews</span>
      </div>
      </div>

    </div>
     <div className="border h-20 w-36 rounded-md " >
      <div className="m-2">
        <div><span>197</span></div>
      <div>
        <span className="font-bold">Total reviews</span>
      </div>
      </div>

    </div>
     <div className="border h-20 w-36 rounded-md " >
      <div className="m-2">
        <div><span>197</span></div>
      <div>
        <span className="font-bold">Total reviews</span>
      </div>
      </div>

    </div>
    
    

  </div>
  
</div>
<div className="border border-2px     rounded-md bg-white h-96 ">
  <div className="m-2">
    <span className="font-bold">Performance Graph</span>
  </div>
  <PerformanceGraph graphHeight={340}/>
  
</div>
<div className="border border-2px    rounded-md bg-white  h-full max-h-96 overflow-y-auto ">
  <div className=" ">
  <div className="m-2">
  <div className="">
    <span className="font-bold">Works available</span>
  </div>
  <div className="border rounded-md m-2">
   <div className="m-2">
   <div className="flex justify-between gap-6 ">
   <div>
   <span className="text-sm font-bold">Rashid </span><br />
   <span className="text-sm font-bold">Riyas </span><br />

   </div>
   <div>
    <span className="text-sm">2:30pm</span>
   </div>
    </div>
    <div className="flex gap-4">
      <button className="border bg-darkBlue rounded-md px-8 py-1 text-sm text-white">Start</button>
      <button className="border  rounded-md text-sm px-2 text-black">Re-schedule</button>
    </div>
   </div>


  </div>
  <div className="border rounded-md m-2">
   <div className="m-2">
   <div className="flex justify-between gap-6 ">
   <div>
   <span className="text-sm font-bold">Rashid </span><br />
   <span className="text-sm font-bold">Riyas </span><br />

   </div>
   <div>
    <span  className="text-sm">2:30pm</span>
   </div>
    </div>
    <div className="flex gap-4">
      <button className="border bg-darkBlue rounded-md px-8 py-1 text-sm text-white">Start</button>
      <button className="border  rounded-md text-sm px-2 text-black">Re-schedule</button>
    </div>
   </div>


  </div>
  <div className="border rounded-md m-2">
   <div className="m-2">
   <div className="flex justify-between gap-6 ">
   <div>
   <span className="text-sm font-bold">Rashid </span><br />
   <span className="text-sm font-bold">Riyas </span><br />

   </div>
   <div>
    <span className="text-sm">2:30pm</span>
   </div>
    </div>
    <div className="flex gap-4">
      <button className="border bg-darkBlue rounded-md px-8 py-1 text-sm text-white">Start</button>
      <button className="border  rounded-md text-sm px-2 text-black">Re-schedule</button>
    </div>
   </div>


  </div>
  <div className="border rounded-md m-2">
   <div className="m-2">
   <div className="flex justify-between gap-6 ">
   <div>
   <span className="text-sm font-bold">Rashid </span><br />
   <span className="text-sm font-bold">Riyas </span><br />

   </div>
   <div>
    <span className="text-sm">2:30pm</span>
   </div>
    </div>
    <div className="flex gap-4">
      <button className="border bg-darkBlue rounded-md px-8 py-1 text-sm text-white">Start</button>
      <button className="border  rounded-md text-sm px-2 text-black">Re-schedule</button>
    </div>
   </div>


  </div>
  
    
   
  </div>
  

</div>

  
</div>
      </div>
      {/* fbfbwfbwi */}
   <div className="flex gap-3 mt-5">
   <div className=" w-2/3">
        <div className="">
       
     <div className="h-136 bg-white overflow-y-auto rounded-md mt-4">
     <div className=" mt-2 ml-2 ">
          <span className="font-bold">Your scheduled events</span>
        </div>
<div className="m-2 mt-2">


<div className="m-2">

  <div className
=" border rounded-md   bg-white  mt-2 mb-2 ">
  <div className
="flex justify-between ">

    <div className
  ="flex gap-3 m-2 mt-4">
    <div>
      <div className
    ="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center ">
      <svg
  height="200px"
  width="200px"
  version="1.1"
  id="Capa_1"
  className
="w-4 h-6"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 23.612 23.612"
  xml:space="preserve"
  fill="#000000"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <g>
      <g>
        <g>
          <path
            style={{ fill: "#10b981" }}
            d="M16.192,5.224V4.487h-8.77v0.737c0,0,1.334,3.713,3.838,5.428v1.785c0,0-2.761,2.686-3.838,5.775 v0.842h8.77v-0.842c-1.399-3.41-3.837-5.775-3.837-5.775v-1.785C15.759,7.726,16.192,5.224,16.192,5.224z"
          ></path>
        </g>
        <g>
          <path
            style={{ fill: "#10b981" }}
            d="M19.353,3.856V2.529h1.258V0H3.002v2.529h1.259v1.327c0,2.025,3.634,7.555,3.804,7.955 c-0.167,0.397-3.804,5.929-3.804,7.946v1.325H3.002v2.53h17.609v-2.53h-1.258v-1.325c0-2.025-3.635-7.521-3.829-7.951 C15.718,11.376,19.353,5.88,19.353,3.856z M18.096,19.757v1.325H5.519v-1.325c0-1.455,3.854-7.222,3.854-7.951 s-3.854-6.495-3.854-7.95V2.529h12.578v1.327c0,1.455-3.886,7.221-3.886,7.95C14.21,12.535,18.096,18.302,18.096,19.757z"
          ></path>
        </g>
      </g>
    </g>
  </g>
</svg>

  </div>

   <div className
  =" ml-6 -mt-5 ">
   
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#10b981" className="w-3 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


   </div>
    </div>
   <div className
  ="m-2"><span>Team meeting</span></div>

  </div>
 <div className
="flex gap-4"><div className
="h-2 w-2 bg-green-500 rounded-md col mt-8 "></div>
 <div className
="mt-6 ">
   <span className
  ="text-gray-400 text-sm">18-04-2024</span>
 </div>
 </div>
 <span></span>
  
     <div className
    ="flex m-5 gap-3 mt-6">
    <div >
      <button className
    ="px-6 border rounded-md  bg-darkBlue text-white font-bold text-sm py-1">Edit</button>

    </div>
     <div className
    ="">
      <button className
    ="px-4 border rounded-md text-black text-sm font-bold py-1">Delete</button>

    </div>
  </div>
  </div>

</div>
<div className="">

  <div className
=" border rounded-md   bg-white  mt-2 mb-2 ">
  <div className
="flex justify-between ">

    <div className
  ="flex gap-3 m-2 mt-4">
    <div>
      <div className
    ="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center ">
      <svg
  height="200px"
  width="200px"
  version="1.1"
  id="Capa_1"
  className
="w-4 h-6"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 23.612 23.612"
  xml:space="preserve"
  fill="#000000"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <g>
      <g>
        <g>
          <path
            style={{ fill: "#dc2626" }}
            d="M16.192,5.224V4.487h-8.77v0.737c0,0,1.334,3.713,3.838,5.428v1.785c0,0-2.761,2.686-3.838,5.775 v0.842h8.77v-0.842c-1.399-3.41-3.837-5.775-3.837-5.775v-1.785C15.759,7.726,16.192,5.224,16.192,5.224z"
          ></path>
        </g>
        <g>
          <path
            style={{ fill: "#dc2626" }}
            d="M19.353,3.856V2.529h1.258V0H3.002v2.529h1.259v1.327c0,2.025,3.634,7.555,3.804,7.955 c-0.167,0.397-3.804,5.929-3.804,7.946v1.325H3.002v2.53h17.609v-2.53h-1.258v-1.325c0-2.025-3.635-7.521-3.829-7.951 C15.718,11.376,19.353,5.88,19.353,3.856z M18.096,19.757v1.325H5.519v-1.325c0-1.455,3.854-7.222,3.854-7.951 s-3.854-6.495-3.854-7.95V2.529h12.578v1.327c0,1.455-3.886,7.221-3.886,7.95C14.21,12.535,18.096,18.302,18.096,19.757z"
          ></path>
        </g>
      </g>
    </g>
  </g>
</svg>

  </div>

   <div className
  =" ml-6 -mt-5 ">
   
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dc2626" className="w-3 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


   </div>
    </div>
   <div className
  ="m-2"><span>Team meeting</span></div>

  </div>
 <div className
="flex gap-4"><div className
="h-2 w-2 bg-red-600 rounded-md col mt-8 "></div>
 <div className
="mt-6 ">
   <span className
  ="text-gray-400 text-sm">18-04-2024</span>
 </div>
 </div>
 <span></span>
  
     <div className
    ="flex m-5 gap-3 mt-6">
    <div >
      <button className
    ="px-6 border rounded-md  bg-darkBlue text-white font-bold text-sm py-1">Edit</button>

    </div>
     <div className
    ="">
      <button className
    ="px-4 border rounded-md text-black text-sm font-bold py-1">Delete</button>

    </div>
  </div>
  </div>

</div>
</div>
<div className
=" border rounded-md   bg-white  mt-2 mb-2 ">
  <div className
="flex justify-between ">

    <div className
  ="flex gap-3 m-2 mt-4">
    <div>
      <div className
    ="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center ">
      <svg
  height="200px"
  width="200px"
  version="1.1"
  id="Capa_1"
  className
="w-4 h-6"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 23.612 23.612"
  xml:space="preserve"
  fill="#000000"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <g>
      <g>
        <g>
          <path
            style={{ fill: "#10b981" }}
            d="M16.192,5.224V4.487h-8.77v0.737c0,0,1.334,3.713,3.838,5.428v1.785c0,0-2.761,2.686-3.838,5.775 v0.842h8.77v-0.842c-1.399-3.41-3.837-5.775-3.837-5.775v-1.785C15.759,7.726,16.192,5.224,16.192,5.224z"
          ></path>
        </g>
        <g>
          <path
            style={{ fill: "#10b981" }}
            d="M19.353,3.856V2.529h1.258V0H3.002v2.529h1.259v1.327c0,2.025,3.634,7.555,3.804,7.955 c-0.167,0.397-3.804,5.929-3.804,7.946v1.325H3.002v2.53h17.609v-2.53h-1.258v-1.325c0-2.025-3.635-7.521-3.829-7.951 C15.718,11.376,19.353,5.88,19.353,3.856z M18.096,19.757v1.325H5.519v-1.325c0-1.455,3.854-7.222,3.854-7.951 s-3.854-6.495-3.854-7.95V2.529h12.578v1.327c0,1.455-3.886,7.221-3.886,7.95C14.21,12.535,18.096,18.302,18.096,19.757z"
          ></path>
        </g>
      </g>
    </g>
  </g>
</svg>

  </div>

   <div className
  =" ml-6 -mt-5 ">
   
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#10b981" className="w-3 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


   </div>
    </div>
   <div className
  ="m-2"><span>Team meeting</span></div>

  </div>
 <div className
="flex gap-4"><div className
="h-2 w-2 bg-green-500 rounded-md col mt-8 "></div>
 <div className
="mt-6 ">
   <span className
  ="text-gray-400 text-sm">18-04-2024</span>
 </div>
 </div>
 <span></span>
  
     <div className
    ="flex m-5 gap-3 mt-6">
    <div >
      <button className
    ="px-6 border rounded-md  bg-darkBlue text-white font-bold text-sm py-1">Edit</button>

    </div>
     <div className
    ="">
      <button className
    ="px-4 border rounded-md text-black text-sm font-bold py-1">Delete</button>

    </div>
  </div>
  </div>

</div>
<div className
=" border rounded-md   bg-white  mt-2 mb-2 ">
  <div className
="flex justify-between ">

    <div className
  ="flex gap-3 m-2 mt-4">
    <div>
      <div className
    ="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center ">
      <svg
  height="200px"
  width="200px"
  version="1.1"
  id="Capa_1"
  className
="w-4 h-6"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 23.612 23.612"
  xml:space="preserve"
  fill="#000000"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <g>
      <g>
        <g>
          <path
            style={{ fill: "#10b981" }}
            d="M16.192,5.224V4.487h-8.77v0.737c0,0,1.334,3.713,3.838,5.428v1.785c0,0-2.761,2.686-3.838,5.775 v0.842h8.77v-0.842c-1.399-3.41-3.837-5.775-3.837-5.775v-1.785C15.759,7.726,16.192,5.224,16.192,5.224z"
          ></path>
        </g>
        <g>
          <path
            style={{ fill: "#10b981" }}
            d="M19.353,3.856V2.529h1.258V0H3.002v2.529h1.259v1.327c0,2.025,3.634,7.555,3.804,7.955 c-0.167,0.397-3.804,5.929-3.804,7.946v1.325H3.002v2.53h17.609v-2.53h-1.258v-1.325c0-2.025-3.635-7.521-3.829-7.951 C15.718,11.376,19.353,5.88,19.353,3.856z M18.096,19.757v1.325H5.519v-1.325c0-1.455,3.854-7.222,3.854-7.951 s-3.854-6.495-3.854-7.95V2.529h12.578v1.327c0,1.455-3.886,7.221-3.886,7.95C14.21,12.535,18.096,18.302,18.096,19.757z"
          ></path>
        </g>
      </g>
    </g>
  </g>
</svg>

  </div>

   <div className
  =" ml-6 -mt-5 ">
   
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#10b981" className="w-3 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>


   </div>
    </div>
   <div className
  ="m-2"><span>Team meeting</span></div>

  </div>
 <div className
="flex gap-4"><div className
="h-2 w-2 bg-green-500 rounded-md col mt-8 "></div>
 <div className
="mt-6 ">
   <span className
  ="text-gray-400 text-sm">18-04-2024</span>
 </div>
 </div>
 <span></span>
  
     <div className
    ="flex m-5 gap-3 mt-6">
    <div >
      <button className
    ="px-6 border rounded-md  bg-darkBlue text-white font-bold text-sm py-1">Edit</button>

    </div>
     <div className
    ="">
      <button className
    ="px-4 border rounded-md text-black text-sm font-bold py-1">Delete</button>

    </div>
  </div>
  </div>

</div>
</div>



</div>
     </div>




        </div>
       
   
        


      </div>
      <div className="border w-1/3 mt-4 ">
        <Calendar  />

        </div>
   </div>






        </div>
 
        
        </>
    )
}


export default Account