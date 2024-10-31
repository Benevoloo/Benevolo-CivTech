import { useState } from "react";
import "../styles/index.css";
import HelperTaskFeed from "./TabsContent/HelperTaskRecentFeed";

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    //function to toggle tabs depending on what tab the user clicked on and show different feeds
    const toggleTab = (index) => {
        console.log(`Tab ${index} clicked`)
        setToggleState(index)

    }

    return (
        <>
            <section className="tabs-container">
                <section className="tabs">
                    <h5 className={toggleState === 1 ? "tab active-tab" : "tab"} onClick={() => toggleTab(1)}>Recently Posted</h5>
                    <h5 className={toggleState === 2 ? "tab active-tab" : "tab"} onClick={() => toggleTab(2)}>Your Tasks</h5>
                </section>

                <section className="content-container">
                    <section className={toggleState === 1 ? "tab-content active-content" : "tab-content"} id="tab1-content">
                        <HelperTaskFeed />
                    </section>
                    <section className={toggleState === 2 ? "tab-content active-content" : "tab-content"} id="tab2-content">
                        <p>bong!</p>
                    </section>

                </section>

            </section>
        </>
    )

}

export default Tabs