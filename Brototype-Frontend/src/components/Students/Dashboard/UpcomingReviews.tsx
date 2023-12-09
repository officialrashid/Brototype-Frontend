import {useEffect, useState} from "react";
import ExtendModal from "../Extend/ExtendModal";
import ReactGA from 'react-ga';
const UpcomingReviews = () => {
  useEffect(() => {
    console.log("keriyannuuuuu");
    ReactGA.pageview(window.location.pathname);
  }, []);

  const trackreview = (selectedWeek: string) => {
    // Track a custom event when a week is selected
    ReactGA.event({
      category: 'Weekly Performance Graph',
      action: 'Week Selected',
      label: selectedWeek,
      value:1
    });

   console.log("afterrrr");
   
    
  };
  const [newRequest,setNewRequets]=useState(false)
    return (
      <>
           <div className="border m-5 h-fit rounded-xl shadow-2xl bg-white">
            <div className="flex m-2 gap-2">

              <div className="px-4  border border-2px rounded-md hover:bg-custom-background py-1 cursor-pointer font-roboto"><span className="text-center
    " onClick={() => trackreview('week1')}> Upcoming</span></div>
              <div className="px-4  border  border-2px rounded-md cursor-pointer  hover:bg-custom-background  py-1 font-roboto "><span className="text-center
    "> Re-scheduled</span></div>
              <div className="px-4  border border-2px rounded-md hover:bg-custom-background  py-1 cursor-pointer font-roboto"><span className="text-center
    "> Postponded</span></div>
              <div className="px-4  border border-2px rounded-md hover:bg-custom-background  py-1 cursor-pointer font-roboto"><span className="text-center
    "> Cancelled</span></div>




            </div>
            <div className='mx-auto p-2 mt-4 '>
              <table className="w-full text-sm text-left  table-fixed">
                <thead className="text-xs text-gray-700 uppercase bg-custom-background shadow-xl dark:text-gray font-roboto">
                  <tr>
                    <th scope="col" className="w-1/4 px-5 py-6 text-center  rounded-s-md">
                      Week
                    </th>
                    <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                      Date
                    </th>
                    <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                      StartTime
                    </th>
                    <th scope="col" className="w-1/4 px-5 py-6  text-center">
                      Advisor
                    </th>
                    <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                      contact
                    </th>
                    <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                      Chat
                    </th>
                    <th scope="col" className="w-1/4 px-5 py-6 text-center">
                      Extend
                    </th>
                    <th scope="col" className="w-1/4 px-5 py-6 text-center rounded-e-md ">
                      Status
                    </th>

                  </tr>
                </thead>
              </table>
            </div>
            <div className='mx-auto p-2 mb-2 '>
              <table className="w-full text-sm text-left divide-y divide-y-8 border table-fixed border-gray-400 rounded-md font-roboto ">
                <thead className="text-md text-gray-700 bg-gray-100 shadow-2xl dark:text-gray-800">
                  <tr className="">
                    <th scope="col" className="w-1/4 px-4 py-6  text-center " style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>Week 1

                    </th>
                    <th scope="col" className="w-1/4 px-4 py-6 text-center">10/10/2022

                    </th>
                    <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>
                      10:00 am

                    </th>
                    <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>Yen

                    </th>
                    <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>9526603473

                    </th>
                    <th scope="col" className="w-1/4 px-4 py-6 text-center ">
                      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">Start Chat</span>
                    </th>
                    <th scope="col" className="w-1/4 px-4 py-6 text-center  ">
                      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer" onClick={()=>{setNewRequets(true)}} >Request</span>
                    </th>
                    <th scope="col" className="w-1/4 px-4 py-6 text-center  ">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">Completed</span>
                    </th>

                  </tr>
                </thead>
              </table>
            </div>



          </div> 
           <ExtendModal isVisible={newRequest} isClose={()=>{setNewRequets(false)}}/>
          </>

    );
}

export default UpcomingReviews;


