
import Navigation from "./Navigation-bar"
import MainNav from "./Main-Nav"
import TabMenu from "./Tab-Menu"
import BoxTab from "./Box-tab"
import TableRow from "./Table-row"
import MarkModal from "./Mark-modal"
import { useEffect, useState } from "react"
import SubNav from "./Sub-nav"
import { useParams } from "react-router-dom"
import ModalTable from "./Modal-table"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { getBatchStudent,getIndividualMark,removeStudents } from "../../redux-toolkit/batchSlice"
import DeleteModal from "./Delete-Mod"
import AddForm from "./AddForm"
const BatchRecord=()=>{
  const dispatch=useDispatch()
  const {id}=useParams()
  const [activeTab,setActiveTab]=useState(1)
  const [markModal,setMarkModal]=useState(false)
  const [tableModal,setTableModal]=useState(false)
 // const markData=useSelector(state=>state.batch.studentMark)



  
  let [filteredStudents,setFilteredStudents]=useState([])


  const handleTabChange=(tabValue:number)=>{
  console.log("tabValue====:"+tabValue);

   setActiveTab(tabValue)

  }
  const[studentId,setStudentId]=useState('')
  const handleStudentId=(id:string)=>{
      setStudentId(id)
  
  }
  let fumigationType="Mock"
  if(activeTab==2){
  
    fumigationType="Final"
  
  }

  const [addFormVisibile,setAddFormVisible]=useState(false)
  
  const [searchQuery,setsearchQuery]=useState('')

 
       const batchWiseStudents=useSelector(state=>state.batch.batchStudents)



     

 filteredStudents=batchWiseStudents


 const studentSearch=(value:string)=>{

  console.log(value,'//////////////');
  let filter
  setsearchQuery(value)
  filter= batchWiseStudents.filter(student=> {return student.name.includes(searchQuery)})

 dispatch(getBatchStudent(filter))


console.log(filteredStudents,);

}




     console.log(batchWiseStudents,"get batch wise students");
       //setFilteredStudents(batchWiseStudents)

   
   
     

  
   

useEffect(()=>{

  console.log('first callleddddddddddddddd',id);
  

  axios.get(`http://localhost:3002/api/fumigation/get-batchwise-students/${id}`).then(res=>{

  console.log("batch student",res.data);
  
  
  console.log(res);
  if(res.status==201){
    dispatch(getBatchStudent(res.data.response))
  }

  })
  
  
  

},[])


// to fetch mark

const getStudentMark=(studId)=>{
  let fumigationType
  if(activeTab==1){
  fumigationType='mock'

  }else{
    fumigationType='final'
  }


  try{

    axios.get('http://localhost:3002/api/fumigation/get-students-mark',{params:{studentId:studId,batchId:id,fumigationType}}).then(res=>{
      console.log(res.data.response," from my useeffetttttttttttttt");
      dispatch(getIndividualMark(res.data.response))
      
    }).catch(err=>{
      console.log(err,'error in use');
      
    })
  
  }

  catch(err){

  }
  
}



//remove student

const [deleteModal,setDeleteModal]=useState(false)




  const removeStudent=(id)=>{
    console.log(id,"deleeee");
  
    
       
    try {
      
  
      
  
  
  
          
        // Make a request to the backend to clear the session and cookies
      //axios.get(`http://localhost:3002/api/fumigation/delete-invigilator/${id}`).then(res=>{
          console.log('hhuhhuh');
       // ))
        //})
        dispatch(removeStudents(id))
        setDeleteModal(false)
    
        // Navigate to the sign-in page or any other desired destination
        
      } catch (error) {
        // Handle any errors that occur during the logout process
        console.log('Error during logout:', error);
      }
  
  
  
  
  
   
  }

  
  const filterStudents=(filter:string)=>{

    console.log(id,fumigationType,'elllllllcehehhhe');
    
     
    if(filter=='passed'){


      console.log("passed students");
      
      axios.get(`http://localhost:3002/api/fumigation/get-passed-students`,{params:{batchId:id,fumigationType:'mock'}}).then(res=>{
  
    console.log("batch passed student",res.data.response.mockPassedStudents);
    
    //filteredStudents=res.data.response.mockPassedStudents
  dispatch(getBatchStudent(res.data.response.mockPassedStudents))

   // console.log(res);
    // if(res.status==201){
    //   dispatch(getBatchStudent(res.data.response))
    // }
  
     })
    }
  
  
  
     
  
    else if(filter == 'failed'){
console.log('failed studentsssss');

      
      axios.get(`http://localhost:3002/api/fumigation/get-failed-students`,{params:{batchId:id,fumigationType:'mock'}}).then(res=>{
  
    console.log(" failed batch studentssss",res.data.response.mockFailedstudents);
    
    
    console.log(res);
    if(res.status==201){
      //filteredStudents=res.data.response.mockPassedStudents
      dispatch(getBatchStudent(res.data.response.mockFailedstudents))
    }
  
    })
  
  
    }
    else {
      console.log('else case');
      
      axios.get(`http://localhost:3002/api/fumigation/get-batchwise-students/${id}`,).then(res=>{
  
    console.log("batch student",res.data.response);
    
    
    console.log(res);
    if(res.status==201){

  //filteredStudents=res?.data?.response
      dispatch(getBatchStudent(res?.data?.response))
    }
  
    })
  
    }
  
  
  
  
}



    return (
        <>
       
        <div className=' border border-gray-400 rounded-lg w-full max-w-7xl mx-auto shadow-xl  mt-4 '>
         
            {/* <nav className='mt-8'>
                <ul className='flex  flex-wrap  justify-center space-x-24'>
                    <li> <span>BCE-141 All Students</span></li>
                    <li>
    <label className="flex items-center space-x-2">
      <input type="radio"  checked name="radio-group"  className=" accent-black form-radio h-4 w-4 text-black border-gray-300 focus:ring-black bg-black"  />
      <span>Mock</span>
    </label>
  </li>
  <li>
    <label className="flex items-center space-x-2">
      <input type="radio" name="radio-group" className=" accent-black form-radio h-4 w-4 text-black border-gray-300 focus:ring-black bg-black"/>
      <span>Fumigation</span>
    </label>
  </li>
                     <li> <a href="http://"> <span>Passed students</span></a></li>
                    <li> <a href="http://"> <span>Failed students</span></a></li>
                    <li> <button className='bg-black px-2 py-2 rounded-2xl text-white flex items-center'><span className='text-sm' >Add student</span></button></li>
                    

                </ul>
            </nav> */}
<BoxTab onTabChange={handleTabChange}/>
         
       
<nav className=" mt-8"> 
            <ul className="flex flex-grid flex-wrap  justify-between m-4">
              <li>
                <button className="border border-black px-5 py-2 text-black rounded-md hover:bg-black hover:text-white" onClick={()=>{setAddFormVisible(true)}}> Add student</button>
              </li>
              <li>
                <button className="border border-black px-5 py-2 text-black rounded-md hover:bg-black hover:text-white" onClick={()=>{filterStudents('all')}}>All  students</button>
              </li>
              <li>
                <button className="border border-black px-3 py-2 text-black rounded-md hover:bg-black hover:text-white" onClick={()=>{filterStudents('passed')}}> Passed student</button>
              </li>
              <li>
                <button className="border border-black px-3 py-2 text-black rounded-md hover:bg-black hover:text-white" onClick={()=>{filterStudents('failed')}}>Failed student</button>
              </li>
              <li className='relative'>
               <input type="search" name="" id="" className=" pl-2 placeholder-left w-full  border border-black px-16 py-2 rounded-md placeholder-left w-full outline-none focus:border-red-700 appearance-none"  onChange={(e)=>{studentSearch(e.target.value)}} placeholder="search"/>
              
              </li>
              
            </ul>

            </nav>

<div className='mx-auto p-2 mt-4'>
  <table className="w-full text-sm text-left divide-y divide-y-8  table-auto table-fixed">
    <thead className="text-xs text-gray-700 uppercase bg-gray-300 shadow-xl dark:text-gray">
      <tr>
        <th scope="col" className="w-1/4 px-5 py-6 text-center ">
          Name
        </th>
        <th scope="col" className="w-1/4 px-5 py-6 text-center ">
          Contact
        </th>
        <th scope="col" className="w-1/4 px-5 py-6 text-center ">
          Email
        </th>
        <th scope="col" className="w-1/4 px-5 py-6  text-center">
          Qualification
        </th>
        <th scope="col" className="w-1/4 px-5 py-6 text-center ">
         Marks
        </th>
        <th scope="col" className="w-1/4 px-5 py-6 text-center ">
         Marks
        </th>
        <th scope="col" className="w-1/4 px-5 py-6 text-center ">
         Action
        </th>
      </tr>
    </thead>
  </table>
</div>


            


            
            
           
            
  
{/* 
<div className=' mx-auto p-2 mb-2'>
            <table className="w-full text-sm text-left divide-y divide-y-8 border border-gray-400 transition duration-700 ease-in-out transform hover:scale-101.5">
  <thead className="text-md text-gray-700  bg-gray-100 shadow-2xl dark:text-gray-800">
    <tr>
      <th scope="col" className="px-12 py-6">
        Mohmmad rashid
      </th>
      <th scope="col" className="px-8 py-6">
        8921974845
      </th>
      <th scope="col" className="px-8 py-6">
        muhammadrashid@gmail.com
      </th>
      <th scope="col" className="px-24 py-6">
        BCE-55
      </th>
      <th scope="col" className="px-8 py-6 ">
        <button className='bg-teal-700 px-4 py-2  text-white rounded-lg' onClick={()=>{
                setMarkModal(true) 
            }}>Add</button>
      </th>
    </tr>
  </thead>
</table>       
</div> */}

{


     

  filteredStudents?.map(student=>{
    
 
    return(

      <div className='mx-auto p-2 mb-2'>
      <table className="w-full text-sm text-left divide-y divide-y-8 border table-fixed border-gray-400 ">
        <thead className="text-md text-gray-700 bg-gray-100 shadow-2xl dark:text-gray-800">
          <tr>
            <th scope="col" className="w-1/4 px-4 py-6  text-center " style={{ whiteSpace: 'normal',wordWrap: 'break-word',  textOverflow: 'ellipsis' }}>
          {student.name}
            </th>
            <th scope="col" className="w-1/4 px-4 py-6 text-center">
       {student.phone}
            </th>
            <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal',wordWrap: 'break-word',  textOverflow: 'ellipsis' }}>
    {student.email}
                </th>
            <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal',wordWrap: 'break-word',  textOverflow: 'ellipsis' }}>
            {student.qualification}
            </th>
            <th scope="col" className="w-1/4 px-4 py-6 text-center ">
              <button className='bg-black px-4 py-2 text-white rounded-lg  '  onClick={()=>{
                    handleStudentId(student.id),setMarkModal(true),getStudentMark(student.id)
                }}> Add</button>
            </th>
            <th scope="col" className="w-1/4 px-4 py-6 text-center ">
              <button className='bg-black px-4 py-2 text-white rounded-lg  ' onClick={()=>{
                  handleStudentId(student.id),setTableModal(true),getStudentMark(student.id)
                }}>View</button>
            </th>
            <th scope="col" className="w-1/4 px-4 py-6 text-center ">
              <button className='bg-black px-4 py-2 text-white rounded-lg  ' onClick={()=>{setDeleteModal(true),handleStudentId(student.id)}}>Remove</button>
            </th>
           
          </tr>
        </thead>
      </table>
    </div>
    )

   


  })

//handleId={activeTab} studentObjId={studentId} batchId={id} markRecords={markData} arrayRecord={arrayRecord} patternRecord={patternRecord} oopsRecord={oopsRecord} commnRecord={commnRecord}

}





<MarkModal  isVisible={markModal} onClose={()=>{setMarkModal(false)} }  studentId={studentId} activeTab={activeTab} batchId={id}  />


        </div>
       <ModalTable  isTableVisble={tableModal} onTableClose={()=>{setTableModal(false)}} />
        
       <DeleteModal isVisible={deleteModal} showDeleteModal={()=>{setDeleteModal(false)}} deleteFn={()=>{removeStudent(studentId)}} />

       <AddForm addForm={addFormVisibile} onClose={()=>{setAddFormVisible(false)}} />
        </>
    )
}

export default BatchRecord