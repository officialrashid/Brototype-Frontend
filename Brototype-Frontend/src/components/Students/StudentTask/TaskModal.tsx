// TaskModal.js
import { useFormik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';


interface TaskModalProps {
  isVisible: boolean;
  onclose: () => void;
  questions: any[] | null;
  mainQuestionNumber: Number;
  weekName:String
}

interface FormValues {
  answers: Record<string, string>;
}

const TaskModal: React.FC<TaskModalProps> = ({ isVisible, onclose, questions, mainQuestionNumber,weekName }) => {
  if (!isVisible || !questions || questions.length === 0) return null;
  const studentId:any = useSelector((state: any) => state?.student?.studentData?.studentId);
  const batchId = "657aa5093476c843c28a377d";
  const formik = useFormik({
    initialValues: {
      answers: {},
    } as FormValues,

    onSubmit: async (values) => {
      try {
        console.log('Form values:', values);
 
        // Extract question numbers and answers
        const questionAnswers = Object.entries(values.answers).map(([nestedQuestionNumber, answer]) => ({
          nestedQuestionNumber,
          answer,
        }));
    
        console.log('Question and Answer pairs:', questionAnswers);
        const body = {
          studentId,
          batchId,
          weekName,
          mainQuestionNumber,
          questionAnswers
        }
        console.log(body,"body log comingggggggggggg");
        

        // After submitting, you might want to close the modal

      } catch (err) {
        console.error('Error submitting form:', err);
        // Handle the error, e.g., set an error state
      }
    },
  });

  // Function to handle onChange event for individual question input
  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>, questionNumber: string) => {
    // Save the answer to the formik state
    formik.setFieldValue(`answers.${questionNumber}`, e.target.value);
  };

  return (
    <div className="fixed inset-0 bg-opacity-10 bg-black/60 flex justify-center items-center overflow-y-scroll overflow-hidden z-40">
      <div className="border border-gray-200 m-5 rounded-lg shadow-2xl w-3/5 bg-white">
        <div className="flex justify-between">
          <div></div>
          <div className="mr-4 mt-4">
            <span></span>
          </div>
        </div>
        <div className="text-center">
          <div>
            <span className="font-semibold font-roboto text-md mb-2">Update Your Task</span>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          {questions[0].map((question: any) => (
            <div key={question.Number} className="m-5 mt-6">
              <div className="m-7 border border-black rounded-md shadow-2xl">
                <div className="flex justify-between items-center m-4">
                  <div>
                    <span className="font-bold font-roboto">
                      {question.Number}.{question.question}
                    </span>
                  </div>
                </div>
              </div>
              <div className="m-7 mt-6">
                <input
                  type="text"
                  id={question.Number}
                  name={question.Number}
                  onChange={(e) => handleQuestionChange(e, question.Number)}
                  onBlur={formik.handleBlur}
                  value={formik.values.answers[question.Number]}
                  className="border border-2px rounded-lg text-sm font-roboto pl-3 outline-none shadow-lg w-full py-5"
                  placeholder={`Enter your answer for Question ${question.Number}`}
                />
              </div>
            </div>
          ))}

          <div className="flex justify-between mr-12 m-6 gap ">
            <div></div>
            <div>
              <button className="border px-4 py-1 rounded-md bg-black text-white font-robot" onClick={onclose}>
                Cancel
              </button>
              <button type="submit" className="border px-4 py-1 rounded-md bg-black text-white font-roboto">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
