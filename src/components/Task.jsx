import "../components_styles/Task.css";
import { useState, useSyncExternalStore } from "react";
import delete_icon from "../resources/delete_icon.png";

function Task({ task, updateTask }) {

    const [taskName, setTaskName] = useState(task.taskName);
    const [checked, setChecked] = useState(task.completed);

    function handleTaskNameEdit(event) {
        const newText = event.target.value;
    }

    return (
        <div className="task-item">
            <input type="checkbox" onChange={updateTask} value={task.completed} />
            <p value={taskName} contentEditable="true" onChange={handleTaskNameEdit}></p>
            <button className="task-item-deleter">
                <img src={delete_icon} alt="Delete" />
            </button>
        </div>
    );
}

export default Task;