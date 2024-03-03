import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getStudentStatus, getStudents } from '../../../utils/methods/get';
import ActionModal from './ActionModal';
import { tree } from 'd3';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [currentWeek, setCurrentWeek] = useState([]);
    const [studentStatus, setStudentStatus] = useState([]);
    const [modalActive, setModalActive] = useState(false)
    const [studentId, setStudentId] = useState("")
    const [modalStatus, setModalStatus] = useState(false)
    const [status, setStatus] = useState("")
    const [reload, setReload] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const superleadUniqueId: string = useSelector((state: any) => state?.superlead?.superleadData?.uniqueId) || localStorage.getItem("superleadUniqueId")

    useEffect(() => {
        console.log(superleadUniqueId, "xbchjxbchbxhj");

        const fechStudents = async () => {
            try {
                const response = await getStudents(superleadUniqueId)
                const studentStatus = await getStudentStatus(superleadUniqueId)

                if (response.status === true && studentStatus.status === true) {
                    console.log(studentStatus?.response?.response, "shbhjbfdf");

                    setStudents(response?.response?.students)
                    setCurrentWeek(response?.response?.studentCurrentWeek)
                    setStudentStatus(studentStatus?.response?.response)
                }


            } catch (err) {

            }
        }
        fechStudents()
    }, [reload])
    const handleActionChange = (studentId: string) => {

        try {
            setStudentId(studentId)
            setModalActive(true)
            setModalStatus(true)
            setReload(false)
        } catch (error) {

        }
    }
    const changeModalStatus = () => {
        if (modalStatus) {
            setModalActive(false)
            setModalStatus(false)
            setReload((prevState) => !prevState);
        } else {
            setModalStatus(true)
            setReload((prevState) => !prevState);
        }
    }
    const handleSearchInputChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
    
        // Combine all data into one array
        const combinedData = [
            ...students,
            ...(studentStatus || []).map(({ studentId, ...rest }) => ({ ...rest, studentId })),
            ...(currentWeek || []).map(({ studentId, ...rest }) => ({ ...rest, studentId })),
        ];
    
        // Filter the combined data based on the search query
        const filtered:any = combinedData.filter((data) => {
            const { firstName, lastName, domain, batch, currentWeek, isStatus } = data ?? {};
    
            // Check if any property matches the query
            const propertyMatches = (
                (firstName?.toLowerCase() ?? '').includes(query) ||
                (lastName?.toLowerCase() ?? '').includes(query) ||
                (domain?.toLowerCase() ?? '').includes(query) ||
                (batch?.toLowerCase() ?? '').includes(query) ||
                ((currentWeek?.toString() ?? '').toLowerCase() ?? '').includes(query)
            );
    
            // Check if isStatus matches exactly
            const isStatusMatch = isStatus && isStatus.toLowerCase() === query;
    
            // Return true if any property matches or if isStatus matches exactly
            return propertyMatches || isStatusMatch;
        });
    
        // Update the state with the filtered results
        setFilteredData(filtered);
    };
    
    
    
    

    return (
        <>
            <section className=" p-3 sm:p-5 mt-36 w-full " onClick={() => changeModalStatus()}>
                <div className="mx-auto max-w-screen-xl px-4 lg:px-12 ">

                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden ">
                        <h1 className='font-roboto m-5 ml-8 font-semibold mb-0'>Search Filter</h1>
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 border-b dark:border-gray-700">
                            <div className="w-full md:w-1/2 m-3">
                                <form className="flex items-center">
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <p className='text-sm font-roboto text-gray-500'>Select Batch</p>
                                        </div>
                                        <select type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-0 focus:border-Average block w-full pl-10 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-Average outline-none" required="">
                                            <option value=""></option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    </div>
                                </form>
                            </div>



                            <div className="w-full md:w-1/2 m-3">
                                <form className="flex items-center">
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <p className='text-sm font-roboto text-gray-500'>Select Batch</p>
                                        </div>
                                        <select type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-0 focus:border-Average block w-full pl-10 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-Average outline-none" required="">
                                            <option value=""></option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="w-full md:w-1/2 m-3">
                                <form className="flex items-center">
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <p className='text-sm font-roboto text-gray-500'>Select Batch</p>
                                        </div>
                                        <select type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-0 focus:border-Average block w-full pl-10 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-Average outline-none" required="">
                                            <option value=""></option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select>
                                    </div>
                                </form>
                            </div>


                        </div>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-between md:space-x-3 flex-shrink-0 m-7 mb-2 mt-3  mr-4 ">
                            <div className="w-full md:w-10">
                                <form className="flex items-center">
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <p className='text-sm font-roboto'>10</p>
                                        </div>
                                        <select type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-0 focus:border-Average block w-full pl-10 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-Average outline-none" required="">
                                            <option value="10 text-sm font-roboto">60</option>
                                            <option value="10 text-sm font-roboto">60</option>
                                            <option value="10 text-sm font-roboto">60</option>
                                            <option value="10 text-sm font-roboto">60</option>
                                        </select>
                                    </div>


                                </form>
                            </div>

                            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0 mt-3">
                                <div className="w-full md:w-2/6">
                                    <form className="flex items-center">
                                        <label htmlFor="simple-search" className="sr-only">Search</label>
                                        <div className="relative w-full">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <input 
                                            type="text" 
                                            id="simple-search" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-0 focus:border-Average block w-full pl-10 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-Average outline-none text-sm font-roboto" required placeholder='Search...'
                                            value={searchQuery}
                                            onChange={handleSearchInputChange} 
                                            />
                                        </div>


                                    </form>
                                </div>
                                <div className="flex items-center space-x-3 w-full md:w-auto">
                                    <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" className="w-full md:w-auto flex items-center justify-center py-1.5 px-4 text-sm font-roboto font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                        <svg className="-ml-1 mr-1.5 w-5 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                        </svg>
                                        Actions
                                    </button>
                                    <div id="actionsDropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                                            <li>
                                                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                                            </li>
                                        </ul>
                                        <div className="py-1">
                                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                                        </div>
                                    </div>

                                    <button type="button" className="flex items-center justify-center flex-shrink-0 px-3 py-1.5 text-sm font-roboto font-medium  font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                        </svg>
                                        Export
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto mt-3">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs font-roboto text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                                    <tr className=''>
                                        <th scope="col" className="px-4 py-3 ">Name</th>
                                        <th scope="col" className="px-4 py-3 item text-center">Batch</th>
                                        <th scope="col" className="px-4 py-3 item text-center">Domain</th>
                                        <th scope="col" className="px-4 py-3 item text-center">Current Week</th>
                                        <th scope="col" className="px-4 py-3 item text-center">Status</th>
                                        <th scope="col" className="px-4 py-3 item text-center ">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {filteredData.length > 0 ? (
                                     filteredData.map((student, index) => (
                                    <tr key={index} className="border-b dark:border-gray-700 item text-center">
                                    <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-sm font-roboto">
                                        <img src={student?.imageUrl} alt="" className="w-auto h-8 mr-3 rounded-full" />
                                        {student?.firstName} {student?.lastName}
                                    </th>
                                    <td className="px-4 py-3 text-ms font-roboto">{student?.batch}</td>
                                    <td className="px-4 py-3 text-sm font-roboto">{student?.domain}</td>
                                    {currentWeek.map((week, idx) => (
                                        // Check if the studentId matches and render the current week
                                        (student.studentId === week.studentId) &&
                                        <td key={idx} className="px-4 py-3 text-sm font-roboto">{week.currentWeek}</td>
                                    ))}
                                    {studentStatus.map((status, idx) => (
                                        <React.Fragment key={idx}>

                                            {student.studentId === status.studentId && status.isStatus === "Active" ? (
                                                // Render this block if the condition is true
                                                <td className="px-4 py-3" key={idx}>
                                                    <span className="font-roboto inline-flex items-center rounded-md bg-bgsuperLead px-2 py-1 text-xs font-medium text-dark-highBlue cursor-pointer mt-3 text-sm font-robtot">Active</span>
                                                </td>
                                            ) : student.studentId === status.studentId && status.isStatus === "Terminate" ? (
                                                // Render this block if the else if condition is true
                                                <td className="px-4 py-3" key={idx}>
                                                    <span className="focus:outline-none text-red-500 hover:text-white bg-red-100 px-2 py-1 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs  mb-2 font-roboto dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-purple-900">Terminate</span>
                                                </td>
                                            ) : student.studentId === status.studentId && status.isStatus === "Suspend" ? (
                                                <td className="px-4 py-3" key={idx}>
                                                    <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset cursor-pointer bg-gray-10 text-Outstanding ring-Outstanding font-roboto text-xs">Suspend</span>
                                                </td>
                                            ) : student.studentId === status.studentId && status.isStatus === "Quit" ? (
                                                <td className="px-4 py-3" key={idx}>
                                                    <span className="focus:outline-none text-red-500 hover:text-white bg-red-100 px-2 py-1 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs  mb-2 font-roboto dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-purple-900">Quit</span>
                                                </td>
                                            ) : student.studentId === status.studentId && status.isStatus === "Placed" ? (
                                                <td className="px-4 py-3" key={idx}>
                                                    <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset cursor-pointer bg-blue-10 text-Poor ring-Poor font-roboto">Placed</span>
                                                </td>
                                            ) : null}
                                        </React.Fragment>
                                    ))}

                                    <td className="px-4 py-3">

                                        <button type='button' id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" onClick={() => handleActionChange(student?.studentId, status.isStatus)}>
                                            {student.studentId === studentId ? (
                                                <ActionModal isVisible={modalActive} onClose={() => setModalActive(false)} studentId={studentId} changeModalStatus={changeModalStatus} />
                                            ) : null}
                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                            </svg>

                                        </button>




                                        <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                                <li>
                                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                </li>
                                            </ul>
                                            <div className="py-1">
                                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                        ))
                        ) : (        
                    
                                   
                                    students.map((student, index) => (
                           
                                        <tr key={index} className="border-b dark:border-gray-700 item text-center">
                                            <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-sm font-roboto">
                                                <img src={student?.imageUrl} alt="" className="w-auto h-8 mr-3 rounded-full" />
                                                {student?.firstName} {student?.lastName}
                                            </th>
                                            <td className="px-4 py-3 text-ms font-roboto">{student?.batch}</td>
                                            <td className="px-4 py-3 text-sm font-roboto">{student?.domain}</td>
                                            {currentWeek.map((week, idx) => (
                                                // Check if the studentId matches and render the current week
                                                (student.studentId === week.studentId) &&
                                                <td key={idx} className="px-4 py-3 text-sm font-roboto">{week.currentWeek}</td>
                                            ))}
                                            {studentStatus.map((status, idx) => (
                                                <React.Fragment key={idx}>

                                                    {student.studentId === status.studentId && status.isStatus === "Active" ? (
                                                        // Render this block if the condition is true
                                                        <td className="px-4 py-3" key={idx}>
                                                            <span className="font-roboto inline-flex items-center rounded-md bg-bgsuperLead px-2 py-1 text-xs font-medium text-dark-highBlue cursor-pointer mt-3 text-sm font-robtot">Active</span>
                                                        </td>
                                                    ) : student.studentId === status.studentId && status.isStatus === "Terminate" ? (
                                                        // Render this block if the else if condition is true
                                                        <td className="px-4 py-3" key={idx}>
                                                            <span className="focus:outline-none text-red-500 hover:text-white bg-red-100 px-2 py-1 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs  mb-2 font-roboto dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-purple-900">Terminate</span>
                                                        </td>
                                                    ) : student.studentId === status.studentId && status.isStatus === "Suspend" ? (
                                                        <td className="px-4 py-3" key={idx}>
                                                            <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset cursor-pointer bg-gray-10 text-Outstanding ring-Outstanding font-roboto text-xs">Suspend</span>
                                                        </td>
                                                    ) : student.studentId === status.studentId && status.isStatus === "Quit" ? (
                                                        <td className="px-4 py-3" key={idx}>
                                                            <span className="focus:outline-none text-red-500 hover:text-white bg-red-100 px-2 py-1 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs  mb-2 font-roboto dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-purple-900">Quit</span>
                                                        </td>
                                                    ) : student.studentId === status.studentId && status.isStatus === "Placed" ? (
                                                        <td className="px-4 py-3" key={idx}>
                                                            <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset cursor-pointer bg-blue-10 text-Poor ring-Poor font-roboto">Placed</span>
                                                        </td>
                                                    ) : null}
                                                </React.Fragment>
                                            ))}

                                            <td className="px-4 py-3">

                                                <button type='button' id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" onClick={() => handleActionChange(student?.studentId)}>
                                                    {student.studentId === studentId ? (
                                                        <ActionModal isVisible={modalActive} onClose={() => setModalActive(false)} studentId={studentId} changeModalStatus={changeModalStatus} />
                                                    ) : null}
                                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                                    </svg>

                                                </button>




                                                <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                                        <li>
                                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                        </li>
                                                    </ul>
                                                    <div className="py-1">
                                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                        )}
                       
                                </tbody>
                            </table>
                        </div>
                        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                Showing
                                <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
                                of
                                <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                            </span>
                            <ul className="inline-flex items-stretch -space-x-px">
                                <li>
                                    <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <span className="sr-only">Previous</span>
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <span className="sr-only">Next</span>
                                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section >

        </>
    );
}

export default StudentList;
