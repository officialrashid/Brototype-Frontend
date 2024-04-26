import axios from "axios"
import { Formik,Form, Field,ErrorMessage } from "formik"
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const CreateTask=({isVisible,onClose})=>{

    const handleToast=(message:any,error:any)=>{
        if(!error){
          toast.success(message, {
            position: 'top-center',
            autoClose: 3500
          });
    //setModal(false)
        }
        else{
          toast.error(message, {
            position: 'top-center',
            autoClose: 3000
          });
    
    
        
       }
      }
    const inititalValues={
       personalWorkout:"",
       technicalWorkout:'',
       miscellaneousWorkout:"",
       domain:"",
       week:""
     
       }
     
       const validationSchema=Yup.object({
        personalWorkout:Yup.string().required("Personal workout is required"),
        technicalWorkout:Yup.string().required("Technical workout is required"),
       miscellaneousWorkout:Yup.string().required("Miscellaneous workout is required"),
       week:Yup.string().required("Week  is required"),
       domain:Yup.string().required("Domain  is required"),
         
        
         
       })
    if(!isVisible) return null
    return(
        <>
        <Formik validationSchema={validationSchema} initialValues={inititalValues} onSubmit={async(values,{resetForm,setStatus})=>{

            
         console.log(values);

         try{
            const response= await axios.post('http:localhost:2001/task-service/create-task')

         }catch(error){

         }
         
        }}>
        <Form>
<div className="z-40 fixed inset-0 flex  justify-center overflow-hidden  bg-black/60 overflow-y-scroll  py-2">

<div className="border m-4 rounded-md  bg-white h-fit  w-2/4">
  <div className="flex justify-between m-2 mb-4 mt-3">
    <div></div>
     <div onClick={()=>{onClose()}} ><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-slate-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</span></div>
  </div>
<div >
<div className="border border-2px m-2 rounded-md py-2">
  <div className="flex justify-between m-2 ">
    <div><span className="font-bold"> Domain</span> </div>
    <div><svg fill="#ffffff" height="35px" width="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-33 -33 396.00 396.00" xml:space="preserve" stroke="#ffffff" stroke-width="0.0033" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(9.900000000000006,9.900000000000006), scale(0.94)"><rect x="-33" y="-33" width="396.00" height="396.00" rx="198" fill="#0a0a0a" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.66"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_9_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M255.606,205.606 C252.678,208.535,248.839,210,245,210s-7.678-1.464-10.606-4.394l-69.396-69.393l-69.392,69.393c-5.857,5.858-15.355,5.858-21.213,0 c-5.858-5.857-5.858-15.355,0-21.213l79.998-80c2.813-2.813,6.628-4.394,10.606-4.394c3.979,0,7.793,1.58,10.607,4.394l80.002,80 C261.465,190.251,261.465,199.749,255.606,205.606z"></path> </g></svg></div>
  </div>
</div>

<div className="m-2 ">
  <Field  name="domain"  rows="8" className="border w-full   rounded-sm outline-black  py-3 px-2 " placeholder="Enter personal workouts "></Field>
</div>
<div className="m-2">
    <ErrorMessage name="domain"  className="font-red-500 m-2"/>
</div>
<div className="border border-2px m-2 rounded-md py-2">
  <div className="flex justify-between m-2 ">
    <div><span className="font-bold"> Week</span> </div>
    <div><svg fill="#ffffff" height="35px" width="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-33 -33 396.00 396.00" xml:space="preserve" stroke="#ffffff" stroke-width="0.0033" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(9.900000000000006,9.900000000000006), scale(0.94)"><rect x="-33" y="-33" width="396.00" height="396.00" rx="198" fill="#0a0a0a" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.66"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_9_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M255.606,205.606 C252.678,208.535,248.839,210,245,210s-7.678-1.464-10.606-4.394l-69.396-69.393l-69.392,69.393c-5.857,5.858-15.355,5.858-21.213,0 c-5.858-5.857-5.858-15.355,0-21.213l79.998-80c2.813-2.813,6.628-4.394,10.606-4.394c3.979,0,7.793,1.58,10.607,4.394l80.002,80 C261.465,190.251,261.465,199.749,255.606,205.606z"></path> </g></svg></div>
  </div>
</div>

<div className="m-2 ">
  <Field  name="week"  rows="8" className="border w-full   rounded-sm outline-black  py-3 px-2 " placeholder="Enter personal workouts "></Field>
</div>
<div className="m-2">
    <ErrorMessage name="week"  className="font-red-500 m-2"/>
</div>
  <div className="border border-2px m-2 rounded-md py-2">
  <div className="flex justify-between m-2 ">
    <div><span className="font-bold"> Perosnal workouts</span> </div>
    <div><svg fill="#ffffff" height="35px" width="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-33 -33 396.00 396.00" xml:space="preserve" stroke="#ffffff" stroke-width="0.0033" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(9.900000000000006,9.900000000000006), scale(0.94)"><rect x="-33" y="-33" width="396.00" height="396.00" rx="198" fill="#0a0a0a" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.66"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_9_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M255.606,205.606 C252.678,208.535,248.839,210,245,210s-7.678-1.464-10.606-4.394l-69.396-69.393l-69.392,69.393c-5.857,5.858-15.355,5.858-21.213,0 c-5.858-5.857-5.858-15.355,0-21.213l79.998-80c2.813-2.813,6.628-4.394,10.606-4.394c3.979,0,7.793,1.58,10.607,4.394l80.002,80 C261.465,190.251,261.465,199.749,255.606,205.606z"></path> </g></svg></div>
  </div>
</div>

<div className="m-2 ">
  <Field as="textarea" name="personalWorkout" cols="30" rows="8" className="border w-full   rounded-sm outline-black   " placeholder="Enter personal workouts "></Field>
</div>
<div className="m-2">
    <ErrorMessage name="personalWorkout" className="font-red-500 m-2"/>
</div>




</div>
 <div className="border border-2px m-2 rounded-md py-2">
  <div className="flex justify-between m-2  ">
    <div><span className="font-bold"> Technical workouts</span> </div>
    <div><svg fill="#ffffff" height="35px" width="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-33 -33 396.00 396.00" xml:space="preserve" stroke="#ffffff" stroke-width="0.0033" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(9.900000000000006,9.900000000000006), scale(0.94)"><rect x="-33" y="-33" width="396.00" height="396.00" rx="198" fill="#0a0a0a" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.66"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_9_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M255.606,205.606 C252.678,208.535,248.839,210,245,210s-7.678-1.464-10.606-4.394l-69.396-69.393l-69.392,69.393c-5.857,5.858-15.355,5.858-21.213,0 c-5.858-5.857-5.858-15.355,0-21.213l79.998-80c2.813-2.813,6.628-4.394,10.606-4.394c3.979,0,7.793,1.58,10.607,4.394l80.002,80 C261.465,190.251,261.465,199.749,255.606,205.606z"></path> </g></svg></div>
  </div>
</div>
<div className="m-2 ">
  <Field as="textarea"  name="technicalWorkout" cols="30" rows="8" className="border w-full  rounded-sm outline-black   " placeholder="Enter personal workouts "></Field>
</div> 
<div className="m-2">
    <ErrorMessage name="technicalWorkout" className="font-red-500 "/>
</div>

 <div className="border border-2px m-2 rounded-md py-2">
  <div className="flex justify-between m-2  ">
    <div><span className="font-bold"> Miscellaneous workouts</span> </div>
    <div><svg fill="#ffffff" height="35px" width="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-33 -33 396.00 396.00" xml:space="preserve" stroke="#ffffff" stroke-width="0.0033" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(9.900000000000006,9.900000000000006), scale(0.94)"><rect x="-33" y="-33" width="396.00" height="396.00" rx="198" fill="#0a0a0a" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.66"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_9_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M255.606,205.606 C252.678,208.535,248.839,210,245,210s-7.678-1.464-10.606-4.394l-69.396-69.393l-69.392,69.393c-5.857,5.858-15.355,5.858-21.213,0 c-5.858-5.857-5.858-15.355,0-21.213l79.998-80c2.813-2.813,6.628-4.394,10.606-4.394c3.979,0,7.793,1.58,10.607,4.394l80.002,80 C261.465,190.251,261.465,199.749,255.606,205.606z"></path> </g></svg></div>
  </div>
</div>
<div className="m-2 ">
  <Field as="textarea" name="miscellaneousWorkout" cols="30" rows="8" className="border w-full  rounded-sm outline-black   " placeholder="Enter personal workouts "></Field>
</div>
<div className="m-2">
    <ErrorMessage  name="miscellaneousWorkout" className="font-red-500 m-2"/>
</div>





<div className="flex justify-between m-2 mt-0">
  <div></div>
  <div>
      <button type="submit" className="bg-black text-white py-2 px-5 rounded-md m-3">submit</button>
<button className="bg-black text-white py-2 px-5 rounded-md m-3">Cancel</button>

  </div>

</div>



</div>

</div>

</Form>

</Formik>


<ToastContainer/>



        
        </>
    )
}

export default CreateTask