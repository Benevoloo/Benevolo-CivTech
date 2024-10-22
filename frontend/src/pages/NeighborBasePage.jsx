import React, { useState } from "react";
import '../styles/index.css';

const NeighborTaskInputCard = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [submittedTasks, setSubmittedTasks] = useState([]);
  const [numOfPeople, setnumOfPeople] = useState(0);

  // Function to handle the submission of a new task
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title: taskTitle, description, expirationDate };
    setSubmittedTasks([...submittedTasks, newTask]);

    setTaskTitle('');
    setDescription('');
    setExpirationDate('');
  };

  // Function to handle deleting a task from the list
  const handleDelete = (index) => {
    const updatedTasks = submittedTasks.filter((_, i) => i !== index);
    setSubmittedTasks(updatedTasks);
  };

  return (
    <div className="flex justify-between p-6 bg-green-100 min-h-screen">
      {/* Left Side - Task Submission Form */}
      <div className="w-1/2 p-3">
        <h2 className="text-2xl font-bold mb-4">Post a Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-medium mb-1">Task Title:</label>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          
          <div>
            <label className="block text-lg font-medium mb-1">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
            Submit Task
          </button>
        </form>
      </div>

      {/* Right Side - Submitted Tasks List */}
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
                  <p className="text-gray-700 mt-2">{task.description}</p>
                  <p className="text-brown-500 italic mt-2">Expires on: {task.expirationDate}</p>
                </div>
                <button onClick={() => handleDelete(index)} className="mt-4 p-2 w-full bg-red-500 text-white rounded-lg hover:bg-red-600">
                  Delete Task
                </button>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-6">{numOfPeople} people interested</p>
      </div>
    </div>
    
  );
};

export default NeighborTaskInputCard;
