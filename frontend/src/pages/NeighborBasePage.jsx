// import React, { useEffect, useState, useContext } from "react";
// import { makeTask, getOwnTasks, checkForInterest } from "../adapters/task-adapter";
// import { checkForLoggedInUser } from "../adapters/auth-adapter";
// import CurrentUserContext from "../contexts/current-user-context";
// import NeighborTasks from "../components/NeighborTask";

// // import '../styles/index.css';
// import Modal from "../components/Modal";

// const NeighborTaskInputCard = () => {
//   const [submittedTasks, setSubmittedTasks] = useState([]);
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const [expiration_date, setExpiration_date] = useState('');
//   const [numOfPeople, setnumOfPeople] = useState(0);
//   const [modalTask, setModalTask] = useState(null);
//   const [neighborId, setNeighborId] = useState()
//   const [zipcode, setZipcode] = useState();
//   const { currentUser, setCurrentUser } = useContext(CurrentUserContext);


//   // console.log(currentUser.id)

//   // const { id } = currentUser

//   // console.log(id)

//   useEffect(() => {
//     const doFetch = async () => {
//       const me = await checkForLoggedInUser()
//       if(me){
//         setNeighborId(me.id);
//         setZipcode(me.zipcode)
//       }
//     }
//     doFetch();
//   },[])
  

//   const yourTasks = async (neighborId) => {
//     const [data, error] = await getOwnTasks(neighborId);
//     if (error) {
//       console.error('Error fetching tasks:', error);
//     } else {
//       console.log('Your tasks:', data);
//       return data
//     }
//   };

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         if(neighborId){
//           let neighborTasks = await yourTasks(neighborId);
//           setSubmittedTasks(neighborTasks);
//         } else(
//           console.warn('No neighbor Id')
//         )
//       } catch (error) {
//         console.error('Error fetching tasks on load:', error);
//       }
//     };

//     fetchTasks();
//   }, [currentUser, neighborId]); 
  

//   // Function to handle the submission of a new task
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     makeTask(title, body, zipcode, "waiting", expiration_date, neighborId)

//     setTitle('');
//     setBody('');
//     setExpiration_date('');

//     let neighborTasks = await yourTasks(neighborId)

//     setSubmittedTasks(neighborTasks)

//     console.log(currentUser)
    
//   };


//   // const handleTaskInterest = () => {
    
//   // }

//   const closeModal = () => {
//     setModalTask(null)
//   }

//   // const handleTaskInterest = () => {
//   //   const interestTask = 
//   // }

//   return (
//     <div className="flex justify-between p-6 bg-green-100 min-h-screen">
//       {/* left side - task submission form */}
//       <div className="w-1/2 p-4">
//         <h2 className="text-2xl font-bold mb-4">Post a Task</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-lg font-medium mb-1">Task Title:</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg"
//             />
//           </div>
          
//           <div>
//             <label className="block text-lg font-medium mb-1">Description:</label>
//             <textarea
//               value={body}
//               onChange={(e) => setBody(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <div>
//             <label className="block text-lg font-medium mb-1">Expiration Date:</label>
//             <input
//               type="date"
//               value={expiration_date}
//               onChange={(e) => setExpiration_date(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <button type="submit" className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
//             Post Task
//           </button>
//         </form>
//       </div>

//       {/* Right Side showing the submitted tasks list */}
//       <div className="w-1/2 pl-6 border-l border-gray-300">
//         <h2 className="text-2xl font-bold mb-4">Your Submitted Tasks</h2>
//         <NeighborTasks submittedTasks={submittedTasks} setSubmittedTasks={setSubmittedTasks}/>
//         {/*{submittedTasks.length === 0 ? (
//           <h3 className="text-green-950">No tasks submitted yet.</h3>
//         ) : (
//           <ul className="space-y-6">
//             {submittedTasks.map((task, index) => (
//               <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
//                 <div>
//                   <strong className="text-xl">{task.title}</strong>
//                   <p className="text-gray-700 mt-2">{task.body}</p>
//                   <div className="flex justify-end">
//                  </div>
//                   <p className="text-sky-500 italic mt-2">Expires on: {task.expiration_date}</p>
//                 </div>
//                 <button onClick={() => handleTaskInterest(index)} className="mt-5 w-full bg-orange-600 text-white rounded-lg hover:bg-orange-700">
//                 {numOfPeople} helpers interested
//                 </button>

//                 <button onClick={() => handleDelete(index)} className="mt-2 p-2 w-full bg-red-500 text-white rounded-lg hover:bg-red-600">
//                   Delete Task
//                 </button>
                
//               </li>
//             ))}
//           </ul>
//         )}*/}
//       </div>
//        {/* Modal Component */}
//       {modalTask && (
//         <Modal closeModal={closeModal} task={modalTask} />
//       )}
//     </div>
    
//   );

// };

// export default NeighborTaskInputCard;


// src/pages/NeighborBasePage.jsx

// import React, { useEffect, useState, useContext } from "react";
// import { makeTask, getOwnTasks } from "../adapters/task-adapter";
// import { checkForLoggedInUser } from "../adapters/auth-adapter";
// import CurrentUserContext from "../contexts/current-user-context";
// import NeighborTasks from "../components/NeighborTask";
// import Modal from "../components/Modal";

// const NeighborTaskInputCard = () => {
//   const [submittedTasks, setSubmittedTasks] = useState([]);
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const [expiration_date, setExpiration_date] = useState('');
//   const [neighborId, setNeighborId] = useState();
//   const [zipcode, setZipcode] = useState();
//   const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
//   const [modalTask, setModalTask] = useState(null);

//   useEffect(() => {
//     const doFetch = async () => {
//       const me = await checkForLoggedInUser();
//       if (me) {
//         setNeighborId(me.id);
//         setZipcode(me.zipcode);
//       }
//     };
//     doFetch();
//   }, []);

//   const yourTasks = async (neighborId) => {
//     const [data, error] = await getOwnTasks(neighborId);
//     if (error) {
//       console.error("Error fetching tasks:", error);
//     } else {
//       return data;
//     }
//   };

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         if (neighborId) {
//           let neighborTasks = await yourTasks(neighborId);
//           setSubmittedTasks(neighborTasks);
//         } else {
//           console.warn("No neighbor Id");
//         }
//       } catch (error) {
//         console.error("Error fetching tasks on load:", error);
//       }
//     };

//     fetchTasks();
//   }, [neighborId]);

//   // Function to handle the submission of a new task
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await makeTask(title, body, zipcode, null, expiration_date, neighborId);

//     setTitle('');
//     setBody('');
//     setExpiration_date('');

//     let neighborTasks = await yourTasks(neighborId);
//     setSubmittedTasks(neighborTasks);
//   };

//   return (
//     <div className="flex justify-between p-6 bg-green-100 min-h-screen">
//       {/* left side - task submission form */}
//       <div className="w-1/2 p-4">
//         <h2 className="text-2xl font-bold mb-4">Post a Task</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-lg font-medium mb-1">Task Title:</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <div>
//             <label className="block text-lg font-medium mb-1">Description:</label>
//             <textarea
//               value={body}
//               onChange={(e) => setBody(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <div>
//             <label className="block text-lg font-medium mb-1">Expiration Date:</label>
//             <input
//               type="date"
//               value={expiration_date}
//               onChange={(e) => setExpiration_date(e.target.value)}
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <button type="submit" className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
//             Post Task
//           </button>
//         </form>
//       </div>

//       {/* Right Side showing the submitted tasks list */}
//       <div className="w-1/2 pl-6 border-l border-gray-300">
//         <h2 className="text-2xl font-bold mb-4">Your Submitted Tasks</h2>
//         <NeighborTasks submittedTasks={submittedTasks} setSubmittedTasks={setSubmittedTasks} />
//       </div>

//         {modalTask && (
//         <Modal closeModal={closeModal} task={modalTask} />
//       )}
//     </div>
//   );
// };

// export default NeighborTaskInputCard;















import React, { useEffect, useState, useContext } from "react";
import { makeTask, getOwnTasks } from "../adapters/task-adapter";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import NeighborTasks from "../components/NeighborTask";
import Modal from "../components/Modal";

const NeighborTaskInputCard = () => {
  const [submittedTasks, setSubmittedTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [expiration_date, setExpiration_date] = useState('');
  const [neighborId, setNeighborId] = useState();
  const [zipcode, setZipcode] = useState();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [modalTask, setModalTask] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const me = await checkForLoggedInUser();
      if (me) {
        setNeighborId(me.id);
        setZipcode(me.zipcode);
      }
    };
    doFetch();
  }, []);

  const yourTasks = async (neighborId) => {
    const [data, error] = await getOwnTasks(neighborId);
    if (error) {
      console.error("Error fetching tasks:", error);
    } else {
      return data || [];
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (neighborId) {
          let neighborTasks = await yourTasks(neighborId);
          setSubmittedTasks(neighborTasks);
        } else {
          console.warn("No neighbor Id");
        }
      } catch (error) {
        console.error("Error fetching tasks on load:", error);
      }
    };

    fetchTasks();
  }, [neighborId]);

  // Function to handle the submission of a new task
  const handleSubmit = async (e) => {
    e.preventDefault();

    await makeTask(title, body, zipcode, null, expiration_date, neighborId);

    setTitle('');
    setBody('');
    setExpiration_date('');

    let neighborTasks = await yourTasks(neighborId);
    setSubmittedTasks(neighborTasks);
  };

  return (
    <div className="flex justify-between p-6 bg-[#E6F2F1] min-h-screen">
      {/* left side - task submission form */}
      <div className="w-1/2 p-4 bg-[#F1F5F9] border border-[#DDDDDD] rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-[#16514E]">Post a Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-medium mb-1 text-[#1B3C40]">Task Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-3 border border-[#4D805A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495071]"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1 text-[#1B3C40]">Description:</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              className="w-full p-3 border border-[#4D805A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495071]"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1 text-[#1B3C40]">Expiration Date:</label>
            <input
              type="date"
              value={expiration_date}
              onChange={(e) => setExpiration_date(e.target.value)}
              required
              className="w-full p-3 border border-[#4D805A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#495071]"
            />
          </div>

          <button type="submit" className="w-full p-3 bg-[#495071] text-white font-bold rounded-lg hover:bg-[#4D805A]">
            Post Task
          </button>
        </form>
      </div>

      {/* Right Side showing the submitted tasks list */}
      <div className="w-1/2 pl-6 border-l border-[#DDDDDD]">
        <h2 className="text-2xl font-bold mb-4 text-[#16514E]">Your Submitted Tasks</h2>
        <NeighborTasks submittedTasks={submittedTasks} setSubmittedTasks={setSubmittedTasks} />
      </div>

      {modalTask && (
        <Modal closeModal={closeModal} task={modalTask} />
      )}
    </div>
  );
};

export default NeighborTaskInputCard;
