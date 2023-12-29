import React, { useContext, useState } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { createEvents } from '../../../utils/methods/post';
import { toast } from 'react-toastify';
import { updateEvents } from '../../../utils/methods/patch';
import { useNavigate } from 'react-router-dom';
import { deleteEvents } from '../../../utils/methods/delete';

const EventModal = () => {
    const navigate = useNavigate()
    const labelsClasses = ["yellow", "orange", "blue", "red"];
    const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } = useContext(GlobalContext)
    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
    const [startTime, setStartTime] = useState(selectedEvent ? selectedEvent.startTime  || "1:00am" : "1:00am")
    const [endTime, setEndTime] = useState(selectedEvent ? selectedEvent.endTime || "1:30am" : "1:30am")
    const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : "")
    const [selectedLabel, setSelctedLabel] = useState(
        selectedEvent
            ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
            : labelsClasses[2]
    )

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const reviewerId = "658b2fcbc4e61a5bab23060f"
        const calendarEvent = {
          reviewerId,
            startTime,
            endTime,
            label: selectedLabel,
            day: daySelected?.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now()
        }
        if (selectedEvent) {
            const response = await updateEvents(calendarEvent)
            if(response.status===true){
               toast.success("Events updated successfully")
               dispatchCalEvent({ type: 'update', payload: calendarEvent })
            }else{
                toast.warn("Event alresy added this time and date ")
            }
               
        } else {
            const response = await createEvents(calendarEvent)
            if(response.data.status===true){
                toast.success("event added successfully")
                dispatchCalEvent({ type: 'push', payload: calendarEvent })
              
        
            }else{
                toast.warn("Event alredy added this times")
            }
            
         

        }
        setShowEventModal(false)
    }
   const handleDelete = async(selectedEvent:any) =>{
        console.log(selectedEvent,"{}{}{++++099876543212566");
        const data:any= {
            id:selectedEvent.id,
             reviewerId : "658b2fcbc4e61a5bab23060f"
        }
        const response = await deleteEvents(data)
        console.log(response,"rasheeeeeeeeeeeeeee");
        
   }
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
                        {/* <input type="text" name='title' placeholder="Add Title"
                            value={title}
                            required
                            className='pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
                            onChange={(e) => setTitle(e.target.value)} /> */}
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
                                <select
                                    className="absolute inset-0 opacity-0 cursor-pointer w-16 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 font-roboto text-sm "
                                    onChange={(e) => setStartTime(e.target.value)}
                                    value={startTime}
                                >
                                    <option value="1:00am">1:00am</option>
                                    <option value="2:00am">2:00am</option>
                                    <option value="3:00am">3:00am</option>
                                    {/* Add more options as needed */}
                                </select>
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
                                <select
                                    className="absolute inset-0 opacity-0 cursor-pointer w-16 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                                    onChange={(e) => setEndTime(e.target.value)}
                                    value={endTime}
                                >
                                    <option value="1:00am">1:00am</option>
                                    <option value="2:00am">2:00am</option>
                                    <option value="3:30am">3:30am</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                        </div>

                        
                        <span></span>
                        {/* <span className='material-icons-outlined text-gray-400'>
                            segment
                        </span> */}
                        <span></span>
                        {/* <input type="text" name='description' placeholder="Add a description"
                            value={description}
                            required
                            className='pt-3 border-0 text-gray-600  pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500'
                            onChange={(e) => setDescription(e.target.value)} /> */}
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
