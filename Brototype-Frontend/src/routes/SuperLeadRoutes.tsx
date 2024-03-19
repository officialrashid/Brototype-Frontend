
import { Routes, Route } from 'react-router-dom';
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
function SuperLeadRoutes() {
  

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
