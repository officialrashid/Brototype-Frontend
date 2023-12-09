const PersonalInfoModal=({isVisible,onClose})=>{
    if(!isVisible) return null
      return (
          <>
           <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center   overflow-y-scroll overflow-hidden z-40">
           <div className="border border-2px  m-10 w-1/2 bg-white">
   <div className="flex justify-between m-4 mb-">
      <div>
  
      </div>
       <div >
         <svg  onClick={()=>{onClose()}}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer text-gray-400">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  
        
      </div>
  
      
    </div>
    <div className="text-center mb-6">
      <span className="font-bold">Update your  Personal Information</span>
    </div>
    <div className="m-2 mt-0">
       <div className="flex gap-5">
  
  
  <div >
  
  </div>
    <div className="w-full">
       <div className=" ">
      <div className="m-1">
        <div  className="mb-3 ">
          <span>Email</span>
        </div>
        
          <input type="text" className="w-full border border-2px py-1"/>
  
      </div>
      <div  className="">
        <div className="m-1">
        <div  className="mb-3 mt-3">
          <span>Email</span>
        </div>
        
          <input type="text" className="w-full border border-2px py-1"/>
  
      </div>
      
     
  
    </div>
    
  
  </div>
    </div>
   
  <div className="w-full">
    
    <div className="w-full">
       <div className=" mr-2 mb-3">
      <div className="mr-3 m-1 ml-0">
        <div  className="mb-3 ">
          <span>Email</span>
        </div>
        
          <input type="text" className="w-full border border-2px py-1"/>
  
      </div>
      <div  className="">
        <div className="mr-3  m-1 ml-0">
        <div  className="mb-3 mt-3">
          <span>Email</span>
        </div>
        
          <input type="text" className="w-full border border-2px py-1"/>
  
      </div>
      
     
  
    </div>
    
  
  </div>
    </div>
  
    </div>
  </div>
  
    </div>
  
    <div className=" flex justify-between m-6">
      <div>
  
      </div>
       <div>
         <button className="bg-black rounded-md px-4 py-1 text-white ">Submit</button>
        
      </div>
  
    </div>
  
   
  
  </div>
  </div>
  
  
          
          </>
      )
   
   
  
      
  }
  
  export default PersonalInfoModal