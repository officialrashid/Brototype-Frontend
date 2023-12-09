

const ExtendDetails = () => {
    return (
        <div className="border m-5 h-fit rounded-xl shadow-2xl bg-white">
    
            <div className='mx-auto p-2 mt-4 '>
                <table className="w-full text-sm text-left  table-fixed">
                    <thead className="text-xs text-gray-700 uppercase bg-custom-background shadow-xl dark:text-gray font-roboto">
                        <tr>
                            <th scope="col" className="w-1/4 px-5 py-6 text-center  rounded-s-md">
                                Week
                            </th>
                            <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                                Advisor
                            </th>
                            <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                                Reason
                            </th>
                            <th scope="col" className="w-1/4 px-5 py-6  text-center">
                                Extention Count
                            </th>
                            <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                                Re-Scheduled Date
                            </th>
                            <th scope="col" className="w-1/4 px-5 py-6 text-center ">
                                Status
                            </th>
                            <th scope="col" className="w-1/4 px-5 py-6 text-center">
                                Request
                            </th>
                          

                        </tr>
                    </thead>
                </table>
            </div>
            <div className='mx-auto p-2 mb-2 '>
                <table className="w-full text-sm text-left divide-y divide-y-8 border table-fixed border-gray-400 rounded-md font-roboto ">
                    <thead className="text-md text-gray-700 bg-gray-100 shadow-2xl dark:text-gray-800">
                        <tr className="">
                            <th scope="col" className="w-1/4 px-4 py-6  text-center " style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>Week 1

                            </th>
                            <th scope="col" className="w-1/4 px-4 py-6 text-center">Yen

                            </th>
                            <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>
                                Health Issue

                            </th>
                            <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>1

                            </th>
                            <th scope="col" className="w-1/4 px-4 py-6 text-center" style={{ whiteSpace: 'normal', wordWrap: 'break-word', textOverflow: 'ellipsis' }}>10/10/2024

                            </th>
                            <th scope="col" className="w-1/4 px-4 py-6 text-center ">
                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">Accepted</span>
                            </th>
                            <th scope="col" className="w-1/4 px-4 py-6 text-center  ">
                                <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10 cursor-pointer">Request</span>
                            </th>
                         

                        </tr>
                    </thead>
                </table>
            </div>



        </div>
    );
}

export default ExtendDetails;
