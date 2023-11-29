
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts'

const Sidebar = () => {
  useEffect(() => {
    // Chart options and configuration
    const options = {
      series: [67],
      chart: {
        height: 230,
        type: 'radialBar',
        offsetY: -10,
        offsetX: -70,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: '16px',
              color: undefined,
              offsetY: 120,
            },
            value: {
              offsetY: 76,
              fontSize: '13px',
              color: '#715DA6',
              formatter: function (val: string) {
                return val + '%';
              },
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
          colorStops: [{
            offset: 0,
            color: '#715DA6' // Set the color to red (#FF0000)
          }]
        },
      },
      stroke: {
        dashArray: 1,
      },
      labels: ['']

    };

    // Initialize and render the chart
    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();

    // Cleanup the chart on component unmount
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array ensures that this effect runs only once on mount



  const students = [
    { id: 1, name: 'Rashid', profileImage: '/profile.jpeg', progress: 80, week: 28 },
    { id: 2, name: 'Ashish', profileImage: '/secondStudent.jpg', progress: 10, week: 20 },
    { id: 3, name: 'Reeja', profileImage: '/thirdStudent.jpg', progress: 35, week: 18 },
    { id: 4, name: 'shaheem', profileImage: '/profile.jpeg', progress: 45, week: 28 },
    { id: 5, name: 'abdu', profileImage: '/profile.jpeg', progress: 65, week: 24 },
  ];



  const [state, setState] = useState({
    series: [
      {
        name: 'Completed',
        data: [31, 40, 28, 51, 42, 109, 100],

      },
      {
        name: 'Not Completed',
        data: [11, 32, 45, 32, 34, 52, 41],

      },

    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
          offsetX: 0,
          offsetY: 0,
          tools: {
            zoom: '',
            zoomin: false,
            zoomout: false,
            download: false,
            selection: false,
            pan: false,
            reset: ''
          }
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
        type: 'Day',
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      colors: ['#00ff00', '#ff0000'],
    },
  });


  const [week, setWeek] = useState({
    series: [
      {
        name: 'Passed',
        data: [31, 40, 28, 51, 42, 109, 100],

      },
      {
        name: 'Repeat',
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
            reset: ''
          }
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
        type: 'Day',
        categories: ['Week01', 'week02', 'week03', 'week04', 'week05', 'week06', 'week07'],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      colors: ['#6E59A3', '#F1BB67'],
    },
  });

  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "/dashboard (3).png" },
    { title: "Profile", src: "Chat" },
    { title: "Review", src: "User", gap: true },
    { title: "Task", src: "Calendar" },
    { title: "Extend", src: "Search" },
    { title: "Chat", src: "Chart" },
    { title: "Commmunication ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (

    <div className="">
      <div className="flex">
        <div
          className={` ${open ? "w-72" : "w-20"
            }  h-screen p-5  pt-8 relative duration-300 border shadow-xl`}
        >
          {/* <img
                        src="/control.png"
                        className={`absolute cursor-pointer -right-3 top-9 w-7 border-gray-600
           border-2 rounded-full  ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                    /> */}
          {/* <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div> */}
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-custom-background text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-custom-background"
                  } `}
              >
                <img src={Menu.src} className="w-5 h-auto" />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/*///// sidebar component End/////// */}

        <div className="h-auto flex-1  bg-custom-background ">
          {/* <div className="flex-1"> */}

          <div className="w-48rem h-48 mt-5 ml-3 rounded-xl shadow-md bg-white relative border border-gray-300 hover hover:border-2 border-gray-300">
            <div>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <img src="/studyImage.png" alt="" className="w-40 mt-5 ml-3" />
              </motion.div>
            </div>

            <div className="w-72 h-36 absolute top-3 left-32">
              <h1 className="ml-24 text-xl font-semibold mt-10 font-roboto">Muhammed Rashid. k</h1>
              <h4 className="ml-28 mt-1 text-gray-500 mt-2 text-sm font-roboto">Mern stack developer</h4>
              <div className="flex ml-28 gap-3 mt-3">
                <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">BCE55</span>
                <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">Remote</span>
              </div>
            </div>
            <div className="border border-2px w-28 h-28 m-8 shadow-xl rounded-md absolute top-3 right-3">
              <img src="/profile.jpeg" alt="" className="w-full h-full rounded-md" />
            </div>
          </div>
          <div className="flex h-16rem">
            <div className="grid grid-rows-2 grid-flow-col gap-2 w-96 h-72 mt-3 ml-3 ">
              <div className="bg-white shadow-xl rounded-xl border border-gray-300 hover hover:border-2 border-gray-300">
                <div className="bg-custom-background w-12 h-10 ml-8 mt-5 rounded-md shadow-sm flex ">
                  <img src="/success.png" alt="" className="h-10 ml-1 " />
                  <h1 className="font-roboto text-2xl ml-8 font-medium mt-1 ">28</h1>
                </div>

                <h1 className="font-roboto text-sm ml-8 font-medium mt-7 text-gray-400 absolute">Total Week Completed</h1>
                <img src="/success.png" alt="" className="h-20 w-20 ml-24 relative mb-3 mt-0 opacity-5" />
              </div>
              <div className="bg-white shadow-xl rounded-xl border border-gray-300 hover hover:border-2 border-gray-300">
                <div className="bg-custom-background w-12 h-10 ml-8 mt-5 rounded-md shadow-sm flex ">
                  <img src="weekPerformance.png" alt="" className="h-10 ml-1 " />
                  <h1 className="font-roboto text-2xl ml-8 font-medium mt-1 ">28</h1>
                </div>

                <h1 className="font-roboto text-sm ml-8 font-medium mt-7 text-gray-400 absolute">Weekly Performance</h1>
                <img src="/weekPerformance.png" alt="" className="h-20 w-20 ml-24 relative mb-3 mt-0 opacity-5" />
              </div>
              <div className="bg-white shadow-xl rounded-xl border border-gray-300 hover hover:border-2 border-gray-300">
                <div className="bg-custom-background w-12 h-10 ml-8 mt-5 rounded-md shadow-sm flex ">
                  <img src="/performance (1).png" alt="" className="h-10 ml-1 " />
                  <h1 className="font-roboto text-2xl ml-8 font-medium mt-1 ">28</h1>
                </div>

                <h1 className="font-roboto text-sm ml-8 font-medium mt-7 text-gray-400 absolute">Overall Performance</h1>
                <img src="/performance (1).png" alt="" className="h-20 w-20 ml-24 relative mb-3 mt-0 opacity-5" />
              </div>
              <div className="bg-white shadow-xl rounded-xl border border-gray-300 hover hover:border-2 border-gray-300">
                <div className="bg-custom-background w-12 h-10 ml-8 mt-5 rounded-md shadow-sm flex ">
                  <img src="/failure.png" alt="" className="h-10 ml-1 " />
                  <h1 className="font-roboto text-2xl ml-8 font-medium mt-1 ">28</h1>
                </div>

                <h1 className="font-roboto text-sm ml-8 font-medium mt-7 text-gray-400 absolute">Total Repeat</h1>
                <img src="/failure.png" alt="" className="h-20 w-20 ml-24 relative mb-3 mt-0 opacity-5" />
              </div>

            </div>
            <div className="w-23.2rem h-72 bg-white ml-3 mb-48rem mt-3 rounded-xl shadow-xl border border-gray-300 hover hover:border-2 border-gray-300">

              <ReactApexChart options={state.options} series={state.series} type="area" height={280} />
            </div>

          </div>
          <div className="w-48rem mt-14  h-22rem bg-white ml-3 rounded-xl shadow-xl border border-gray-300 hover hover:border-2 border-gray-300 ">
            <div className="flex">
              <h1 className="text-md ml-5 font-roboto font-semibold mt-5">Performance</h1>
              <div className="relative group  ml-34rem mt-3">
                {/* Dropdown button with dropdown icon */}
                <button className="border border-gray-350 text-black px-2 py-2 rounded flex items-cente top-3 right-3r text-sm font-roboto font-semibold">
                  Weekly
                  <svg className="ml-2 w-4 h-4 fill-current text-gray-600 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L16 7z" />
                  </svg>
                </button>

                {/* Dropdown menu moved to the right corner */}
                <div className="absolute hidden bg-white shadow-md  rounded-md  group-hover:block">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">week1</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">week2</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">week3</a>
                </div>
              </div>

            </div>
            <div className="mt-8">
              <ReactApexChart options={week.options} series={week.series} type="area" height={250} />
            </div>

          </div>

          {/* upcoming review sections */}


          <div className="border m-3 h-fit rounded-md shadow-2xl bg-white">
            <div className="flex m-2 gap-2">

              <div className="px-4  border border-2px rounded-md hover:bg-custom-background py-1 cursor-pointer font-roboto"><span className="text-center
    "> Upcoming</span></div>
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
                      <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">Request</span>
                    </th>
                    <th scope="col" className="w-1/4 px-4 py-6 text-center  ">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">Completed</span>
                    </th>

                  </tr>
                </thead>
              </table>
            </div>



          </div>



        </div>
        
        <div className="w-22.5rem h-auto bg-white ml-67.3rem mb-48rem mt-21rem rounded-xl shadow-xl border border-gray-300 hover hover:border-2 border-gray-300 absolute">
          {/* <div className="flex">
  <h1 className="ml-3 mt-2 text-sm font-poppins font-medium">Upcoming Reviews</h1>
  <button className="ml-3 mt-2 text-sm font-poppins font-medium ml-36 text-view-more">View more</button>
  </div> */}

          <div id="chart">
          </div>

          <h1 className="text-sm font-roboto ml-28 ">Course Completion Ratio</h1>
        </div>


        <div className="w-22.5rem h-auto bg-white ml-67.3rem mb-48rem mt-5 rounded-xl shadow-xl border border-gray-300 hover hover:border-2 border-gray-300 absolute">
          <h1 className="ml-3 mt-2 text-sm font-poppins font-medium">Your Batch Best Students</h1>
          <div className="flex flex-row justify-between p-2 border-b mt-3">
            <div className="w-28">
              <h1 className="text-sm text-gray-400 font-roboto">Names</h1>
              {students.map((student) => (
                <div key={student.id} className="flex items-center">
                  <img src={student.profileImage} alt={student.name} className="w-8 h-8 rounded-full mt-3" />
                  <p className="text-sm text-gray-400 font-roboto ml-3 mt-3">{student.name}</p>
                </div>
              ))}
            </div>

            <div className="">
              <h1 className="text-sm text-gray-400 font-roboto">Progress</h1>
              {students.map((student) => (
                <div key={student.id} className="w-48 flex">
                  <div className="w-36 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-8  ">
                    <div
                      className={`h-1.5 rounded-full ${student.progress >= 80
                          ? 'bg-green-400'
                          : student.progress >= 60
                            ? 'bg-yellow-500'
                            : student.progress >= 40
                              ? 'bg-orange-500'
                              : student.progress >= 20
                                ? 'bg-red-500'
                                : student.progress >= 0 && student.progress <= 19
                                  ? 'bg-blue-500'
                                  : ''
                        }`}
                      style={{ width: `${student.progress}%` }}
                    ></div>

                  </div>
                  <span
                    className={`text-xs font-roboto ml-3 mt-6 ${student.progress >= 80
                        ? 'text-green-400'
                        : student.progress >= 60
                          ? 'text-yellow-500'
                          : student.progress >= 40
                            ? 'text-orange-500'
                            : student.progress >= 20
                              ? 'text-red-500'
                              : student.progress >= 0 && student.progress <= 19
                                ? 'text-blue-500'
                                : '' // Set a default color or leave empty if needed
                      }`}
                  >
                    {student.progress}%
                  </span>
                </div>
              ))}
            </div>

            <div>
              <h1 className="text-sm text-gray-400 font-roboto">Week</h1>
              {students.map((student) => (
                <div key={student.id} className="flex flex-col items-center mt-5">
                  <p className="text-sm text-gray-400 font-roboto">{student.week}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
        <div className="w-22.5rem h-auto bg-white ml-67.3rem mb-48rem mt-37rem rounded-xl shadow-xl border border-gray-300 hover hover:border-2 border-gray-300 absolute">
        <h1 className="font-roboto text-sm ml-3">Upcoming Tasks</h1>
        <div>
          <h1 className="text-sm font-roboto font-sm text-gray-400 ml-3">Monday 22 september 2022</h1>
        </div>
         


        </div>



      </div>




    </div>

  );
}

export default Sidebar;
