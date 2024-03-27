import React, { useEffect, useState } from "react";
import useMutation from "../../../hooks/useMutation";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useSelector, useDispatch } from 'react-redux';
import { getGroupMembersDetails } from "../../../utils/methods/get";
const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];

const ErrorText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-sm font-roboto text-red-700 mt-3 ml-3">
    {children}
  </p>
);

const GroupInformationModal = ({ isVisible, onClose ,changeModalStatus,groupId }: { isVisible: boolean; onClose: () => void; changeModalStatus: () => void; groupId:string}) => {
  if (!isVisible) {
    return null
  }
  const dispatch = useDispatch();
  const [next, setNext] = useState(false);
  const [chatParticipantsDetails, setGroupParticipantsDetails] = useState<any[]>([]);
  const [selectedChatDetails, setSelectedChatDetails] = useState<any[]>([]);
  const [isChecked, setIsChecked] = useState(true);
  const [participants,setParticipants] = useState<any[]>([]);
  const [admins,setAdmins] = useState<any[]>([]);
  const superleadId: any = useSelector((state: any) => state?.superlead?.superleadData?.superleadId);
  const superleadUniqueId = useSelector((state: any) => state?.superlead?.superleadData?.uniqueId) || localStorage.getItem("superleadUniqueId");
   
  useEffect(()=>{
      const fetchGroupMembersDetails = async () =>{
           try {
            const response = await getGroupMembersDetails(groupId)
           } catch (error) {
            
           }
      }
      fetchGroupMembersDetails()
  },[])

  const handleCheckboxChange = (chatDetails:any) => {
    const index = selectedChatDetails.findIndex((item) =>
      (item.studentId && item.studentId === chatDetails.studentId) ||
      (item.superleadId && item.superleadId === chatDetails.superleadId)
    );

    if (index === -1) {
      // If the chatDetails is not already selected, add it to the selectedChatDetails state
      setSelectedChatDetails(prevState => [...prevState, chatDetails]);
      // Also add the corresponding studentId or superleadId to the participants state
      setParticipants(prevState => [...prevState, chatDetails.studentId || chatDetails.superleadId]);
    } else {
      // If the chatDetails is already selected, remove it from the selectedChatDetails state
      const updatedSelectedChatDetails = [...selectedChatDetails];
      updatedSelectedChatDetails.splice(index, 1);
      setSelectedChatDetails(updatedSelectedChatDetails);

      // Remove the corresponding studentId or superleadId from the participants state if it exists
      const updatedParticipants = participants.filter(id =>
        id !== chatDetails.studentId && id !== chatDetails.superleadId
      );
      setParticipants(updatedParticipants);
    }
};

  return (
    <>
      <section className="w-2/3 ml-96 items-center justify-center p-3 sm:p-5 mt-36 absolute z-50">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="relative overflow-hidden border bg-white shadow-md sm:rounded-lg">
            <h1 className="font-roboto m-5 mb-0 ml-8 font-semibold text-sm">Group Info</h1>
            <form className="mb-0 mt-0">
      
                <>
                  <div className="flex border-b">
                    <div className="m-7 mb-4 mt-5">
                      <img
                        src=""
                        alt=""
                        className="h-aut mb-0 w-20 rounded-md"
                      />
                    </div>
                    <div className="m-10 mb-0 ml-0 mr-0">
                      <label htmlFor="file-upload" className="text-xs mb-2 cursor-pointer rounded-md bg-dark-highBlue px-3 py-1.5 text-sm font-medium font-roboto text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> Upload Group Profile
                      </label>
                      <p className="m-4 mb-0  ml-0 text-xs text-gray-400">Allowed JPG, GIF or PNG. Max size of 800K</p>
                      <input type="file" id="file-upload" className="hidden"  />
                     
                    </div>
                  </div>
                
                </>
       
                <div className="">
                  <div className="flex gap-4 m-5 mb-3 mt-3">
                    <div className="w-full md:w-2/6">
                      <form className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-0 focus:border-Average block w-full pl-10 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-Average outline-none text-sm font-roboto" required=""
                            placeholder='Search...'
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    <table className="w-full text-sm text- text-gray-500 dark:text-gray-400">
                      <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ml-16">
                        <tr className='text-sm font-roboto'>
                          <th scope="col" className="px-6 py-3">
                            Name
                          </th>
                          <th scope="col" className="px-10 py-3">
                            Role
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Select
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                       
                          <tr key="" className="bg-white  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="flex items-center px-6 py-4 whitespace-nowrap">
                              <img className="w-8 h-8 rounded-full" src="" />

                                <div className="ps-3">
                                  <div className=" text-sm font-roboto">Your Account</div>
                                </div>
                          
                                <div className="ps-3">
                                  <div className=" text-sm font-roboto">sfsfs</div>
                                </div>


                            </td>
                           
                              <td className="px-6 py-4 text-sm font-roboto item text-center">
                                student
                              </td>

                          
                  
                           
                              <td className="px- py-4 text-sm font-roboto item text-center" >
                                <input
                                  type="checkbox"
                                  name="selected"
                                  id="selected"
                                  checked={false}// Set checked state based on state variable
                                  // onChange={() => setIsChecked(!isChecked)} // Toggle isChecked state when checkbox is clicked
                                />
                              </td>
                        
                    

                          </tr>
                    
                      </tbody>
                    </table>
                  </div>
                </div>
             
              <div className="flex m-5 mb-0 mt-2 gap-3">
                
                  <>
                    <button
                      type="submit"
                      className="mb-2 rounded-lg bg-dark-highBlue px-5 py-2.5 text-xs font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 font-serif"
                    >
                      Save Changes
                    </button>
                  
                   
                  </>
          
          
                  <button
                    type="button"
                    onClick={() => onClose()}
                    className="mb-2 rounded-lg bg-dark-highBlue px-5 py-2.5 text-xs font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 font-serif">
                    Cancel
                  </button>
       
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <DeactivateAccount /> */}
    </>
  );
}

export default GroupInformationModal;

