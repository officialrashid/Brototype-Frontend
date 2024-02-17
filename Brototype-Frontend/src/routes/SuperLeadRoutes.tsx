import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/SuperLead/Dashboard';
import Nav from '../components/SuperLead/Nav/Nav'
import Navigation from '../components/SuperLead/Navigation/Navigation';

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
                
                        </Routes>
                        </div>
                        {/* </div> */}
         
        </>
    );
}

export default SuperLeadRoutes;
