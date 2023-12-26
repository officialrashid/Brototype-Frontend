import { useEffect, useState } from "react";
import { getRequestExtendDetails } from "../../../utils/methods/get";
import ReasonViewModal from "./reasonViewModal";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ... (other imports)

const ExtendDetails = () => {
    const [extendRequests, setExtendRequests] = useState([]);
    const [viewReason, setViewReason] = useState(false);
    const [selectedExtendId, setSelectedExtendId] = useState("");

    useEffect(() => {
        const fetchExtendDetails = async () => {
            const studentId = "657aaa012a15acfff364bb5a";
            try {
                const response = await getRequestExtendDetails(studentId);
                if (response) {
                    setExtendRequests(response.response);
                } else {
          
                }
            } catch (err) {
                console.error("Error fetching extension details:", err);
      
            }
        };

        fetchExtendDetails();
    }, []);

    const openReasonModal = (extendId:string) => {
        console.log(extendId,"{}{}{+++)()(*****");
        
        setSelectedExtendId(extendId);
        setViewReason(true);
    };

    return (
        <>
            <div className="border m-5 h-fit rounded-xl shadow-2xl bg-white">
                <div className='mx-auto p-2 mt-4'>
                <table className="w-full text-sm text-left  table-fixed">
                    <thead className="text-xs text-gray-700 uppercase bg-custom-background shadow-xl dark:text-gray font-roboto">
                        <tr>
                            <th scope="col" className="w-1/4 px-5 py-6 text-center  rounded-s-md">
                                Week
                            </th>
                            <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                                Advisor
                            </th>
                            <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                                Reason
                            </th>
                            <th scope="col" className="w-1/4 px-5 py-6  text-center">
                                Extention Count
                            </th>
                            <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                                Re-Scheduled Date
                            </th>
                            <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                                Status
                            </th>
                            <th scope="col" className="w-1/4 px-5 py-6 text-center">
                                Request
                            </th>
                          

                        </tr>
                    </thead>
                </table>
                </div>
                {extendRequests.map((data, index) => (
                    <div className='mx-auto p-2 mb-2 ' key={index}>
                        <table className="w-full text-sm text-left divide-y divide-y-8 border table-fixed border-gray-400 rounded-md font-roboto ">
                            <tbody>
                                <tr key={index} className="">
                                    <td className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>
                                        {data?.currentWeek}
                                    </td>
                                    <td className="w-1/4 px-4 py-6 text-center">
                                        {/* Advisor information */}
                                    </td>
                                    <td className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>
                                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 cursor-pointer" onClick={() => openReasonModal(data?._id)}>view</span>
                                    </td>
                                    <td className="w-1/4 px-4 py-6 text-center">
                                        {data?.extendDays}
                                    </td>
                                    <td className="w-1/4 px-4 py-6 text-center">
                                        {new Date(data?.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="w-1/4 px-4 py-6 text-center">
                                        <span className={`inline-flex items-center rounded-md ${data?.status ? 'bg-green-50' : 'bg-red-50'} px-2 py-1 text-xs font-medium text-${data?.status ? 'green' : 'pink'}-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer`}>
                                            {data?.status ? 'Accepted' : 'Rejected'}
                                        </span>
                                    </td>
                                    <td className="w-1/4 px-4 py-6 text-center">
                                        <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">Request</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
            <ReasonViewModal isVisible={viewReason} isClose={() => { setViewReason(false) }} extendId={selectedExtendId} />
        </>
    );
}

export default ExtendDetails;
