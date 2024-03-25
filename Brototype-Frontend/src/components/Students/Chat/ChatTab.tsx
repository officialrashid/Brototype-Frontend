import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChatRecipients, getMessages } from "../../../utils/methods/get";
import { setchatOppositPersonData } from "../../../redux-toolkit/chatOppositPersonDataReducer";
import { RootState } from "../../../redux-toolkit/store";
import { createChat } from "../../../utils/methods/post";
import ChatMediaModal from "./ChatMediaModal";
// import { useSocket } from "../../../hooks/useSocket";
const ChatTab = ({ socket }: { socket: any }) => {

    const dispatch = useDispatch();

    const studentId: any = useSelector((state: RootState) => state?.student?.studentData?.studentId);
    const [chatUser, setChatUser] = useState<any[]>([]);
    const [selectedStudentIndex, setSelectedStudentIndex] = useState(null);
    const [allMessage, setAllMessage] = useState([]);
    const [lastMessage, setLastMessage] = useState({});

    useEffect(() => {
        const fetchAllChatRecipients = async () => {
            try {
                const response = await getAllChatRecipients(studentId);
                if (response.status === true) {
                    setChatUser(prevChatUser => [...prevChatUser, ...response.recipients, ...response.initiatorGroups]);
                    // handleStudentClick(0, response.recipients[0]);
                    console.log(response.recipients[0], "{}{}{}{}{");

                }
            } catch (error) {
                console.error("Error fetching chat recipients:", error);
            }
        };
        fetchAllChatRecipients();
    }, [studentId]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                if (chatUser.length > 0) { // Check if chatUser array is not empty
                    // Iterate through chatUser array to fetch messages for each chat user
                    for (const user of chatUser) {
                        const data = {
                            initiatorId: studentId,
                            recipientId: user.chaterId // Access chaterId from each chat user object
                        };
                        const response = await getMessages(data);
                        if (response.getMessages.status === true) {
                            // Update state for each chat user separately
                            setAllMessage(prevState => [...prevState, response.getMessages.messages]);
                            setLastMessage(response.getMessages.lastMessage);
                        } else {
                            setAllMessage([]);
                            setLastMessage({});
                        }
                    }
                }
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
        fetchMessages();
    }, [chatUser]);


    const handleStudentClick = async (index: number, chatUser: any) => {
        try {
            if(chatUser?.groupName){
                console.log("join room event emittedd",chatUser?._id );
                socket.emit("joinRoom", chatUser?._id);
            }else{
                setSelectedStudentIndex(index);
                dispatch(setchatOppositPersonData(chatUser));
                const chatData = {
                    initiatorId: studentId,
                    recipientId: chatUser.superleadId || chatUser.chaterId,
                    chaters: chatUser
                };
                const response = await createChat(chatData);
                if (response?.response?.data?._id || response?.chatExists?.response?._id) {
                    console.log("join room event emittedd", response?.response?.data?._id || response?.chatExists?.response?._id);
                    socket.emit("joinRoom", response?.response?.data?._id || response?.chatExists?.response?._id);
                }
            }
          
        } catch (err) {
            console.error("Error handling student click:", err);
        }
    };

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
                                            {lastMessage.content} hellooo
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ): (
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
                                        {lastMessage.content} hellooo
                                    </span>
                                )}
                            </div>
                        </div>
                    </div> 
                    )}



                    <div className="m-4">
                        <span className="text-gray-600 text-sm font-roboto text-white">6m</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatTab;
