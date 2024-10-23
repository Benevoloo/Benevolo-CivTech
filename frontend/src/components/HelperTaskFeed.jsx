//importing useState to create state pieces that will hold data about each task as a value
//importing useEffect as a means of refreshing the task rendering each time the site renders the helperbasepage or refreshes it
//importing useContext to get the current user's zipcode so the tasks that are rendered match the user's zipcode 
import { useState, useEffect, useContext } from "react"
import CurrentUserContext from "../contexts/current-user-context";
import { fetchHandler } from "../utils/fetchingUtils";
import { getUser } from "../adapters/user-adapter";


const HelperTaskFeed = () => {
    const { currentUser } = useContext(CurrentUserContext);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        const fetchUserAndTasks = async () => {
            try {

                const user = await getUser(currentUser.id);
                const userZip = user.zipcode;

                // Fetch tasks using the user's zipcode
                const [data, error] = await fetchHandler(`/api/tasks/by-zipcode/${userZip}`);

                if (data) {
                    setTasks(data);
                }
                if (error) {
                    setError(error);
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
        <div>
            <h3>Tasks for Zipcode: {currentUser.zipcode}</h3>
            {tasks.length === 0 ? (
                <p>No tasks available for your zipcode.</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            <h4>{task.title}</h4>
                            <p>{task.body}</p>
                            <p>Posted on: {task.created_at}</p>
                            <p>Due by: {task.expiration_date}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default HelperTaskFeed