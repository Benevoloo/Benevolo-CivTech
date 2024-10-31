import { useState, useEffect, useContext } from "react"
import CurrentUserContext from "../../contexts/current-user-context";
import { fetchHandler } from "../../utils/fetchingUtils";
import { getUser } from "../../adapters/user-adapter";
import { checkForLoggedInUser } from "../../adapters/auth-adapter";
import HelperTask from "../HelperTaskTicket";

const YourTasks = () => {
    const { currentUser } = useContext(CurrentUserContext);
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Added loading state


    useEffect(() => {
        const fetchUserAndTasks = async () => {
            try {

                //this is where everything changes. 
                const me = await checkForLoggedInUser()
                const helper_id = me.id

                // Fetch tasks using the user's zipcode
                const [data, error] = await fetchHandler(`/api/helper-tasks-progress/${helper_id}`);

                if (data) {
                    setTasks(data.length > 4 ? data.slice[0, 4] : data);
                    console.log('Fetched tasks:', data);
                }
                if (error) {
                    setError(error);
                    console.log(error)
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
        <>
            <section className="yourTasksContainer">
                {tasks.length === 0 ? (
                    <p>You don't have any active tasks right now. Go to your feed to see how you can help a neighbor out!</p>
                ) : (
                    <ul>
                        {tasks.map(task => (
                            <HelperTask key={task.id}
                                task_id={task.id}
                                task_status={task.status}
                                title={task.title}
                                body={task.body}
                                created_at={task.created_at}
                                expires_at={task.expiration_date}
                            />
                        ))}
                    </ul>
                )}            </section>

        </>
    )
}

export default YourTasks