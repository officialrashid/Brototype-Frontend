import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(true);
    const [sidebar, setSidebar] = useState('Dashboard');
    const [showViewTask, setShowViewTask] = useState(false);
    const Menus = [
      { title: "Dashboard", src: "/dashboard (3).png" },
      { title: "Profile", src: "/profile-user.png" },
      { title: "Review", src: "/job-interview (3).png"},
      { title: "Task", src: "/app (1).png" },
      { title: "Extend", src: "/expired.png" },
      { title: "Chat", src: "/chat (2).png" },
      { title: "Todo", src: "" },
    ];
  
    const handleChangeSideBar = (title: string) => {
      setSidebar(title);
      setShowViewTask(true);
      if(title=='Dashboard'){
        navigate('/student')
      }
      if(title==='Profile'){
        navigate('/profile')
      }
      if(title==='Task'){
        navigate('/task')
      }
      if(title==='Todo'){
        navigate('/todolist')
      }
      if(title==='Extend'){
        navigate('/extendDetails')
      }
    };
  
    return (
    
          <div
            className={`fixed ${open ? "w-72" : "w-20"} h-screen p-5 pt-8 relative duration-300 border shadow-xl `}
          >
            <ul className="pt-6">
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
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
                    {Menu.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          

    );
}

export default Sidebar;
