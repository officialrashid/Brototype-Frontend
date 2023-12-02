
const BatchBestStudents = () => {
  const students = [
    { id: 1, name: 'Rashid', profileImage: '/profile.jpeg', progress: 80, week: 28 },
    { id: 2, name: 'Ashish', profileImage: '/secondStudent.jpg', progress: 10, week: 20 },
    { id: 3, name: 'Reeja', profileImage: '/thirdStudent.jpg', progress: 35, week: 18 },
    { id: 4, name: 'shaheem', profileImage: '/profile.jpeg', progress: 45, week: 28 },
    { id: 5, name: 'abdu', profileImage: '/profile.jpeg', progress: 65, week: 24 },
  ];
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
          {students.map((student) => (
            <div key={student.id} className="w-48 flex">
              <div className="w-36 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-8  ">
                <div
                  className={`h-1.5 rounded-full ${student.progress >= 80
                    ? 'bg-green-400'
                    : student.progress >= 60
                      ? 'bg-yellow-500'
                      : student.progress >= 40
                        ? 'bg-orange-500'
                        : student.progress >= 20
                          ? 'bg-red-500'
                          : student.progress >= 0 && student.progress <= 19
                            ? 'bg-blue-500'
                            : ''
                    }`}
                  style={{ width: `${student.progress}%` }}
                ></div>

              </div>
              <span
                className={`text-xs font-roboto ml-3 mt-6 ${student.progress >= 80
                  ? 'text-green-400'
                  : student.progress >= 60
                    ? 'text-yellow-500'
                    : student.progress >= 40
                      ? 'text-orange-500'
                      : student.progress >= 20
                        ? 'text-red-500'
                        : student.progress >= 0 && student.progress <= 19
                          ? 'text-blue-500'
                          : '' // Set a default color or leave empty if needed
                  }`}
              >
                {student.progress}%
              </span>
            </div>
          ))}
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
