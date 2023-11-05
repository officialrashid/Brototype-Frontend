import React from 'react';
import logo from '../../../public/brototype logo.png';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { invigilatorLogin } from '../../utils/methods/post'
import {auth} from "../../firebase/config"
import {signInWithCustomToken } from "firebase/auth";

interface formValues{
  name: any;
  email: string,
  password: string
}
const SignIn = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    } as unknown as formValues,
    // Define your onSubmit handler here
    onSubmit: async (values) => {
      try{

        const body ={
          name: values.name,
          email: values.email,
          
        }
        
       const response: any = await invigilatorLogin(body) 
        if(response){
          console.log(response.data.response.accessToken,"custom token in hsbdshdhsvdsvd")
          console.log(response.data.response.customToken,"custom token in fronten");
          // const customToken = response.data.response.customToken
          const customToken = response.data.response.customToken
          signInWithCustomToken(auth, customToken)
          .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;
            console.log("Successfully signed in with custom token:", user);
          }).catch((err)=>{
            console.log(err,"invalid firebase token");
          })
        
        }
        

      } catch(error){
        console.log(error,"error in the formik data");
        
      }
    },
  });
  return (
    <div>
      <div className="flex flex-col min-h-screen ">




        <div className='flex justify-center items-center h-screen bg-gray-200'>
          <div className="border border-solid  shadow-2xl bg-white p-4 mt-4 w-1/4" >
            <div className="  flex-1 flex-col ">
              <div >
                <img
                  className=" mx-auto mt-4 h-10 w-auto "
                  src={logo}
                  alt="Your Company"
                />
                <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Student Id
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder='Enter your student id'
                        id="name"
                        name="name"
                        type="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        autoComplete="name"
                        required
                        className=" focus:outline-gray-800 block w-full rounded-sm px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>

                    </div>
                    <div className="mt-2">
                      <input
                        placeholder='Enter your password'
                        id="email"
                        name="email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        autoComplete="current-password"
                        required
                        className="block w-full focus:outline-gray-800  rounded-sm border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6  focus:accent-black"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between ">
                    <div className='flex items-start'>
                      <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="accent-black w-4 h-4 border border-blue-900 rounded bg-blue-100 focus:ring-3 focus:ring-blue-300 dark:bg-blue-900 dark:border-blue-900 dark:focus:ring-blue-900 dark:ring-offset-blue-900 ring-blue-900" />
                      </div>
                      <div className='ml-3 text-sm'>
                        <label htmlFor="remember" className="text-gray-800 dark:text-gray-400">Remember me</label>

                      </div>

                    </div>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-black hover:text-red">
                        Forgot password?
                      </a>
                    </div>

                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-sm bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                  <div className='ml-2'>
                    <span className='text-sm text-gray-400 ml-2'>This site is protected by reCAPTCHA and the </span>
                    <div >
                      <span className=' text-sm text-gray-400 ml-[0.86vw]'>Google Privacy Policy and Terms of Service</span>
                    </div>
                  </div>

                </form>


              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className='bg-white bottom-0 fixed w-full shadow-xl h-12 '>

        <nav className=''>
          <ul className='flex items-center text-gray-500 text-sm pt-4 gap-[1vw] pl-64' >
            <li> <span className=' '>Copyright © 2023 Brototype</span></li>
            <li>Help center</li>
            <li>Jobs</li>
            <li>Online interview</li>
            <li>Students</li>
            <li>Terms</li>
            <li>Privacy and policy</li>
            <li>Students</li>
            <li>Terms</li>
            <li>Privacy and policy</li>



          </ul>
        </nav>
      </nav>


    </div>
  );
}

export default SignIn;
