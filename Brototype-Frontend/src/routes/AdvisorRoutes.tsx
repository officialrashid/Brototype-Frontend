import { useState } from 'react'
import Navigation from '../components/Advisor/components/Navigation'
import EventCalendar from '../components/Advisor/events/EventCalendar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import SideNav from '../components/Advisor/components/SideNav'
import Scheduled from '../components/Advisor/schedule /Schedule'
import Dashboard from '../components/Advisor/dashboard/Dashboard'
import ReviewerComp from '../components/Advisor/reviewer/ReviewerComp'
import Account from '../components/Advisor/account/Account'
import ExtPage from '../components/Advisor/extend-request/ExtPage'
import Student from '../components/Advisor/students/Student'
import Reviewer from '../components/Advisor/schedule/Reviewers'
import Chat from '../components/Advisor/chat/Chat'
import SignIn from '../components/Advisor/components/SignIn'
import Footer from '../components/Advisor/components/Footer'
import Review from '../components/Advisor/reviews/Review'


function App() {
  let user:boolean=true
 

  return (
    <>
    <div className='  bg-gray-200'>

  

    {

user?<Navigation/>:   <SignIn/>
    }

 
    
    
    <div className="max-w-7xl w-full  pt-28  mx-auto flex gap-8 ">       
       <div className=' border border-gray-200  rounded-lg w-2/12   h-fit  '>
   

<SideNav/>
   
       </div>
       <div className=" rounded-md  w-full">


      
      <Routes>
     
      
     <Route path='/dashboard/' element={<Dashboard/>}></Route>
     <Route path='/reviews/' element={<Scheduled/>}></Route>
     <Route path='/schedule/doamin-reviewer/:domain' element={<Reviewer/>}></Route>
     <Route path='/reviewers/' element={<ReviewerComp/>}></Route>
     <Route path='/account/' element={<Account/>}></Route>
     <Route path='/events/' element={<EventCalendar/>}></Route>
     <Route path='/scheduled-review/' element={<Review/>}></Route>
     <Route path='/extend-requests/' element={<ExtPage/>}></Route>
     <Route path='/students/' element={<Student/>}></Route>
     <Route path='/chat/' element={<Chat/>}></Route>
    
   </Routes>
      
   </div>
    

      {/* <EventCalendar/> */}
      </div>


      <div className='mt-4'>
      <Footer/>
      </div>
    
      </div>

      </>
     
   
  )
}

export default App