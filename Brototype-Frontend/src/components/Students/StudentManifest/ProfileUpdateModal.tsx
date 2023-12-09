const ProfileUpdateModal=({isVisible,onClose})=>{
    if(!isVisible) return null
    return (
        <>
        <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center   overflow-y-scroll overflow-hidden z-40">
       


        <div className="border border-2px  w-fit m-10 rounded-md bg-white ">
  <div className="flex justify-between mt-4 mr-4">
    <div>

    </div>
     <div>
       <svg  onClick={()=>{onClose()}}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer text-gray-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

      
    </div>

    
  </div>
  <div className="flex gap-6  rounded-md">
     <div>
    <div className="border border-2px h-28 w-28 rounded-full m-6 mb-3">


  </div>
  <div>
    <button className="bg-black text-white m-9  mt-0 rounded-md px-4 py-1 ">Upload</button>
  </div>

  </div>
  <div className="m">
    <div className=" m-6 flex">
    <div>
      <div>
        <span>First Name</span>
      </div>
      
 
        <input type="text"  className="border border-2px mr-4 outline-black py-1 rounded-sm "/>
       
       
      
    </div>
   <div>
      <div>
        <span>Last Name</span>
      </div>
      
 
        <input type="text"  className="border border-2px mr-4 outline-black py-1 rounded-sm "/>
       
       
      
    </div>

 
   

  </div>
  <div className=" m-6 flex">
    <div>
      <div>
        <span>Domain</span>
      </div>
      
 
        <input type="text"  className="border border-2px mr-4 outline-black py-1 rounded-sm "/>
       
       
      
    </div>
   <div>
      <div>
        <span>Batch</span>
      </div>
      
 
        <input type="text"  className="border border-2px mr-4 outline-black py-1 rounded-sm "/>
       
       
      
    </div>

 
   

  </div>
  <div className="flex justify-between mr-10 mb-3" >
    <div>

    </div>
     <div>
       <button className="bg-black text-white rounded-md px-5 py-1.5 ">Submit</button>
      
    </div>
  
  </div>
  

  </div>

  </div>

</div>
</div>
        
        </>
    )
}


export default ProfileUpdateModal