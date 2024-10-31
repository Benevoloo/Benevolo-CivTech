// import InterestButton from "./InterestsButton"

// const NeighborTasks = ({submittedTasks , setSubmittedTasks}) => {

//   // Function to handle deleting a task from the list
//   const handleDelete = (index) => {
//     const updatedTasks = submittedTasks.filter((_, i) => i !== index);
//     setSubmittedTasks(updatedTasks);
//   };



//   return (
//     <>
//         {submittedTasks.length === 0 ? (
//           <h3 className="text-green-950">No tasks submitted yet.</h3>
//         ) : (
//           <ul className="space-y-6">
//             {submittedTasks?.map((task, index) => (
//               <li key={index} task_id={task.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
//                 <div>
//                   <strong className="text-xl">{task.title}</strong>
//                   <p className="text-gray-700 mt-2">{task.body}</p>
//                   <div className="flex justify-end">
//                  </div>
//                   <p className="text-sky-500 italic mt-2">Expires on: {task.expiration_date}</p>
//                 </div>
//                 <InterestButton task_id={task.id}/>
//                 <button onClick={() => handleDelete(index)} className="mt-2 p-2 w-full bg-red-500 text-white rounded-lg hover:bg-red-600">
//                   Delete Task
//                 </button>
                
//               </li>
//             ))}
//           </ul>
//         )}
//     </>
//   )
// }

// export default NeighborTasks



import InterestButton from "./InterestsButton";
import { deleteTask } from "../adapters/task-adapter";

const NeighborTasks = ({ submittedTasks, setSubmittedTasks }) => {
  // Function to handle deleting a task from the list
  
  const handleDelete = (index) => {
    deleteTask()
    const updatedTasks = submittedTasks.filter((_, i) => i !== index);
    setSubmittedTasks(updatedTasks);
  };

  return (
    <>
      {submittedTasks.length === 0 ? (
        <h3 className="text-green-950">No tasks submitted yet.</h3>
      ) : (
        <ul className="space-y-6">
          {submittedTasks?.map((task, index) => (
            <li
              key={index}
              className="p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <div>
                <strong className="text-xl">{task.title}</strong>
                <p className="text-gray-700 mt-2">{task.body}</p>
                <p className="text-sky-500 italic mt-2">
                  Expires on: {task.expiration_date}
                </p>
              </div>
              <InterestButton task_id={task.id} />
              <button
                onClick={() => handleDelete(index)}
                className="mt-2 p-2 w-full bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete Task
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default NeighborTasks;