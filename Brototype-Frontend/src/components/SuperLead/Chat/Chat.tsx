import { SetStateAction, useEffect, useState } from "react"

import { useSelector } from "react-redux";

import { getMessages } from "../../../utils/methods/get";
import Students from "./Students";
import ChatTab from "./ChatTab";
import { useSocket } from "../../../hooks/useSocket";
import { Socket } from "socket.io-client";
const Chat = () => {
    const socket: Socket<DefaultEventsMap, DefaultEventsMap> | null = useSocket();
    console.log(socket, 'sockettttt');

    const student: any = useSelector((state: any) => state?.chat?.chatOppositPersonData)


    const superleadId: any = useSelector((state: any) => state?.superlead?.superleadData?.superleadId);


    const [profile, setProfile] = useState(false)
    const tabs = ['chat', 'all', 'students', 'advisors', 'reviewers', 'leads'];
    const [activeTab, setActiveTab] = useState('chat'); // Initial active tab is 'chat'
    const [message, setMessage] = useState("")
    const [allMesage, setAllMessage] = useState([])
    const [lastMessage, setLastMessage] = useState([])
    const [isStreaming, setIsStreaming] = useState(false);
    const [messageHandle, setMessageHandle] = useState(false)
    const startStreaming = () => {
        setIsStreaming(true);
        console.log('Start streaming'); // For debugging
        // Start audio stream logic here
    };

    const stopStreaming = () => {
        setIsStreaming(false);
        console.log('Stop streaming'); // For debugging
        // Stop audio stream logic here
    };

    const handleMouseDown = () => {
        startStreaming();
    };

    const handleMouseUp = () => {
        stopStreaming();
    };
    const handleTabClick = (currentTab: string) => {
        const currentIndex = tabs.indexOf(currentTab);
        const nextIndex = (currentIndex) % tabs.length; // Get the index of the next tab
        setActiveTab(tabs[nextIndex]); // Set the next tab as active
    };
    const handleMessageChange = (event: string) => {
        try {
            const message = event?.target?.value
            console.log(message, "smhcjhfhdhjdfgdhfdh");

            setMessage(message)
        } catch (error) {

        }
    }
    const handleSubmit = async () => {
        try {
            if (!message) {
                // Handle error: Empty message
                return;
            }
            const messageData = {
                senderId: superleadId,
                receiverId: student.studentId || student.chaterId,
                content: message
            };
            console.log(messageData, "messageData");

            // Emit message to the server
            socket.emit('message', messageData);
            setMessageHandle(false)
            // Listen for response from the server
            socket.on('messageResponse', (response: { status: boolean; message: any; }) => {


                if (response.status === true) {
                    console.log("Message sent successfully");

                    setMessage(""); // Clear the message input field
                } else {
                    console.error("Failed to send message:", response.message);
                }
            });
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    useEffect(() => {
        const fetchMessages = async () => {
            console.log("fetcMessage workinggg");

            try {
                const data = {
                    initiatorId: superleadId,
                    recipientId: student?.chaterId || student.studentId
                }
                console.log(data, "bvvcfgvghh");

                const response = await getMessages(data)
                if (response.getMessages.status === true) {
                    setAllMessage(response.getMessages.messages)
                    setLastMessage(response.getMessages.lastMessage)
                } else {
                    setAllMessage([])
                    setLastMessage([])
                }
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        }
        fetchMessages();
    }, [student?.studentId, student?.chaterId, superleadId]); // Only trigger when superleadId or student?.chaterId changes


    useEffect(() => {
        if (socket) {
            const handleReceivedMessage = (data: any) => {
                console.log("Received messagesssssssssssssss:", data);
                console.log("Received messagesssssssssssssss cotennnnnnnnnn:", data.content);
                setAllMessage(prev => {
                    console.log('Previous state:', prev);
                    const newState = [...prev, data.content];
                    console.log('New state:', newState);
                    return newState;
                });
            };

            socket.on("received", handleReceivedMessage);

            return () => {
                // Clean up socket listener when component unmounts
                socket.off("received", handleReceivedMessage);
            };
        }
    }, [socket]);
    const isSender = (message: any) => {
        return message.senderId === superleadId;
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

                        <Students socket={socket} />
                    ) : activeTab === "chat" ? (

                        <ChatTab />
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
                            {allMesage.map((message: any, index: number) => (
                                <div
                                    key={index}
                                    className={`flex gap-5 m-5 mb-0 mt-3 ${isSender(message) ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className="w-fit  bg-dark-highBlue mb-0 h-10 rounded-sm ">

                                        <p className="text-sm font-roboto m-3 text-white">{message?.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>




                    </div>

                    <div className=" m-3 mt-0 rounded-md ">
                        <div className=" flex ">



                            <div className="relative top-0 w-full">


                                <textarea
                                    className="font-roboto border px-2 h-10 py-2 resize-none overflow-hidden outline-none max-h-40 absolute bottom-0 rounded-md w-full"
                                    placeholder="Type a message.."
                                    value={message}
                                    onChange={handleMessageChange}
                                />


                            </div>

                            <div className="m-1 cursor-pointer ">
                                <div className="flex gap-1">

                                    <div className="bg-dark-highBlue rounded-md"
                                        onMouseDown={handleMouseDown}
                                        onMouseUp={handleMouseUp}
                                        onMouseLeave={handleMouseUp} // Handle mouse leaving the button
                                    >

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
                                    <div className="bg-dark-highBlue rounded-md hover:bg-purple-500" onClick={handleSubmit}>
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