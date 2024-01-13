import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ReviewerDashboard from '../pages/Reviewer/ReviewerDashboard';
import Calender from '../pages/Reviewer/Calender';
import ReviewerProfile from '../pages/Reviewer/ReviewerProfile';
import ReviewerSignIn from "../pages/Reviewer/SignIn";

function ReviewerRoutes() {
  const [reviewerAccessToken, setReviewerAccessToken] = useState('');

  useEffect(() => {
    const reviewerJwt = localStorage.getItem('reviewerAccessToken');
    setReviewerAccessToken(reviewerJwt);
  }, []);

  return (
    <div className="bg-custom-background">
      <div className="bg-white">
        <div className="flex">
          <Routes>
            <Route path="/" element={reviewerAccessToken ? <ReviewerDashboard /> : <ReviewerSignIn />} />
            <Route path="/schedule" element={reviewerAccessToken ? <Calender /> : <ReviewerSignIn />} />
            <Route path="/reviewerProfile" element={reviewerAccessToken ?  <ReviewerProfile /> : <ReviewerSignIn />} />
          </Routes>
        </div>
      </div>
    // </div>
  );
}

export default ReviewerRoutes;
