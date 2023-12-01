import React from 'react';

const SubTask = () => {
    return (
        <div>
            <div  className=" border border-2px m-9 border-b rounded-md shadow-xl data-collapse=collapse-1 bg-white">


<div className="m-7 border border-1px rounded-md shadow-xl border-black">

<div className="flex justify-between m-3 items-center py-2">


<div><span className='font-roboto'>1. Learn HTML, CSS by the end of this week</span></div>

<div className=""><span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">Completed</span></div>
</div>


</div>


<div className="m-7 border border-1px rounded-md shadow-xl border-black">

<div className="flex justify-between m-3 items-center py-2">


<div><span  className='font-roboto'>1. Learn HTML, CSS by the end of this week</span></div>

<div className=""><span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">Edit Task</span></div>
</div>


</div>




</div>
        </div>
    );
}

export default SubTask;
