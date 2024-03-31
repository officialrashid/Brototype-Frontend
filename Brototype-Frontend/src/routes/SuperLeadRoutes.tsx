import { Routes, Route } from 'react-router-dom';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSocket } from '../hooks/useSocket';
import Dashboard from '../pages/SuperLead/Dashboard';
import Navigation from '../components/SuperLead/Navigation/Navigation';
import Students from "../pages/SuperLead/StudentList"
import Advisors from '../pages/SuperLead/AdvisorsList';
import Reviewrs from "../pages/SuperLead/ReviewersList"
import FumigationStudentsList from '../pages/SuperLead/FumigationStudentsList';
import Chat from "../pages/SuperLead/Chat"
import ViewStudent from '../pages/SuperLead/ViewStudent';
import ViewReviewer from '../pages/SuperLead/ViewReviewer';
import ProfileUpdateForm from '../pages/SuperLead/ProfileUpdateForm';
import ViewProfile from "../pages/SuperLead/ViewProfile" ;
import Calendar from '../pages/SuperLead/Calendar';
import GlobalContext from '../context/GlobalContext';

interface SuperLeadRoutesProps {
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
        superleadData: {
            superleadId: string;
            // Define other properties if needed
        }
    }
}

function SuperLeadRoutes({}: SuperLeadRoutesProps): ReactElement {
    const superleadId: string | undefined = useSelector((state: RootState) => state?.superlead?.superleadData?.superleadId);
    const socket: Socket | null = useSocket();
    const { onlineUsers,setOnlineUsers } = useContext(GlobalContext);
    useEffect(() => {
        if (!socket || !superleadId) return;
    
        socket.emit("addOnlineUser", superleadId);
    
        socket.on("getOnlineUser", (users) => {
            console.log(users, "online usersssss");
            setOnlineUsers(users);
        });
    
        return () => {
            socket.off("getOnlineUser");
        };
    }, [socket, superleadId, setOnlineUsers,Route]);
    
    useEffect(() => {
        console.log("Online users state updated:", onlineUsers);
    }, [onlineUsers,setOnlineUsers]);
    
    useEffect(() => {
        const handleFocus = async () => {
            if (socket && superleadId) {
                socket.emit("addOnlineUser", superleadId);
            }
        };

        const handleBlur = () => {
            if (socket && superleadId) {
                socket.emit("offline",superleadId);
            }
        };

        window.addEventListener('focus', handleFocus);
        window.addEventListener('blur', handleBlur);

        return () => {
            window.removeEventListener('focus', handleFocus);
            window.removeEventListener('blur', handleBlur);
        };
    }, [socket, superleadId]);

    return (
        <>
            <div className=' w-full h-auto  flex '>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/advisors" element={<Advisors />} />
                    <Route path="/reviewers" element={<Reviewrs />} />
                    <Route path="/fumigation" element={<FumigationStudentsList />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/viewStudent" element={<ViewStudent />} />
                    <Route path="/viewReviewer" element={<ViewReviewer />} />
                    <Route path="/profileUpdate" element={<ProfileUpdateForm />} />
                    <Route path="/viewProfile" element={<ViewProfile />} />
                    <Route path="/calender" element={<Calendar />} />
                </Routes>
            </div>
        </>
    );
}

export default SuperLeadRoutes;
