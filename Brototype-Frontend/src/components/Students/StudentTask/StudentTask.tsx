import { useState, useEffect } from 'react';
import SubTask from './SubTask';
import { useLocation } from 'react-router-dom';
import { getUpdateTask } from '../../../utils/methods/get';
import { useSelector } from 'react-redux';

const StudentTask = () => {
  const [personalWorkoutCompleted, setpersonalWorkoutCompleted] = useState(false)
  const [technicalWorkoutCompleted, setTechnicalWorkoutCompleted] = useState(false)
  const [miscellaneousWorkoutCompleted, setMiscellaneousWorkoutCompleted] = useState(false)
  const studentId: any = useSelector((state: any) => state?.student?.studentData?.studentId);
  const [activeSubTask, setActiveSubTask] = useState(0);
  const location = useLocation();
  const weekName = location.state && location.state.weekName;
  const PersonalWorkouts = [
    { Number: 1, question: 'create vision board.?' },
    { Number: 2, question: 'Design at least two public website’s home page using HTML & CSS with maximum components.(For Eg: Home page of LinkedIn)' },
  ];
  const personalWorkoutsNestedQuestion: any[] = [
    { Number: 1, question: 'write a short description in vision board?', mainQuestionNumber: 1 },
    { Number: 2, question: 'Design at least two public websites home page using HTML & CSS with maximum components.(For Eg: Home page of LinkedIn)', mainQuestionNumber: 1 },
    { Number: 3, question: 'how was the first week?', mainQuestionNumber: 1 },
    { Number: 1, question: 'write a short description in  html css?', mainQuestionNumber: 2 },
    { Number: 2, question: 'Design at least two public websites home page ', mainQuestionNumber: 2 },
    { Number: 3, question: 'how was the first week?', mainQuestionNumber: 2 },
  ]
  const TechnicalWorkouts = [
    { Number: 1, question: 'Learn HTML, CSS by the end of this week.?' },
    { Number: 2, question: 'Design at least two public website’s home page using HTML & CSS with maximum components.(For Eg: Home page of LinkedIn)' },
  ];
  const technicalWorkoutsNestedQuestion: any[] = [
    { Number: 1, question: 'write a short description in vision board?', mainQuestionNumber: 1 },
    { Number: 2, question: 'Design at least two public websites home page using HTML & CSS with maximum components.(For Eg: Home page of LinkedIn)', mainQuestionNumber: 1 },
    { Number: 3, question: 'how was the first week?', mainQuestionNumber: 1 },
    { Number: 1, question: 'write a short description in  html css?', mainQuestionNumber: 2 },
    { Number: 2, question: 'Design at least two public websites home page ', mainQuestionNumber: 2 },
    { Number: 3, question: 'how was the first week?', mainQuestionNumber: 2 },
  ]
  const MiscellaneousWorkouts = [
    { Number: 1, question: 'typing task complete 10 .?' },
    { Number: 2, question: 'Design at least two public website’s home page using HTML & CSS with maximum components.(For Eg: Home page of LinkedIn)' },
  ];
  const MiscellaneousWorkoutssNestedQuestion: any[] = [
    { Number: 1, question: 'write a short description in vision board?', mainQuestionNumber: 1 },
    { Number: 2, question: 'Design at least two public websites home page using HTML & CSS with maximum components.(For Eg: Home page of LinkedIn)', mainQuestionNumber: 1 },
    { Number: 3, question: 'how was the first week?', mainQuestionNumber: 1 },
    { Number: 1, question: 'write a short description in  html css?', mainQuestionNumber: 2 },
    { Number: 2, question: 'Design at least two public websites home page ', mainQuestionNumber: 2 },
    { Number: 3, question: 'how was the first week?', mainQuestionNumber: 2 },
  ]
  useEffect(() => {
    const fetchUpdateTask = async () => {
      try {
        const response = await getUpdateTask(studentId)
        const personalWorkoutsArray = response.response[0]?.personalWorkouts || [];
        // Initialize a variable to store the total length
        let totalQuestionNumbersAndAnswersLength = 0;
        personalWorkoutsArray.forEach((personalWorkout: { questionNumbersAndAnswers: { length: number; }[]; }) => {
          const questionNumbersAndAnswersArray = personalWorkout?.questionNumbersAndAnswers || [];
          const questionNumbersAndAnswersLength = questionNumbersAndAnswersArray.length;
          totalQuestionNumbersAndAnswersLength += questionNumbersAndAnswersLength;
        });
        const technicalWorkoutsArray = response.response[0]?.technicalWorkouts || [];
        // Initialize a variable to store the total length
        let totalTechnicalQuestionNumbersAndAnswersLength = 0;
        technicalWorkoutsArray.forEach((technicalWorkout: { questionNumbersAndAnswers: { length: number; }[]; }) => {
          const questionNumbersAndAnswersArray = technicalWorkout?.questionNumbersAndAnswers || [];
          const questionNumbersAndAnswersLength = questionNumbersAndAnswersArray.length;
          totalTechnicalQuestionNumbersAndAnswersLength += questionNumbersAndAnswersLength;
        });
        const miscellaneousWorkoutsArray = response.response[0]?.miscellaneousWorkouts || [];
        // Initialize a variable to store the total length
        let totalMiscellaneousQuestionNumbersAndAnswersLength = 0;
        miscellaneousWorkoutsArray.forEach((miscellaneousWorkout: { questionNumbersAndAnswers: { length: number; }[]; }) => {
          const questionNumbersAndAnswersArray = miscellaneousWorkout?.questionNumbersAndAnswers || [];
          const questionNumbersAndAnswersLength = questionNumbersAndAnswersArray.length;
          totalMiscellaneousQuestionNumbersAndAnswersLength += questionNumbersAndAnswersLength;
        });
        if (PersonalWorkouts.length === response.response[0]?.personalWorkouts.length && personalWorkoutsNestedQuestion.length === totalQuestionNumbersAndAnswersLength) {
          setpersonalWorkoutCompleted(true)
        }
        if (MiscellaneousWorkouts.length === response.response[0].miscellaneousWorkouts.length && MiscellaneousWorkoutssNestedQuestion.length === totalMiscellaneousQuestionNumbersAndAnswersLength) {
          setMiscellaneousWorkoutCompleted(true)
        }
        if (TechnicalWorkouts.length === response.response[0].technicalWorkouts.length && technicalWorkoutsNestedQuestion.length === totalTechnicalQuestionNumbersAndAnswersLength) {
          setTechnicalWorkoutCompleted(true)
        }
      } catch (err) {

      }
    }
    fetchUpdateTask()
  }, [])

  return (
    <>
      <h1 className='text-white'>hello</h1>
      <div className="m-4 bg-white  border border-gray-300 rounded-md shadow-lg personal-workout relative">

        <div className="flex justify-between items-center m-4 ">
          <div>
            <span className="font-bold font-roboto">Personal workouts</span>
          </div>
          <div className="flex gap-3">
            {personalWorkoutCompleted ? (
              <div>
                {/* Rendered when 'completed' is true */}
                <img src="/check.png" alt="" className='w-9 h-9' />
              </div>
            ) : (
              <div>
                {/* Rendered when 'completed' is true */}
                <svg
                  className="h-8 w-8 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
            )}

            <div className="data-colllapse-target= collapse-1">
              <svg
                className="w-8 h-8"
                onClick={() => {
                  setActiveSubTask(1);
                }}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g data-name="Layer 2" id="Layer_2">
                  <path d="M16,1A15,15,0,1,1,1,16,15,15,0,0,1,16,1Zm0,28A13,13,0,1,0,3,16,13,13,0,0,0,16,29Z" />
                  <path d="M10.41,12.13,16,17.71l5.59-5.58a1,1,0,0,1,1.41,0h0a1,1,0,0,1,0,1.41L16.64,19.9a.91.91,0,0,1-1.28,0L9,13.54a1,1,0,0,1,0-1.41H9A1,1,0,0,1,10.41,12.13Z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {activeSubTask === 1 ? <SubTask weekName={weekName} taskNumber={activeSubTask} /> : ''}

      <div className="m-4 bg-white mt-2 border border-gray-300 rounded-md shadow-lg ">
        <div className="flex  justify-between items-center m-4">


          <div> <span className="font-bold font-roboto">Technical Workouts</span> </div>
          <div className="flex gap-3">
          {technicalWorkoutCompleted ? (
              <div>
                {/* Rendered when 'completed' is true */}
                <img src="/check.png" alt="" className='w-9 h-9' />
              </div>
            ) : (
              <div>
                {/* Rendered when 'completed' is true */}
                <svg
                  className="h-8 w-8 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
            )}

            <div className="data-colllapse-target= collapse-1" >


              <svg onClick={() => { setActiveSubTask(2) }} className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="Layer 2" id="Layer_2"><path d="M16,1A15,15,0,1,1,1,16,15,15,0,0,1,16,1Zm0,28A13,13,0,1,0,3,16,13,13,0,0,0,16,29Z" /><path d="M10.41,12.13,16,17.71l5.59-5.58a1,1,0,0,1,1.41,0h0a1,1,0,0,1,0,1.41L16.64,19.9a.91.91,0,0,1-1.28,0L9,13.54a1,1,0,0,1,0-1.41H9A1,1,0,0,1,10.41,12.13Z" /></g></svg>
            </div>


          </div>
        </div>

      </div>
      {activeSubTask === 2 ? <SubTask weekName={weekName} taskNumber={activeSubTask} /> : ''}
      <div className="m-4 bg-white mt-2 border border-gray-300 rounded-md shadow-lg ">
        <div className="flex  justify-between items-center m-4">


          <div> <span className="font-bold font-roboto">Miscellaneous Workouts</span> </div>
          <div className="flex gap-3">
          {miscellaneousWorkoutCompleted ? (
              <div>
                {/* Rendered when 'completed' is true */}
                <img src="/check.png" alt="" className='w-9 h-9' />
              </div>
            ) : (
              <div>
                {/* Rendered when 'completed' is true */}
                <svg
                  className="h-8 w-8 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
            )}

            <div className="data-colllapse-target= collapse-1">


              <svg onClick={() => { setActiveSubTask(3) }} className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="Layer 2" id="Layer_2"><path d="M16,1A15,15,0,1,1,1,16,15,15,0,0,1,16,1Zm0,28A13,13,0,1,0,3,16,13,13,0,0,0,16,29Z" /><path d="M10.41,12.13,16,17.71l5.59-5.58a1,1,0,0,1,1.41,0h0a1,1,0,0,1,0,1.41L16.64,19.9a.91.91,0,0,1-1.28,0L9,13.54a1,1,0,0,1,0-1.41H9A1,1,0,0,1,10.41,12.13Z" /></g></svg>
            </div>


          </div>
        </div>

      </div>
      {activeSubTask === 3 ? <SubTask weekName={weekName} taskNumber={activeSubTask} /> : ''}
    </>
  );
};

export default StudentTask;


