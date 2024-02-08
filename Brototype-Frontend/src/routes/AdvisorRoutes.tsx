import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Advisor/Dashboard';
import SideNav from '../components/Advisor /SideNav';
import Navigation from '../components/Advisor /Navigation';
import Schedule from "../pages/Advisor/ScheduledReviews";
import Reviewer from "../pages/Advisor/DomainWiseReviewer";
import Reviewers from '../pages/Advisor/Reviewers';
import Extend from "../pages/Advisor/ExtendRequest";
import Account from '../pages/Advisor/Account';
import EventCalendar from '../components/Advisor /events/EventCalendar';
import Student from '../pages/Advisor/Students';
import Chat  from '../pages/Advisor/Chat';
function AdvisorRoutes() {
    //   const [reviewerAccessToken, setReviewerAccessToken] = useState('');

    //   useEffect(() => {
    //     const reviewerJwt = localStorage.getItem('reviewerAccessToken');
    //     setReviewerAccessToken(reviewerJwt);
    //   }, []);

    return (
        <>
            <div className='bg-gray-200'>
                <Navigation />
                <div className="max-w-7xl w-full  pt-28  mx-auto flex gap-8 ">
                    <div className=' border border-gray-200  rounded-lg w-2/12  bg-white h-fit'>
                        <SideNav />

                    </div>
                    <div className="border rounded-md  w-full">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path='/reviews/' element={<Schedule />}></Route>
                            <Route path='/schedule/doamin-reviewer/' element={<Reviewer />}></Route>
                            <Route path='/reviewers/' element={<Reviewers />}></Route>
                            <Route path='/extend-requests/' element={<Extend />}></Route>
                            <Route path='/cancelled-reviews/' element={<Schedule />}></Route>
                            <Route path='/rescheduled-review/' element={<Schedule />}></Route>
                            <Route path='/account/' element={<Account />}></Route>
                            <Route path='/events/' element={<EventCalendar />}></Route>
                            <Route path='/students/' element={<Student />}></Route>
                            <Route path='/chat/' element={<Chat />}></Route> 
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdvisorRoutes;
