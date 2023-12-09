const ExtendModal=({isVisible,isClose})=>{
    if(!isVisible) return null
  
      return (
  
        <>
        <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center   overflow-y-scroll overflow-hidden z-40">
        <div className="border border-gray-200 m-5 rounded-lg shadow-2xl w-2/5  bg-white">
  <div className="flex justify-between">
   <div></div>
    <div className="ml- mr-4 mt-4" >
     <span onClick={()=>{isClose()}}  className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  </span>
  
   </div>
  
  </div>
  
   
  <div className="text-center">
   <div><span className="font-semibold text-md mb-2">Extend request</span></div>
  </div>
  
   <div className="m-5 mt-6 ">
     <div className="">
  
         <input type="text" className="px-5 py-4 shadow-xl border   border-gray-200 focus:outline-black border-red w-full rounded-lg mb-7  "/>
           <input type="text" className="px-5 py-4 shadow-xl border   border-gray-200 focus:outline-black border-red w-full rounded-lg mb-7  "/>  
           <input type="text" className="px-5 py-4 shadow-xl border   border-gray-200 focus:outline-black border-red w-full rounded-lg mb-7  "/>
           <input type="text" className="px-5 py-4 shadow-xl border   border-gray-200 focus:outline-black border-red w-full rounded-lg mb-7  "/>
             <textarea name="" id="" cols={30} rows={10} className="w-full px-2 py-2 border-gray-200 shadow-xl outline-black" placeholder="Enter your reason for extension"></textarea>
       
  
     </div>
   </div>
   <div className="flex justify-between m-6 ">
     <div></div>
     <div>
       <button className="border px-4 py-1 rounded-md bg-black text-white " onClick={isClose}>Cancel</button>
       <button className="border px-4 py-1 rounded-md bg-black text-white ">Submit</button>
     </div>
   </div>
  </div>
  </div>
  
  
        
        </>
  
        
          
          
          
      )
  }
  
  export default ExtendModal