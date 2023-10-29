
import React from 'react';

const Domains = () => {
    return (
        
           
<div className="relative rounded-2xl shadow-md border border-black w-80 h-48">
        <div className="h-1/2 bg-custom-domain absolute top-0 left-0 right-0 rounded-t-2xl">
          <div className="w-24 h-auto">
            <p className="text-sm ml-5 mt-5">Full Stack</p>
          </div>
          <div className="w-4/4 h-auto flex flex-wrap">
            <h1 className="ml-5 mt-5 font-semibold">Mern Stack</h1>
            <img src="/python png.svg" alt="" className="w-10 h-10 ml-24 " />
          </div>
        </div>
        <div className="h-1/2 absolute bottom-0 left-0 w-full">
          <div className="mt-5 w-4/4 flex flex-wrap">
            <div className='w-2/4 flex flex-wrap'>
            <img src="/project img.svg" alt="" className="w-5 h-5 ml-4" />
            <p className='ml-2 text-sm'> 2 Main Project</p>
            </div>
            <div className='w-2/4 flex flex-wrap'>
            <img src="/project img.svg" alt="" className="w-5 h-5 ml-4" />
            <p className='ml-2 text-sm'> 6 + Mini  Project</p>
            </div>
      
          </div>
      
          <div className="mt-8 w-4/4 flex flex-wrap">
            <div className='w-2/4 flex flex-wrap'>
            <p className='ml-4 text-sm'>4.8</p>
            <img src="/star.png" alt="" className="w-14 h-4 ml-4" />
            </div>
            <div className='w-2/4 flex flex-wrap'>
            <p className='ml-4 text-sm'> (1 k+ students)</p>
            </div>
      
          </div>
        </div>
      </div>
                    
        
    );
}

export default Domains;
