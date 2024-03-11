import { SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../../../utils/methods/get";
import {setchatOppositPersonData} from "../../../redux-toolkit/chatOppositPersonDataReducer"
import { createChat } from "../../../utils/methods/post";
const Students = () => {
    const dispatch = useDispatch()
    const superleadUniqueId: string = useSelector((state: any) => state?.superlead?.superleadData?.uniqueId) || localStorage.getItem("superleadUniqueId");
    const superleadId:any = useSelector((state: any) => state?.superlead?.superleadData?.superleadId);
    const [students, setStudents] = useState([]);
    const [selectedStudentIndex, setSelectedStudentIndex] = useState(0); // Initially selected index is 0

    useEffect(() => {
        const fetchStudents = async () => {
            const response = await getAllStudents(superleadUniqueId);
            if (response.status === true) {
                setStudents(response.response);
                handleStudentClick(0,response.response[0])
            }
        };
        fetchStudents();

    }, []);

    const handleStudentClick = async (index: number, student: any) => {
        try {
            console.log(student,"dfhdbfjdbfdffff11222122");
            
            setSelectedStudentIndex(index);
            dispatch(setchatOppositPersonData(student))
            const chatData = {
                initiatorId : superleadId,
                recipientId : student.studentId || student.chaterId,
                chaters : student
            }
            const response = await createChat(chatData)
        } catch (err){
           /// handle error componets definr
        }
       
    };

    return (
        <div style={{ maxHeight: "500px", overflowY: "scroll" }}>
            {students.map((student, index) => (
                <div
                    key={student.studentId}
                    className={`flex justify-between bg-${selectedStudentIndex === index ? 'dark' : 'light'}-highBlue m-5 rounded-md`}
                    onClick={() => handleStudentClick(index, student)}
                >
                    <div className="flex gap-2 m-2 mt-">
                        <div className="border h-8 w-8 rounded-full mt-2 ">
                            <img src={student.imageUrl} alt="" className="rounded-full " />
                        </div>
                        <div className="mt-1 mb-0">
                            <span className={`text-sm font-medium font-roboto ${selectedStudentIndex === index ? 'text-white' : 'text-dark'}`}>
                                {student.firstName} {student.lastName}
                            </span>

                            <div>
                                <span className={`text-gray-600 font-roboto text-xs ${selectedStudentIndex === index ? 'text-white' : 'text-black'}`}>
                                    Hello good morning
                                </span>
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

export default Students;
