import { useState, useEffect, useContext } from "react"
import CurrentUserContext from "../../contexts/current-user-context";
import { fetchHandler } from "../../utils/fetchingUtils";
import { getUser } from "../../adapters/user-adapter";
import { checkForLoggedInUser } from "../../adapters/auth-adapter";

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
                const zipcode = me.zipcode
                console.log(helper_id, zipcode)

                // Fetch tasks using the user's zipcode
                const [data, error] = await fetchHandler(`/api/tasks/by-zipcode/${zipcode}`);

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
        <>
            <h5>Requested Tasks</h5>
        </>
    )
}

export default YourTasks