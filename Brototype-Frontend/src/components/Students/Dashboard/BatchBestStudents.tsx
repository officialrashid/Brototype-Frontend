import { useEffect, useState } from "react";
import { getBestFiveStudents } from "../../../utils/methods/get";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux-toolkit/store";

const BatchBestStudents = () => {
  const [bestStudents, setBestStudents] = useState([]);
  const batchId: any = useSelector((state: RootState) => state?.student?.studentData?.batchId);


  useEffect(() => {
    const fetchBestStudents = async () => {
      try {

        const response = await getBestFiveStudents(batchId);
        console.log(response, "cbvhjvd");

        setBestStudents(response?.data?.topStudents || []);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBestStudents();
  }, []);

  useEffect(() => {
    console.log(bestStudents, "Updated bestStudents");
  }, [bestStudents]);

  return (
    <div className="w-22.5rem h-auto bg-white right-6 mb-48rem mt-5 rounded-xl shadow-xl border border-gray-300 hover hover:border-2 border-gray-300 absolute">

      <h1 className="ml-3 mt-2 text-sm font-poppins font-medium">Your Batch Best Students</h1>
      {bestStudents.length > 0 ? (
        <div className="flex flex-row justify-between p-2 border-b mt-3">
          <div className="w-28">
            <h1 className="text-sm text-gray-400 font-roboto">Names</h1>
            {bestStudents && bestStudents.length > 0 ? (
              bestStudents.map((student: any, index: number) => {
                const [, totalScore, imageUrl, studentName] = student.match(/TotalScore: (\d+\.\d+), imageUrl: (.+),studentName: (.+),studentCurrentWeek: (.+)/);


                return (
                  <div key={index} className="flex items-center">
                    <img src={imageUrl} alt="" className="w-8 h-8 rounded-full mt-3" />
                    <p className="text-sm text-gray-400 font-roboto ml-3 mt-3">{studentName}</p>
                  </div>
                );
              })
            ) : (
              <p>No best students found.</p>
            )}
          </div>







          <div className="">
            <h1 className="text-sm text-gray-400 font-roboto">Progress</h1>
            {bestStudents && bestStudents.length > 0 ? (
              bestStudents.map((student: string, index: number) => {
                const totalScore = parseFloat(student.split(':')[1]);

                if (!isNaN(totalScore) && totalScore >= 0 && totalScore <= 100) {
                  return (
                    <div key={index} className="w-48 flex">
                      <div className="w-36 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-8">
                        <div
                          className={`h-1.5 rounded-full ${totalScore >= 80
                            ? 'bg-green-400'
                            : totalScore >= 60
                              ? 'bg-yellow-500'
                              : totalScore >= 40
                                ? 'bg-orange-500'
                                : totalScore >= 20
                                  ? 'bg-red-500'
                                  : totalScore >= 0 && totalScore <= 19
                                    ? 'bg-blue-500'
                                    : ''
                            }`}
                          style={{ width: `${totalScore}%` }}
                        ></div>
                      </div>
                      <span
                        className={`text-xs font-roboto ml-3 mt-6 ${totalScore >= 80
                          ? 'text-green-400'
                          : totalScore >= 60
                            ? 'text-yellow-500'
                            : totalScore >= 40
                              ? 'text-orange-500'
                              : totalScore >= 20
                                ? 'text-red-500'
                                : totalScore >= 0 && totalScore <= 19
                                  ? 'text-blue-500'
                                  : '' // Set a default color or leave empty if needed
                          }`}
                      >
                        {totalScore}%
                      </span>
                    </div>
                  );
                } else {
                  // Handle the case where the totalScore is NaN or out of range
                  return (
                    <div key={index}>
                      <p className="text-sm font-roboto">Error: Invalid TotalScore</p>
                    </div>
                  );
                }
              })
            ) : (
              <p>No best students found.</p>
            )}
          </div>

          <div>
            <h1 className="text-sm text-gray-400 font-roboto">Week</h1>
            {bestStudents && bestStudents.length > 0 ? (
              bestStudents.map((student: any, index: number) => {
                // Split each student string into parts
                const studentParts = student.split(',');

                // Find the part that contains studentCurrentWeek
                const weekPart = studentParts.find((part: string | string[]) =>
                  part.includes('studentCurrentWeek')
                );

                // Extract the value of studentCurrentWeek
                const currentWeek = weekPart ? parseInt(weekPart.split(':')[1]) : null;

                return (
                  <div key={index} className="flex flex-col items-center mt-5">
                    <p className="text-sm text-gray-400 font-roboto">
                      {currentWeek !== null ? currentWeek : 'Week not available'}
                    </p>
                  </div>
                );
              })
            ) : (
              <p>No best students found.</p>
            )}
          </div>

        </div>
      ) : (
        <>
        <div className=" flex justify-center mb-0">
          <img src="/noBestStudent.jpg" alt="" className="w-64 h-60 mb-0" />
       
     
          </div>
          <p className="item text-center text-sm font-roboto ">No Best 5 Students In Your Batch </p>
             </>
      )}

    </div>
  );
}

export default BatchBestStudents;
