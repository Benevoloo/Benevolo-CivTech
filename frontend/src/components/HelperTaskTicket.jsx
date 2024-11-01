import { useState } from "react";
import InterestButton from "./HelperRequestButton";
import { DateTime } from 'luxon'


const HelperTask = ({ task_id, task_status, title, body, created_at, expires_at }) => {
    const formattedCreatedAt = DateTime.fromISO(created_at).toFormat('MM/dd/yyyy');

    return (
        <section className="task-ticket">
            <h3 className="task-title">{title}</h3>
            <h5 className="task-creation-date">Date created: {formattedCreatedAt}</h5>
            <p className="task-desc">{body}</p>
            <p className="task-expiration-date">Expires: {expires_at}</p>

            {task_status === "In-progress" ? '' : <InterestButton task_key={task_id} />}
        </section>
    )
}

export default HelperTask;