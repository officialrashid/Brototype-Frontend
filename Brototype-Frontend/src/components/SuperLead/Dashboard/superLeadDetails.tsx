import React from 'react';
import MiniChart from 'react-mini-chart'
import Graph from './Graph';
import WeeklySummary from '../../Advisor /dashboard/WeeklySymmary';
import BestEmployeeGraph from './BestEmployeeGraph';
import BestEmployees from './BestEmployees';
const SuperLeadDetails = () => {
    return (
        <>
        <div>
        <div className="grid grid-rows-3 grid-flow-col gap-2 w- h-21/4 mt-36   top-0  fit">
                <div className="bg-white l rounded-xl border border-gray-300 hover hover:border-2 border-gray-300">
                   
                        <p className='font-roboto ml-6 mt-4 text-sm text-gray-500'>student of this  Year</p>
                        <h1 className="font-roboto text-2xl ml-14 font-medium mt-1 text-md">265k</h1>
                 

                    <div className="m-3 ml-6  ">
                        <MiniChart
                            strokeColor="#6466F2"
                            activePointColor="#6466F2"
                            activePointRadius={8}
                            strokeWidth={5}
                            labelFontSize={50}
                            width={120}
                            height={50}
                            dataSet={[0, -20, 343, 49.3, -100, 200, 78]} />


                    </div>
                </div>
                <div className="bg-white  rounded-xl border border-gray-300 hover hover:border-2 border-gray-300">
                   
                   <p className='font-roboto ml-6 mt-4 text-sm text-gray-500'>student of this  Year</p>
                   <h1 className="font-roboto text-2xl ml-14 font-medium mt-1 text-md">265k</h1>
            

               <div className="m-3 ml-6  ">
                   <MiniChart
                       strokeColor="#ff0000"
                       activePointColor="#ff0000"
                       activePointRadius={8}
                       strokeWidth={5}
                       labelFontSize={50}
                       width={120}
                       height={50}
                       dataSet={[0, -20, 343, 49.3, -100, 200, 78]} />


               </div>
           </div>
           <div className="bg-white  rounded-xl border border-gray-300 hover hover:border-2 border-gray-300">
                   
                   <p className='font-roboto ml-6 mt-4 text-sm text-gray-500'>student of this  Year</p>
                   <h1 className="font-roboto text-2xl ml-14 font-medium mt-1 text-md">265k</h1>
            

               <div className="m-3 ml-6  ">
                   <MiniChart
                       strokeColor="#F1BB67"
                       activePointColor="#F1BB67"
                       activePointRadius={8}
                       strokeWidth={5}
                       labelFontSize={50}
                       width={120}
                       height={50}
                       dataSet={[0, -20, 343, 49.3, -100, 200, 78]} />


               </div>
           </div>
           <div className="bg-white  rounded-xl border border-gray-300 hover hover:border-2 border-gray-300">
                   
                   <p className='font-roboto ml-6 mt-4 text-sm text-gray-500'>student of this  Year</p>
                   <h1 className="font-roboto text-2xl ml-14 font-medium mt-1 text-md">265k</h1>
            

               <div className="m-3 ml-6  ">
                   <MiniChart
                       strokeColor="#03c3ec"
                       activePointColor="#03c3ec"
                       activePointRadius={8}
                       strokeWidth={5}
                       labelFontSize={50}
                       width={120}
                       height={50}
                       dataSet={[0, -20, 343, 49.3, -100, 200, 78]} />


               </div>
           </div>
           <div className="bg-white  rounded-xl border border-gray-300 hover hover:border-2 border-gray-300">
                   
                   <p className='font-roboto ml-6 mt-4 text-sm text-gray-500'>student of this  Year</p>
                   <h1 className="font-roboto text-2xl ml-14 font-medium mt-1 text-md">265k</h1>
            

               <div className="m-3 ml-6  ">
                   <MiniChart
                       strokeColor="#00ff00"
                       activePointColor="#00ff00"
                       activePointRadius={8}
                       strokeWidth={5}
                       labelFontSize={50}
                       width={120}
                       height={50}
                       dataSet={[0, -20, 343, 49.3, -100, 200, 78]} />


               </div>
           </div>
           <div className="bg-white  rounded-xl border border-gray-300 hover hover:border-2 border-gray-300">
                   
                   <p className='font-roboto ml-6 mt-4 text-sm text-gray-500'>student of this  Year</p>
                   <h1 className="font-roboto text-2xl ml-14 font-medium mt-1 text-md">265k</h1>
            

               <div className="m-3 ml-6  ">
                   <MiniChart
                       strokeColor="#8492A3"
                       activePointColor="#8492A3"
                       activePointRadius={8}
                       strokeWidth={5}
                       labelFontSize={50}
                       width={120}
                       height={50}
                       dataSet={[0, -20, 343, 49.3, -100, 200, 78]} />


               </div>
           </div>

        </div>
    


           
          

       

            </div>
  
     
        </>
    );
}

export default SuperLeadDetails;
