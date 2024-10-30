//interest page
import { useState, useEffect } from 'react';
import { checkForLoggedInUser } from '../adapters/auth-adapter';

//helps send data of helper that's interested in the specific task of the server 
import { makeInterest, checkForInterest } from '../adapters/task-adapter';

const InterestButton = ({ task_key }) => {
    const [interestState, setInterestState] = useState("Accept")

    //create a handleinterest func that sends interest to data base when you click the button. 



    const handleInterest = async (e) => {
        //prevent reloading behavior 
        e.preventDefault()
        console.log(e.target)
        //making sure we have the task id
        console.log({ task_key })

        //get the user's id 
        const me = await checkForLoggedInUser()
        const helper_id = me.id
        console.log({ helper_id }, { task_key })

        //check for the interest on this task 
        const interest = await checkForInterest(task_key)
        console.log({ interest })

        if (interest.helper_id === helper_id) {
            setInterestState("Requested!")
        }


        if (task_key && helper_id) {
            makeInterest(helper_id, task_key);
            setInterestState('Requested!')
        } else {
            return (
                <p>Request couldn't be made.</p>
            )
        }



        //define a tuple that will help you return what you need to return based on whether the post request was successful


    }


    return (
        <>
            <button onClick={handleInterest}>{interestState}</button>
        </>
    )
}

export default InterestButton;