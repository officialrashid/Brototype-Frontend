import { useEffect, useState } from "react";
import { getExtendDetails } from "../../../utils/methods/get";
import { useFormik } from "formik";
import { batch, useSelector } from "react-redux";
import { requestExtention } from "../../../utils/methods/post";
import { toast } from 'react-toastify';
import * as Yup from 'yup'; // Import yup
import 'react-toastify/dist/ReactToastify.css';
interface FormValues {
  fullName: string;
  batch: string;
  domain: string;
  currentWeek: string;
  extendDays: string;
  extendReason: string;
}
const validationSchema = Yup.object().shape({
  // Define validation rules
  extendDays: Yup.string()
    .trim()
    .required('Extend days is required')
    .oneOf(['2', '7'], 'Extend days must be either 2 or 7'),
  extendReason: Yup.string()
    .trim()
    .required('Extend reason is required'),
});


const ExtendModal = ({ isVisible, isClose }) => {
  const [extend, setExtend] = useState({});
  const advisorId = "657aa5093476c843c28a377b";
  const studentId:string = useSelector((state: any) => state?.student?.studentData?.studentId);
  useEffect(() => {
    const fetchExtendDetails = async () => {
      try {
        const batchId = "657aa5093476c843c28a377d";
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
    validationSchema: validationSchema,
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
                className={`px-5 py-4 shadow-xl border ${formik.touched.extendDays && formik.errors.extendDays ? 'border-red' : 'border-gray-200'} focus:outline-black w-full rounded-lg mb-7 font-roboto`}
                placeholder="Enter extension need days"
                id="extendDays"
                name="extendDays"
                value={formik.values.extendDays}
                onChange={formik.handleChange}
              />
              {formik.touched.extendDays && formik.errors.extendDays ? (
                <div className="text-red-700 text-sm ml-2">{formik.errors.extendDays}</div>
              ) : null}
              <textarea
                name="extendReason"
                id="extendReason"
                value={formik.values.extendReason}
                onChange={formik.handleChange}
                cols={30}
                rows={10}
                className={`w-full px- py- border ${formik.touched.extendReason && formik.errors.extendReason ? 'border-red' : 'border-gray-200'} shadow-xl outline-black font-roboto`}
                placeholder="Enter your reason for extension"
              ></textarea>
              {formik.touched.extendReason && formik.errors.extendReason ? (
                <div className="text-red-700 text-sm ml-2">{formik.errors.extendReason}</div>
              ) : null}
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
