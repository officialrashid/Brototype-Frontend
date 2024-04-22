import React, { useEffect, useState } from 'react';
import { getScheduleEvents } from '../../../utils/methods/get';
import { useSelector } from 'react-redux';

const ScheduleTimeCard = () => {
  const reviewerId = useSelector((state: any) => state?.reviewer?.reviewerData?.reviewerId);
  const [scheduleEvents, setScheduleEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchScheduleEvents = async () => {
      try {
        const response = await getScheduleEvents(reviewerId);
        if (response && response.response && response.response[0] && response.response[0].events) {
          const sortedEvents = response.response[0].events.sort((a: any, b: any) => {
            const earliestDateA: Date = new Date(Math.min(...(a.date || []).map((d: string) => new Date(d))));
            const earliestDateB: Date = new Date(Math.min(...(b.date || []).map((d: string) => new Date(d))));
            return earliestDateA.getTime() - earliestDateB.getTime();
          });

          const eventsWithRatio = sortedEvents.map((event: { bookedEvents: { length: number; filter: (arg0: (item: any) => any) => { (): any; new(): any; length: number; }; }; }) => {
            const bookedEventsLength = event?.bookedEvents?.length || 0;
            const bookedTrueCount = event?.bookedEvents?.filter((item: any) => item.booked).length || 0;
            const timeSlotRatio = bookedEventsLength !== 0 ? Math.round((bookedTrueCount / bookedEventsLength) * 100) : 0;
            return { ...event, timeSlotRatio };
          });

          setScheduleEvents(eventsWithRatio);
        }
      } catch (err) {
        console.error('Error fetching schedule events:', err);
      }
    };

    fetchScheduleEvents();
  }, [reviewerId]);

  return (
    <div className="grid grid-cols-4 gap-2 m-5">
      {scheduleEvents.map((event: any, index: number) => (
        <div key={index} className="shadow-sm border border-blue-200 border-2xl rounded-lg w-full mb-1 bg-white">
          <div className="border-b-2 h-32 rounded-md m-4 relative bg-blue-100">
            {/* Content */}
            {(() => {
              const dateStr = (event.date || []).join('-'); // Join array elements into a string
              const dateParts = dateStr.split('-');
              const [day, month, year] = dateParts.length === 3 ? dateParts : ['', '', ''];
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
          <div className="m-4 mb-0">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="text-sm font-roboto mt-0">{event.startTime}-{event.endTime}</p>
            </div>
            <div className='flex w'>
              <div className="w-full bg-gray-200 rounded mt-5">
                <div className="h-2 bg-green-500 rounded" style={{ width: `${event.timeSlotRatio}%` }}></div>
              </div>
              <div>
              </div>
              <p className=' h-2 mt-3 ml-2 font-roboto text-sm'>{event.timeSlotRatio}%</p>
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
      ))}
    </div>
  );
}

export default ScheduleTimeCard;
