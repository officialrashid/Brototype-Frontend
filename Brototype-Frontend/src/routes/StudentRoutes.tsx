import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Sidebar from "../components/Students/Sidebar/Sidebar";
import StudentManifest from '../components/Students/StudentManifest/StudentManifest';
import Dashboard from '../pages/Students/Dashboard';
import WeeklyTask from "../pages/Students/WeeklyTask";
import ViewTask from "../pages/Students/ViewTask";
import TodoList from '../pages/Students/TodoList';
import ExtendDetails from '../pages/Students/ExtendDetails';
import ReviewResult from '../pages/Students/reviewDetails';
import StudentSignIn from "../pages/Students/SignIn"
import StudentOtp from "../pages/Students/StudentOtp";
import Navigationbar from '../components/LandingPage/Navbar';
function StudentRoutes() {
    const [studentAccessToken,setStudentAccessToken] = useState("")
    useEffect(()=>{
      const studentJwt = localStorage.getItem("studentAccessToken")
      setStudentAccessToken(studentJwt)
    },[])
  return (
    <>
    <Navigationbar/>
    <div className="bg-custom-background">
      <div className="bg-white">
        <div className="flex">  
          <Sidebar />
         
          <Routes>
         
            <Route path="/" element={studentAccessToken ? <Dashboard />:<StudentSignIn/>} />
            <Route path="/profile" element={studentAccessToken ?<StudentManifest />:<StudentSignIn/>} />
            <Route path="/task" element={studentAccessToken ?<WeeklyTask />:<StudentSignIn/>} />
            <Route path="/viewTask" element={studentAccessToken ?<ViewTask />:<StudentSignIn/>} />
            <Route path="/todolist" element={studentAccessToken ?<TodoList />:<StudentSignIn/>} />
            <Route path="/extendDetails" element={studentAccessToken ?<ExtendDetails />:<StudentSignIn/>} />
            <Route path="/review" element={studentAccessToken ?<ReviewResult />:<StudentSignIn/>} />
          </Routes>
        </div>
      </div>
    </div>
    </>
  );
}

export default StudentRoutes;
