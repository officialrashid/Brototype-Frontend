import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getReviewTakeCount } from "../../../utils/methods/get";
import { useSelector } from "react-redux";

const Graph = () => {
  const [reviewCount, setReviewCount] = useState([]);
  const reviewerId = useSelector((state: any) => state?.reviewer?.reviewerData?.reviewerId);

  useEffect(() => {
    const fetchReviewCount = async () => {
      try {
        const response = await getReviewTakeCount(reviewerId);
        if (response.status === true) {
          setReviewCount(response.sortedCounts);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchReviewCount();
  }, [reviewerId]); // Add reviewerId to dependency array

  const week = {
    series: [
      {
        name: 'Review Count',
        data: reviewCount, // Use reviewCount here
      },
    ],
    options: {
      chart: {
        height: 250,
        type: 'area',
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
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
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yaxis: {
        min: 0,
        max: Math.max(...reviewCount) + 5, // Adjust max y-axis value
        tickAmount: 4,
        labels: {
          formatter: (value: number) => value.toFixed(0),
        },
      },
      tooltip: {
        x: {
          format: 'MM',
        },
      },
      colors: ['#66D3FA'],
    },
  };

  return (
    <div className="w-46rem  h-22rem bg-white ml-5 rounded-xl border border-gray-300 hover hover:border-2 border-gray-300 mt-5 ">
      <div className="flex">
        <h1 className="text-md ml-5 font-roboto font-semibold mt-5">Review Count</h1>
        <div className="relative group ml-36 mt-3">
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
        <ReactApexChart options={week.options} series={week.series} type="area" height={385} />
      </div>
    </div>
  );
}

export default Graph;
