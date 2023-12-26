import { useEffect, useState } from "react";
import { getExtendDetails } from "../../../utils/methods/get";
import { useFormik } from "formik";
import { batch } from "react-redux";
import { requestExtention } from "../../../utils/methods/post";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface FormValues {
  fullName: string;
  batch: string;
  domain: string;
  currentWeek: string;
  extendDays: string;
  extendReason: string;
}

const ExtendModal = ({ isVisible, isClose }) => {
  const [extend, setExtend] = useState({});
  const advisorId = "657aa5093476c843c28a377b";
  const studentId = "657aaa012a15acfff364bb5a";
  useEffect(() => {
    const fetchExtendDetails = async () => {
      try {
        const batchId = "657aa5093476c843c28a377d";
        const studentId = "657aaa012a15acfff364bb5a";
        const data = {
          batchId,
          studentId,
        };

        const response = await getExtendDetails(data);
        setExtend(response.data);
      } catch (err) {
        console.error('Error fetching extend details:', err);
      }
    };

    // Call fetchExtendDetails only when the modal is visible
    if (isVisible) {
      fetchExtendDetails();
    }
  }, [isVisible]);

  const formik = useFormik({
    initialValues: {
      fullName: `${extend.firstName || ''} ${extend.middleName || ''} ${extend.lastName || ''}`,
      batch: extend.batch || '',
      domain: extend.domain || '',
      currentWeek: extend.currentWeek || '',
      extendDays: '',
      extendReason: '',
    } as FormValues,

    onSubmit: async () => {
      try {
        const body = {
          studentId,
          advisorId,
          extendDays: formik.values.extendDays,
          extendReason: formik.values.extendReason,
          fullName: `${extend.firstName || ''} ${extend.middleName || ''} ${extend.lastName || ''}`,
          batch : extend.batch || '',
          domain : extend.domain || '',
          currentWeek : extend.currentWeek
        };
        const response = await requestExtention(body)
         if(response.status===201){
          console.log(response,"reposne extend request");
          
          toast.success("Your Request have been successfully")
          isClose();
         }
    
        // After submitting, you might want to close the modal
 
      } catch (err) {
        console.error('Error submitting form:', err);
        // Handle the error, e.g., set an error state
      }
    },
    
  });

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center overflow-y-scroll overflow-hidden z-40">
        <div className="border border-gray-200 m-5 rounded-lg shadow-2xl w-2/5 bg-white">
          <div className="flex justify-between">
            <div></div>
            <div className="ml- mr-4 mt-4">
              <span onClick={() => { isClose() }} className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="text-center">
            <div><span className="font-semibold font-roboto text-md mb-2">Extend request</span></div>
          </div>
          <div className="m-5 mt-6">
            <div>
              <input
                type="text"
                className="px-5 py-4 shadow-xl border border-gray-200 focus:outline-black border-red w-full rounded-lg mb-7 font-roboto"
                placeholder="Enter Full Name"
                id="fullName"
                name="fullName"
                value={`${extend.firstName || ''} ${extend.middleName || ''} ${extend.lastName || ''}`}
              />
              <input
                type="text"
                className="px-5 py-4 shadow-xl border border-gray-200 focus:outline-black border-red w-full rounded-lg mb-7 font-roboto"
                placeholder="Enter your Batch"
                id="batch"
                name="batch"
                value={extend?.batch}
              />
              <input
                type="text"
                className="px-5 py-4 shadow-xl border border-gray-200 focus:outline-black border-red w-full rounded-lg mb-7 font-roboto"
                placeholder="Enter your current week"
                id="currentWeek"
                name="currentWeek"
                value={extend?.currentWeek}
              />
              <input
                type="text"
                className="px-5 py-4 shadow-xl border border-gray-200 focus:outline-black border-red w-full rounded-lg mb-7 font-roboto"
                placeholder="Enter extension need days"
                id="extendDays"  // Corrected typo here
                name="extendDays"
                value={formik.values.extendDays}  // Use formik.values.extendDays
                onChange={formik.handleChange}
              />

              <textarea
                name="extendReason"
                id="extendReason"
                value={formik.values.extendReason}
                onChange={formik.handleChange}
                cols={30}
                rows={10}
                className="w-full px-5 py-2 border-gray-200 shadow-xl outline-black font-roboto"
                placeholder="Enter your reason for extension"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-between m-6">
            <div></div>
            <div>
              <button className="border px-4 py-1 rounded-md bg-black text-white font-roboto" onClick={isClose}>
                Cancel
              </button>
              <button type="submit" className="border px-4 py-1 rounded-md bg-black text-white font-roboto" onClick={formik.handleSubmit}>
                Submit
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtendModal;
