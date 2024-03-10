import { SetStateAction, useState } from "react"
import Students from "./Students"
import { useSelector } from "react-redux";
const Chat = () => {
    const student: any = useSelector((state: any) => state?.chat?.chatOppositPersonData)
    console.log(student,"dbfdfdhfd");
    
    const [profile, setProfile] = useState(false)
    const tabs = ['chat', 'all', 'students', 'advisors', 'reviewers', 'leads'];
    const [activeTab, setActiveTab] = useState('chat'); // Initial active tab is 'chat'

    const handleTabClick = (currentTab: string) => {
        const currentIndex = tabs.indexOf(currentTab);
        const nextIndex = (currentIndex) % tabs.length; // Get the index of the next tab
        setActiveTab(tabs[nextIndex]); // Set the next tab as active
    };
    return (


        <>
            <div className="flex border shadow-md  mt-36 w-2/2 m-48 item mb-0 h-38rem" >


                <div className="border-r w-1/2 bg-white ">
                    <div className="m-5 flex gap-3">
                        <div>
                            <img src="/profile.jpeg" alt="" className="w-10 h-10 rounded-full" />
                        </div>
                        <div className="relative">
                            <div className="absolute m-3 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 stroke-slate-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                            <div>
                                <input type="search" className=" font-roboto   w-full py-1 px-10 rounded-full border border-slate-200 outline-none   dark:focus:ring-black dark:focus:border-black " placeholder="hello search....... " />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 m-10 mt-0 mb-0">
                        {tabs.map(tab => (
                            <p key={tab} className={`text-sm font-roboto cursor-pointer ${activeTab === tab ? 'underline font-bold text-dark-highBlue' : ''}`} onClick={() => handleTabClick(tab)}>{tab}</p>
                        ))}
                    </div>
                    {activeTab === "students" ? (

                        <Students />
                    ) : activeTab === "anotherCondition" ? (

                        <div className="flex justify-between bg-dark-highBlue m-5 rounded-md">
                            <div className="flex gap-2 m-2 mt-">
                                <div className="border h-8 w-8 rounded-full mt-2">
                                    <img src="/profile.jpeg" alt="" className="rounded-full" />
                                </div>
                                <div className="mt-1 mb-0">
                                    <span className="text-sm font-medium font-roboto text-white">John Doe</span>
                                    <div>
                                        <span className="text-gray-600 font-roboto text-white text-xs">Hello good morning</span>
                                    </div>
                                </div>
                            </div>
                            <div className="m-4">
                                <span className="text-gray-600 text-sm font-roboto text-white">6m</span>
                            </div>
                        </div>// JSX for another condition
                    ) : null}


                </div>


                <div className="  border-r w-full bg-white h-20 mb-0" >
                    <div className="border-b ">
                        <div className="flex justify-between ">
                            <div className="flex gap-2 m-2 ">
                                <div className="border h-12 w-12 rounded-full  mt-3">
                                    <img src={student?.imageUrl} alt="" className="rounded-full" />
                                </div>
                                <div className="mt-5"><span className="text-md  font-semibold font-roboto">{student?.firstName} {student?.lastName}</span>
                                    <div>
                                        <span className="text-gray-600 text-sm font-roboto">last seen 8:98 pm</span>
                                    </div>
                                </div>


                            </div>
                            <div className="m-4 mt-8 flex gap-4">
                                <div className="border w-8 h-8 flex items-center justify-center rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>


                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                    </svg>


                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="h-30rem bg-custom-background mt-0" style={{ maxHeight: "800px", overflowY: "scroll" }}>

                        <div className="grid grid-cols-1 mb-0">

                            <div className="flex gap-5 m-5 mb-0">
                                {/* <img src="/profile.jpeg" alt="" className="w-8 h-8 rounded-full"/> */}
                                <div className="w-fit  bg-dark-highBlue mb-0 h-10 rounded-sm ">

                                    <p className="text-sm font-roboto m-3 text-white">Hello Rashid</p>
                                </div>

                            </div>

                            <div className="flex gap-5 m-5 mb-0">
                                {/* <img src="/profile.jpeg" alt="" className="w-8 h-8 rounded-full"/> */}
                                <div className="w-fit  bg-dark-highBlue mb-0 h-10 rounded-sm ">

                                    <p className="text-sm font-roboto m-3 text-white">Hello Rashid</p>
                                </div>

                            </div>
                            <div className="flex gap-5 m-5 mb-0">
                                {/* <img src="/profile.jpeg" alt="" className="w-8 h-8 rounded-full"/> */}
                                <div className="w-fit  bg-dark-highBlue mb-0 h-10 rounded-sm ">

                                    <p className="text-sm font-roboto m-3 text-white">Hello Rashid</p>
                                </div>

                            </div>
                            <div className="flex gap-5 m-5 mb-0">
                                {/* <img src="/profile.jpeg" alt="" className="w-8 h-8 rounded-full"/> */}
                                <div className="w-fit  bg-dark-highBlue mb-0 h-10 rounded-sm ">

                                    <p className="text-sm font-roboto m-3 text-white">Hello Rashid</p>
                                </div>

                            </div>

                            <div className="flex gap-5 m-5 mb-0">
                                {/* <img src="/profile.jpeg" alt="" className="w-8 h-8 rounded-full"/> */}
                                <div className="w-fit  bg-dark-highBlue mb-0 h-10 rounded-sm ">

                                    <p className="text-sm font-roboto m-3 text-white">Hello Rashid</p>
                                </div>

                            </div>                            <div className="flex gap-5 m-5 mb-0">
                                {/* <img src="/profile.jpeg" alt="" className="w-8 h-8 rounded-full"/> */}
                                <div className="w-fit  bg-dark-highBlue mb-0 h-10 rounded-sm ">

                                    <p className="text-sm font-roboto m-3 text-white">Hello Rashid</p>
                                </div>

                            </div>
                            <div className="flex gap-5 m-5 mb-0">
                                {/* <img src="/profile.jpeg" alt="" className="w-8 h-8 rounded-full"/> */}
                                <div className="w-fit  bg-dark-highBlue mb-0 h-10 rounded-sm ">

                                    <p className="text-sm font-roboto m-3 text-white">Hello Rashid</p>
                                </div>

                            </div>
                            <div className="flex gap-5 m-5 mb-0">
                                {/* <img src="/profile.jpeg" alt="" className="w-8 h-8 rounded-full"/> */}
                                <div className="w-fit  bg-dark-highBlue mb-0 h-10 rounded-sm ">

                                    <p className="text-sm font-roboto m-3 text-white">Hello Rashid</p>
                                </div>

                            </div>
                            <div className="flex gap-5 m-5 mb-0">
                                {/* <img src="/profile.jpeg" alt="" className="w-8 h-8 rounded-full"/> */}
                                <div className="w-fit  bg-dark-highBlue mb-0 h-10 rounded-sm ">

                                    <p className="text-sm font-roboto m-3 text-white">Hello Rashid</p>
                                </div>

                            </div>
                        </div>




                    </div>

                    <div className=" m-3 mt-0 rounded-md ">
                        <div className=" flex ">



                            <div className="relative top-0 w-full">



                                <textarea
                                    className=" font-roboto border px-2 h-10 py-2 resize-none overflow-hidden outline-none max-h-40  absolute bottom-0 rounded-md w-full"

                                    placeholder="Type a message.."
                                >


                                </textarea>


                            </div>

                            <div className="m-1 cursor-pointer ">
                                <div className="flex gap-1">
                                    <div className="bg-dark-highBlue rounded-md">
                                    <div className="flex items-center justify-center h-8 w-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                                        </svg>
                                    </div>
                                    </div>
                                    <div className="bg-dark-highBlue rounded-md">
                                    <div className="flex items-center justify-center h-8 w-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                                        </svg>
                                    </div>
                                    </div>
                                    <div className="bg-dark-highBlue rounded-md hover:bg-purple-500">
                                    <div className="border h-8 w-8 flex items-center justify-center  rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.768 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                        </svg>
                                    </div>
                                    </div>
                                </div>
                            </div>






                        </div>




                    </div>


                </div>






            </div>


        </>

    )
}
export default Chat