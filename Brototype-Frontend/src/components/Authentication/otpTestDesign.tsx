import { FormEvent, FunctionComponent, useCallback } from "react";
import Navbar from "../Frontend/Navbar";
import otpLoginPng from "../../../public/otpLogin.png"
const OtpPage: FunctionComponent = () => {
    // function focusNext(arg0: undefined, arg1: string): void {
    //     throw new Error("Function not implemented.");
    // }
    function focusNext(e: FormEvent<HTMLInputElement>, nextInputID: string) {
        const input = e.target as HTMLInputElement;
        if (input.value.length === 1) {
          const nextInput = document.getElementById(nextInputID) as HTMLInputElement | null;
          if (nextInput) {
            nextInput.focus();
          }
        }
      }
      
      
    return (
        <div>
            <div className="bg-white flex flex-row justify-center w-full">

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
                        <input id="otp1" className="absolute w-[49px] h-[60px] top-[500px] left-[533px] bg-[#0000000f] rounded-[5px] border border-solid border-[#00000033] text-center" maxLength={1} onInput={(e) => focusNext(e, 'otp2')} />
                        <input id="otp2" className="absolute w-[49px] h-[60px] top-[500px] left-[598px] bg-[#0000000f] rounded-[5px] border border-solid border-[#00000033] text-center" maxLength={1}  onInput={(e) => focusNext(e, 'otp3')}/>
                        <input id="otp3" className="absolute w-[49px] h-[60px] top-[500px] left-[662px] bg-[#0000000f] rounded-[5px] border border-solid border-[#00000033] text-center" maxLength={1}   onInput={(e) => focusNext(e, 'otp4')}/>
                        <input id="otp4" className="absolute w-[49px] h-[60px] top-[500px] left-[726px] bg-[#0000000f] rounded-[5px] border border-solid border-[#00000033] text-center" maxLength={1}   onInput={(e) => focusNext(e, 'otp5')}/>
                        <input id="otp5" className="absolute w-[49px] h-[60px] top-[500px] left-[791px] bg-[#0000000f] rounded-[5px] border border-solid border-[#00000033] text-center" maxLength={1}   onInput={(e) => focusNext(e, 'otp6')} />
                        <input id="otp6" className="absolute w-[49px] h-[60px] top-[500px] left-[857px] bg-[#0000000f] rounded-[5px] border border-solid border-[#00000033] text-center" maxLength={1} />
                        <div className="absolute w-[222px] h-[47px] top-[590px] left-[603px] bg-black rounded-[5px]" />
                        <button className="absolute top-[605px] left-[661px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[13px] tracking-[0] leading-[normal]">
                            Verify &amp; Continue
                        </button>
                        <div className="absolute top-[657px] left-[692px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#000000b5] text-[13px] tracking-[0] leading-[normal]">
                            Resend
                        </div>
                    </div>

                    <p className="absolute w-[997px] h-[22px] top-[3174px] left-[162px] [font-family:'Arial-Regular',Helvetica] font-normal text-transparent text-[19px] tracking-[0] leading-[normal]">
                        <span className="text-black">Brototype</span>
                        <span className="text-[#808385]">
                            &nbsp;&nbsp;© 2023&nbsp;&nbsp;User Agreement&nbsp;&nbsp; Privacy Policy&nbsp;&nbsp; Community
                            Guidelines&nbsp;&nbsp; Cookie Policy&nbsp;&nbsp;Copyright Policy&nbsp;&nbsp;Send Feedback Language
                        </span>
                    </p>
                    <div className="absolute top-[2961px] left-[872px] [font-family:'Mulish-Regular',Helvetica] font-normal text-white text-[27px] tracking-[0] leading-[normal]">
                        Submit
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpPage;
