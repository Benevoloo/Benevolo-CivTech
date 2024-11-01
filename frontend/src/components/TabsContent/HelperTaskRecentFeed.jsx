//importing useState to create state pieces that will hold data about each task as a value
//importing useEffect as a means of refreshing the task rendering each time the site renders the helperbasepage or refreshes it
//importing useContext to get the current user's zipcode so the tasks that are rendered match the user's zipcode 
import { useState, useEffect, useContext } from "react"
import CurrentUserContext from "../../contexts/current-user-context";
import { fetchHandler } from "../../utils/fetchingUtils";
import { getUser } from "../../adapters/user-adapter";
import { checkForLoggedInUser } from "../../adapters/auth-adapter";

import HelperTask from "../HelperTaskTicket";

const HelperTaskRecentFeed = () => {
    const { currentUser } = useContext(CurrentUserContext);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Added loading state


    // return

    useEffect(() => {
        const fetchUserAndTasks = async () => {
            try {

                const me = await checkForLoggedInUser()
                const helper_id = me.id
                const zipcode = me.zipcode
                console.log(helper_id, zipcode)

                // Fetch tasks using the user's zipcode
                const [taskData, taskError] = await fetchHandler(`/api/tasks/by-zipcode/${zipcode}`);


                if (taskData) {
                    setTasks(taskData);
                    console.log({ tasks })
                }
                if (taskError) {
                    setError(taskError);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        if (currentUser) { // Ensure currentUser is defined before fetching
            fetchUserAndTasks();
        }
    }, [currentUser]); // Run effect when currentUser changes

    if (loading) {
        return <div>Loading...</div>; // Optional loading indicator
    }

    if (error) {
        return <div>Error fetching tasks: {error.message}</div>;
    }


    return (
        <section className="recentFeedContainer">
            <h3 className="recentTaskTitle">Tasks for Zipcode: {currentUser.zipcode}</h3>
            {tasks.length === 0 ? (
                <p className="empty">No tasks available for your zipcode.</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <HelperTask key={task.id}
                            task_id={task.id}
                            title={task.title}
                            body={task.body}
                            created_at={task.created_at}
                            expires_at={task.expiration_date}
                        />
                    ))}
                </ul>
            )}
        </section>
    );
};


export default HelperTaskRecentFeed