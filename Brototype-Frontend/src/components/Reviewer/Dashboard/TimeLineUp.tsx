import dayjs, { Dayjs } from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { getMonth } from "../ScheduleTime/Utils";
import GlobalContext from "../../../context/GlobalContext";
import { getTimeLineUp } from "../../../utils/methods/get";

interface Event {
  startTime: string;
  endTime: string;
  advisor: string;
  status: boolean;
  date: string;
}

const TimeLineUp: React.FC = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected } =
    useContext(GlobalContext);

  const handleSelectedDate = (e: React.MouseEvent<HTMLButtonElement>, day: Dayjs) => {
    e.preventDefault();
    setSelectedDate(day);
  };

  const handlePrevMonth = () => {
    setCurrentMonthIndex(currentMonthIndex - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex(currentMonthIndex + 1);
  };

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  useEffect(() => {
    const fetchTimeLineup = async () => {
      console.log(selectedDate.valueOf(),"[][][][]");
      
      const reviewerId = "658b2fcbc4e61a5bab23060f";
      const dayTimeLine = selectedDate.format("DD-MM-YYYY");
      const data = {
        reviewerId,
        dayTimeLine,
      };
      const events = await getTimeLineUp(data);
      console.log(events, "response vannu makkaleee");
      if(events.length>0){
        console.log("set aaayannuu");
        
        const formattedDate = selectedDate.format("DD-MM-YYYY");
        const filteredEvents = events;
        setFilteredEvents(filteredEvents);
      }else if(events.status===false){
        console.log("ketttt");
        
        setFilteredEvents([]);
      }
  
    };
    fetchTimeLineup();
  }, [selectedDate]);

  const getDayClass = (day: Dayjs) => {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return 'bg-blue-500 rounded-full text-white';
    } else if (currDay === slcDay) {
      return 'bg-blue-100 rounded-full text-blue-600 font-bold';
    } else {
      return '';
    }
  };

  return (
    <>
      <div className="w-46rem  h-24rem bg-white ml-5 rounded-xl shadow-xl border border-gray-300 hover hover:border-2 border-gray-300  ">
        <div className="flex">
          <h1 className="text-md ml-8 font-roboto font-semibold mt-3">Schedule</h1>
          <div className="relative group ml-33rem mt-1">
            {/* Dropdown button with dropdown icon */}
            <span
              className="text-white px-2 py-2 rounded-full flex items-cente top-3 right-3r text-sm font-roboto font-"
            >
              RequestLeave
            </span>
            <div className="w-80 h-72 bg-white right-0 mt-10 rounded-xl   border-gray-300 absolute overflow-y-auto ">
              <div className="mt-2">
                <h1 className="text-md  font-roboto font-semibold text-balck- ml-5">Today's Lineup</h1>
              </div>

              {filteredEvents.length > 0 ? (
                filteredEvents.map((evt, index) => (
                  <div key={index} className={`w-72 h-18 border ${evt.status ? 'border-blue-100' : 'border-blue-100'} ml-4 mt-3 rounded-xl`}>
                    <ol className={`absolute ml-2  border-s  ${evt.status ? 'border-green-500' : 'border-red-500'} dark:border-blue-700 ${filteredEvents.length === 0 ? 'h-0' : (index === filteredEvents.length - 1 ? 'h-10' : '')}`}>
                      <li className="mb-16 ms-4 ">
                        <div className={`absolute -start-1.5 mt-7 h-3 w-3 rounded-full border ${evt.status ? 'border-white bg-green-500 dark:border-blue-900 dark:bg-blue-700' : 'border-white bg-red-500 dark:border-gray-900 dark:bg-gray-700'}`}></div>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm"> </a>
                      </li>
                    </ol>
                    <div className="flex items-start">
                      <div className={`bg-blue-100 h-18 w-20 rounded-md`}>
                        <p className="mt-1 ml-4 text-sm font-roboto text-blue-600">{evt.startTime}</p>
                        <p className="ml-9 text-sm font-roboto text-blue-600">-</p>
                        <p className="mb-2 ml-4 text-sm font-roboto text-blue-600">{evt.endTime}</p>
                      </div>
                      <div className="flex flex-col ml-2 mt-5">
                        <h1 className={`font-roboto text-sm mt-2 text-black`}>event booking for Yen</h1>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center mt-4 text-gray-500">No events for the selected date</div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-3 w-96 ml-3">
          <header className="flex justify-between">
            <p className="text-gray-500 font-roboto ml-5">
              {dayjs(new Date(dayjs().year(), currentMonthIndex)).format("MMMM YYYY")}
            </p>
            <div>
              <button onClick={handlePrevMonth}>
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2 ">
                  chevron_left
                </span>
              </button>
              <button onClick={handleNextMonth}>
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                  chevron_right
                </span>
              </button>
            </div>
          </header>
          <div className="grid grid-cols-7 grid-rows-6 font-roboto">
            {currentMonth[0].map((day, i) => (
              <span key={i} className="text-sm py-1 text-center">
                {day.format("dd").charAt(0)}
              </span>
            ))}
            {currentMonth.map((row, i) => (
              <React.Fragment key={i}>
                {row.map((day, idx) => (
                  <button key={idx} className={`py-3 w-full ${getDayClass(day)}`} onClick={() => {
                    setSmallCalendarMonth(currentMonthIndex)
                    setDaySelected(day)
                  }}>
                    <span className="text-sm" onClick={(e) => handleSelectedDate(e, day)}>{day.format('D')}</span>
                  </button>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeLineUp;
