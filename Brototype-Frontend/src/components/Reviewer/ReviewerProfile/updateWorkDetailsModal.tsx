import * as Yup from 'yup';
import { useFormik } from 'formik';
import { updateReviewerWorkDetails } from '../../../utils/methods/post';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

interface FormValues {
  experience: string,
  skills: string,
  CurrentWorkingCompanyName: string,
  PrefferedDomainsForReview: string,
}

const ErrorText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-sm font-roboto text-red-700 mt-3 ml-3">
    {children}
  </p>
);

const PersonalInfoModal: React.FC<{ isVisible: boolean; onClose: () => void }> = ({ isVisible, onClose }) => {
  const reviewerId:any = useSelector((state: any) => state?.reviewer?.reviewerData?.reviewerId);
  const validationSchema = Yup.object({
    experience: Yup.number().typeError('Experience must be a number').required('Experience is required'),
    skills: Yup.string().transform((value) => value.trim()).required('Skills are required'),
    CurrentWorkingCompanyName: Yup.string().transform((value) => value.trim()).required('Current Working Company Name is required'),
    PrefferedDomainsForReview: Yup.string().transform((value) => value.trim()).required('Preferred Domains For Review is required'),
  });
  


  const formik = useFormik({
    initialValues: {
      experience: '',
      skills: '',
      CurrentWorkingCompanyName: '',
      PrefferedDomainsForReview: '',

    } as FormValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values, 'Form values submitted');
        const response = await updateReviewerWorkDetails(values, reviewerId)
        console.log(response, "response coming to the frontend");
        if(response.data.status===true){
          toast.success("Your Work Details update successfully")
          onClose()
        }else{
          toast.error("work deatils update not done,something went wrong")
          onClose()
        }
      } catch (error) {
        console.error(error, 'error in the formik data');
      }
    },
  });

  if (!isVisible) return null;
  return (
    <>
      <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center   overflow-y-scroll overflow-hidden z-40">
        <div className="border border-2px  m-10 w-1/2 bg-white">
          <div className="flex justify-between m-4 mb-">
            <div>

            </div>
            <div >
              <svg onClick={() => { onClose() }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>


            </div>


          </div>
          <div className="text-center mb-6">
            <span className="font-semibold font-roboto">Update your  Work Information</span>
          </div>
          <div className="m-2 mt-0">
            <div className="flex gap-5">


              <div >

              </div>
              <div className="w-full">
                <div className=" ">
                  <div className="m-1">
                    <div className="mb-3 ">
                      <span className="text-sm font-roboto">Experience</span>
                    </div>

                    <input type="text"
                      id='experience'
                      name='experience'
                      value={formik.values.experience}
                      onChange={formik.handleChange}
                      autoComplete='experience'
                      required className="w-full border border-2px py-1" />
                    {formik.touched.experience && formik.errors.experience && (
                      <ErrorText>{formik?.errors?.experience}</ErrorText>
                    )}
                  </div>
                  <div className="">
                    <div className="m-1">
                      <div className="mb-3 mt-3">
                        <span className="text-sm font-roboto">Skills</span>
                      </div>

                      <textarea type="text"
                        id='skills'
                        name='skills'
                        value={formik.values.skills}
                        onChange={formik.handleChange}
                        className="w-full border border-2px py-10" />
                      {formik.touched.skills && formik.errors.skills && (
                        <ErrorText>{formik?.errors?.skills}</ErrorText>
                      )}
                    </div>



                  </div>


                </div>
              </div>

              <div className="w-full">

                <div className="w-full">
                  <div className=" mr-2 mb-3">
                    <div className="mr-3 m-1 ml-0">
                      <div className="mb-3 ">
                        <span className="text-sm font-roboto">Current Working Company Name</span>
                      </div>

                      <input type="text"
                        id='CurrentWorkingCompanyName'
                        name='CurrentWorkingCompanyName'
                        value={formik.values.CurrentWorkingCompanyName}
                        onChange={formik.handleChange}
                        className="w-full border border-2px py-1" />
                      {formik.touched.CurrentWorkingCompanyName && formik.errors.CurrentWorkingCompanyName && (
                        <ErrorText>{formik?.errors?.CurrentWorkingCompanyName}</ErrorText>
                      )}
                    </div>
                    <div className="">
                      <div className="mr-3  m-1 ml-0">
                        <div className="mb-3 mt-3">
                          <span className="text-sm font-roboto">Preffered Domains For Review</span>
                        </div>

                        <textarea type="text"
                          id='PrefferedDomainsForReview'
                          name='PrefferedDomainsForReview'
                          value={formik.values.PrefferedDomainsForReview}
                          onChange={formik.handleChange}
                          className="w-full border border-2px py-10" />
                        {formik.touched.PrefferedDomainsForReview && formik.errors.PrefferedDomainsForReview && (
                          <ErrorText>{formik?.errors?.PrefferedDomainsForReview}</ErrorText>
                        )}
                      </div>



                    </div>


                  </div>
                </div>

              </div>



            </div>
          
            

          </div>

          <div className=" flex justify-between m-6">
            <div>

            </div>
            <div>
              <button
                type="button"
                className="bg-black rounded-md px-4 py-1 text-white text-md font-roboto hover:bg-gray-400"
                onClick={() => formik.handleSubmit()}
              >
                Submit
              </button>

            </div>

          </div>



        </div>
      </div>



    </>
  )




}

export default PersonalInfoModal