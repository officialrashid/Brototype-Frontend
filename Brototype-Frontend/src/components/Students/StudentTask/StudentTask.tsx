import React, { useState } from 'react';
import SubTask from './SubTask';

const StudentTask = () => {
  const [activeSubTask, setActiveSubTask] = useState(0);

  return (
    <>
      <div className="m-4 mt-2 border border-gray-300 rounded-md shadow-lg ">
        <div className="flex justify-between items-center m-4">
          <div>
            <span className="font-bold">Personal workouts</span>
          </div>
          <div className="flex gap-3">
            <div>
              <svg
                className="h-8 w-8 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            <div className="data-colllapse-target= collapse-1">
              <svg
                className="w-8 h-8"
                onClick={() => {
                  setActiveSubTask(1);
                }}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g data-name="Layer 2" id="Layer_2">
                  <path d="M16,1A15,15,0,1,1,1,16,15,15,0,0,1,16,1Zm0,28A13,13,0,1,0,3,16,13,13,0,0,0,16,29Z" />
                  <path d="M10.41,12.13,16,17.71l5.59-5.58a1,1,0,0,1,1.41,0h0a1,1,0,0,1,0,1.41L16.64,19.9a.91.91,0,0,1-1.28,0L9,13.54a1,1,0,0,1,0-1.41H9A1,1,0,0,1,10.41,12.13Z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        {activeSubTask === 1 ? <SubTask /> : ''}
      </div>
      <div className="m-4 mt-2 border border-gray-300 rounded-md shadow-lg ">
  <div className="flex  justify-between items-center m-4">


    <div> <span className="font-bold ">Technical Workouts</span> </div>
  <div className="flex gap-3">
<div className="">
  <svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
   
    </div>
    <div className="data-colllapse-target= collapse-1" >


    <svg onClick={()=>{setActiveSubTask(2)}} className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><path d="M16,1A15,15,0,1,1,1,16,15,15,0,0,1,16,1Zm0,28A13,13,0,1,0,3,16,13,13,0,0,0,16,29Z"/><path d="M10.41,12.13,16,17.71l5.59-5.58a1,1,0,0,1,1.41,0h0a1,1,0,0,1,0,1.41L16.64,19.9a.91.91,0,0,1-1.28,0L9,13.54a1,1,0,0,1,0-1.41H9A1,1,0,0,1,10.41,12.13Z"/></g></svg>
    </div>
  
  
</div>
</div>

  </div>
  {
   activeSubTask===2?<SubTask/>:""

  }
  <div className="m-4 mt-2 border border-gray-300 rounded-md shadow-lg ">
  <div className="flex  justify-between items-center m-4">


    <div> <span className="font-bold ">Miscellaneous Workouts</span> </div>
  <div className="flex gap-3">
<div className="">
  <svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
   
    </div>
    <div className="data-colllapse-target= collapse-1">


    <svg  onClick={()=>{setActiveSubTask(3)}}  className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><path d="M16,1A15,15,0,1,1,1,16,15,15,0,0,1,16,1Zm0,28A13,13,0,1,0,3,16,13,13,0,0,0,16,29Z"/><path d="M10.41,12.13,16,17.71l5.59-5.58a1,1,0,0,1,1.41,0h0a1,1,0,0,1,0,1.41L16.64,19.9a.91.91,0,0,1-1.28,0L9,13.54a1,1,0,0,1,0-1.41H9A1,1,0,0,1,10.41,12.13Z"/></g></svg>
    </div>
  
  
</div>
</div>

  </div>
      {/* Repeat the above block for other tasks */}
    </>
  );
};

export default StudentTask;
