import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { listHelpersInt } from "../adapters/task-adapter";
import Modal from "./Modal";

const InterestButton = ({ task_id }) => {

  const [interestedPeople, setInterestedPeople] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();


  const peopleInterested = async( task_id ) => {
    const [data, error] = await listHelpersInt(task_id)
    if (error) {
      console.error("Error checking for task interests", error)
    } else {
      return data;
    }
  }; 

  useEffect(() => {
    const fetchPeopleInterests = async () => {
      try {
        const interests = await peopleInterested(task_id);
        setInterestedPeople(interests); // Set the list of interested people.
        console.log(interestedPeople)
      } catch (error) {
        console.error("Error fetching interests on load:", error);
      }
    };

    fetchPeopleInterests();
  }, [task_id]);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
//onlick for the helper name button
  const handleButtontoUserProfile = (helper_id) => {
  navigate(`/profile/${helper_id}/${task_id}`);
  }

  return (
    <div>
      <button onClick={openModal} className="mt-5 w-full bg-[#4D805A] text-white rounded-lg hover:bg-[#87A776]">

      {interestedPeople.length} helpers interested
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className="font-semibold">{interestedPeople.length} helpers interested</p>
       {/* Displays the name of each helper that requests the tast */}
       {/* <ul className="list-disc ml-5">
        {interestedPeople.map((helper, index) => (
          <li link to='/profile' key={index}>{helper.name}</li>
          ))}
         </ul> */}

<ul className="list-none ml-5">
          {interestedPeople.map((helper, index) => (
            <li key={index} className="my-2">
              <button onClick={() => handleButtontoUserProfile(helper.id)}
                className="block w-full text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                {helper.name}
              </button>
            </li>
          ))}
        </ul>
        <button className='mt-2 p-2 w-semi bg-red-500 text-white rounded-lg hover:bg-red-600' onClick={closeModal}>Close</button>
        
      </Modal>
    </div>
  );
};

export default InterestButton;