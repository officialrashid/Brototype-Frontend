import React, { useEffect, useState } from 'react';
import { getScheduleEvents } from '../../../utils/methods/get';
import { motion, useAnimation } from 'framer-motion';

const ScheduleTimeCard = () => {
  const [scheduleEvents, setScheduleEvents] = useState([]);
  // const controls = useAnimation();
  const scheduleTimeArray = []
  useEffect(() => {
    const fetchScheduleEvents = async () => {
      const reviewerId = '658b2fcbc4e61a5bab23060f';

      try {
        console.log('Fetching Schedule Events...');

        const response = await getScheduleEvents(reviewerId);

        if (response) {

          const sortedEvents = response.response[0].events.sort((a: any, b: any) => {
            const dateA: any = new Date(a.date.split('-').reverse().join('-'));
            const dateB: any = new Date(b.date.split('-').reverse().join('-'));

            return dateB - dateA;
          });
          setScheduleEvents(sortedEvents);
          console.log('Sorted Schedule Events (Descending Order):', sortedEvents);
        }
      } catch (err) {
        console.error('Error fetching schedule events:', err);
        // Handle errors
      }
    };

    fetchScheduleEvents();
  }, []);

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
      <div className="grid grid-cols-4 gap-2 m-5">
        {scheduleEvents.map((event, index) => {
          // Function to split time into 30-minute intervals
          const splitTime = (startTime, endTime) => {
            let timeArray = [];
            let startParts = startTime.match(/(\d+):(\d+)(am|pm)/);
            let endParts = endTime.match(/(\d+):(\d+)(am|pm)/);
            if (!startParts || !endParts) {
              console.error("Invalid time format");
              return timeArray;
            }
            let startHour = parseInt(startParts[1]);
            let startMinute = parseInt(startParts[2]);
            let startAmPm = startParts[3];

            let endHour = parseInt(endParts[1]);
            let endMinute = parseInt(endParts[2]);
            let endAmPm = endParts[3];

            if (startAmPm === 'pm' && startHour !== 12) {
              startHour += 12;
            } else if (startAmPm === 'am' && startHour === 12) {
              startHour = 0;
            }

            if (endAmPm === 'pm' && endHour !== 12) {
              endHour += 12;
            } else if (endAmPm === 'am' && endHour === 12) {
              endHour = 0;
            }

            let startDate = new Date();
            startDate.setHours(startHour, startMinute, 0, 0);

            let endDate = new Date();
            endDate.setHours(endHour, endMinute, 0, 0);

            // Loop through time intervals
            while (startDate < endDate) {
              // Add current time to array
              timeArray.push(startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

              // Move to next 30-minute interval
              startDate.setTime(startDate.getTime() + 30 * 60000);
            }

            return timeArray;
          };

          const timeSlots = splitTime(event.startTime, event.endTime);
          const timeSlotsLength = timeSlots.length;
          console.log(timeSlotsLength, "timeSlotsLength");

          const bookedEventsLength = event?.bookedEvents?.length || 0; // Handle the case when bookedEvents is null or undefined
          console.log(bookedEventsLength, "bookedEventsLength");

          let timeSlotRatio;

          if (bookedEventsLength !== 0) {
            timeSlotRatio = Math.round((bookedEventsLength / timeSlotsLength) * 100);

          } else {
            timeSlotRatio = 0; // or any other value you prefer when bookedEventsLength is 0
          }
          console.log(timeSlotRatio, "timeSlotRatio");


          return (
            <div key={index} className="shadow-md border border-blue-200 border-2xl rounded-lg w-full mb-2 bg-white">
              <div className="border-b h-32 bg-blue-200 rounded-md m-4 relative">
                {/* Format the date */}
                {(() => {
                  const [day, month, year] = event.date.split('-');
                  const parsedDate = new Date(`${year}-${month}-${day}`);
                  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                  const dayOfWeek = daysOfWeek[parsedDate.getDay()];
                  const monthName = months[parsedDate.getMonth()];
                  return (
                    <div>
                      <p className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl font-roboto">{day}</p>
                      <p className="absolute top-14 left-1/2 transform -translate-x-1/2 text-2xl font-roboto">{dayOfWeek}</p>
                      <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-roboto text-gray-700">{monthName} {year}</p>
                    </div>
                  );
                })()}
              </div>
              <div className="m-4">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p className="text-sm font-roboto mt-0">{event.startTime}-{event.endTime}</p>
                </div>
                <div className='flex w'>
                <div className="w-full bg-gray-200 rounded mt-5">
                  <div className="h-2 bg-green-500 rounded" style={{ width: `${timeSlotRatio}%` }}>
             
                  </div>
                </div>
                <div>
                  
                </div>
                <p className=' h-2 mt-3 ml-2 font-roboto text-sm'>
                  {timeSlotRatio}%
                 </p>
                </div>


                <div className="flex mt-5">
                  {/* Repeat this section for each participant */}
                  <div className="z-40 h-10 w-10">
                    <img src="/profile.jpeg" alt="" className="rounded-full" />
                  </div>
                  <div className="z-40 h-10 w-10">
                    <img src="/profile.jpeg" alt="" className="rounded-full" />
                  </div>
                  <div className="z-40 h-10 w-10">
                    <img src="/profile.jpeg" alt="" className="rounded-full" />
                  </div>
                  <div className="z-40 h-10 w-10">
                    <img src="/profile.jpeg" alt="" className="rounded-full" />
                  </div>
                  {/* Repeat this section for each participant */}
                  <p className="mt-2 ml-1 w-10 underline font-roboto text-sm">8+more</p>
                  <p className="mt-2 ml-4 w-10 text-blue-400 underline font-roboto text-sm cursor-pointer">view</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>

  );
}

export default ScheduleTimeCard;
