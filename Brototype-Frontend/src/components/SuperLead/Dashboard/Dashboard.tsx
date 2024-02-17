
import Box from "./Box"


import ReactApexChart from "react-apexcharts"

// import Footer from "../Footer"

import profile from '../assets/images/profile.webp'
import WeeklySummary from "../../Advisor /dashboard/WeeklySymmary"
import CalendarComp from "../../Advisor /CalendarComp"
import SuperLeadDetails from "./superLeadDetails"
import Graph from "./Graph"
import BestEmployees from "./BestEmployees"
import BestEmployeeGraph from "./BestEmployeeGraph"
import TableNav from "../../Advisor /dashboard/TableNav"
import NewTask from "../../Advisor /dashboard/NewTask"
import SideSections from "./SideSections"



const Dashboard = () => {
    const series = [70]; //70 percent
    const options = {

        labels: [], //label of this diagram
        plotOptions: {
            radialBar: {

                dataLabels: {
                    name: {
                        show: false, // Set to true if you want to display the category (name) labels
                    },

                    value: {
                        show: false, // Set to true if you want to display the value labels
                    },

                }
            },

        },
        colors: ['#347dc1']
    }

    return (
        <>
        <div>
        <div className="flex  border border-red-20 ">
                <div className="w-2/4 mt-36 ml-48">
                    <div className=" border   rounded-lg  m-4 mt-0  mb-0 h-fit bg-white  ">
                        <div className="flex justify-between m-4 h-28">
                            <div  className="mt-3">
                                <span className="font-roboto ">Helloo advisor!!!!!</span>
                                <div className="mt-2">
                                    <span className="font-roboto ">Complete your task</span>
                                </div>
                                <div>
                            <span className="font-roboto inline-flex items-center rounded-md bg-bgsuperLead px-2 py-1 text-xs font-medium text-dark-highBlue cursor-pointer mt-3">SuperLead @Brototype</span>
                            
                        </div>
                              
                            </div>
                            <div className=" border-gray-400  h-28 w-36  flex  items-center justify-center"  >
                                <img src="/superLead.png" className=" h-28 w-36" alt="" />

                            </div>

                        </div>


                    </div>


                    <div className="border m-4 mb-0 rounded-md bg-white ">
                        <div className="m-2">
                            <span className="font-semibold font-roboto">Weekly summary</span>
                        </div>
                       <Graph/>
                    </div>
                    <div className="flex gap-2">
                    <div className="border m-4 mr-0 rounded-md bg-white w-2/4 ">
                  
                        <div className="m-2 mb-0 ">
                            <span className="font-semibold font-roboto">Best 5 Advisor</span>
                            <BestEmployeeGraph/>
                        </div>
                        
                     
                       <BestEmployees/>
                  
                        </div>
                        <div className="border m-4 ml-0  rounded-md bg-white w-2/4 ">
                  
                  <div className="m-2 mb-0">
                      <span className="font-semibold font-roboto">Best 5 Reviewer</span>
                      <BestEmployeeGraph/>
                  </div>
                 <BestEmployees/>
            
                  </div>
            
                    </div>
                   
             
                
                </div>
                
                <div className="">
                <SideSections/>

                </div>
           
    
           

            </div>

            <div className="flex  gap-6  mt-0  h-48 ">
                    <div className="  bg-red-200 w-1/2  ml-52 rounded-md">
                        fefw
                
            
            </div>
            <div className=" bg-red-400 w-1/2 h-48 mr-40  rounded-md">
                
  frfw
             </div> 
                    </div>

        </div>
            
         
            






        </>
    )
}

export default Dashboard