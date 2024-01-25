
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/LandingPage/LandingPage';
import Navigation from './pages/Fumigation/Navigation';
import Login from './pages/Fumigation/SignIn';
import OtpComponet from './pages/Authentication/OtpComponet';
import StudentRoutes from './routes/StudentRoutes'; // Import StudentRoutes
import ReviewerRoutes from './routes/ReviewerRoutes';
import AuthenticationRoutes from './routes/StudentAuthRoutes';
import ReviewerAuthRoutes from './routes/ReviewerAuthRoutes';

function App() {
  return (
    <Router>

            <Routes>
              <Route path="/" element={<Navbar />} />
              <Route path="/invigilator" element={<Login />} />
              <Route path="/fumigation" element={<Navigation />} />
              <Route path="/otpLogin" element={<OtpComponet />} />
              <Route path="/otpTestLogin" element={<OtpComponet />} />
              <Route path="/reviewerIn/*" element={<ReviewerAuthRoutes/>} />
              <Route path="/studentIn/*" element={<AuthenticationRoutes/>} />
              <Route path="/reviewer/*" element={<ReviewerRoutes />} />
          
              {/* Nested StudentRoutes */}
              <Route path="/student/*" element={<StudentRoutes />} />
            </Routes>
  
    </Router>
  );
}

export default App;
