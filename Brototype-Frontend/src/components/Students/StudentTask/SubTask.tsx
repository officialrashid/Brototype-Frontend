// SubTask.js
import React, { useState, useEffect } from 'react';
import TaskModal from './TaskModal';
import { getUpdateTask } from '../../../utils/methods/get';
import { useSelector } from 'react-redux';

const SubTask = ({ weekName, taskNumber }: { weekName: string, taskNumber: Number }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<{ Number: number; question: string } | null>(null);
  const [mainQuestionNumber, setMainQuestionNumber] = useState(0);
  const [personalWorkoutCompleted, setPersonalWorkoutCompleted] = useState(false);
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

  const openModal = (questions: any, questionNumber: React.SetStateAction<number>) => {
    if (questions.length > 0) {
      setSelectedQuestion(questions);
      setMainQuestionNumber(questionNumber);
      setActiveModal(true);
    }
  };

  useEffect(() => {
    const fetchUpdateTask = async () => {
      try {
        const response = await getUpdateTask(studentId);

        const mainQuestionCompleted = (mainQuestionNumber: number, workoutsArray: any[]) => {
          const mainQuestionWorkouts = workoutsArray.filter(workout => workout.mainQuestionNumber === mainQuestionNumber);
          return mainQuestionWorkouts.length === PersonalWorkouts.length;
        };
        console.log(mainQuestionCompleted,"pppppppppppppp");
        
        const personalWorkoutsArray = response.response[0]?.personalWorkouts || [];
        const technicalWorkoutsArray = response.response[0]?.technicalWorkouts || [];
        const miscellaneousWorkoutsArray = response.response[0]?.miscellaneousWorkouts || [];

        setPersonalWorkoutCompleted(PersonalWorkouts.length === personalWorkoutsArray.length && mainQuestionCompleted(1, personalWorkoutsArray));
        // Update the mainQuestionCompleted argument for technical and miscellaneous workouts
        setTechnicalWorkoutCompleted(TechnicalWorkouts.length === technicalWorkoutsArray.length && mainQuestionCompleted(2, technicalWorkoutsArray));
        setMiscellaneousWorkoutCompleted(MiscellaneousWorkouts.length === miscellaneousWorkoutsArray.length && mainQuestionCompleted(1, miscellaneousWorkoutsArray));
      } catch (err) {
        // Handle errors
      }
    };

    fetchUpdateTask();
  }, []);

  const renderWorkouts = (workouts: any[], nestedQuestions: any[]) => {
    return (
      <div>
        {workouts.map((question) => (
          <div key={question.Number} className="border border-2px m-9 border-b rounded-md shadow-xl data-collapse=collapse-1">
            <div className="m-7 border border-1px rounded-md shadow-xl border-black">
              <div className="flex justify-between m-2 items-center py-2">
                <div>
                  <span>
                    {question.Number}. {question.question}
                  </span>
                </div>
                <div>
                  <button className={`bg-${personalWorkoutCompleted ? 'blue' : 'red'}-700 rounded-md px-3 py-1 text-white`} onClick={() => openModal(nestedQuestions, question.Number)}>
                    {personalWorkoutCompleted ? 'Edit' : 'Complete'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <TaskModal isVisible={activeModal} onclose={() => setActiveModal(false)} questions={[selectedQuestion]} mainQuestionNumber={mainQuestionNumber} weekName={weekName} taskNumber={taskNumber} />
      </div>
    );
  };

  return (
    <div>
      {taskNumber === 1 && renderWorkouts(PersonalWorkouts, personalWorkoutsNestedQuestion)}
      {taskNumber === 2 && renderWorkouts(TechnicalWorkouts, technicalWorkoutsNestedQuestion)}
      {taskNumber === 3 && renderWorkouts(MiscellaneousWorkouts, MiscellaneousWorkoutssNestedQuestion)}
    </div>
  );
};

export  default  SubTask ;
