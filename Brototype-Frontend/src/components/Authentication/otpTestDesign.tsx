import React, { useState, useEffect, FunctionComponent, FormEvent, useRef } from 'react';
import { signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../firebase/config';
import { RecaptchaVerifier } from 'firebase/auth';
import otpLoginPng from "../../../public/otpLogin.png"
import { setOtpData } from "../../redux-toolkit/otpReducer"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import your images and styles here
// const otpLoginPng = require('path-to-your-image');

const OtpPage: FunctionComponent = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [phoneNumber, setPhoneNumber] = useState("");

    const [isCodeSent, setIsCodeSent] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const otpData = useSelector((state) => state.otp);
    let phone: React.SetStateAction<string>;
    const invigilatorIdRef = useRef<string | null>(null);
    const accessTokenRef = useRef<string | null>(null);
    const customTokenRef = useRef<string | null>(null);
    function focusNext(e: FormEvent<HTMLInputElement>, nextInputID: string) {
        const input = e.target as HTMLInputElement;
        if (input.value.length === 1) {
            const nextInput = document.getElementById(nextInputID) as HTMLInputElement | null;
            if (nextInput) {
                nextInput.focus();
            }
        }
    }

    useEffect(() => {
        invigilatorIdRef.current = otpData.otpData.invigilatorId
        console.log(invigilatorIdRef,"invigilatorId comingggggg");
        
        phone = otpData.otpData.phone;
        console.log(phone,"phoneeeeeeeeeeeee");
        
        customTokenRef.current= otpData.otpData.customToken
        console.log(customTokenRef,"cutommmmmmmmmm");
        
        accessTokenRef.current= otpData.otpData.accessToken
        console.log(accessTokenRef,"acesssssssssssss");
        
        setPhoneNumber(phone);
        dispatch((setOtpData(" ")))
        setUpRecaptcha();
        onSignup();

        const otpTimeout = setTimeout(() => {
            // Show a warning toast
            toast.warning("OTP has expired. Please resend.");

            // Navigate to '/invigilator'
            navigate('/invigilator');
        }, 60000); // Set the timeout duration in milliseconds (60,000 milliseconds = 1 minute)

        // Clear the timer on component unmount or when OTP is successfully verified
        return () => clearTimeout(otpTimeout);
    }, []);

    const setUpRecaptcha = () => {
        console.log('Setting up reCAPTCHA');
        if (!window.recaptchaVerifier) {
            try {
                window.recaptchaVerifier = new RecaptchaVerifier(
                    auth,
                    'recaptcha-container',
                    {
                        size: 'invisible',
                        callback: (response: any) => {
                            console.log('reCAPTCHA resolved:', response);
                            // Call the onSignup function
                            onSignup();
                        },
                        'expired-callback': () => {
                            // Handle expiration if needed
                        },
                    }
                );
            } catch (error) {
                console.error('Error initializing RecaptchaVerifier:', error);
            }
        }
    };

    const onSignup = async () => {
        console.log('Sending OTP');
        const appVerifier = window.recaptchaVerifier;
        const formatPh = '+91' + phone;
        console.log(formatPh, "Phone Number for OTP");

        try {
            const confirmationResult = await signInWithPhoneNumber(auth, formatPh, appVerifier);
            console.log('Confirmation result:', confirmationResult);
            window.confirmationResult = confirmationResult;
            setIsCodeSent(true);
            invigilatorIdRef.current = otpData.otpData.invigilatorId;
            customTokenRef.current = otpData.otpData.customToken;
            accessTokenRef.current = otpData.otpData.accessToken;
        } catch (error) {
            console.error('Error in sending OTP', error);
            // navigate('/invigilator')
        }
    };

    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        e.preventDefault();
    
        const isBackspace = e.nativeEvent.inputType === 'deleteContentBackward';
    
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);
    
        const nextInputID = `otp${index + 2}`;
        const prevInputID = `otp${index}`;
    
        // If the entered digit is not empty and there is a next input field, focus on it
        if (e.target.value !== '' && index < 5 && !isBackspace) {
            const nextInput = document.getElementById(nextInputID) as HTMLInputElement | null;
            if (nextInput) {
                nextInput.focus();
            }
        } else if (isBackspace && index > 0) {
            // If backspace is pressed and there is a previous input field, focus on it
            const prevInput = document.getElementById(prevInputID) as HTMLInputElement | null;
            if (prevInput) {
                prevInput.focus();
            }
        }
    };
    

    const handleVerifyOtp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const code = otp.join('');
        console.log(code, "76756567677");
    
        try {
            window.confirmationResult.confirm(code).then((result:any) => {

                console.log("Success: OTP verified", result.user);
            
                console.log(invigilatorIdRef.current, "<<<<<<< invigilatorId");
                console.log(accessTokenRef.current, ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
                console.log(customTokenRef.current, "<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>");
                const invigilatorData:any={
                    invigilatorId:invigilatorIdRef.current,
                    accessToken:accessTokenRef.current,
                    customToken:customTokenRef.current
                }

                localStorage.setItem("invigilatorAccessToken",invigilatorData?.accessToken)
                localStorage.setItem("invigilatorCustomToken",invigilatorData?.customToken)
                dispatch(setOtpData(invigilatorData))
                toast.success("OTP LOGIN SUCCESS")
                navigate("/fumigation")

            }).catch((error: any) => {
                console.error("Error in verifying OTP:", error);
            });
        } catch (error) {
            console.error("Error in verifying OTP:", error);
        }
    };

    return (
        <div>
            <div className="bg-white flex flex-row justify-center w-full">
            <div id="recaptcha-container"></div>
                <div className="bg-white overflow-hidden w-[1280px] h-[847px] relative">
                    <div className="absolute w-[1541px] h-[687px] top-[10px] left-[-112px]">
                        <img className="absolute w-[24px] h-[8px] top-0 left-[311px]" alt="Vector" src="" />
                        <div className="absolute w-[1124px] h-[679px] top-0 left-[191px] bg-white" />
                        <div className="absolute w-[1124px] h-[679px] top-0 left-[227px] bg-white" />
                        <div className="absolute w-[1541px] h-[447px] top-0 left-0">
                            <div className="relative w-[1461px] h-[474px] left-[40px]">
                                <div className="absolute w-[1124px] h-[278px] top-0 left-[150px] bg-[#0000000f]" />
                                <div className="absolute w-[828px] h-[166px] top-[188px] left-[624px] bg-white rotate-[-11.85deg]" />
                                <div className="absolute w-[731px] h-[192px] top-[168px] left-[11px] bg-white rotate-[19.00deg]" />
                            </div>
                        </div>
                        <img
                            className="absolute w-[287px] h-[255px] top-[109px] left-[586px] object-cover"
                            alt="Rectangle"
                            src={otpLoginPng} />
                        <div className="absolute top-[391px] left-[615px] [font-family:'Poppins-Medium',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[normal]">
                            Please Verify Account
                        </div>
                        <p className="absolute w-[465px] top-[433px] left-[521px] [font-family:'Poppins-Light',Helvetica] font-light text-black text-[13px] tracking-[0] leading-[normal]">
                            please Enter six digit code we sent to your&nbsp;&nbsp;phone Number&nbsp;&nbsp;to Verify
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you
                            new Nogard Account
                        </p>
                        <form onSubmit={(e)=>handleVerifyOtp(e)}>
                            <input id="otp1" className="absolute w-[49px] h-[60px] top-[500px] left-[533px] bg-[#0000000f] rounded-[5px] border border-solid border-[#00000033] text-center" maxLength={1} onChange={(e) => handleOtpChange(e, 0)} />
                            <input id="otp2" className="absolute w-[49px] h-[60px] top-[500px] left-[598px] bg-[#0000000f] rounded-[5px] border border-solid border-[#00000033] text-center" maxLength={1} onChange={(e) => handleOtpChange(e, 1)} />
                            <input id="otp3" className="absolute w-[49px] h-[60px] top-[500px] left-[662px] bg-[#0000000f] rounded-[5px] border border-solid border-[#00000033] text-center" maxLength={1} onChange={(e) => handleOtpChange(e, 2)} />
                            <input id="otp4" className="absolute w-[49px] h-[60px] top-[500px] left-[726px] bg-[#0000000f] rounded-[5px] border border-solid border-[#00000033] text-center" maxLength={1} onChange={(e) => handleOtpChange(e, 3)} />
                            <input id="otp5" className="absolute w-[49px] h-[60px] top-[500px] left-[791px] bg-[#0000000f] rounded-[5px] border border-solid border-[#00000033] text-center" maxLength={1} onChange={(e) => handleOtpChange(e, 4)} />
                            <input id="otp6" className="absolute w-[49px] h-[60px] top-[500px] left-[857px] bg-[#0000000f] rounded-[5px] border border-solid border-[#00000033] text-center" maxLength={1} onChange={(e) => handleOtpChange(e, 5)} />

                            <div className="absolute w-[222px] h-[47px] top-[590px] left-[603px] bg-black rounded-[5px]" />
                            <button type='submit' className="absolute top-[605px] left-[661px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-[normal]">
                                Verify &amp; Continue
                            </button>
                        </form>
                        <div className="absolute top-[657px] left-[692px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#000000b5] text-[13px] tracking-[0] leading-[normal]">
                            Resend
                        </div>
                    </div>

                
                    <div className="absolute top-[2961px] left-[872px] [font-family:'Mulish-Regular',Helvetica] font-normal text-white text-[27px] tracking-[0] leading-[normal]">
                        Submit
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpPage;
