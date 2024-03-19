import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getActivityTimeLineup } from '../../../utils/methods/get';

const ActivityTimeLinup = () => {
  const [activity, setActivity] = useState([])
  const superleadId: any = useSelector((state: any) => state?.superlead?.superleadData?.superleadId);
  useEffect(() => {
    const fetchActivityTimeLineup = async () => {
      try {
        const response = await getActivityTimeLineup(superleadId)
        console.log(response, "response in forntendeeeeeee");
        if (response?.response?.status === true) {
          setActivity(response?.response?.events)
        }
      } catch (error) {
        // error handle
      }
    }
    fetchActivityTimeLineup()
  }, [])
  return (
    <>
      <div className="overflow-y-auto" style={{ maxHeight: "400px" }}>
        {activity.map((data, index) => (
          <div className={`w-72 h-18   ml-4 mt-3 rounded-xl `}>
            <ol className={`absolute ml-2  border-s  border-gray-400 dark:border-gray-400 }`}>
              <li className="mb-16 ms-4 ">
                <div className={`absolute -start-1.5 mt-7 h-3 w-3 rounded-full border border-white bg-${data.label} dark:border-blue-900 dark:bg-blue-700`}></div>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm"> </a>
              </li>
            </ol>

            <div className="flex flex-row  gap-5 w-28rem">
              <div className="flex flex-col ml-8 mt-5">
                <h1 className={`font-roboto text-sm mt-2 text-black`}>{data.title}</h1>
                <h1 className={`font-roboto text-sm mt-1 text-gray-400 tex-sm `}>Meeting For Advisors</h1>
              </div>
              <div className="flex flex-row ml-8 mt-5 ">
                <h1 className={`font-roboto text-sm mt-1 text-gray-400 tex-sm ml-32`}>{data.startTime}</h1>
              </div>
            </div>

          </div>
        ))}





      </div>
    </>


  );
}

export default ActivityTimeLinup;
