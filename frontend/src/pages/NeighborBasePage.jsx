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
      return data;
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
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1">Expiration Date:</label>
            <input
              type="date"
              value={expiration_date}
              onChange={(e) => setExpiration_date(e.target.value)}
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
        <NeighborTasks submittedTasks={submittedTasks} setSubmittedTasks={setSubmittedTasks} />
      </div>

        {modalTask && (
        <Modal closeModal={closeModal} task={modalTask} />
      )}
    </div>
  );
};

export default NeighborTaskInputCard;
