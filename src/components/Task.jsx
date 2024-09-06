import "./Task.css";
import { useState } from "react";
import delete_icon from "../resources/delete_icon.png";

function Task({ task, updateTask }) {

    return (
        <div className="task-item">
            <input type="checkbox" value={task.completed} />
            <p value={task.taskName}></p>
            <button className="task-item-deleter">
                <img src={delete_icon} alt="Delete" />
            </button>
        </div>
    );
}

export default Task;