// import { useState, useEffect } from "react";
// import { checkForInterest } from "../adapters/task-adapter";

// const InterestButton = ({task_id}) => {

//   const [numOfPeople, setNumOfPeople] = useState(0);

//   const [isOpen, setIsOpen] = useState(false)

//   const taskInterests = async (task_id) => {
//     const [data, error] = await checkForInterest(task_id);
//     if (error) {
//       console.error('Error checking interests:', error)
//     } else {
//       console.log('Interests:', data)
//       return data
//     }
//   };

//   useEffect(() => {
//     const fetchInterests = async () => {
//       try {
//         let interests = await taskInterests(task_id);
//           setNumOfPeople(interests);
//       } catch (error) {
//         console.error('Error fetching interests on load:', error);
//       }
//     };

//     fetchInterests();
//   }, []); 

//   const handleInterestsDrop = (e) => {
//     e.preventDefault()
//     if (numOfPeople.length === 0) {
//       return
//     } else {
//       setIsOpen(true)
//     }
//   }

//   if (isOpen) {
//     return (
//       <>
//         <ul>
//           {numOfPeople.map((helper) => {
//             <li>

//             </li>
//           })}
//         </ul>
//       </>
//     )
//   } else {
//     return (
//       <button onClick={handleInterestsDrop} className="mt-5 w-full bg-orange-600 text-white rounded-lg hover:bg-orange-700">
//       {numOfPeople.length} helpers interested
//       </button>
//     )
//   }
// }

// export default InterestButton

// src/components/InterestsButton.jsx






import { useState, useEffect } from "react";
import { checkForInterest } from "../adapters/task-adapter";
import Modal from "./Modal";

const InterestButton = ({ task_id }) => {

  // const taskInterests = async (task_id) => {
  //   const [data, error] = await checkForInterest(task_id);
  //   if (error) {
  //     console.error("Error checking interests:", error);
  //   } else {
  //     return data; // Return the data retrieved from the API.
  //   }
  // };

  // useEffect(() => {
  //   const fetchInterests = async () => {
  //     try {
  //       const interests = await taskInterests(task_id);
  //       setInterestedPeople(interests); // Set the list of interested people.
  //     } catch (error) {
  //       console.error("Error fetching interests on load:", error);
  //     }
  //   };

  //   fetchInterests();
  // }, [task_id]);

  // const handleInterestsDrop = (e) => {
  //   e.preventDefault();
  //   if (interestedPeople.length === 0) {
  //     return;
  //   } else {
  //     setIsOpen(!isOpen); // Toggle between open and close
  //   }
  // };

  {/* {interestedPeople.map((helper, index) => (
            <li key={index}>{helper.helperId.name}</li>
          ))} */}
  const [interestedPeople, setInterestedPeople] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);



  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div>
      <button onClick={openModal} className="mt-5 w-full bg-orange-600 text-white rounded-lg hover:bg-orange-700">
        {[interestedPeople].length} helpers interested
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>Will change descr. when i get back home.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default InterestButton;
