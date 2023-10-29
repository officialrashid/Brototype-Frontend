import React from 'react';
import Domains from './Domains';
const Category = () => {
  const containerStyles = {
    cursor: 'pointer', // Set the cursor to a pointer when hovering over the container
  };

  return (
    <div className="grid grid-rows-1 sm:grid-rows-3 grid-flow-col gap-4 s ml-auto relative mt-4.5rem h-38rem w-full">
      {/* Left-side content */}
      <div className="bg-white-700 w-full relative">
        <p className="text-black font-semibold text-2xl p-5 italic">Explore our Domains</p>
      </div>

      {/* Right-side content with buttons */}
      <div className="absolute mt-6rem left-16rem rounded-8xs bg-white box-border w-[875px] h-[71px] border-[2px] border-solid border-darkgray-200">
        <div className="absolute top-[-1px] left-[169px] box-border w-0.5 h-[70px] border-r-[2px] border-solid border-darkgray-200"></div>
        <div className="absolute top-[-1px] left-[351px] box-border w-0.5 h-[70px] border-r-[2px] border-solid border-darkgray-200" />
        <div className="absolute top-[-1px] left-[518px] box-border w-0.5 h-[70px] border-r-[2px] border-solid border-darkgray-200" />
        <div className="absolute top-[-1px] left-[691px] box-border w-0.5 h-[70px] border-r-[2px] border-solid border-darkgray-200" />
        <button
          className="hover:bg-custom-grey border hover:border-black w-10.6rem h-4.2rem text-sm"
          style={containerStyles}
        >
          Web Development
        </button>
        <button className="hover:bg-custom-grey border hover:border-black w-[11.2rem] h-4.2rem text-sm ml-[0.1rem]" style={containerStyles}>
          App Development
        </button>
        <button className="hover:bg-custom-grey border hover:border-black w-[10.2rem] h-4.2rem text-sm ml-[0.2rem]" style={containerStyles}>
          Cyber Security
        </button>
        <button className="hover:bg-custom-grey border hover:border-black w-[10.7rem] h-4.2rem text-sm ml-[0.2rem]" style={containerStyles}>
          Backend Development
        </button>
        <button className="hover:bg-custom-grey border hover:border-black w-[11.1rem] h-4.2rem text-sm ml-[0.1rem]" style={containerStyles}>
          Game Development
        </button>
      </div>

   <div >
      <div className="grid grid-cols-3 gap-4 ml-44 h-auto  mr-56">

      <Domains/>
      <Domains/>
      <Domains/>
      <Domains/>
      <Domains/>
      <Domains/>
      <Domains/>
      <Domains/>
      <Domains/>
      
     
      </div>
      </div>
      
</div>

  
  );
};

export default Category;
