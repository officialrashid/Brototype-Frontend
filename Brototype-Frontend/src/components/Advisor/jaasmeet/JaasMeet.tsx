import { JaaSMeeting} from '@jitsi/react-sdk'
import { useEffect, useState } from 'react'
import { axiosInstance } from '../services/api/apiClient'



const JaasMeet=()=>{
    const [meetState,setMeetState]=useState(false)
    const [jwt,setJwt]=useState('')
    const generateRoomName=()=> `jitsiRoomName${Math.random()*100}-${Date.now()}}`
const generateToken=async()=>{
  try{
    const response=await axiosInstance.get('/meet/create-meet/1234')
    console.log('called');
    
    if(response){
        console.log(response);
        if(response.data.token){
         
            console.log(meetState);
            console.log('end');
            setJwt(response.data.token) 
            window.open(`https://8x8.vc/vpaas-magic-cookie-40d1ade414824ac88ae740a12fcf994e/1234`,'_blank')   
            //setMeetState(true)                
        }
             
    }
  }catch(error){
    console.log(error);
    
  }
}


    if(!meetState) return (
        <>
        <button className='bg-black text-white px-4 rounded-md  py-1' onClick={()=>{generateToken()}}>Start </button>
        
        </>
    )
    return (
        <>
    

        <JaaSMeeting
    appId = {'vpaas-magic-cookie-40d1ade414824ac88ae740a12fcf994e' }
    jwt = {jwt }
    roomName = { generateRoomName()}
    getIFrameRef = { node => node.style.height = '835px' }
    onReadyToClose={()=>{setMeetState(false)}}
    
/>
        
        </>
    )
}

export default JaasMeet
/*



database design 

assigned tasks from review-service
-------------------------------------
tasks:{
    advisorId:ObjectId
    students:[
        {
            studentId:ObjectId
            fullNaame:string
            currentWeek:12
            Domain:MERN stack
            email:student@gmail.com,
            reviewStatus:
        }
    ]
}
---------------------------------------

{
assignedWorks:[ {
            studentId:ObjectId
            fullNaame:string
            currentWeek:12
            Domain:MERN stack
            email:student@gmail.com,
            reviewStatus:
        },
         {
            studentId:ObjectId
            fullNaame:string
            currentWeek:12
            Domain:MERN stack
            email:student@gmail.com,
            reviewStatus:
        }
    ]
    
}




*/