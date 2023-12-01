import { useState } from "react";
import StudentProfile from "../Dashboard/StudentProfile";
import StudentGraph from "../Dashboard/StudentGraph";
import WeeklyPerformGraph from "../Dashboard/WeeklyPerformGraph";
import UpcomingReviews from "../Dashboard/UpcomingReviews";
import CourseCompletionGraph from "../Dashboard/CourseCompletionGraph";
import BatchBestStudents from "../Dashboard/BatchBestStudents";
import UpcomingTask from "../Dashboard/UpcomingTask";
import StudentManifest from "../StudentManifest/StudentManifest";
// import StudentTask from "../../../pages/Students/StudentTask";
import StudentTask from "../StudentTask/Task";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [sidebar, setSidebar] = useState('Dashboard');

  const Menus = [
    { title: "Dashboard", src: "/dashboard (3).png" },
    { title: "Profile", src: "Chat" },
    { title: "Review", src: "User", gap: true },
    { title: "Task", src: "Calendar" },
    { title: "Extend", src: "Search" },
    { title: "Chat", src: "Chart" },
  ];

  const handleChangeSideBar = (title: string) => {
    setSidebar(title);
  };

  return (
    <div className="bg-custom-background">
      <div className="bg-white">
        <div className="flex">
        <div
  className={`fixed ${open ? "w-72" : "w-20"} h-screen p-5 pt-8 relative duration-300 border shadow-xl `}
>
  <ul className="pt-6">
    {Menus.map((Menu, index) => (
      <li
        key={index}
        className={`flex rounded-md p-2 cursor-pointer hover:bg-custom-background text-gray-300 text-sm items-center gap-x-4 ${
          Menu.gap ? "mt-9" : "mt-2"
        } ${index === 0 && sidebar === 'Dashboard' && "bg-custom-background"} ${
          sidebar === Menu.title && "bg-custom-background"
        }`}
        onClick={() => {
          setSidebar('');
          handleChangeSideBar(Menu.title);
        }}
      >
        <img src={Menu.src} className="w-5 h-auto" />
        <span className={`${!open && "hidden"} origin-left duration-200`}>
          {Menu.title}
        </span>
      </li>
    ))}
  </ul>
</div>


          {sidebar==='Dashboard'&&
       <>
       <div className="h-auto flex-1  bg-custom-background">
          {/* <div className="flex-1"> */}
          <StudentProfile />
          <StudentGraph />
          <WeeklyPerformGraph />
          <UpcomingReviews />
        </div>
        <div className="w-22.5rem h-auto bg-white right-6 mb-48rem mt-20.6rem rounded-xl shadow-xl border border-gray-300 hover hover:border-2 border-gray-300 absolute">
          <CourseCompletionGraph />
        </div>
        <div className="w-22.5rem h-auto bg-white right-6 mb-48rem mt-5 rounded-xl shadow-xl border border-gray-300 hover hover:border-2 border-gray-300 absolute">
          <BatchBestStudents />
        </div>
        <div className="w-22.5rem h-72 bg-white right-6 mb-48rem mt-36.5rem rounded-xl shadow-xl border border-gray-300 hover hover:border-2 border-gray-300 absolute overflow-y-auto ">
          <UpcomingTask />
        </div>
        </>
       }


       {sidebar==='Task' &&
       <>
      {/* <StudentTask/> */}
      <div className="h-auto flex-1  bg-custom-background">
      <div className='bg-white h-48rem m-8 rounded-xl w-67.3rem'>
      <div className=" grid grid-cols-5 cursor-pointer">
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>
    <StudentTask/>

    </div>
    </div>
</div>
       </>

       }
        {sidebar==='Profile' &&
       <>
      {/* <StudentTask/> */}
      <div className="bg-custom-background">


     <StudentManifest/>


    </div>

       </>

       }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
