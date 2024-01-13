import React, { useEffect, useState } from 'react';
import StudentSignIn from '../pages/Students/SignIn';
import StudentOtp from '../pages/Students/StudentOtp';
import Dashboard from '../pages/Students/Dashboard'; // Import Dashboard
import { Routes, Route, Navigate } from 'react-router-dom';

function AuthenticationRoutes() {
  const [studentAccessToken, setStudentAccessToken] = useState('');

  useEffect(() => {
    const studentJwt = localStorage.getItem('studentAccessToken');
    setStudentAccessToken(studentJwt);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={studentAccessToken ? <Navigate to="/student" /> : <StudentSignIn />}
      />

      <Route path="/studentOtp" element={studentAccessToken ? <Dashboard /> : <StudentOtp />} />
    </Routes>
  );
}

export default AuthenticationRoutes;
