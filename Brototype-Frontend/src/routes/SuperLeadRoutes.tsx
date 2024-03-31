import { Routes, Route } from 'react-router-dom';
import { ReactElement, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSocket } from '../hooks/useSocket';
import Navigation from '../components/SuperLead/Navigation/Navigation';
import Dashboard from '../pages/SuperLead/Dashboard';
import Students from "../pages/SuperLead/StudentList"
import Advisors from '../pages/SuperLead/AdvisorsList';
import Reviewers from "../pages/SuperLead/ReviewersList"
import FumigationStudentsList from '../pages/SuperLead/FumigationStudentsList';
import Chat from "../pages/SuperLead/Chat"
import ViewStudent from '../pages/SuperLead/ViewStudent';
import ViewReviewer from '../pages/SuperLead/ViewReviewer';
import ProfileUpdateForm from '../pages/SuperLead/ProfileUpdateForm';
import ViewProfile from "../pages/SuperLead/ViewProfile" ;
import Calendar from '../pages/SuperLead/Calendar';
import GlobalContext from '../context/GlobalContext';

interface RootState {
    superlead: {
        superleadData: {
            superleadId: string;
        }
    }
}

function SuperLeadRoutes(): ReactElement {
    const superleadId: string | undefined = useSelector((state: RootState) => state?.superlead?.superleadData?.superleadId);
    const socket = useSocket();
    const { onlineUsers, setOnlineUsers } = useContext(GlobalContext);

    useEffect(() => {
        if (!socket || !superleadId) return;
    
        // Emit online status when the tab is open
        socket.emit("addOnlineUser", superleadId);
    
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
    }, [socket, superleadId, setOnlineUsers,Route]); // Include dependencies in the dependency array

    useEffect(() => {
        // Handle the beforeunload event to emit offline status when the tab is closed
        const handleBeforeUnload = () => {
            if (socket && superleadId) {
                socket.emit("offline", superleadId);
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [socket, superleadId]);

    return (
        <div className='w-full h-auto flex'>
            <Navigation />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/students" element={<Students />} />
                <Route path="/advisors" element={<Advisors />} />
                <Route path="/reviewers" element={<Reviewers />} />
                <Route path="/fumigation" element={<FumigationStudentsList />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/viewStudent" element={<ViewStudent />} />
                <Route path="/viewReviewer" element={<ViewReviewer />} />
                <Route path="/profileUpdate" element={<ProfileUpdateForm />} />
                <Route path="/viewProfile" element={<ViewProfile />} />
                <Route path="/calendar" element={<Calendar />} />
            </Routes>
        </div>
    );
}

export default SuperLeadRoutes;
