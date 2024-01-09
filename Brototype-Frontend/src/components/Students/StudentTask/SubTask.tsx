// SubTask.js
import React, { useState, useEffect } from 'react';
import TaskModal from './TaskModal';
import { getUpdateTask } from '../../../utils/methods/get';
import { useSelector } from 'react-redux';

const SubTask = ({ weekName, taskNumber }: { weekName: string, taskNumber: Number }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<{ Number: number; question: string } | null>(null);
  const [mainQuestionNumber, setMainQuestionNumber] = useState(0);
  const [modalType,setModalType] = useState("")
  const [answerCount, setAnswerCount] = useState<any[]>([]);
  let personalWorkoutsArray;
  let technicalWorkoutsArray;
  let miscellaneousWorkoutsArray
  const studentId: any = useSelector((state: any) => state?.student?.studentData?.studentId);

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
  ];

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
  ];

  const MiscellaneousWorkouts = [
    { Number: 1, question: 'typing task complete 10 .?' },
    { Number: 2, question: 'Design at least two public website’s home page using HTML & CSS with maximum components.(For Eg: Home page of LinkedIn)' },
  ];

  const MiscellaneousWorkoutssNestedQuestion: any[] = [
    { Number: 1, question: 'write a short description in vision board?', mainQuestionNumber: 1 },
    { Number: 2, question: 'Design at least two public websites home page using HTML & CSS with maximum components.(For Eg: Home page of LinkedIn)', mainQuestionNumber: 1 },
    { Number: 3, question: 'how was the first week?', mainQuestionNumber: 1 },
    { Number: 1, question: 'write a short description in  javascript?', mainQuestionNumber: 2 },
    { Number: 2, question: 'Design at least two public websites home page ', mainQuestionNumber: 2 },
    { Number: 3, question: 'how was the first week?', mainQuestionNumber: 2 },
  ];

  const openModal = (questions: any, questionNumber: React.SetStateAction<number>, modalType:string ) => {
    if (questions.length > 0) {
      setSelectedQuestion(questions);
      setMainQuestionNumber(questionNumber);
      setModalType(modalType)
      setActiveModal(true);
    }
  };

  useEffect(() => {
    const fetchUpdateTask = async () => {
      try {
        const response = await getUpdateTask(studentId);
        personalWorkoutsArray = response.response[0].personalWorkouts;
        technicalWorkoutsArray = response.response[0].technicalWorkouts;
        miscellaneousWorkoutsArray = response.response[0].miscellaneousWorkouts;
        if (taskNumber === 1) {
          setAnswerCount(personalWorkoutsArray);
        } else if (taskNumber === 2) {
          setAnswerCount(technicalWorkoutsArray);
        } else if (taskNumber === 3) {
          setAnswerCount(miscellaneousWorkoutsArray)
        }


      } catch (err) {
        // Handle errors
      }
    };

    fetchUpdateTask();
  }, [studentId, taskNumber]);

  const renderWorkouts = (workouts: any[], nestedQuestions: any[],taskType:string) => {
    return (
      <div>
        {workouts.map((question) => {
          // Find the corresponding nested questions for the current main question
          const currentNestedQuestions = nestedQuestions.filter(nested => nested.mainQuestionNumber === question.Number);

          // Find the answers for the current main question
          const currentAnswers = answerCount.find(answer => answer.mainQuestionNumber === question.Number);

          // Count the number of nested questions for the current main question
          const currentNestedQuestionCount = currentNestedQuestions.length;

          // Count the number of answers for the current main question
          const currentAnswerCount = currentAnswers ? currentAnswers.questionNumbersAndAnswers.length : 0;
          console.log(currentNestedQuestionCount, "nestedQuestionCount");
          console.log(currentAnswerCount, "ansercount");
          const mainQuestionNumberFromAnswers = currentAnswers?.mainQuestionNumber;
      
          return (
            <div key={question.Number} className="border border-2px m-9 border-b rounded-md shadow-xl data-collapse=collapse-1 font-roboto">
              <div className="m-7 border border-1px rounded-md shadow-xl border-black">
                <div className="flex justify-between m-2 items-center py-2">
                  <div>
                    <span className='font-roboto"'>
                      {question.Number}. {question.question}
                    </span>
                  </div>
                  <div>
                    {currentNestedQuestionCount === currentAnswerCount ? (
                      <button className={`bg-blue-700 rounded-md px-3 py-1 text-white`} onClick={() => openModal(currentNestedQuestions, question.Number,'Edit')}>
                        Edit
                      </button>
                    ) : (
                      <button className={`bg-red-700 rounded-md px-3 py-1 text-white`} onClick={() => openModal(currentNestedQuestions, question.Number,'Complete')}>
                        Complete
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <TaskModal isVisible={activeModal} onclose={() => setActiveModal(false)} questions={selectedQuestion ? [selectedQuestion] : []} mainQuestionNumber={mainQuestionNumber} weekName={weekName} taskNumber={taskNumber} modalType={modalType} taskType={taskType} />
      </div>
    );
  };




  return (
    <div>

      {taskNumber === 1 && renderWorkouts(PersonalWorkouts, personalWorkoutsNestedQuestion,'personal')}
      {taskNumber === 2 && renderWorkouts(TechnicalWorkouts, technicalWorkoutsNestedQuestion,'technical')}
      {taskNumber === 3 && renderWorkouts(MiscellaneousWorkouts, MiscellaneousWorkoutssNestedQuestion,'miscellaneous')}
    </div>
  );
};

export default SubTask;


