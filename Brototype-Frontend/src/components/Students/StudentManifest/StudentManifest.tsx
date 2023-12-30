import ProfileUpdateModal from "./ProfileUpdateModal";
import PersonalInfoModal from "./PersonalInfoModal";
import AddressModal from "./AddressModal";
import EducationModal from "./EducationModal";
import React,{useEffect, useState} from "react";
import { getProfile } from "../../../utils/methods/get";
import { useSelector } from "react-redux";
const StudentManifest = () => {
  const [setProfile, setProfileUpdate] = useState(false);
  const [setPersonalInfo, setPersonalInfoUpdate] = useState(false);
  const [setAddress, setAddressUpdate] = useState(false);
  const [setEducation, setEducationUpdate] = useState(false);
  const [profileInfo, setProfileInfo] = useState({});
  const studentId:string = useSelector((state: any) => state?.student?.studentData?.studentId);

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
    <>
    <div className="bg-custom-background">
      <div className='bg-white h-auto m-8 rounded-xl w-67.3rem'>
        <h1 className='font-roboto font-sm ml-5 mt-5 text-white'>he</h1>
        <h1 className='font-roboto font-sm ml-5 mt-'>Your Manifest Details</h1>
        <div className='ml-10 mt-5 w-62rem h-28 rounded-md border border-gray-300 relative'>
  <div className='flex'>
    <img src={profileInfo.imageUrl} alt="" className='rounded-full w-16 h-16 ml-5 mt-5' />
    <div className='flex flex-1 flex-col ml-8 mt-5'>
      <h1 className='text-sm font-semibold font-roboto'>{profileInfo.firstName} {profileInfo.middleName} {profileInfo.lastName}</h1>
      <h1 className='text-sm text-gray-500 font-roboto mt-1 ml-5'>{profileInfo.domain}</h1>
      <div className="flex gap-3 mt-1">
        <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">{profileInfo.batch}</span>
        <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">Remote</span>
      </div>
    </div>
    <span className="absolute top-12 right-5 inline-flex items-center rounded-md bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600 ring-1 ring-inset ring-pink-700/10 cursor-pointer" onClick={()=>{setProfileUpdate(true)}}>
      <img src='./edit.png' className='w-3 h-3 mr-2' alt="Edit Icon" />
      Request Edit
    </span>
  </div>
</div>



        <div className='ml-10 mt-5 w-62rem h-auto rounded-md border border-gray-300'>
  <h1 className='font-roboto ml-5 mt-3 font-semibold text-sm'>Personal Information</h1>
  <span className="absolute  mr-24 right-3 mt-28 inline-flex items-center rounded-md bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600 ring-1 ring-inset ring-pink-700/10 cursor-pointer"onClick={()=>{setPersonalInfoUpdate(true)}} >
    <img src='./edit.png' className='w-3 h-3 mr-2' alt="Edit Icon" />
    Request Edit
  </span>
  <div className='grid grid-cols-3 ml-5 mt-3 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>First Name</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.firstName}</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Second Name</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.middleName}</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Last Name</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.lastName}</p>
    </div>
  </div>

  <div className='grid grid-cols-3 ml-5 mt-6 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Date Of Birth</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.dateOfBirth}</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Age</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.age}</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Gender</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.gender}</p>
    </div>
  </div>
  <div className='grid grid-cols-3 ml-5 mt-6 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Email</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.email}</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Phone</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.phone}</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Father`s Name</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.fathersName}</p>
    </div>
  </div>
  <div className='grid grid-cols-3 ml-5 mt-6 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Mother`s Name</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.mothersName}</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Father`s Contact</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.fathersContact}</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Mother`s Contact</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.mothersContact}</p>
    </div>
  
  </div>

</div>



<div className='ml-10 mt-5 w-62rem h-auto rounded-md border border-gray-300'>
  <h1 className='font-roboto ml-5 mt-3 font-semibold text-sm'>Address</h1>
  <span className="absolute  mr-24 right-3 mt-8 inline-flex items-center rounded-md bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600 ring-1 ring-inset ring-pink-700/10 cursor-pointer"onClick={()=>{setAddressUpdate(true)}}  >
    <img src='./edit.png' className='w-3 h-3 mr-2' alt="Edit Icon" />
    Request Edit
  </span>
  <div className='grid grid-cols-3 ml-5 mt-3 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>House Name</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.houseName}</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Village</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.village}</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Taluk</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.taluk}</p>
    </div>
  </div>

  <div className='grid grid-cols-3 ml-5 mt-3 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>District</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.district}</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>State</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.state}</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Pincode</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.pincode}</p>
    </div>
  </div>
  
  
</div>

<div className='ml-10 mt-5 w-62rem h-auto rounded-md border border-gray-300'>
  <h1 className='font-roboto ml-5 mt-3 font-semibold text-sm'>Educational Details</h1>
  <span className="absolute  mr-24 right-3 mt-8 inline-flex items-center rounded-md bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600 ring-1 ring-inset ring-pink-700/10 cursor-pointer" onClick={()=>{setEducationUpdate(true)}}>
    <img src='./edit.png' className='w-3 h-3 mr-2' alt="Edit Icon" />
    Request Edit
  </span>
  <div className='grid grid-cols-3 ml-5 mt-3 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Hihest Qualification</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.highestQualification}</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Year of Passing</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.yearOfPassing}</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Pass Percentage %</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.passPercentage}%</p>
    </div>
  </div>
  <div className='grid grid-cols-3 ml-5 mt-3 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>School/College/InstitutionName</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>{profileInfo.schoolOrCollegeOrInstituteName}</p>
    </div>
   
  </div>
  
  
</div>

<div className='ml-10 mt-5 w-62rem h-auto rounded-md border border-gray-300'>
  <h1 className='font-roboto ml-5 mt-3 font-semibold text-sm'>Government Approved Id Card</h1>
    <span className="absolute  mr-24 right-3 mt-16 inline-flex items-center rounded-md bg-pink-50 px-3 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">
    <img src='./edit.png' className='w-3 h-3 mr-2' alt="Edit Icon" />
    Request Edit
  </span>
  <div className='grid grid-cols-3 ml-5 mt-3 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Your Id Card</p>
   <img src="https://aadhaarkyc.io/wp-content/uploads/2018/09/aadhaar_cc_926a3223b45c31aa2cfbeca9ea6028d6.png" alt="" className='w-72 h-36 mt-3' />
    </div>
  </div>

  
  
</div>
<div className='w-24 h-16 ml-28rem'>
<button className="bg-black hover:bg-gray-400 text-white font-roboto font-semibold m-3 h-8 w-28 h-18 rounded-full text-sm">
  update
</button>

</div>

      </div>
     </div>
     <ProfileUpdateModal isVisible={setProfile} onClose={()=>{setProfileUpdate(false)}}/>
     <PersonalInfoModal isVisible={setPersonalInfo} onClose={()=>{setPersonalInfoUpdate(false)}}/>
     <AddressModal isVisible={setAddress} onClose={()=>{setAddressUpdate(false)}}/>
     <EducationModal isVisible={setEducation} onClose={()=>{setEducationUpdate(false)}}/>
     </>
  );
}

export default StudentManifest;
