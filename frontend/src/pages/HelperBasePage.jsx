import { useState, useContext, useParams, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//usercontext to get the id, name, and other profile details to be rendered right by the task container
import CurrentUserContext from "../contexts/current-user-context";
import { checkForLoggedInUser } from "../adapters/auth-adapter";
import HelperTaskFeed from "../components/TabsContent/HelperTaskRecentFeed";
import Tabs from "../components/HelperTaskTabs";
import UserBlock from "../components/UserBlock";

const HelperBasePage = () => {
    //help user navigate to their personal profile 
    const nav = useNavigate();
    //get the helper's account information to display it on their task page 
    const { currentUser } = useContext(CurrentUserContext);

    //create a state piece for errors in loading the user's information 
    const [error, setError] = useState(null)

    const [userName, setUserName] = useState("User Not Found.")
    const [name, setName] = useState("Error: name not found.")
    const [zipcode, setZipcode] = useState("Error: zipcode not found.")

    useEffect(() => {
        try {
            const fetchUserInfo = async () => {

                const me = await checkForLoggedInUser();

                if (me) {
                    const meUserName = me.username;
                    setUserName(meUserName);

                    const meName = me.name;
                    setName(meName);

                    const meZip = me.zipcode;
                    setZipcode(meZip);


                }
                if (error) {
                    setError(error);
                }


                // console.log({ me })
            }
            if (currentUser) { // Ensure currentUser is defined before fetching
                fetchUserInfo();
            }
        }
        catch (err) {
            setError(err)
        }

    }, [currentUser])




    //does not allow someone to just randomly go to the helper page by adjusting the url 
    // if (!currentUser || currentUser.is_neighbor === true) nav('*');


    //map thru the result and create a task card 


    //tasks 

    return (
        <>
            <h1 className="welcomeHeaderHelper">{userName ? userName : error}'s Task Page</h1>

            <section id="helperTasks">
                <section id="taskFeed" className="helperElement">
                    <section id="taskContainer" className="helperElement">
                        <Tabs />
                    </section>
                </section>

                <section id="helperProfilePrev" className="helperElement">
                    {/* User Photo component*/}
                    <UserBlock />

                </section>

            </section>

        </>

    )
}

export default HelperBasePage;