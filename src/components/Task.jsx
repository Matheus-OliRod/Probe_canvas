import "../components_styles/Task.css";
import { useState } from "react";

function Task({ task, updateTask, deleteTask }) {

    const [checked, setChecked] = useState(task.completed);

    function handleCompleted() {
        setChecked(c => !c);
        updateTask({...task, completed : checked});
    }

    return (
        <div className="task-item">
            <div style={{display: "flex", backgroundColor: checked ? "lightgreen" : "transparent", fontWeight: checked ? "bold" : "normal"}}>
            <input type="checkbox" onChange={handleCompleted} value={checked} />
            <p>{task.taskName}</p>
            </div>
            <button className="task-item-deleter" onClick={e => deleteTask(task)}></button>
        </div>
    );
}

export default Task;