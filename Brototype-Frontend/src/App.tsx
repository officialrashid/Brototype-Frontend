import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './pages/Navbar';
import Navigation from "./pages/Fumigation/Navigation"
import Login from "./pages/Fumigation/SignIn"
import OtpComponet from './pages/Authentication/OtpComponet';
import OtpPage from './components/Authentication/otpTestDesign';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/invigilator" element={<Login />} />
        <Route path="/fumigation" element={<Navigation />} />
        <Route path="/otpLogin" element={<OtpComponet />} />
        <Route path="/otpTestLogin" element={<OtpComponet />} />
      </Routes>
    </Router>
  );
}

export default App;
