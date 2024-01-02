// SubTask.js
import React, { useState } from 'react';
import TaskModal from './TaskModal';

const SubTask = ({ weekName }: { weekName: string }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<{ Number: number; question: string } | null>(null);
  const [mainQuestionNumber,setMainQuestionNumber] = useState(0)

  const TechnicalWorkouts = [
    { Number: 1, question: 'Learn HTML, CSS by the end of this week.?' },
    { Number: 2, question: 'Design at least two public website’s home page using HTML & CSS with maximum components.(For Eg: Home page of LinkedIn)' },
  ];
  const nestedQuestion: any[] = [
    { Number: 1, question: 'write a short description end of this week?' },
    { Number: 2, question: 'Design at least two public websites home page using HTML & CSS with maximum components.(For Eg: Home page of LinkedIn)' },
    { Number: 3, question: 'how was the first week?' },
  ]

  const openModal = (questions: any,questionNumber: React.SetStateAction<number>) => {
  
    if(questions.length > 0){
        console.log(weekName,"pppppppppppppSubTask");
        console.log(questions);
        
        console.log(questionNumber,"pppppppppppppSubTask");
        setSelectedQuestion(questions);
        setMainQuestionNumber(questionNumber)
        setActiveModal(true);
    }
   
    }
  

  return (
    <div>
      {TechnicalWorkouts.map((question) => (
        <div key={question.Number} className="border border-2px m-9 border-b rounded-md shadow-xl data-collapse=collapse-1">
          <div className="m-7 border border-1px rounded-md shadow-xl border-black">
            <div className="flex justify-between m-2 items-center py-2">
              <div>
                <span>
                  {question.Number}. {question.question}
                </span>
              </div>
              <div>
                <button className="bg-red-700 rounded-md px-3 py-1 text-white" onClick={() => openModal(nestedQuestion,question.Number)}>
                  Complete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <TaskModal isVisible={activeModal} onclose={() => setActiveModal(false)} questions={[selectedQuestion]} mainQuestionNumber={mainQuestionNumber} weekName={weekName} />
    </div>
  );
      }
export default SubTask;
