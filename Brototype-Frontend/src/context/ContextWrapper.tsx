import dayjs from "dayjs";
import { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";

interface Event {
    id: number; // Replace 'number' with the actual type of your event ID
    // Add other properties of your event here
  }
  
  type ActionType = {
    type: "push" | "update" | "delete";
    payload: Event;
  };
  
  const savedEventsReducer = (state: Event[], action: ActionType): Event[] => {
    switch (action.type) {
      case "push":
        return [...state, action.payload];
      case "update":
        return state.map(evt => evt.id === action.payload.id ? action.payload : evt);
    case "delete":
        return state.filter(evt => evt.id !== action.payload.id);
      default:
        throw new Error();
    }
  };
  const initEvents = () =>{
    const storageEvents = localStorage.getItem('savedEvents')
    const parsedEvents =  storageEvents ? JSON.parse(storageEvents) : []
    return parsedEvents;
  };

const ContextWrapper = (props:any) => {
    const [monthIndex,setMonthIndex] = useState(dayjs().month())
    const [smallCalendarMonth,setSmallCalendarMonth] = useState(null)
    const [daySelected,setDaySelected] = useState(dayjs())
    const [showEventModal,setShowEventModal] = useState(false)
    const [savedEvents,dispatchCalEvent] = useReducer(savedEventsReducer,[],initEvents)
    const [selectedEvent, setSelectedEvent] = useState(null);
    useEffect(()=>{
      localStorage.setItem("savedEvents",JSON.stringify(savedEvents))
    },[savedEvents])

    useEffect(()=>{
        if(smallCalendarMonth !== null){
            setMonthIndex(smallCalendarMonth)
        }
    },[smallCalendarMonth])
    return (
       <GlobalContext.Provider value={{
        monthIndex,setMonthIndex,
        smallCalendarMonth,setSmallCalendarMonth,
        daySelected,setDaySelected,
        showEventModal,setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        }}>
            {props.children}
       </GlobalContext.Provider>
    );
}

export default ContextWrapper;
