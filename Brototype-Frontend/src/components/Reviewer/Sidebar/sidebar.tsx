import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useDispatch} from "react-redux";

function Sidebar() {
    const [sidebar, setSidebar] = useState('Dashboard');
    const Menus = [
        { title: "Dashboard", src: "/dashboard (3).png" },
        { title: "Schedule", src: "/profile-user.png" },
        { title: "Profile", src: "/profile-user.png" },
        { title: "Chat", src: "/chat (2).png" },

      ];
      const handleChangeSideBar = (title: string) => {
        setSidebar(title);
      
        if(title=='Dashboard'){
          navigate('/reviewer')
        }
        if(title==='Schedule'){
          navigate('/reviewer/schedule')
        }
        if(title==='Profile'){
          navigate('/reviewer/reviewerProfile')
        }
       
      };
 const navigate=useNavigate()
    const dispatch=useDispatch()
  return (
    <div className="h-screen w-14 md:w-72 text-white flex flex-col  duration-300 shadow-xl border">
  <div className="py-4 px-4">
    <div>

    <ul className="my-2">
  {Menus.map((Menu, index) => (
    <li
      key={index}
      className={`flex rounded-md p-2 cursor-pointer hover:bg-custom-background text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"
        } ${index === 0 && sidebar === 'Dashboard' && "bg-custom-background"} ${sidebar === Menu.title && "bg-custom-background"
        }`}
      onClick={() => {
        setSidebar('');
        handleChangeSideBar(Menu.title);
      }}
    >
      <img src={Menu.src} className="w-5  h-5" />
      <span className={`${!open && "hidden"} hidden md:inline origin-left duration-200`}>
        {Menu.title}
      </span>
    </li>
  ))}
</ul>
      </div>
    </div>
  </div>
  
  

);

}

export default Sidebar