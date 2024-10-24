import React, { useState } from "react";
import { makeTask } from "../adapters/task-adapter";
// import '../styles/index.css';
import Modal from "../components/Modal";

const NeighborTaskInputCard = () => {
  const [title, setTitle] = useState('');
  const [bio, setBio] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [submittedTasks, setSubmittedTasks] = useState([]);
  const [numOfPeople, setnumOfPeople] = useState(0);
  const [modalTask, setModalTask] = useState(null);


  // Function to handle the submission of a new task
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newTask1 = { title: title, body: bio, status: "waiting", created_at: "nfeuin", expiration_date: expirationDate, neighbor_id: 1 };
  //   const newTask2 = { title: title, body, expirationDate };
  //   const {status, created_at, expiration_date, neighbor_id} = newTask1
  //   setSubmittedTasks([...submittedTasks, newTask2]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: title,
      bio,
      expirationDate,
      numOfPeople: 0, // Initial value for interested helpers
      interestedHelpers: [], // Keeps track of the people interested in this task
    };
    setSubmittedTasks([...submittedTasks, newTask]);


    makeTask(title, body, zipcode, created_at, expiration_date, neighbor_id)

    setTitle('')
    setBio('');
    setExpirationDate('');
  };


  const handleTaskInterest = () => {
    const task = submittedTasks[index]
    setModalTask(task)
  }

  // Function to handle deleting a task from the list
  const handleDelete = (index) => {
    const updatedTasks = submittedTasks.filter((_, i) => i !== index);
    setSubmittedTasks(updatedTasks);
  };

  const closeModal = () => {
    setModalTask(null)
  }

  // const handleTaskInterest = () => {
  //   const interestTask = 
  // }

  return (
    <div className="flex justify-between p-6 bg-green-100 min-h-screen">
      {/* left side - task submission form */}
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Post a Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-medium mb-1">Task Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          
          <div>
            <label className="block text-lg font-medium mb-1">Description:</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1">Expiration Date:</label>
            <input
              type="date"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <button type="submit" className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">
            Post Task
          </button>
        </form>
      </div>

      {/* Right Side showing the submitted tasks list */}
      <div className="w-1/2 pl-6 border-l border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Your Submitted Tasks</h2>
        {submittedTasks.length === 0 ? (
          <h3 className="text-green-950">No tasks submitted yet.</h3>
        ) : (
          <ul className="space-y-6">
            {submittedTasks.map((task, index) => (
              <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                <div>
                  <strong className="text-xl">{task.title}</strong>
                  <p className="text-gray-700 mt-2">{task.bio}</p>
                  <div className="flex justify-end">
                 </div>
                  <p className="text-sky-500 italic mt-2">Expires on: {task.expiration_date}</p>
                </div>
                <button onClick={() => handleTaskInterest(index)} className="mt-5 w-full bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                {numOfPeople} helpers interested
                </button>
                  {/* <button onClick={() => handleTaskInterest(index)} className="w-36 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                    {numOfPeople} helpers interested
                  </button> */}

                <button onClick={() => handleDelete(index)} className="mt-2 p-2 w-full bg-red-500 text-white rounded-lg hover:bg-red-600">
                  Delete Task
                </button>
                
              </li>
            ))}
          </ul>
        )}
      </div>
       {/* Modal Component */}
      {modalTask && (
        <Modal closeModal={closeModal} task={modalTask} />
      )}
    </div>
    
  );

};

export default NeighborTaskInputCard;
