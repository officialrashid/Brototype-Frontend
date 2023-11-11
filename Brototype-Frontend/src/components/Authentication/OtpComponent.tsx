// import React, { useState, useEffect } from 'react';
// import { signInWithPhoneNumber } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { auth } from '../../firebase/config';
// import { RecaptchaVerifier } from 'firebase/auth';

// const OtpComponent = () => {
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const [code, setCode] = useState("");
//   const [isCodeSent, setIsCodeSent] = useState(false);
//   const navigate = useNavigate();
//   const otpData = useSelector((state) => state.otp);
//   let phone: React.SetStateAction<string>;
//  // Declare confirmationResult at a higher scope.

//   useEffect(() => {
//     phone = otpData.otpData.phone;
//     setPhoneNumber(phone);
//     setUpRecaptcha();
//     onSignup();
//   }, []);

//   const setUpRecaptcha = () => {
//     console.log('Setting up reCAPTCHA');
//     if (!window.recaptchaVerifier) {
//       try {
//         window.recaptchaVerifier = new RecaptchaVerifier(
//           auth,
//           'recaptcha-container',
//           {
//             size: 'invisible',
//             callback: (response) => {
//               console.log('reCAPTCHA resolved:', response);
//               // Call the onSignup function
//               onSignup();
//             },
//             'expired-callback': () => {
//               // Handle expiration if needed
//             },
//           }
//         );
//       } catch (error) {
//         console.error('Error initializing RecaptchaVerifier:', error);
//       }
//     }
//   };



//   // ConfirmationResultImpl {verificationId: 'AD8T5IuqLROId8bt9b2TeIqQfa8ibnF1gxhSElm2nxkZbFU1xs…uWy-ztn-8B2bFDERqWG8C540WefsjMmQ-g56rDuTSWGVDEdGg', onConfirmation: ƒ}
//   // onConfirmation
//   // : 
//   // (cred) => signInWithCredential(authInternal, cred)
//   // length
//   // : 
//   // 1
//   // name
//   // : 
//   // ""
//   // arguments
//   // : 
//   // (...)
//   // caller
//   // : 
//   // (...)
//   // [[FunctionLocation]]
//   // : 
//   // phone.ts:113
//   // [[Prototype]]
//   // : 
//   // ƒ ()
//   // [[Scopes]]
//   // : 
//   // Scopes[3]
//   // verificationId
//   // : 
//   // "AD8T5IuqLROId8bt9b2TeIqQfa8ibnF1gxhSElm2nxkZbFU1xs11CpVASve_9Yk1ZjbcoFwhWAC0LmMIfcqjpVazN-kW6qpEQSpND7IvM5Sux__HvjPXX_BtZNRWi0wB8r7WPrFfsOd4lBllBI3Su85IEXk7DutgFz_wxoMg6lVuuUNzFFxCHkbdgu_w4sKqac_jmAuWy-ztn-8B2bFDERqWG8C540WefsjMmQ-g56rDuTSWGVDEdGg"
//   // [[Prototype]]
//   // : 
//   // Object





//   const onSignup = async () => {
//     console.log('Sending OTP');
//     // setUpRecaptcha();
//     const appVerifier = window.recaptchaVerifier;
//     const formatPh = '+91' + phone;
//     console.log(formatPh, "Phone Number for OTP");

//     try {
//       const confirmationResult = await signInWithPhoneNumber(auth, formatPh, appVerifier)
//       console.log('Confirmation result:', confirmationResult);
//         window.confirmationResult = confirmationResult
    
//         setIsCodeSent(true)
 
  
//     } catch (error) {
//       console.error('Error in sending OTP', error);
//     }
//   };

//   const handleOtpChange = (e, index) => {
//     console.log("ullil ethiyannu makkaleeee");

//     e.preventDefault();
//     const newOtp = [...otp];
//     newOtp[index] = e.target.value;
//     setOtp(newOtp);
//   };

//   // const handleFormSubmission= async (handleVerifyOtp,e)=>{

//   //   e.preventDefault()
//   //   handleVerifyOtp()

//   // }
//   const handleVerifyOtp = (e) => {
//     e.preventDefault()
//     const code = otp.join('');

//     try {
   
//       window.confirmationResult.confirm(code).then((result) => {
//         console.log("Success: OTP verified", result.user);
//         // You can navigate or perform other actions here.
//       }).catch((error) => {
//         console.error("Error in verifying OTP:", error);
//         // Handle the error as needed, e.g., show an error message to the user.
//       });
//     } catch (error) {
//       console.error("Error in verifying OTP:", error);
//     }
//   };
//   return (
//     <div>
   
//       <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl mt-8rem border border-black">
//       <div id="recaptcha-container"></div>
//         <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
//           <div className="flex flex-col items-center justify-center text-center space-y-2">
//             <div className="font-semibold text-3xl">
//               <p>Otp Verification</p>
//             </div>
//             <div className="flex flex-row text-sm font-medium text-gray-400">
//               <p>We have sent a code to your registered mobile number</p>
//             </div>
//           </div>

//           <div>
//             <form  onSubmit={handleVerifyOtp}>
//               <div className="flex flex-col space-y-16">
//                 <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
//                   {otp.map((digit, index) => (
//                     <div className="w-16 h-16" key={index}>
//                       <input
//                         className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-gray-500"
//                         type="text"
//                         name=""
//                         id=""
//                         value={digit}
//                         onChange={(e) => handleOtpChange(e, index)}
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex flex-col space-y-5">
//                   <div>
//                     <button
//                     type='submit'
//                       // Call the verification function on button click
//                       className="flex flex-row items-center justify-center text-center w-24rem ml-8 border rounded-xl outline-none py-2 bg-gray-900 border-none text-white text-sm shadow-sm"
//                     >
//                       Verify Account
//                     </button>
//                   </div>

//                   <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
//                     <p>Didn't receive the code?</p>
//                     <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">
//                       Resend
//                     </a>
//                   </div>
//                 </div>
//               </div>

 
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OtpComponent;
