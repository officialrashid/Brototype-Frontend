import StudentTask from '../../../pages/Students/StudentTask';

const StudentManifest = () => {
  return (
    <div className="bg-custom-background  h-auto">
      <div className='bg-white h-auto m-8 rounded-xl w-67.3rem'>
        <h1 className='font-roboto font-sm ml-5 mt-5'>Your Manifest Details</h1>
        
        <div className='ml-10 mt-5 w-62rem h-28 rounded-md border border-gray-300 relative'>
  <div className='flex'>
    <img src="/profile.jpeg" alt="" className='rounded-full w-16 h-16 ml-5 mt-5' />
    <div className='flex flex-1 flex-col ml-8 mt-5'>
      <h1 className='text-sm font-semibold font-roboto'>Muhammed Rashid.K</h1>
      <h1 className='text-sm text-gray-500 font-roboto mt-1 ml-5'>Mern Stack</h1>
      <div className="flex gap-3 mt-1">
        <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">BCE55</span>
        <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">Remote</span>
      </div>
    </div>
    <span className="absolute top-12 right-5 inline-flex items-center rounded-md bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600 ring-1 ring-inset ring-pink-700/10 cursor-pointer">
      <img src='./edit.png' className='w-3 h-3 mr-2' alt="Edit Icon" />
      Request Edit
    </span>
  </div>
</div>



        <div className='ml-10 mt-5 w-62rem h-auto rounded-md border border-gray-300'>
  <h1 className='font-roboto ml-5 mt-3 font-semibold text-sm'>Personal Information</h1>
  <span className="absolute  mr-24 right-3 mt-28 inline-flex items-center rounded-md bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600 ring-1 ring-inset ring-pink-700/10 cursor-pointer">
    <img src='./edit.png' className='w-3 h-3 mr-2' alt="Edit Icon" />
    Request Edit
  </span>
  <div className='grid grid-cols-3 ml-5 mt-3 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>First Name</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>Muhammed</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Second Name</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>Rashid.K</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Last Name</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>K</p>
    </div>
  </div>

  <div className='grid grid-cols-3 ml-5 mt-6 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Date Of Birth</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>25/07/2003</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Age</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>20</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Gender</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>Male</p>
    </div>
  </div>
  <div className='grid grid-cols-3 ml-5 mt-6 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Email</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>muhammedrashi59@gmail.com</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Phone</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>9526603473</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Father`s Name</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>Alavi K</p>
    </div>
  </div>
  <div className='grid grid-cols-3 ml-5 mt-6 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Mother`s Name</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>Faseela</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Father`s Contact</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>9526603473</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Mother`s Contact</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>6282636189</p>
    </div>
  
  </div>

</div>



<div className='ml-10 mt-5 w-62rem h-auto rounded-md border border-gray-300'>
  <h1 className='font-roboto ml-5 mt-3 font-semibold text-sm'>Address</h1>
  <span className="absolute  mr-24 right-3 mt-8 inline-flex items-center rounded-md bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600 ring-1 ring-inset ring-pink-700/10 cursor-pointer">
    <img src='./edit.png' className='w-3 h-3 mr-2' alt="Edit Icon" />
    Request Edit
  </span>
  <div className='grid grid-cols-3 ml-5 mt-3 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>House Name</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>Kanakkancheri(H)</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Village</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>Aliparamba</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Taluk</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>Perinthalmanna</p>
    </div>
  </div>

  <div className='grid grid-cols-3 ml-5 mt-3 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>District</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>Kanakkancheri(H)</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>State</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>Aliparamba</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Pincode</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>679357</p>
    </div>
  </div>
  
  
</div>

<div className='ml-10 mt-5 w-62rem h-auto rounded-md border border-gray-300'>
  <h1 className='font-roboto ml-5 mt-3 font-semibold text-sm'>Educational Details</h1>
  <span className="absolute  mr-24 right-3 mt-8 inline-flex items-center rounded-md bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600 ring-1 ring-inset ring-pink-700/10 cursor-pointer">
    <img src='./edit.png' className='w-3 h-3 mr-2' alt="Edit Icon" />
    Request Edit
  </span>
  <div className='grid grid-cols-3 ml-5 mt-3 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Hihest Qualification</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>Degree(BCA)</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Year of Passing</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>2022</p>
    </div>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>Pass Percentage %</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>70%</p>
    </div>
  </div>
  <div className='grid grid-cols-3 ml-5 mt-3 gap-x-5'>
    <div className='flex flex-col'>
      <p className='text-sm text-gray-400 font-roboto'>School/College/InstitutionName</p>
      <p className='text-sm text-gray-400 font-roboto mt-2 text-gray-500'>Yenepoys Deemed University</p>
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

      </div>
    </div>
  );
}

export default StudentManifest;
