import { useState, useEffect } from "react";
import { checkForInterest } from "../adapters/task-adapter";

const InterestsButton = ({task_id}) => {

  const [numOfPeople, setNumOfPeople] = useState(0);

  const [isOpen, setIsOpen] = useState(false)

  const taskInterests = async (task_id) => {
    const [data, error] = await checkForInterest(task_id);
    if (error) {
      console.error('Error checking interests:', error)
    } else {
      console.log('Interests:', data)
      return data
    }
  };

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        let interests = await taskInterests(task_id);
          setNumOfPeople(interests);
      } catch (error) {
        console.error('Error fetching interests on load:', error);
      }
    };

    fetchInterests();
  }, []); 

  const handleInterestsDrop = (e) => {
    e.preventDefault()
    if (numOfPeople.length === 0) {
      return
    } else {
      setIsOpen(true)
    }
  }

  if (isOpen) {
    return (
      <>
        <ul>
          {numOfPeople.map((helper) => {
            <li>
              
            </li>
          })}
        </ul>
      </>
    )
  } else {
    return (
      <button onClick={handleInterestsDrop} className="mt-5 w-full bg-orange-600 text-white rounded-lg hover:bg-orange-700">
      {numOfPeople.length} helpers interested
      </button>
    )
  }
}

export default InterestsButton