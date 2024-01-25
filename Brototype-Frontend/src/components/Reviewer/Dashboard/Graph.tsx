
import React,{useEffect, useState} from "react";
import ReactApexChart from "react-apexcharts";
const Graph = () => {
    
  useEffect(()=>{
    //  fetchReviewCount()
  },[])

    const [week, setWeek] = useState({
        series: [
          {
            name: 'ReviewCountUp',
            data: [31, 40, 28, 51, 42, 109, 100],
          },
          {
            name: 'ReviewCountDown',
            data: [11, 32, 45, 32, 34, 52, 41],
          },
        ],
        options: {
          chart: {
            height: 350,
            type: 'area',
            toolbar: {
              show: true,
              offsetX: 0,
              offsetY: 0,
              tools: {
                zoom: '',
                zoomin: false,
                zoomout: false,
                download: true,
                selection: false,
                pan: false,
                reset: '',
      
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth',
            width: 2,
          },
          xaxis: {
            type: 'category', // Use 'category' for discrete labels
            categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm',
            },
          },
          colors: ['#66D3FA', '#437EE3'],
        },
      });
    return (
        <>
       <div className="w-22.5rem h-96 bg-white right-6 mb-48rem mt-14.9rem rounded-xl shadow-xl border border-gray-300 hover hover:border-2 border-gray-300 absolute">
     
       <div className="flex">
          <h1 className="text-md ml-5 font-roboto font-semibold mt-5">ReviewCount</h1>
          <div className="relative group ml-36 mt-3">

            <button
              className="border border-gray-350 text-black px-2 py-2 rounded flex items-cente top-3 right-3r text-sm font-roboto font-semibold"
           
            >
              Weekly
              <svg className="ml-2 w-4 h-4 fill-current text-gray-600 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L16 7z" />
              </svg>
            </button>


            <div className="absolute hidden bg-white shadow-md  rounded-md  group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => trackWeekSelection('week1')}>
                week1
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                week2
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                week3
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <ReactApexChart options={week.options} series={week.series} type="area" height={250} />
        </div>
    
      </div>
  
      </>
    );
}

export default Graph;
