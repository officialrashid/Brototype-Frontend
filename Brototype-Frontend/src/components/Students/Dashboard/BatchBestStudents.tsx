import { useEffect, useState } from "react";
import { getBestFiveStudents } from "../../../utils/methods/get";

const BatchBestStudents = () => {
  const [bestStudents, setBestStudents] = useState([]);
  const students = [
    { id: 1, name: 'Rashid', profileImage: '/profile.jpeg', progress: 80, week: 28 },
    { id: 2, name: 'Ashish', profileImage: '/secondStudent.jpg', progress: 10, week: 20 },
    { id: 3, name: 'Reeja', profileImage: '/thirdStudent.jpg', progress: 35, week: 18 },
    { id: 4, name: 'shaheem', profileImage: '/profile.jpeg', progress: 45, week: 28 },
    { id: 5, name: 'abdu', profileImage: '/profile.jpeg', progress: 65, week: 24 },
  ];

  useEffect(() => {
    const fetchBestStudents = async () => {
      try {
        const batchId = "657aa5093476c843c28a377d";
        const response = await getBestFiveStudents(batchId);
        setBestStudents(response?.data.topStudents || []);
        console.log(response?.data.topStudents, "cbvhjvd");
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
      <div className="flex flex-row justify-between p-2 border-b mt-3">
        <div className="w-28">
          <h1 className="text-sm text-gray-400 font-roboto">Names</h1>
          {students.map((student) => (
            <div key={student.id} className="flex items-center">
              <img src={student.profileImage} alt={student.name} className="w-8 h-8 rounded-full mt-3" />
              <p className="text-sm text-gray-400 font-roboto ml-3 mt-3">{student.name}</p>
            </div>
          ))}
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
                    <p>Error: Invalid TotalScore</p>
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
          {students.map((student) => (
            <div key={student.id} className="flex flex-col items-center mt-5">
              <p className="text-sm text-gray-400 font-roboto">{student.week}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BatchBestStudents;
