// Day.tsx

import dayjs from 'dayjs';
import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../../context/GlobalContext';

interface DayProps {
  day: any;
  rowIdx: number;
}

const Day: React.FC<DayProps> = ({ day, rowIdx }) => {
  const [dayEvents, setDayEvents] = useState([]);
  const { setDaySelected, setShowEventModal, savedEvents } = useContext(GlobalContext);

  useEffect(() => {
    const events = savedEvents.filter(evt => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"));
    setDayEvents(events);
  }, [savedEvents, day]);

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'bg-blue-600 text-white rounded-full w-7' : '';
  };

  return (
    <div className='border border-custom-background flex flex-col font-roboto'>
      <header className='flex flex-col items-center'>
        {rowIdx === 0 && (
          <p className='text-sm mt-1'>{day.format("ddd").toUpperCase()}</p>
        )}
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
              className={`bg-${evt.label}-200 p-1 mr-2 text-gray-600 text-sm rounded mb-1 truncate`}
            >
              {evt.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Day;
