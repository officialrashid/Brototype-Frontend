// TaskModal.js
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { updateMiscellaneousWorkout, updatePersonalWorkout, updateTechnicalWorkout } from '../../../utils/methods/post';
import { toast } from 'react-toastify';
import { getEditTaskDetails } from '../../../utils/methods/get';

interface TaskModalProps {
  isVisible: boolean;
  onclose: () => void;
  questions: any[] | null;
  mainQuestionNumber: number;
  weekName: string;
  taskNumber: number;
  modalType:string;
  taskType:string
}

interface FormValues {
  answers: Record<string, any>;
}

const TaskModal: React.FC<TaskModalProps> = ({ isVisible, onclose, questions, mainQuestionNumber, weekName, taskNumber,modalType,taskType }) => {
  if (!isVisible || !questions || questions.length === 0) return null;
  const [editData,setEditData] = useState([])
  const studentId: any = useSelector((state: any) => state?.student?.studentData?.studentId);
  const batchId = "657aa5093476c843c28a377d";
  useEffect(() => {
    const fetchEditTaskDetails = async () => {
      console.log(taskType, "task coming useEffect");
      console.log(modalType, "modal type useEffect");
  
      try {
        if (modalType === 'Edit') {
          const data = {
            studentId,
            mainQuestionNumber,
            taskType,
            weekName,
          };
          const response = await getEditTaskDetails(data);
          console.log(response.data[0]);
          if(response){
            setEditData(response.data[0])
          }else{
            setEditData([])
          }
         
        }
      } catch (error) {
        console.error("Error fetching edit task details:", error);
      }
    };
  
    // Invoke the function here
    fetchEditTaskDetails();
  }, []);  // <-- Make sure to pass an empty dependency array if you want it to run once on mount
  

  const updateWorkout = async (workoutType: any, workoutData: any) => {
    try {
      const response = await workoutType(workoutData);
      console.log(response, `${workoutType} update task response`);
      if (response && response?.response?.status === true) {
        toast.success("task updated successfully");
        onclose();
      } else {
        toast.error("some issue found task updated, please try again");
        onclose();
      }
    } catch (err) {
      console.error(`Error updating ${workoutType} workout:`, err);
    }
  };

  const formik = useFormik({
    initialValues: {
      answers: {},
    } as FormValues,

    onSubmit: async (values) => {
      try {
        console.log('Form values:', values);

        const workouts = Object.entries(values.answers).map(([nestedQuestionNumber, answer]) => ({
          nestedQuestionNumber,
          answer,
        }));

        console.log('Question and Answer pairs:', workouts);

        const body = {
          studentId,
          batchId,
          weekName,
          mainQuestionNumber,
          [`${taskNumber === 1 ? 'personal' : taskNumber === 2 ? 'technical' : 'miscellaneous'}Workouts`]: workouts,
        };

        console.log(body, "body log");

        if (taskNumber === 1) {
          updateWorkout(updatePersonalWorkout, body);
        } else if (taskNumber === 2) {
          console.log("fbhvbcxhbvhx");
          
          updateWorkout(updateTechnicalWorkout, body);
        } else if (taskNumber === 3) {
          updateWorkout(updateMiscellaneousWorkout, body);
        }

      } catch (err) {
        console.error('Error submitting form:', err);
      }
    },
  });

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>, questionNumber: string) => {
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
  {questions[0].map((question: any, index: number) =>
    question.mainQuestionNumber === mainQuestionNumber && (
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
          {editData && editData.length > index ? (
            <input
              type="text"
              id={question.Number}
              name={question.Number}
              onChange={(e) => handleQuestionChange(e, question.Number)}
              onBlur={formik.handleBlur}
              value={editData[index].answer || ''}
              className="border border-2px rounded-lg text-sm font-roboto pl-3 outline-none shadow-lg w-full py-5"
              placeholder={`Enter your answer for Question ${question.Number}`}
            />
          ) : (
            <input
              type="text"
              id={question.Number}
              name={question.Number}
              onChange={(e) => handleQuestionChange(e, question.Number)}
              onBlur={formik.handleBlur}
              value={formik.values.answers[question.Number] || ''}
              className="border border-2px rounded-lg text-sm font-roboto pl-3 outline-none shadow-lg w-full py-5"
              placeholder={`Enter your answer for Question ${question.Number}`}
            />
          )}
        </div>
      </div>
    )
  )}

  <div className="flex justify-between mr-12 m-6 gap">
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
