import { SetStateAction, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux";

import { getMessages } from "../../../utils/methods/get";
import Students from "./Superleads";
import ChatTab from "./ChatTab";
import { useSocket } from "../../../hooks/useSocket";
import { Socket } from "socket.io-client";
import VoiceRecorder from "../VoiceRecorder/VoiceRecorder";
import { storeChatAudio } from "../../../utils/methods/post";
import { RootState } from "../../../redux-toolkit/store";
import ChatMediaModal from "./ChatMediaModal";

const Chat = () => {
    const socket: Socket<DefaultEventsMap, DefaultEventsMap> | null = useSocket();
    console.log(socket, 'sockettttt');

    const student: any = useSelector((state: any) => state?.chat?.chatOppositPersonData)
    const studentId: any = useSelector((state: RootState) => state?.student?.studentData?.studentId);

    const tabs = ['chat', 'all', 'students', 'advisors', 'reviewers', 'leads'];
    const [activeTab, setActiveTab] = useState('chat'); // Initial active tab is 'chat'
    const [message, setMessage] = useState("")
    const [allMesage, setAllMessage] = useState([])
    const [lastMessage, setLastMessage] = useState([])
    const [recordedAudioBlob, setRecordedAudioBlob] = useState<any>(null);
    const [selectMedia, setSelectMedia] = useState(false)
    const [modalStatus, setModalStatus] = useState(false)
    const [reload, setReload] = useState(false)
    const [chatType, setChatType] = useState("")
    const messageRef = useRef<any>(null);
    useEffect(() => {
        messageRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, [allMesage]);
    const handleTabClick = (currentTab: string) => {
        const currentIndex = tabs.indexOf(currentTab);
        const nextIndex = (currentIndex) % tabs.length; // Get the index of the next tab
        setActiveTab(tabs[nextIndex]); // Set the next tab as active
    };
    const handleMessageChange = (event: string, type: string) => {
        try {
            console.log(type, "typeeeee chat typeee");
            if (type === "textChat") {
                const message = event?.target?.value
                console.log(message, "smhcjhfhdhjdfgdhfdh");
                setChatType("textChat")
                setMessage(message)
            } else if (type === "imageChat") {
                console.log(event, "{}{}{}{}{}{}{");

                const message = event
                console.log(message, "smhcjhfhdhjdfgdhfdh");
                setChatType("imageChat")
                setMessage(message)
            }

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
                senderId: studentId,
                receiverId: student.superleadId || student.chaterId,
                content: message,
                type: chatType
            };
            console.log(messageData, "messageDatas");
            console.log("yyyyyyyyyyyyyyyyyyy");

            // Emit message to the server
            socket.emit('message', messageData);
            setRecordedAudioBlob(null);
            // Listen for response from the server
            socket.on('messageResponse', (response: { status: boolean; message: any; }) => {
                console.log(response, 'respnseeeeeeeeeeeee');

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
            try {
                const data = {
                    initiatorId: studentId,
                    recipientId: student?.chaterId || student.superleadId
                }
                console.log(data, "bvvcfgvghh");

                const response = await getMessages(data)
                console.log(response, "dnbfdfbdf");

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
    }, [student?.superleadId, student?.chaterId, studentId, reload]);
    // Only trigger when superleadId or student?.chaterId changes
    useEffect(() => {
        if (socket) {
            const handleReceivedMessage = (data: any) => {
                console.log("Received messagesssssssssssssss:", data);
                console.log("Received messagesssssssssssssss cotennnnnnnnnn:", data.content.content);
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
        return message.senderId === studentId;
    };
    const addAudioElement = async (blob: any) => {
        setRecordedAudioBlob(blob);
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);
        const audioFile = new File([blob], "audio.mp3", { type: "audio/mpeg" });
        const formData = new FormData();
        formData.append("audio", audioFile);
        formData.append("senderId", studentId);
        const response = await storeChatAudio(formData)
        console.log(response, "response response response");

        if (response?.status === true) {
            const voiceChat = response?.chatData?.audioUrl
            const messageData = {
                senderId: studentId,
                receiverId: student.superleadId || student.chaterId,
                content: voiceChat,
                type: "voiceChat"
            };
            console.log(messageData, "messageData messageData messageData");

            socket.emit('message', messageData);
            setRecordedAudioBlob(null);
            // Listen for response from the server
            socket.on('messageResponse', (response: { status: boolean; message: any; }) => {


                if (response.status === true) {
                    console.log("Message sent successfully");

                    setMessage(""); // Clear the message input field
                } else {
                    console.error("Failed to send message:", response.message);
                }
            });
        }

    };
    const changeModalStatus = () => {
        if (modalStatus) {
            setSelectMedia(false)
            setModalStatus(false)
            setReload((prevState) => !prevState);
        } else {
            setModalStatus(true)
            setReload((prevState) => !prevState);
        }
    }

    return (


        <>
            <div className="flex border shadow-md  mt-10  m-10  mr-4 ml-4 item  h-38rem" onClick={() => changeModalStatus()}>


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

                        <ChatTab socket={socket} />
                    ) : null}


                </div>

                {student && (
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

                        <div className="h-31rem bg-custom-background mt-0" style={{ maxHeight: "800px", overflowY: "scroll" }}>

                        <div className="grid grid-cols-1 mb-">
                                {allMesage.map((message: any, index: number) => (
                                    message.type === "textChat" ? (
                                        <div
                                            key={index}
                                            className={`flex gap-5 m-5 mb-0 mt-3 ${isSender(message) ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`w-fit ${isSender(message) ? 'bg-Average' : "bg-white" } mb-0 h-10 rounded-sm`}>
                                                <p className={`text-sm font-roboto m-3 ${isSender(message) ? 'text-white' : "text-black" }`}>{message?.content}</p>
                                            </div>
                                        </div>
                                    ) : message.type === "voiceChat" ? (
                                        <div
                                            key={index}
                                            className={`flex gap-5 m-5 mb-0 mt-3 ${isSender(message) ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className="  mb-0 h-16 w-2/1 rounded-full">
                                                <audio controls className="m-1">
                                                    <source src={message.content} type="audio/mpeg" />
                                                </audio>
                                            </div>
                                        </div>
                                    ) : message.type==="imageChat" ? (
                                        <div
                                        key={index}
                                        className={`flex gap-5 m-5 mb-0 mt-10 ${isSender(message) ? 'justify-end' : 'justify-start'}`}
                                    >
                                      {/* <div className=" mb-0 mt-10 h-10 rounded-sm"> */}

                                             <img src={message?.content} alt="" className="w-72 h-auto font-roboto m-3 text-white  rounded-md" />
                                          
                                            {/* </div> */}
                                    </div> 
                                    ): message.type === "videoChat" ? (
                                        <div
                                            key={index}
                                            className={`flex gap-5 m-5 mb-0 mt-10 ${isSender(message) ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <video controls className="w-fit h-60 object-contain ">
                                                <source src={message.content} type="video/mp4" />
                                                {/* Add additional <source> elements for other video formats if needed */}
                                            </video>
                                        </div>
                                    ) :message.type === "documentChat" ? (
                                        <div
                                            key={index}
                                            className={`flex gap-5 m-5 mb-0 mt-10 ${isSender(message) ? 'justify-end' : 'justify-start'}`}
                                        >
                                            {/* Display PDF */}
                                            <embed src={message.content} type="application/pdf" width="500" height="600" />
                                            
                                            {/* Or, display DOC */}
                                            {/* <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(message.content)}`} width="500" height="600" frameborder="0"></iframe> */}
                                        </div>
                                    ) : null
                                ))}
                                <p className="text-custom-background ">example chat</p>
                                <p className="text-custom-background ">example chat</p>
                            </div>







                        </div>

                        <div className=" m-3 mt-0 rounded-md ">
                            <div className=" flex ">



                                <div className="relative  w-full bottom-6">


                                    <textarea
                                        className="font-roboto border px-2 h-10 py-2 resize-none overflow-hidden outline-none max-h-40 absolute bottom-0 rounded-md w-full"
                                        placeholder="Type a message.."
                                        value={message}
                                        onChange={(e) => handleMessageChange(e, "textChat")}
                                    />


                                </div>

                                <div className="m-1 mt-0 cursor-pointor  relative  bottom-6">
                                <div className="flex gap-1">

                                    <div className="rounded-md"
                                   
                                    >

                                        <div className=" rounded-md">
                                            <VoiceRecorder
                                                onRecordingComplete={addAudioElement}
                                                setRecordedAudioBlob={setRecordedAudioBlob}
                                            />
                                        </div>
                                    </div>
                                    <div className=" rounded-full shadow-xl bg-gray-200 cursor-pointer" onClick={() => setSelectMedia(true)}>
                                            <div className="flex items-center justify-center h-8 w-8">
                                                <img src="/MediaIcon.svg" alt="" className="w-fit h-10 mt-2" />
                                            </div>
                                        </div>
                                    {/* <div className="flex rounded-full" > */}
                                        <div className="border h-10 w-16 cursor-pointer flex items-center justify-center ml-1 rounded-full bg-gray-200 shadow-xl"onClick={handleSubmit}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 rounded-full">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.768 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                            </svg>
                                           
                                        {/* </div> */}
                                       
                                    </div>
                                </div>
                            </div>






                            </div>




                        </div>


                    </div>
                )}



                {/*  */}



            </div>
            <ChatMediaModal isVisible={selectMedia} onClose={() => { setSelectMedia(false) }} changeModalStatus={changeModalStatus} handleMessageChange={handleMessageChange} />

        </>

    )
}
export default Chat