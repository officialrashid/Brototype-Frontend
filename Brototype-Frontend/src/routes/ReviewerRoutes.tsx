import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ReviewerDashboard from '../pages/Reviewer/ReviewerDashboard';
import Calender from '../pages/Reviewer/Calender';
import ReviewerProfile from '../pages/Reviewer/ReviewerProfile';
import ReviewerSignIn from "../pages/Reviewer/SignIn";
import Navigationbar from '../components/LandingPage/Navbar';
import Chat from '../pages/Reviewer/Chat';
import JaasMeet from '../components/Advisor/jaasmeet/JaasMeet';

function ReviewerRoutes() {
  const [reviewerAccessToken, setReviewerAccessToken] = useState('');
  const changeScreen: any = useSelector((state) => state?.review?.changeScreen)
  useEffect(() => {
    const reviewerJwt = localStorage.getItem('reviewerAccessToken');
    setReviewerAccessToken(reviewerJwt);
  }, []);

  return (
    <>
      {changeScreen ? <JaasMeet /> :
        <>
          <Navigationbar />
          <div className="bg-custom-background">
            <div className="bg-white">
              <div className="flex">
                <Routes>
                  <Route path="/" element={reviewerAccessToken ? <ReviewerDashboard /> : <ReviewerSignIn />} />
                  <Route path="/schedule" element={reviewerAccessToken ? <Calender /> : <ReviewerSignIn />} />
                  <Route path="/reviewerProfile" element={reviewerAccessToken ? <ReviewerProfile /> : <ReviewerSignIn />} />
                  <Route path="/chat" element={reviewerAccessToken ? <Chat /> : <ReviewerSignIn />} />
                </Routes>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
}

export default ReviewerRoutes;
function useSelector(arg0: (state: any) => any) {
  throw new Error('Function not implemented.');
}

