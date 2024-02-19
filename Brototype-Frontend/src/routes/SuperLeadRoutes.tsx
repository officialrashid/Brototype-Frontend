
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/SuperLead/Dashboard';
import Navigation from '../components/SuperLead/Navigation/Navigation';
import Students from "../pages/SuperLead/StudentList"
import Advisors from '../pages/SuperLead/AdvisorsList';
import Reviewrs from "../pages/SuperLead/ReviewersList"
import FumigationStudentsList from '../pages/SuperLead/FumigationStudentsList';
import Chat from "../pages/SuperLead/Chat"
import Notification from '../components/SuperLead/Notification/Notification';
function SuperLeadRoutes() {
    //   const [reviewerAccessToken, setReviewerAccessToken] = useState('');

    //   useEffect(() => {
    //     const reviewerJwt = localStorage.getItem('reviewerAccessToken');
    //     setReviewerAccessToken(reviewerJwt);
    //   }, []);

    return (
        <>
        {/* <div className='bg-custom-background h-auto'> */}
            <div className=' w-full h-auto  flex '>
                
                <Navigation />
            
                        {/* <Nav /> */}
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/students" element={<Students />} />
                            <Route path="/advisors" element={<Advisors />} />
                            <Route path="/reviewers" element={<Reviewrs />} />
                            <Route path="/fumigation" element={<FumigationStudentsList />} />
                            <Route path="/chat" element={<Chat />} />
                      
                        </Routes>
                        </div>
                        {/* </div> */}
         
        </>
    );
}

export default SuperLeadRoutes;
