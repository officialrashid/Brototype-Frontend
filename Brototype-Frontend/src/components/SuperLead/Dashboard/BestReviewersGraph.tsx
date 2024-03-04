import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { getHubWiseStudentsDetails } from "../../../utils/methods/get";

const BestReviewersGraph = () => {
    const [series, setSeries] = useState([44, 55, 13, 33]);
    const superleadUniqueId: string = useSelector((state: any) => state?.superlead?.superleadData?.uniqueId) || localStorage.getItem("superleadUniqueId")
    const [analyzeDetails,setAnalyzeDetails] = useState("")
    useEffect(()=>{
       const fetchHubWiseStudentDetails =  async  () =>{
           try {
             const response = await getHubWiseStudentsDetails(superleadUniqueId)
             console.log(response,"response in side sectionsss");
             if(response.status===true){
                setAnalyzeDetails(response)
             }
           } catch (err) {

           }
       }
       fetchHubWiseStudentDetails()
    },[])
    const [options] = useState({
        chart: {
            width: 380,
            type: 'donut',
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    show: false
                }
            }
        }],
        legend: {
            show: false,
        },
        labels: ['Good', 'Average', 'Poor', 'Outstanding'], // Change series names
        fill: {
            colors: ['#70DD38', '#8082FF', '#8492A3', '#03c3ec']
        },
        stroke: {

            width: 8,

        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: 12,
                            offsetY: 3
                        },
                        value: {
                            show: true,
                            fontSize: 15,
                            offsetY: 3
                        }
                    }
                }
            }
        }
    });

    return (
        <div>
            <div className="chart-wrap ">
                <div id="chart" className="flex flex-row justify-between  ">
                    <div className="m-2 mt-5">
                        <span className="text-2xl font-roboto ">{analyzeDetails.reviewersCount}</span><br></br>
                        <span className="text-sm font-roboto text-gray-500">Reviewers</span>
                    </div>
                    <ReactApexChart options={options} series={series} type="donut" width={180} />
                </div>
            </div>
        </div>
    );
}

export default BestReviewersGraph;
