import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChatRecipients, getMessages, getRecipientsUnreadMessageCount } from "../../../utils/methods/get";
import { setchatOppositPersonData } from "../../../redux-toolkit/chatOppositPersonDataReducer";
import { createChat } from "../../../utils/methods/post";
import { useSocket } from "../../../hooks/useSocket";
import GlobalContext from "../../../context/GlobalContext";
import React from "react";

const ChatTab = ({ socket }: { socket: any }) => {
    const dispatch = useDispatch();
    const superleadId = useSelector((state) => state?.superlead?.superleadData?.superleadId);
    const [chatUser, setChatUser] = useState<any[]>([]);
    const [selectedStudentIndex, setSelectedStudentIndex] = useState(null);
    const [allMessage, setAllMessage] = useState([]);
    const [lastMessage, setLastMessage] = useState({});
    const { chatId, setChatId,unreadReload,setUnreadReload } = useContext(GlobalContext);
    const [unreadMsgCount, setUnreadMsgCount] = useState([])
    useEffect(() => {
        const fetchAllChatRecipients = async () => {
            try {
                const response = await getAllChatRecipients(superleadId);
                console.log(response, "lll response in group chatess and rediosfe");

                if (response?.status === true && response?.recipients) {
                    setChatUser(prevChatUser => [...prevChatUser, ...response.recipients, ...response.initiatorGroups]);
                    // handleStudentClick(0, response.recipients[0]);
                }
                console.log(chatUser, ";;;;;00098***&&^^^^^^^^");

            } catch (error) {
                console.error("Error fetching chat recipients:", error);
            }
        };
        fetchAllChatRecipients();
    }, [superleadId]);
    useEffect(() => {
        const fetchRecipientsUnreadMessageCount = async  () => {
            try {
            const response = await getRecipientsUnreadMessageCount(superleadId)
            if (response?.getUnreadMsgCount?.status === true) {
                setUnreadMsgCount(response?.getUnreadMsgCount?.unreadCounts)
                setUnreadReload(false)
            } else {
                setUnreadMsgCount([])
                setUnreadReload(false)
            }
            } catch (error) {

            }
        }
        fetchRecipientsUnreadMessageCount()
    }, [superleadId,unreadReload===true,socket])
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                if (chatUser.length > 0) {
                    const messagesPromises = chatUser.map(async (user) => {
                        const data = {
                            initiatorId: superleadId,
                            recipientId: user.chaterId
                        };
                        const response = await getMessages(data);
                        console.log(response, "response fetch last message check");

                        if (response.getMessages?.status === true) {
                            setAllMessage((prevMessages) => [...prevMessages, response.getMessages.messages]);
                            setLastMessage(response.getMessages.lastMessage);
                        }
                    });
                    await Promise.all(messagesPromises);
                }
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
        fetchMessages();
    }, [chatUser, superleadId]);

    const handleStudentClick = async (index, chatUser) => {
        try {
            console.log(chatUser, ")))))))))");
            if (chatUser?.groupName) {
                setSelectedStudentIndex(index);
                dispatch(setchatOppositPersonData(chatUser));
                console.log("join room emittedd", chatUser?._id);
                socket.emit("joinRoom", chatUser?._id);
                setChatId(chatUser?._id)
            } else {
                setSelectedStudentIndex(index);
                dispatch(setchatOppositPersonData(chatUser));
                const chatData = {
                    initiatorId: superleadId,
                    recipientId: chatUser.studentId || chatUser.chaterId,
                    chaters: chatUser
                };
                const response: any = await createChat(chatData);
                if (response?.response?.data?._id || response?.chatExists?.response?._id) {
                    console.log("join room emittedd", response?.response?.data?._id || response?.chatExists?.response?._id);

                    socket.emit("joinRoom", response?.response?.data?._id || response?.chatExists?.response?._id);
                    setChatId(response?.response?.data?._id || response?.chatExists?.response?._id)
                }
            }

        } catch (err) {
            console.error("Error handling student click:", err);
        }
    };
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
           
                setUnreadReload(true)
            };

            socket.on("received", handleReceivedMessage);

            return () => {
                // Clean up socket listener when component unmounts
                socket.off("received", handleReceivedMessage);
            };
        }
    }, [socket]);
    return (
        <div style={{ maxHeight: "500px", overflowY: "scroll" }}>
        {chatUser.map((chatUser: any, index: number) => (
            <div
                key={chatUser.chaterId}
                className={`flex justify-between bg-${selectedStudentIndex === index ? 'dark' : 'light'}-highBlue m-5 rounded-md`}
                onClick={() => handleStudentClick(index, chatUser)}
            >
                {chatUser.groupName ? (
                    <div className="flex gap-2 m-2 mt-">

                        <div className="border h-8 w-8 rounded-full mt-2 ">
                            <img src={chatUser.profile} alt="" className="rounded-full " />
                        </div>
                        <div className="mt-1 mb-0">
                            <span className={`text-sm font-medium font-roboto ${selectedStudentIndex === index ? 'text-white' : 'text-dark'}`}>
                                {chatUser.groupName}
                            </span>
                            <div>
                                {lastMessage && lastMessage.content && (
                                    <span className={`text-gray-600 font-roboto text-xs ${selectedStudentIndex === index ? 'text-white' : 'text-black'}`}>
                                        {lastMessage.content}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex gap-2 m-2 mt-">

                        <div className="border h-8 w-8 rounded-full mt-2 ">
                            <img src={chatUser.imageUrl} alt="" className="rounded-full " />
                        </div>
                        <div className="mt-1 mb-0">
                            <span className={`text-sm font-medium font-roboto ${selectedStudentIndex === index ? 'text-white' : 'text-dark'}`}>
                                {chatUser.firstName} {chatUser.lastName}
                            </span>

                            <div>
                                {lastMessage && lastMessage.content && (
                                    <span className={`text-gray-600 font-roboto text-xs ${selectedStudentIndex === index ? 'text-white' : 'text-black'}`}>
                                        {lastMessage.content}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {unreadMsgCount.map((unread: any) => (
                    <React.Fragment key={unread.chaterId}>
                        {(chatUser.chaterId === unread.chaterId || chatUser._id === unread.chaterId) && (
                            <div className="m-2 mr-3 m-0">
                                <div className="">
                                    <span className={`text-gray-600 text-sm font-roboto ${selectedStudentIndex === index ? 'text-white' : 'text-black'}`}>6m</span>
                                    <div className={`rounded-full text-xs item items-center flex justify-center font-roboto w-6 h-6 mt-1 ${selectedStudentIndex === index ? 'bg-white text-black' : 'bg-Average text-white'}`}>
                                        {unread.unreMsgCount}
                                    </div>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}


            </div>
        ))}
    </div>
    
    );
};

export default ChatTab;
