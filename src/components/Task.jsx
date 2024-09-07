import "../components_styles/Task.css";
import { useState, useSyncExternalStore } from "react";
import delete_icon from "../resources/delete_icon.png";

function Task({ task, updateTask, deleteTask }) {

    const [checked, setChecked] = useState(task.completed);

    function handleCompleted() {
        setChecked(c => !c);
        updateTask({...task, completed : checked});
    }

    return (
        <div className="task-item">
            <div style={{display: "flex", backgroundColor: checked ? "green" : "transparent"}}>
            <input type="checkbox" onChange={handleCompleted} value={checked} />
            <p>{task.taskName}</p>
            </div>
            <button className="task-item-deleter" onClick={e => deleteTask(task)}>
                <img src={delete_icon} alt="Delete" />
            </button>
        </div>
    );
}

export default Task;