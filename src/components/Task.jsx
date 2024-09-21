import "../components_styles/Task.css";
import { useEffect, useState } from "react";

function Task({ task, updateTask, deleteTask }) {

    const [copyTask, setCopyTask] = useState({...task});
    const [checked, setChecked] = useState(copyTask.completed);

    useEffect(
        () => {
        updateTask(copyTask);
        },
        [copyTask]
    );

    useEffect(
        () => {
            setCopyTask(ct => ({...ct, completed : checked}))
        },
        [checked]
    );

    function handleCompleted() {
        setChecked(c => !c);
    }

    return (
        <div className="task-item">
            <div style={{display: "flex", backgroundColor: checked ? "lightgreen" : "transparent", fontWeight: checked ? "bold" : "normal"}}>
            <input type="checkbox" onChange={handleCompleted} value={checked} />
            <p>{copyTask.taskName}</p>
            </div>
            <button className="task-item-deleter" onClick={e => deleteTask(task)}></button>
        </div>
    );
}

export default Task;