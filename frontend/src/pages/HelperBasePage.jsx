import { useState, useContext, useParams, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//usercontext to get the id, name, and other profile details to be rendered right by the task container
import CurrentUserContext from "../contexts/current-user-context";
import HelperTaskFeed from "../components/HelperTaskFeed";

const HelperBasePage = () => {
    //help user navigate to their personal profile 
    const nav = useNavigate();
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);


    console.log(currentUser)



    //does not allow someone to just randomly go to the helper page by adjusting the url 
    // if (!currentUser || currentUser.is_neighbor === true) nav('*');


    //map thru the result and create a task card 


    //tasks 

    return (
        <>
            <h1>Welcome, !</h1>

            <section id="buttonSection">
                <button id="helperButton" className="helperSuggestedTasks">Recently Posted</button>
                <button id="helperButton" className="helperCurrentTasks">Your Tasks</button>
            </section>

            <section id="helperBody">
                <section id="taskFeed" className="helperElement">
                    <section id="taskContainer" className="helperElement">
                        <HelperTaskFeed />
                    </section>
                </section>

                <section id="helperProfilePrev" className="helperElement">
                    {/* User Photo component*/}
                    <h2 id="photoHere">{`:]`}</h2>
                    <h3 id="profileHeader">UserName</h3>
                    <h5>name</h5>
                    <h5>zipcode</h5>

                </section>

            </section>

        </>

    )
}

export default HelperBasePage;