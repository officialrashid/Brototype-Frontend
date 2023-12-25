import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from './pages/LandingPage/LandingPage';
import Navigation from "./pages/Fumigation/Navigation";
import Login from "./pages/Fumigation/SignIn";
import OtpComponet from './pages/Authentication/OtpComponet';
import Sidebar from "./components/Students/Sidebar/Sidebar";
import StudentManifest from './components/Students/StudentManifest/StudentManifest';
import Dashboard from './pages/Students/Dashboard';
import Navbars from './components/LandingPage/Navbar';
import WeeklyTask from "./pages/Students/WeeklyTask";
import ViewTask from "./pages/Students/ViewTask";
import TodoList from './pages/Students/TodoList';
import ExtendDetails from './pages/Students/ExtendDetails';
import ReactGA from 'react-ga';
import Calender from './pages/Reviewer/Calender';
import {getMonth} from "./components/Reviewer/ScheduleTime/Utils"
import ReviewerDashboard from './pages/Reviewer/ReviewerDashboard';
function App() {
  // const TRACK_ID = 'UA-295189522-1'
  // ReactGA.initialize(TRACK_ID);
  const MESUREMENT_ID = 'G-E5NH4HH45W';
  ReactGA.initialize(MESUREMENT_ID);
 console.table(getMonth())
  return (
    <Router>
      {/* <Navbars /> */}
      <div className="bg-custom-background">
        <div className="bg-white">
          <div className="flex">
            <Sidebar />
            <Routes>
              <Route path="/student" element={<Dashboard />} />
              <Route path="/profile" element={<StudentManifest />} />
              <Route path="/task" element={<WeeklyTask />} />
              <Route path="/viewTask" element={<ViewTask />} />
              <Route path="/todolist" element={<TodoList />} />
              <Route path="/extendDetails" element={<ExtendDetails />} />
              {/* Other routes */}
              <Route path="/" element={<Navbar />} />
              <Route path="/invigilator" element={<Login />} />
              <Route path="/fumigation" element={<Navigation />} />
              <Route path="/otpLogin" element={<OtpComponet />} />
              <Route path="/otpTestLogin" element={<OtpComponet />} />
              {/* Reviewer */}
              <Route path="/reviewer" element={<ReviewerDashboard/>} />
              <Route path="/schedule" element={<Calender/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
