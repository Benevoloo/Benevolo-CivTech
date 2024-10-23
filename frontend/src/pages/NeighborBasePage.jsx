import React from "react";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import '../styles/index.css'


const NeighborTaskInputCard = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [submittedTasks, setSubmittedTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title: taskTitle, description, expirationDate }
    setSubmittedTasks([...submittedTasks, newTask])

    setTaskTitle('')
    setDescription('')
    setExpirationDate('')
  }

  return (<>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      {/* Left Side - Task Submission Form */}
      <div style={{ width: '40%', paddingRight: '20px' }}>
        <h2>Post a Task</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Task Title:</label>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <div>
            <label>Expiration Date:</label>
            <input
              type="date"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px', width: '100%' }}>
            Submit Task
          </button>
        </form>
      </div>

      {/* Right Side - Submitted Tasks List */}
      <div style={{ width: '50%', paddingLeft: '20px', borderLeft: '1px solid #ccc' }}>
        <h2>Your Submitted Tasks</h2>
        {submittedTasks.length === 0 ? (
          <p>No tasks submitted yet.</p>
        ) : (
          <ul>
            {submittedTasks.map((task, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <strong>{task.title}</strong>
                <p>{task.description}</p>
                <p><em>Expires on: {task.expirationDate}</em></p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>

  </>);
};
export default NeighborTaskInputCard;