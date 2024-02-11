import React, { useContext, useState } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { createEvents } from '../../../utils/methods/post';
import { toast } from 'react-toastify';
import { updateEvents } from '../../../utils/methods/patch';
import { deleteEvents } from '../../../utils/methods/delete';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import dayjs from 'dayjs';

const EventModal = () => {
    const navigate = useNavigate();
    const labelsClasses = ["yellow", "orange", "blue", "red"];
    const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } = useContext(GlobalContext);
    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
    const [startTime, setStartTime] = useState(selectedEvent ? selectedEvent.startTime || "9:00am" : "9:00am");
    const [endTime, setEndTime] = useState(selectedEvent ? selectedEvent.endTime || "9:30am" : "9:30am");
    const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : "");
    const [selectedLabel, setSelctedLabel] = useState(
        selectedEvent
            ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
            : labelsClasses[2]
    );
    const [validationError, setValidationError] = useState(null);
    const validationSchema = Yup.object().shape({
        startTime: Yup.string()
          .required('Start time is required')
          .matches(
            /^(1[0-2]|0?[1-9]):[0-5][0-9][APMapm]{2}$/,
            'Invalid time format (e.g., 11:30am)'
          ),
        endTime: Yup.string()
          .required('End time is required')
          .matches(
            /^(1[0-2]|0?[1-9]):[0-5][0-9][APMapm]{2}$/,
            'Invalid time format (e.g., 11:30am)'
          )
          .test({
            name: 'startEndTimeOrder',
            message: 'End time must be greater than start time',
            test: function (endTime) {
              const { startTime } = this.parent;
          
              if (startTime && endTime) {
                const [startHour, startMinute, startPeriod] = startTime.match(
                  /^(1[0-2]|0?[1-9]):([0-5][0-9])([APMapm]{2})$/
                ).slice(1);
          
                const [endHour, endMinute, endPeriod] = endTime.match(
                  /^(1[0-2]|0?[1-9]):([0-5][0-9])([APMapm]{2})$/
                ).slice(1);
          
                if (startPeriod === 'am' && endPeriod === 'pm') {
                  return true;
                }
          
                if (startPeriod === 'pm' && endPeriod === 'am') {
                  return false;
                }
          
                // Compare hours and minutes
                const startTotalMinutes = parseInt(startHour) * 60 + parseInt(startMinute);
                const endTotalMinutes = parseInt(endHour) * 60 + parseInt(endMinute);
          
                return startTotalMinutes < endTotalMinutes;
              }
          
              return false;
            },
          }),
          
      });
      
    
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await validationSchema.validate({
                startTime,
                endTime,
                // Add other fields if needed
            });

            const reviewerId = "658b2fcbc4e61a5bab23060f";
            const calendarEvent = {
                reviewerId,
                startTime,
                endTime,
                label: selectedLabel,
                day: daySelected?.valueOf(),
                id: selectedEvent ? selectedEvent.id : Date.now(),
                date: daySelected ? dayjs(daySelected).format("DD-MM-YYYY") : "", // Format the date
              };
              console.log(calendarEvent,"dnbcdbhcdbhvdhcdhgc");
              
            if (selectedEvent) {
                const response = await updateEvents(calendarEvent);
                if (response.status === true) {
                    toast.success("Events updated successfully");
                    dispatchCalEvent({ type: 'update', payload: calendarEvent });
                } else {
                    toast.warn("Event already added at this time and date");
                }
            } else {
                const response = await createEvents(calendarEvent);
                if (response.data.status === true) {
                    toast.success("Event added successfully");
                    dispatchCalEvent({ type: 'push', payload: calendarEvent });
                } else {
                    toast.warn("Event already added at this time");
                }
            }

            // Clear validation error on successful submission
            setValidationError(null);
            setShowEventModal(false);
        } catch (error) {
            // Set validation error
            setValidationError(error.message);
            // toast.error(error.message);
        }
    };

    const handleDelete = async (selectedEvent) => {
        const data = {
            id: selectedEvent.id,
            reviewerId: "658b2fcbc4e61a5bab23060f",
        };

        const response = await deleteEvents(data);
        console.log(response, "response");
    };

    return (
        <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
            <form className='bg-white rounded-lg shadow-2xl w-1/4'>
                <header className='bg-gray-100 px-4 py-2 flex justify-between items-center'>
                    <span className='material-icons-outlined text-gray-400'>
                        drag_handle
                    </span>
                    <div>
                        {selectedEvent && (
                            <span
                                onClick={() => {
                                    handleDelete(selectedEvent)
                                    dispatchCalEvent({
                                        type: "delete", payload: selectedEvent
                                    })
                                    setShowEventModal(false)
                                }}
                                className='material-icons-outlined text-gray-400 cursor-pointer mr-3'
                            >
                                delete
                            </span>
                        )}
                        <button onClick={() => setShowEventModal(false)}>
                            <span className='material-icons-outlined text-gray-400'>
                                close
                            </span>
                        </button>
                    </div>
                </header>
                <div className='p-3'>
                    <div className='grid grid-cols-1/5 items-end gap-y-7'>
                        <div></div>
                        <h1 className='font-roboto font-bold ml-10 mt-5 '>Shedule Your Time</h1>
                        <span className='material-icons-outlined text-gray-400 mb-4'>
                            schedule
                        </span>
                        <div className='flex flex-3'>
                            <p className='font-roboto'>{daySelected.format("dddd, MMMM DD")}</p>
                            <div className="relative">
                                <input
                                    type="text"
                                    name='startTime'
                                    placeholder="1:00am"
                                    value={startTime}
                                    required
                                    className='pl-2 border-0 text-gray-600 text-sm font-roboto pb-2 w-16 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
                                    onChange={(e) => setStartTime(e.target.value)}
                                />
                                {/* <select
                                    className="absolute inset-0 opacity-0 cursor-pointer w-16 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 font-roboto text-sm "
                                    onChange={(e) => setStartTime(e.target.value)}
                                    value={startTime}
                                >
                               <option value="9:00am">9:00am</option>
                                    <option value="9:30am">9:30am</option>
                                    <option value="10:00am">10:00am</option>
                                    <option value="10:30am">10:30am</option>
                                    <option value="11:00am">11:00am</option>
                                    <option value="11:30am">11:30am</option>  
                                    <option value="12:00pm">12:00am</option>
                                    <option value="12:30pm">12:30am</option>
                                    <option value="1:00pm">1:00pm</option>
                                    <option value="1:30pm">1:30pm</option>
                                    <option value="2:00pm">2:00pm</option>
                                    <option value="2:30pm">2:30pm</option>
                                    <option value="3:00pm">3:00pm</option>
                                    <option value="3:30pm">3:30pm</option>
                                    <option value="4:00pm">4:00pm</option>
                                    <option value="4:30pm">4:30pm</option>
                                    <option value="5:00pm">5:00pm</option>
                                    <option value="5:30pm">5:30pm</option>
                                    <option value="6:00pm">6:00pm</option>
                                    <option value="6:30pm">6:30pm</option>
                                    <option value="7:00pm">7:00pm</option>
                                    <option value="7:30pm">7:30pm</option>
                                    <option value="8:00pm">8:00pm</option>
                                    <option value="8:30pm">8:30pm</option>
                                    <option value="9:00pm">9:00pm</option>
                                    <option value="9:30pm">9:30pm</option>
                            
                                </select> */}
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    name='endTime'
                                    placeholder="1:00am"
                                    value={endTime}
                                    required
                                    className='pl-2 border-0 text-gray-600 text-sm font-roboto pb-2 w-16 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 '
                                    onChange={(e) => setEndTime(e.target.value)}
                                />
                                {/* <select
                                    className="absolute inset-0 opacity-0 cursor-pointer w-16 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                                    onChange={(e) => setEndTime(e.target.value)}
                                    value={endTime}
                                >
                                  <option value="9:00am">9:00am</option>
                                    <option value="9:30am">9:30am</option>
                                    <option value="10:00am">10:00am</option>
                                    <option value="10:30am">10:30am</option>
                                    <option value="11:00am">11:00am</option>
                                    <option value="11:30am">11:30am</option>  
                                    <option value="12:00pm">12:00am</option>
                                    <option value="12:30pm">12:30am</option>
                                    <option value="1:00pm">1:00pm</option>
                                    <option value="1:30pm">1:30pm</option>
                                    <option value="2:00pm">2:00pm</option>
                                    <option value="2:30pm">2:30pm</option>
                                    <option value="3:00pm">3:00pm</option>
                                    <option value="3:30pm">3:30pm</option>
                                    <option value="4:00pm">4:00pm</option>
                                    <option value="4:30pm">4:30pm</option>
                                    <option value="5:00pm">5:00pm</option>
                                    <option value="5:30pm">5:30pm</option>
                                    <option value="6:00pm">6:00pm</option>
                                    <option value="6:30pm">6:30pm</option>
                                    <option value="7:00pm">7:00pm</option>
                                    <option value="7:30pm">7:30pm</option>
                                    <option value="8:00pm">8:00pm</option>
                                    <option value="8:30pm">8:30pm</option>
                                    <option value="9:00pm">9:00pm</option>
                                    <option value="9:30pm">9:30pm</option>
          
                                </select> */}
                            </div>
                        </div>
                        <span></span>
                        <span></span>
                        <span className='material-icons-outlined text-gray-400'>
                            bookmark_border
                        </span>
                        <div className='flex gap-x-2'>
                            {labelsClasses.map((lblClass, i) => (
                                <span key={i}
                                    onClick={() => setSelctedLabel(lblClass)}
                                    className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                                >
                                    {selectedLabel === lblClass && (
                                        <span className='material-icons-outlined text-white text-sm'>
                                            check
                                        </span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Add this block to display the validation error */}
                    {validationError && (
                        <div className="text-red-500 font-roboto text-s mt-3">{validationError}</div>
                    )}
                </div>
                <footer className='flex justify-end w-100 border-t p-3 mt-5'>
                    <button type='submit'
                        onClick={handleSubmit}
                        className='bg-black hover:bg-gray-600 px-6 py-2 rounded text-white'>
                        save
                    </button>
                </footer>
            </form>
        </div>
    );
}

export default EventModal;
