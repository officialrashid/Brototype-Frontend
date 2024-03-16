import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { toast } from 'react-toastify';
import { getScheduleEvents } from '../../../utils/methods/get';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
interface DayProps {
  day: any;
}

const Day: React.FC<DayProps> = ({ day }) => {
  console.log(day,"day comingv d");
  
  const [dayEvents, setDayEvents] = useState<any[]>([]);
  const { setDaySelected, setShowEventModal, setSelectedEvent, dispatchCalEvent, showEventModal,monthIndex } = useContext(GlobalContext);
  const reviewerId = useSelector((state: any) => state?.reviewer?.reviewerData?.reviewerId);

  useEffect(() => {
    const fetchScheduleEvents = async () => {
      try {
        console.log("Fetching Schedule Events...");
       console.log(monthIndex+1,"hhhhhh");
       
        const response = await getScheduleEvents(reviewerId);

        if (response) {
          console.log("Fetched Schedule Events:", response.response[0].events);

          // Call the filtering function
          filterAndSetDayEvents(response.response[0].events);
        }
      } catch (err) {
        console.error("Error fetching schedule events:", err);
        // Handle errors
      }
    };

    fetchScheduleEvents();
  }, [showEventModal, reviewerId]); // Include 'reviewerId' in the dependency array

  const filterAndSetDayEvents = (eventsToFilter: any[]) => {
    console.log(eventsToFilter, "{}{}++++++");

    const events = eventsToFilter.filter(evt => {
      const eventDay = Array.isArray(evt.day) ? evt.day.map((d: number) => new Date(d)) : new Date(evt.day);
      console.log(eventDay,"evetDayyaaaaa");

      const isEventInMonth = eventDay.some((d: Date) => dayjs(d).isSame(day, 'month') && dayjs(d).isSame(day, 'year'));
      console.log(isEventInMonth,"isEventInMonth");

      const isDateMatch = evt.date.includes(day.format("DD-MM-YYYY"));
      console.log(isDateMatch,"{}{{))()()(");

      return isEventInMonth && isDateMatch;
    });

    console.log("Filtered Events:", events);
    setDayEvents(events);
  };

  const getCurrentDayClass = () => {
    return dayjs().isSame(day, 'day') ? 'bg-blue-600 text-white rounded-full w-7' : '';
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
