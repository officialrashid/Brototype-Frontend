import React from 'react';
import CreateEventButton from './createEventButton';
import SmallCalender from './smallCalender';
const SidebarCalender = () => {
    return (
        <aside className='border p-5 w-64'>
            
            <CreateEventButton/>
            <SmallCalender/>
        </aside>
    );
}

export default SidebarCalender;
