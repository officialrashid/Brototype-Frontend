
import { useEffect, useState } from 'react';
import { getEnquiryStudents } from "../../utils/methods/get"
type PendingStudents = {
    name: String,
    email: String,
    phone: String,
    qualification: String,
    prefferedLocation: String
}

const EnquerieStudents = () => {
    const [PendingStudents, setPendingStudents] = useState<PendingStudents[]>([]);

    useEffect(() => {

        getEnquiryStudents().then((response) => {
            setPendingStudents(response.data.response)
        });

    }, [])
    return (
   <>
            <div className='mx-auto p-2  mt-4 '>
                <table className="w-full text-sm text-left divide-y divide-y-8 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-300 shadow-xl dark:text-gray ">

                        <tr >
                            <th scope="col" className="px-20 py-6 rounded-l-lg ">
                                Name
                            </th>
                            <th scope="col" className=" px-20 py-6">
                                Email
                            </th>
                            <th scope="col" className="px-20 py-6">
                                Phone
                            </th>
                            <th scope="col" className="px-20 py-6">
                                Qualification
                            </th>
                            <th scope="col" className="px-20 py-6 ">
                                Location
                            </th>
                            <th scope="col" className="px-20 py-6 rounded-r-lg">
                                Action
                            </th>
                        </tr>


                    </thead>



                </table>

            </div>

            {PendingStudents.map((students, index) => (
            <div className=' mx-auto p-2 mb-2'>
          
                <table className="w-full text-sm text-left divide-y divide-y-8 border border-gray-400 transform translate-y-0 transition-transform duration-300 hover:-translate-y-2">
                    <thead className="text-md text-gray-700  bg-gray-100 shadow-2xl dark:text-gray-800">
                       
                            <tr key={index}>
                                <th scope="col" className="px-12 py-6">
                                    {students.name}
                                </th>
                                <th scope="col" className="px-8 py-6">
                                    {students.email}
                                </th>
                                <th scope="col" className="px-8 py-6">
                                    {students.phone}
                                </th>
                                <th scope="col" className="px-24 py-6">
                                    {students.qualification}
                                </th> <th scope="col" className="px-24 py-6">
                                    {students.prefferedLocation}
                                </th>
                                <th scope="col" className="px-8 py-6 ">
                                    <button className='bg-black px-5 py-2  text-white rounded-lg'>Add</button>
                                </th>
                            </tr>
                       
                    </thead>



                </table>

            </div>
             ))}
            </>
    );
}

export default EnquerieStudents;
