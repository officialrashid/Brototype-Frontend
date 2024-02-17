import React, { useState } from 'react';

const Nav = () => {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard"); // State to track selected menu item

  const Menus = [
    { title: "Dashboard", src: "/dashboard (3).png" },
    { title: "Students", src: "/profile-user.png" },
    { title: "Advisors", src: "/job-interview (3).png" },
    { title: "Reviewers", src: "/app (1).png" },
    { title: "Fumigation", src: "/expired.png" },
    { title: "Chat", src: "/chat (2).png" },
    { title: "Notification", src: "" },
  ];

  return (
    <nav className="fixed mt-4.6rem z-30 w-full border-gray-200 bg-white shadow-md h-12  border-t-gray-20">
      <div className="m-2 mx-auto max-w-screen-xl">
        <ul className="flex items-center justify-between">
          <li className="flex items-center gap-20 mr-5 ml-5">
            {Menus.map((menu, index) => (
              <div
                key={index}
                className={`flex rounded-md p-1 cursor-pointer hover:bg-custom-background  text-sm items-center gap-x-2  ${selectedMenu === menu.title && "bg-custom-background"}`}
                onClick={() => setSelectedMenu(menu.title)}
              >
                <svg className="me-2 h-5 w-5 mt-0  group-hover:text-blue-600  dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <p className="font-serif">{menu.title}</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

// Place the <Nav /> component here where you want it to appear above the line

// Your other React components and JSX code

// The line where you want the navigation bar to appear above
