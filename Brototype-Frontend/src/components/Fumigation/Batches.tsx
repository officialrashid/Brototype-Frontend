

const Batches = () => {
  return (
    <>
      <div className="border border-gray-400 rounded-lg w-full max-w-7xl mx-auto shadow-xl mt-4">
        <div className="m-2">
          <ul className="flex justify-between">
            <li><span className="text-xl font-bold">All Batches</span></li>
            <li>
              <button className="rounded-md bg-black px-3 py-2">
                <span className="text-md text-white">Add Batch</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="mx-auto p-2 mb-2">
          <table className="w-full text-sm text-left divide-y divide-y-8 border border-gray-400 transform translate-y-0 transition-transform duration-300 hover:-translate-y-2">
            <thead className="text-md text-gray-700 bg-gray-100 shadow-2xl dark:text-gray-800">
              <tr>
                <th scope="col" className="px-12 py-6">
                  BCE-140
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="mx-auto p-2 mb-2">
          <table className="w-full text-sm text-left divide-y divide-y-8 border border-gray-400 transform translate-y-0 transition-transform duration-300 hover:-translate-y-2">
            <thead className="text-md text-gray-700 bg-gray-100 shadow-2xl dark:text-gray-800">
              <tr>
                <th scope="col" className="px-12 py-6">
                  BCE-141
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="mx-auto p-2 mb-2">
          <table className="w-full text-sm text-left divide-y divide-y-8 border border-gray-400 transform translate-y-0 transition-transform duration-300 hover:-translate-y-2 rounded-lg">
            <thead className="text-md text-gray-700 bg-gray-100 shadow-2xl dark:text-gray-800">
              <tr>
                <th scope="col" className="px-12 py-6">
                  BCE-141
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}

export default Batches;
