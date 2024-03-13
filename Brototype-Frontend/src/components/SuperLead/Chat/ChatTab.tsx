import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChatRecipients, getMessages } from "../../../utils/methods/get";
import { setchatOppositPersonData } from "../../../redux-toolkit/chatOppositPersonDataReducer";
import { createChat } from "../../../utils/methods/post";
import { useSocket } from "../../../hooks/useSocket";

const ChatTab = () => {
    const socket = useSocket();
    const dispatch = useDispatch();
    const superleadId = useSelector((state) => state?.superlead?.superleadData?.superleadId);
    const [chatUser, setChatUser] = useState([]);
    const [selectedStudentIndex, setSelectedStudentIndex] = useState(0);
    const [allMessage, setAllMessage] = useState([]);
    const [lastMessage, setLastMessage] = useState({});

    useEffect(() => {
        const fetchAllChatRecipients = async () => {
            try {
                const response = await getAllChatRecipients(superleadId);
                if (response?.status === true && response?.recipients) {
                    setChatUser(response.recipients);
                    handleStudentClick(0, response.recipients[0]);
                }
            } catch (error) {
                console.error("Error fetching chat recipients:", error);
            }
        };
        fetchAllChatRecipients();
    }, [superleadId]);

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
            setSelectedStudentIndex(index);
            dispatch(setchatOppositPersonData(chatUser));
            const chatData = {
                initiatorId: superleadId,
                recipientId: chatUser.studentId || chatUser.chaterId,
                chaters: chatUser
            };
            const response = await createChat(chatData);
            socket.emit("joinRoom", "65f16837ff18d7c22868e870");
            if (response?.response?.data?._id) {
                // socket.emit("joinRoom", response.response.data._id);
            }
        } catch (err) {
            console.error("Error handling student click:", err);
        }
    };

    return (
        <div style={{ maxHeight: "500px", overflowY: "scroll" }}>
            {chatUser.map((user, index) => (
                <div
                    key={user.chaterId}
                    className={`flex justify-between bg-${selectedStudentIndex === index ? 'dark' : 'light'}-highBlue m-5 rounded-md`}
                    onClick={() => handleStudentClick(index, user)}
                >
                    <div className="flex gap-2 m-2 mt-">
                        <div className="border h-8 w-8 rounded-full mt-2 ">
                            <img src={user.imageUrl} alt="" className="rounded-full " />
                        </div>
                        <div className="mt-1 mb-0">
                            <span className={`text-sm font-medium font-roboto ${selectedStudentIndex === index ? 'text-white' : 'text-dark'}`}>
                                {user.firstName} {user.lastName}
                            </span>
                            <div>
                                {lastMessage && lastMessage.content &&
                                    <span className={`text-gray-600 font-roboto text-xs ${selectedStudentIndex === index ? 'text-white' : 'text-black'}`}>
                                        {lastMessage.content}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="m-4">
                        <span className="text-gray-600 text-sm font-roboto text-white">6m</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatTab;
