import React from "react";


interface Action {
  type: string;
  payload: any; // Replace 'any' with the actual type of your payload
}

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index: any) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index: any) => {},
  daySelected: null,
  setDaySelected: (day: any) => {},
  showEventModal: false,
  setShowEventModal: (index:any) => {},
  dispatchCalEvent: ({ type, payload }: Action) => {},
  savedEvents: [],
  selectedEvent : null,
  setSelectedEvent : () =>{},
  dates : [],
  setDates : () => [],
  dayId : [],
  setDayId : ()=> [],
  customType: null,
  setCustomType : () => null,
  selectedCustomWeek : [],
  setSelectedCustomWeek : ()=> []
});

export default GlobalContext;
