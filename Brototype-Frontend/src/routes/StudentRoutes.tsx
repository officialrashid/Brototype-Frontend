import React, { useContext, useEffect, useState } from 'react';
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
import Chat from "../pages/Students/Chat"
import GlobalContext from '../context/GlobalContext';
import { useSocket } from '../hooks/useSocket';
import { useSelector } from 'react-redux';

interface StudentRoutesProps {
  // Define any props if required
}

interface Socket {
  emit: (event: string, data: any) => void;
  on: (event: string, callback: (data: any) => void) => void;
  off: (event: string) => void;
  // Add other methods if needed
}

interface RootState {
  superlead: {
      studentData: {
          studentId: string;
          // Define other properties if needed
      }
  }
}

function StudentRoutes() {

  const studentId: any = useSelector((state: RootState) => state?.student?.studentData?.studentId);
    const [studentAccessToken,setStudentAccessToken] = useState("")
    useEffect(()=>{
      const studentJwt = localStorage.getItem("studentAccessToken")
      setStudentAccessToken(studentJwt)
    },[])

    const socket = useSocket();
    const { onlineUsers, setOnlineUsers } = useContext(GlobalContext);


    useEffect(() => {
        if (!socket || !studentId) return;
    
        // Emit online status when the tab is open
        socket.emit("addOnlineUser", studentId);
    
        const handleGetOnlineUser = (users: any[]) => {
            console.log(users, "online usersssss");
            // Update onlineUsers based on previous state
            setOnlineUsers((prevUsers: any[]) => {
               return [...prevUsers, ...users];
            });
        };
    
        socket.on("getOnlineUser", handleGetOnlineUser);
    
        // Clean up socket event listener on component unmount
        return () => {
            socket.off("getOnlineUser", handleGetOnlineUser);
        };
    }, [socket, studentId, setOnlineUsers,Route]); // Include dependencies in the dependency array

    useEffect(() => {
        // Handle the beforeunload event to emit offline status when the tab is closed
        const handleBeforeUnload = () => {
            if (socket && studentId) {
                socket.emit("offline", studentId);
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [socket, studentId]);
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
            <Route path="/chat" element={studentAccessToken ?<Chat />:<StudentSignIn/>} />
          </Routes>
        </div>
      </div>
    </div>
    </>
  );
}

export default StudentRoutes;
