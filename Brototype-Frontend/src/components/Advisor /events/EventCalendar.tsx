
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import AddEvent from './AddEvent'
import { useState } from 'react'
const localizer = momentLocalizer(moment)

const EventCalendar=()=>{
  const [Modal,setModal]=useState(false)

    const events=[
        {
          'title': 'All Day Event very long title',
          'allDay': true,
          'start': new Date(2023, 12, 0),
          'end': new Date(2024, 1, 1)
        },
        {
          'title': 'Long Event',
          'start': new Date(2023, 3, 7),
          'end': new Date(2023, 3, 10)
        },
      
        {
          'title': 'DTS STARTS',
          'start': new Date(2016, 2, 13, 0, 0, 0),
          'end': new Date(2016, 2, 20, 0, 0, 0)
        },
      
        {
          'title': 'DTS ENDS',
          'start': new Date(2016, 10, 6, 0, 0, 0),
          'end': new Date(2016, 10, 13, 0, 0, 0)
        },
      
        {
          'title': 'Some Event',
          'start': new Date(2023, 3, 9, 0, 0, 0),
          'end': new Date(2023, 3, 9, 0, 0, 0)
        },
        {
          'title': 'Conference',
          'start': new Date(2023, 3, 11),
          'end': new Date(2023, 3, 13),
          desc: 'Big conference for important people'
        },
        {
          'title': 'Meeting',
          'start': new Date(2023, 3, 12, 10, 30, 0, 0),
          'end': new Date(2023, 3, 12, 12, 30, 0, 0),
          desc: 'Pre-meeting meeting, to prepare for the meeting'
        },
        {
          'title': 'Lunch',
          'start': new Date(2023, 3, 12, 12, 0, 0, 0),
          'end': new Date(2023, 3, 12, 13, 0, 0, 0),
          desc: 'Power lunch'
        },
        {
          'title': 'Meeting',
          'start': new Date(2023, 3, 12, 14, 0, 0, 0),
          'end': new Date(2023, 3, 12, 15, 0, 0, 0)
        },
        {
          'title': 'Happy Hour',
          'start': new Date(2023, 3, 12, 17, 0, 0, 0),
          'end': new Date(2023, 3, 12, 17, 30, 0, 0),
          desc: 'Most important meal of the day'
        },
        {
          'title': 'Dinner',
          'start': new Date(2023, 3, 12, 20, 0, 0, 0),
          'end': new Date(2023, 3, 12, 21, 0, 0, 0)
        },
        {
          'title': 'Birthday Party',
          'start': new Date(2023, 3, 13, 7, 0, 0),
          'end': new Date(2023, 3, 13, 10, 30, 0)
        },
        {
          'title': 'Birthday Party 2',
          'start': new Date(2023, 3, 13, 7, 0, 0),
          'end': new Date(2023, 3, 13, 10, 30, 0)
        },
        {
          'title': 'Birthday Party 3',
          'start': new Date(2023, 3, 13, 7, 0, 0),
          'end': new Date(2023, 3, 13, 10, 30, 0)
        },
        {
          'title': 'Late Night Event',
          'start': new Date(2023, 3, 17, 19, 30, 0),
          'end': new Date(2023, 3, 18, 2, 0, 0)
        },
        {
          'title': 'Multi-day Event',
          'start': new Date(2023, 3, 20, 19, 30, 0),
          'end': new Date(2023, 3, 22, 2, 0, 0)
        }
      ]
    return (
        <>
        <div className="border   flex rounded-md justify-between bg-white">
  <div className="m-4 ">
    <div>
      <span className="text-2xl font-semibold">December 20, 2023</span>

    </div>
     <div className='mt-2'>
      <span>Today You have 4 upcoming events</span>

    </div>

  </div>
  <div className="mt-8 mr-4"> 
    <span className="text-2xl">8:20 pm</span>

  </div>
</div>

<div className=" mt-4  flex gap-2  " >
  <div className='bg-white  rounded-md '>
  <Calendar
   
   localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 1000,width:750}}
      events={events}
      className=''
    />

  </div>

  <div className='w-full '>
  <button className="py-2 bg-white  w-full rounded-md shadow-sm " onClick={()=>{setModal(true)}}> <span className='text-xl'>+</span> <span className='font-semibold'>Add New Event</span> </button>
 
  <div className="border-l-4 border-l-gray-400  border rounded-md   mt-4 bg-white ">
    <div className='m-2 '>

   
  <div className="flex justify-between  mb-0">
    <div><span className='text-md'>Onlne-meeting</span></div>
  <div><span className='text-xs'>December 23, 2023</span></div>

  </div>
  <div className=" mt-0 mb-0">
    <span className='text-sm'>Your online meeting with your </span>
  </div>
   <div className=" mt-0">
    <span className='text-sm'>Maradu, Kochi</span>
  </div>
  
</div>
  </div>
  <div className="border-l-4 border-l-gray-400  border rounded-md   mt-4 bg-white ">
    <div className='m-2 '>

   
  <div className="flex justify-between  mb-0">
    <div><span className='text-md'>Onlne-meeting</span></div>
  <div><span className='text-xs'>December 23, 2023</span></div>

  </div>
  <div className=" mt-0 mb-0">
    <span className='text-sm'>Your online meeting with your </span>
  </div>
   <div className=" mt-0">
    <span className='text-sm'>Maradu, Kochi</span>
  </div>
  
</div>
  </div>
  <div className="border-l-4 border-l-gray-400  border rounded-md   mt-4 bg-white ">
    <div className='m-2 '>

   
  <div className="flex justify-between  mb-0">
    <div><span className='text-md'>Onlne-meeting</span></div>
  <div><span className='text-xs'>December 23, 2023</span></div>

  </div>
  <div className=" mt-0 mb-0">
    <span className='text-sm'>Your online meeting with your </span>
  </div>
   <div className=" mt-0">
    <span className='text-sm'>Maradu, Kochi</span>
  </div>
  
</div>
  </div>
  
  
  
  
  </div>

    
    </div>
    <AddEvent isVisible={Modal} onClose={()=>{setModal(false)}}/>
        
        </>
    )
}

export default EventCalendar