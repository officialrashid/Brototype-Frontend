// Day.tsx

import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { toast } from 'react-toastify';
import { getScheduleEvents } from '../../../utils/methods/get';
import { useSelector } from 'react-redux';

interface DayProps {
  day: any;
  rowIdx: number;
}

const Day: React.FC<DayProps> = ({ day, rowIdx }) => {
  const [dayEvents, setDayEvents] = useState([]);
  const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent, dispatchCalEvent ,showEventModal} = useContext(GlobalContext);
  const reviewerId = useSelector((state: any) => state?.reviewer?.reviewerData?.reviewerId);
  useEffect(() => {
    const fetchScheduleEvents = async () => {
      try {
        console.log("Fetching Schedule Events...");

        const response = await getScheduleEvents(reviewerId);

        if (response) {
          console.log("Fetched Schedule Events:", response.response[0].events);

          // Set the schedule events to the state

          // Call the filtering function

          filterAndSetDayEvents(response.response[0].events);
        }
      } catch (err) {
        console.error("Error fetching schedule events:", err);
        // Handle errors
      }
    };

    fetchScheduleEvents();
  }, [showEventModal]);

  const filterAndSetDayEvents = async (eventsToFilter: any) => {
    console.log(eventsToFilter, "{}{}++++++");

    const events = await eventsToFilter.filter((evt: { day: string | number | Date | dayjs.Dayjs | null | undefined; }) => {
      const eventDate = dayjs(parseInt(evt?.day)); // Convert milliseconds to dayjs object
      return eventDate.format("DD-MM-YY") === day.format("DD-MM-YY");
    });

    console.log("Filtered Events:", events);
    setDayEvents(events);
  };

  // Rest of your component code...

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'bg-blue-600 text-white rounded-full w-7' : '';
  };

  return (
    <div className='border border-custom-background flex flex-col font-roboto h-48'>
      <header className='flex flex-col items-center'>
        <p className='text-sm mt-1'>{day.format("ddd").toUpperCase()}</p>
        <p className={`text-sm p-1 mt-1 text-center ${getCurrentDayClass()}`}>{day.format("DD")}</p>
      </header>
      <div className='flex-1 cursor-pointer' onClick={() => {
        setDaySelected(day);
        setShowEventModal(true);
      }}>
        <div className='event-container' style={{ maxHeight: '100px', overflowY: 'auto' }}>
          {dayEvents.map((evt, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedEvent(evt)}
              className={`bg-${evt.label}-500 p-1 mr-2 text-white text-xs rounded mb-1 truncate`}
            >
              {evt.startTime} - {evt.endTime}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Day;
