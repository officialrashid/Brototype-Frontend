import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './pages/Navbar';
import Navigation from "./pages/Fumigation/Navigation";
import Login from "./pages/Fumigation/SignIn";
import OtpComponet from './pages/Authentication/OtpComponet';
import Sidebar from "./components/Students/Sidebar/Sidebar";
import StudentManifest from './components/Students/StudentManifest/StudentManifest';
import Dashboard from './pages/Students/Dashboard';
import Navbars from './components/Frontend/Navbar';
import WeeklyTask from "./pages/Students/WeeklyTask";
import ViewTask from "./pages/Students/ViewTask";

function App() {
  return (
    <Router>
      <Navbars />
      <div className="bg-custom-background">
        <div className="bg-white">
          <div className="flex">
            <Sidebar />
            <Routes>
              <Route path="/student" element={<Dashboard />} />
              <Route path="/profile" element={<StudentManifest />} />
              <Route path="/task" element={<WeeklyTask />} />
              <Route path="/viewTask" element={<ViewTask />} />

              {/* Other routes */}
              <Route path="/" element={<Navbar />} />
              <Route path="/invigilator" element={<Login />} />
              <Route path="/fumigation" element={<Navigation />} />
              <Route path="/otpLogin" element={<OtpComponet />} />
              <Route path="/otpTestLogin" element={<OtpComponet />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
