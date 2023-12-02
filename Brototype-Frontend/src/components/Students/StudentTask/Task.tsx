import React from 'react';
import { useNavigate } from 'react-router-dom';


const Task = () => {
const navigate = useNavigate()
const handleViewTask = ()=>{
  navigate('/viewTask')
}
  return (



    <div className="ml-5 mr-5 mt-5 border border-gray-300 flex gap-4 h-fit rounded-2xl px-8 py-2 bg-white shadow-md">
      <div onClick={(handleViewTask)}>
        <span className="font-roboto text-sm">Week-01</span>
      </div>
      <div>
        <img src="/padlock.png" alt="" className="w-5 h-5 item item-center ml-5" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </div>
    </div>

  );
};

export default Task;
