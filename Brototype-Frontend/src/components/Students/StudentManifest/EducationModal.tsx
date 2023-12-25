import * as Yup from 'yup';
import { useFormik } from 'formik';
import { updateEducationDetails } from '../../../utils/methods/post';

interface FormValues {
    highestQualification: string;
    yearOfPassing: string;
    passPercentage: string;
    schoolOrCollegeOrInstituteName: string;

}

const ErrorText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="text-sm font-roboto text-red-700 mt-3 ml-3">
        {children}
    </p>
);

const EducationModal = ({ isVisible, onClose }) => {
    const studentId = '657aaa012a15acfff364bb5a'
    const validationSchema = Yup.object({
        highestQualification: Yup.string().trim().required('highestQualification Name is required'),
        yearOfPassing: Yup.number()
            .required('Year of Passing is required')
            .integer('Year must be an integer')
            .min(1900, 'Year must be greater than or equal to 1900') // Adjust the minimum year as needed
            .max(new Date().getFullYear(), 'Year cannot be in the future'),
            passPercentage: Yup.string()
            .required('Pass Percentage is required')
            .transform((value) => (value ? value.replace('%', '') : value)) // Remove percentage symbol if present
            .matches(/^100$|^\d{1,2}(\.\d{1,2})?$/, 'Invalid percentage format'),
        schoolOrCollegeOrInstituteName: Yup.string().required('school/college/intstitute name is required'),


    });

    const formik = useFormik({
        initialValues: {
            highestQualification: '',
            yearOfPassing: '',
            passPercentage: '',
            schoolOrCollegeOrInstituteName: '',
        } as FormValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                console.log(values, 'Form values submitted address');
                const response = await updateEducationDetails(values, studentId)
                console.log(response, "response coming to the frontend update Address");

            } catch (error) {
                console.error(error, 'error in the formik data');
            }
        },
    });
    if (!isVisible) return null
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
                        <span className="font-semibold font-roboto">Update your Education</span>
                    </div>
                    <div className="m-2 mt-0">
                        <div className="flex gap-5">


                            <div >

                            </div>
                            <div className="w-full">
                                <div className=" ">
                                    <div className="m-1">
                                        <div className="mb-3 ">
                                            <span className="text-sm font-roboto">Hihest Qualification</span>
                                        </div>

                                        <input type="text"
                                            id='highestQualification'
                                            name='highestQualification'
                                            value={formik.values.highestQualification}
                                            onChange={formik.handleChange}
                                            autoComplete='highestQualification'
                                            required
                                            className="w-full border border-2px py-1" />
                                        {formik.touched.highestQualification && formik.errors.highestQualification && (
                                            <ErrorText>{formik?.errors?.highestQualification}</ErrorText>
                                        )}
                                    </div>
                                    <div className="">
                                        <div className="m-1">
                                            <div className="mb-3 mt-3">
                                                <span className="text-sm font-roboto">Pass Percentage %</span>
                                            </div>

                                            <input type="text"
                                                id='passPercentage'
                                                name='passPercentage'
                                                value={formik.values.passPercentage}
                                                onChange={formik.handleChange}
                                                autoComplete='passPercentage'
                                                required
                                                className="w-full border border-2px py-1" />
                                            {formik.touched.passPercentage && formik.errors.passPercentage && (
                                                <ErrorText>{formik?.errors?.passPercentage}</ErrorText>
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
                                                <span className="text-sm font-roboto">Year of Passing</span>
                                            </div>

                                            <input type="text"
                                                id='yearOfPassing'
                                                name='yearOfPassing'
                                                value={formik.values.yearOfPassing}
                                                onChange={formik.handleChange}
                                                autoComplete='yearOfPassing'
                                                required
                                                className="w-full border border-2px py-1" />
                                            {formik.touched.yearOfPassing && formik.errors.yearOfPassing && (
                                                <ErrorText>{formik?.errors?.yearOfPassing}</ErrorText>
                                            )}
                                        </div>
                                        <div className="">
                                            <div className="mr-3  m-1 ml-0">
                                                <div className="mb-3 mt-3">
                                                    <span className="text-sm font-roboto">School/College/InstitutionName</span>
                                                </div>

                                                <input type="text"
                                                    id='schoolOrCollegeOrInstituteName'
                                                    name='schoolOrCollegeOrInstituteName'
                                                    value={formik.values.schoolOrCollegeOrInstituteName}
                                                    onChange={formik.handleChange}
                                                    autoComplete='schoolOrCollegeOrInstituteName'
                                                    required
                                                    className="w-full border border-2px py-1" />
                                                {formik.touched.schoolOrCollegeOrInstituteName && formik.errors.schoolOrCollegeOrInstituteName && (
                                                    <ErrorText>{formik?.errors?.schoolOrCollegeOrInstituteName}</ErrorText>
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
    );
}

export default EducationModal;
