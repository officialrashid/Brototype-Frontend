import  { useState } from 'react';
import TaskModal from './TaskModal';
const SubTask = () => {
    const [activeModal, setActiveModal] = useState(false);
    return (
        <div>
            <div className=" border border-2px m-9 border-b rounded-md shadow-xl data-collapse=collapse-1">
                <div className="m-7 border border-1px rounded-md shadow-xl border-black">
                    <div className="flex justify-between m-2 items-center py-2">
                        <div><span >1. Learn HTML, CSS by the end of this week</span></div>
                        <div className=""><button className=" bg-red-700 rounded-md px-3 py-1 text-white" onClick={() => { setActiveModal(true) }}>Complete</button></div>
                    </div>
                </div>
                <div className="m-7 border border-1px rounded-md shadow-xl border-black">
                    <div className="flex justify-between m-2 items-center py-2">
                        <div><span >1. Learn HTML, CSS by the end of this week</span></div>
                        <div className=""><button className=" bg-sky-700 rounded-md px-8 py-1 text-white" onClick={() => { setActiveModal(true) }}>Edit</button></div>
                    </div>
                </div>
            </div>
            <TaskModal isVisible={activeModal} onclose={() => { setActiveModal(false) }} />
        </div>
    );
}

export default SubTask;
