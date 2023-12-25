
import { motion } from "framer-motion";
import { getProfile } from "../../../utils/methods/get";
import { useEffect, useState } from "react";
const StudentProfile = () => {
  const [setProfile, setProfileUpdate] = useState(false);
  const [setPersonalInfo, setPersonalInfoUpdate] = useState(false);
  const [profileInfo, setProfileInfo] = useState({});
  const studentId = "657aaa012a15acfff364bb5a";

  useEffect(() => {
    fetchStudentProfile();
  }, [setPersonalInfo,setPersonalInfoUpdate]);

  const fetchStudentProfile = async () => {
    try {
      const response = await getProfile(studentId);
      console.log(response,"PPppp");
      
      if (response?.data?.status) {
        // Assuming 'response.data.response' is an array
        const [profileData] = response.data.response;
        setProfileInfo(profileData);
      } else {
        console.error("Failed to get profile data:", response?.data?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
    return (
       
                 <div className="w-46rem h-48 mt-5 ml-5 rounded-xl shadow-md bg-white relative border border-gray-300 hover hover:border-2 border-gray-300">
          
    
              <div>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <img src="/studyImage.png" alt="" className="w-40 mt-5 ml-3" />
              </motion.div>
            </div>
          
            <div className="w-72 h-36 absolute top-3 left-32">
              <h1 className="ml-24 text-xl font-semibold mt-10 font-roboto">{profileInfo?.firstName} {profileInfo?.middleName} {profileInfo?.lastName}</h1>
              <h4 className="ml-28 mt-1 text-gray-500 mt-2 text-sm font-roboto">{profileInfo?.domain}</h4>
              <div className="flex ml-28 gap-3 mt-3">
                <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">{profileInfo?.batch}</span>
                <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">Remote</span>
              </div>
            </div>
            <div className="border border-2px w-28 h-28 m-8 shadow-xl rounded-md absolute top-3 right-3">
              <img src="/profile.jpeg" alt="" className="w-full h-full rounded-md" />
            </div>
            </div>
      
    );
}

export default StudentProfile;
