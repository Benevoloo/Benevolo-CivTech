import { useState } from "react";
import InterestButton from "./HelperRequestButton";


const HelperTask = ({ task_id, title, body, created_at, expires_at }) => {

    return (
        <>
            <h3>{title}</h3>
            <h5>{created_at}</h5>
            <p>{body}</p>
            <h6>{expires_at}</h6>

            <InterestButton task_key={task_id} />
        </>
    )
}

export default HelperTask;