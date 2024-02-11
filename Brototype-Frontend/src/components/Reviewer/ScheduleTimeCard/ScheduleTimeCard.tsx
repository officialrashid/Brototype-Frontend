import React, { useEffect, useState } from 'react';
import { getScheduleEvents } from '../../../utils/methods/get';
import { motion, useAnimation } from 'framer-motion';

const ScheduleTimeCard = () => {
  // const [scheduleEvents, setScheduleEvents] = useState([]);
  // const controls = useAnimation();

  // useEffect(() => {
  //   const fetchScheduleEvents = async () => {
  //     const reviewerId = '658b2fcbc4e61a5bab23060f';

  //     try {
  //       console.log('Fetching Schedule Events...');

  //       const response = await getScheduleEvents(reviewerId);

  //       if (response) {
  //         const sortedEvents = response.response[0].events.sort((a: any, b: any) => {
  //           const dateA: any = new Date(a.date.split('-').reverse().join('-'));
  //           const dateB: any = new Date(b.date.split('-').reverse().join('-'));

  //           return dateB - dateA;
  //         });
  //         setScheduleEvents(sortedEvents);
  //         console.log('Sorted Schedule Events (Descending Order):', sortedEvents);
  //       }
  //     } catch (err) {
  //       console.error('Error fetching schedule events:', err);
  //       // Handle errors
  //     }
  //   };

  //   fetchScheduleEvents();
  // }, []);

  // const handleScroll = () => {
  //   const scrollY = window.scrollY;
  //   const triggerThreshold = 100;

  //   if (scrollY > triggerThreshold) {
  //     controls.start({ opacity: 1, y: 0 });
  //   } else {
  //     controls.start({ opacity: 0, y: 100 });
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
 
  return (
    <>

      {/* <h1 classNameName='mt-3 font-roboto  ml-8 text-xl italic '>Scheduled Events</h1>
      
      <div classNameName='flex flex-wrap'>
        {scheduleEvents.map((event, index) => (
             <motion.div
             initial={{ opacity: 0, y: 100 }}
             animate={controls}
             whileHover={{ scale: 1.1 }}
             transition={{ duration: 0.5 }}
           >
          <div classNameName="mt-3 ml-6  border border-t-blue-500 m-2 w-21.5rem border-t-4 rounded-t-md bg-white rounded-md shadow-md">
            <div classNameName="flex m-2 justify-between cursor-pointer mt-4">
              <div classNameName="">
                <input type="checkbox" name="" id="" classNameName="h-5 w-4 accent-black" />


              </div>
              <div classNameName="flex">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" classNameName="w-5 h-5">
                    <path classNameName='shadow-sm' stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                    <path classNameName='shadow-sm ' stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>

                <div classNameName="mt-1">
                  <svg fill="#000000" height="200px" width="200px" classNameName="h-3 w-3" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 386.257 386.257" xml: space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="0,96.879 193.129,289.379 386.257,96.879 "></polygon> </g></svg>
                </div>



              </div>
            </div>




            <div classNameName="m-2"> */}
              {/* <div>
                <span classNameName="font-bold text-md font-roboto ">Group discussion</span>

              </div> */}
              {/* <div classNameName="mt-2 m">
                <span classNameName="text-gray-500 font-roboto text-sm">{event.date} , {event.startTime} - {event.endTime}</span>
              </div>
              <div classNameName="mt-2 m">
                <span classNameName="text-blue-500 font-roboto text-sm">View Page</span>
              </div>


            </div>
            <div classNameName="border-t flex">
              <div classNameName="m-2 mt-4 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="gray" classNameName="w-7 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                </svg>  
                <span classNameName="text-md cursor-pointer font-roboto text-blue-500 pl-1 pt-1 text-sm">Copt link</span> 


              </div>

              <div classNameName="m-2 mt-3">
                <button classNameName="border border-gray-500  rounded-full px-4 py-1 font-roboto ml-32 text-gray-700 text-sm">Turn on</button>
              </div>


            </div>


          </div>
          </motion.div>
        ))}
      </div> */}

<div className="grid grid-cols-4 gap-2 m-5 bg">
  <div className="shadow-md border border-blue-200 border-2xl rounded-lg w-full mb-2 bg-white">
    <div className="border-b h-32 bg-blue-200 rounded-md m-4 relative">
      <div className="grid-column-1">
        <p className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl font-roboto">12</p>
        <p className="absolute top-14 left-1/2 transform -translate-x-1/2 text-2xl font-roboto">Tuesday</p>
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-roboto text-gray-700">April 2024</p>
      </div>
    </div>

    <div className="m-4">

      <div className="flex gap-3">

  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
  <p className="text-sm font-roboto mt-0">9:00am-12:00pm</p>
      </div>
      <div className="w-full bg-gray-200 rounded mt-5">
        <div className="h-2 bg-green-500 rounded" style={{width: 20}}></div>
      </div>
      <div className="flex  mt-5">
<div className="z-40   h-10 w-10">
  <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<div className="z-30  h-10 w-10">
    <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<div className="z-20  h-10 w-10">
    <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<div className="z-10  h-10 w-10">
    <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<p className= "mt-2 ml-1 w-10 underline font-roboto text-sm">8+more</p>
<p className= "mt-2 ml-6 w-10 text-blue-400 underline font-roboto text-sm cursor-pointer">view</p>
      </div>


    </div>

  
  </div>
  <div className="shadow-md border border-blue-200 border-2xl rounded-lg w-full mb-2 bg-white">
    <div className="border-b h-32 bg-blue-200 rounded-md m-4 relative">
      <div className="grid-column-1">
        <p className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl font-roboto">12</p>
        <p className="absolute top-14 left-1/2 transform -translate-x-1/2 text-2xl font-roboto">Tuesday</p>
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-roboto text-gray-700">April 2024</p>
      </div>
    </div>

    <div className="m-4">

      <div className="flex gap-3">

  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
  <p className="text-sm font-roboto mt-0">9:00am-12:00pm</p>
      </div>
      <div className="w-full bg-gray-200 rounded mt-5">
        <div className="h-2 bg-green-500 rounded" style={{width: 20}}></div>
      </div>
      <div className="flex  mt-5">
<div className="z-40   h-10 w-10">
  <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<div className="z-30  h-10 w-10">
    <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<div className="z-20  h-10 w-10">
    <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<div className="z-10  h-10 w-10">
    <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<p className= "mt-2 ml-1 w-10 underline font-roboto text-sm">8+more</p>
<p className= "mt-2 ml-6 w-10 text-blue-400 underline font-roboto text-sm cursor-pointer">view</p>
      </div>


    </div>

  
  </div>
  <div className="shadow-md border border-blue-200 border-2xl rounded-lg w-full mb-2 bg-white">
    <div className="border-b h-32 bg-blue-200 rounded-md m-4 relative">
      <div className="grid-column-1">
        <p className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl font-roboto">12</p>
        <p className="absolute top-14 left-1/2 transform -translate-x-1/2 text-2xl font-roboto">Tuesday</p>
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-roboto text-gray-700">April 2024</p>
      </div>
    </div>

    <div className="m-4">

      <div className="flex gap-3">

  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
  <p className="text-sm font-roboto mt-0">9:00am-12:00pm</p>
      </div>
      <div className="w-full bg-gray-200 rounded mt-5">
        <div className="h-2 bg-green-500 rounded" style={{width: 20}}></div>
      </div>
      <div className="flex  mt-5">
<div className="z-40   h-10 w-10">
  <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<div className="z-30  h-10 w-10">
    <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<div className="z-20  h-10 w-10">
    <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<div className="z-10  h-10 w-10">
    <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<p className= "mt-2 ml-1 w-10 underline font-roboto text-sm">8+more</p>
<p className= "mt-2 ml-6 w-10 text-blue-400 underline font-roboto text-sm cursor-pointer">view</p>
      </div>


    </div>

  
  </div>
  <div className="shadow-md border border-blue-200 border-2xl rounded-lg w-full mb-2 bg-white">
    <div className="border-b h-32 bg-blue-200 rounded-md m-4 relative">
      <div className="grid-column-1">
        <p className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl font-roboto">12</p>
        <p className="absolute top-14 left-1/2 transform -translate-x-1/2 text-2xl font-roboto">Tuesday</p>
        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-roboto text-gray-700">April 2024</p>
      </div>
    </div>

    <div className="m-4">

      <div className="flex gap-3">

  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
  <p className="text-sm font-roboto mt-0">9:00am-12:00pm</p>
      </div>
      <div className="w-full bg-gray-200 rounded mt-5">
        <div className="h-2 bg-green-500 rounded" style={{width: 20}}></div>
      </div>
      <div className="flex  mt-5">
<div className="z-40   h-10 w-10">
  <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<div className="z-30  h-10 w-10">
    <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<div className="z-20  h-10 w-10">
    <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<div className="z-10  h-10 w-10">
    <img src="https://s3.ap-south-1.amazonaws.com/brototype-students-profile/657aaa012a15acfff364bb5a/7154d64c-72ee-43a9-abf8-7c071ff2bffd" alt="" className="rounded-full"/>
</div>
<p className= "mt-2 ml-1 w-10 underline font-roboto text-sm">8+more</p>
<p className= "mt-2 ml-6 w-10 text-blue-400 underline font-roboto text-sm cursor-pointer">view</p>
      </div>


    </div>

  
  </div>
  
</div>



    </>
  );
}

export default ScheduleTimeCard;
