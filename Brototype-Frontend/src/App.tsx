import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './pages/Navbar';
import Navigation from "./pages/Fumigation/Navigation"
import Login from "./pages/Fumigation/SignIn"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/invigilator" element={<Login />} />
        <Route path="/fumigation" element={<Navigation />} />
     
      </Routes>
    </Router>
  );
}

export default App;
