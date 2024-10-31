import { useState, useEffect, useContext } from "react";
import InterestButton from "./HelperRequestButton";
import CurrentUserContext from "../contexts/current-user-context";
import { fetchHandler } from "../utils/fetchingUtils";
import { checkForLoggedInUser } from "../adapters/auth-adapter";


const HelperTask = ({ task_id, task_status, title, body, created_at, expires_at }) => {
    const { currentUser } = useContext(CurrentUserContext);
    const [error, setError] = useState(null);
    const [interest, setInterest] = useState(null)
    const [isInterested, setIsInterested] = useState(false);

    useEffect(() => {
        const fetchUserAndTasks = async () => {
            try {

                const me = await checkForLoggedInUser()
                const helper_id = me.id
                console.log(helper_id, zipcode)

                // Fetch interest using the task id
                const [taskData, taskError] = await fetchHandler(`/api/interests/${task_id}`);


                if (taskData) {
                    setInterest(taskData);
                    // console.log({ interest })
                    const userIsInterested = taskData.some(click => click.helper_id === helper_id);
                    setIsInterested(userIsInterested);
                }
                if (taskError) {
                    setError(taskError);
                }
            } catch (err) {
                setError(err);
            }
        };

        if (currentUser) { // Ensure currentUser is defined before fetching
            fetchUserAndTasks();
        }
    }, [currentUser]);


    useEffect(() => {
        console.log('Is current user interested:', isInterested);
    }, [isInterested]);

    return (
        <section className="task-ticket">
            <h3 className="task-title">{title}</h3>
            <h5 className="task-creation-date">{created_at}</h5>
            <p className="task-desc">{body}</p>
            <p className="task-expiration-date">{expires_at}</p>

            {task_status === "In-progress" ? '' : <InterestButton task_key={task_id} />}
        </section>
    )
}

export default HelperTask;