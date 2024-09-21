import { useEffect, useState } from "react";
import { getUniqueId, askConfirmation} from "../utils/utils.js";
import "../components_styles/Card.css";
import Task from "./Task.jsx";

function Card({ card, updateCard, deleteCard }) {

    const [copyCard, setCopyCard] = useState({...card});
    const [title, setTitle] = useState(copyCard.title);
    const [taskWriter, setTaskWriter] = useState("");
    const [tasks, setTasks] = useState(copyCard.tasks);

    useEffect(
        () => {
        updateCard(copyCard);
        },
        [copyCard]
    );

    useEffect(
        () => {
            setCopyCard(cc => ({...cc, title : title}));
        },
        [title]
    );

    useEffect(
        () => {
            setCopyCard(cc => ({...cc, tasks : tasks}));
        },
        [tasks]
    );

    function handleTitleWriting(event) {
        const newTitle = event.target.value;
        setTitle(t => newTitle);
    }

    function appendNewTask(event) {
        if(event.key !== "Enter")
            return;

        const newTask = event.target.value;

        if(newTask.trim() === "")
            return;

        setTasks(t => [...t, {id : getUniqueId(), taskName : newTask, completed : false}]);
        setTaskWriter("");
    }

    function blurTitle(event) {
        if(event.key == "Enter")
            event.target.blur();
    }

    function handleTaskWriter(event) {
        const taskText = event.target.value;
        setTaskWriter(tw => taskText);
    }

    function updateTask(updatedTask) {
        setTasks(t => t.map(task => (
            task.id === updatedTask.id ? updatedTask : task
        )));
    }

    function deleteTask(deletedTask) {
        if(!askConfirmation("task"))
            return;
        setTasks(t => t.filter(task => deletedTask.id != task.id));
    }

    return (
        <div className="card">
            <header>
                <input type="text" value={title} onChange={handleTitleWriting} onKeyDown={blurTitle}/>
                <button className="delete-button" onClick={e => deleteCard(card)}></button>
            </header>
            <div className="task-holder">

                {tasks.map(task =>
                (<Task task={task} updateTask={updateTask} deleteTask={deleteTask} key={task.id}
                />))}

                <input type="text" value={taskWriter} onChange={handleTaskWriter} onKeyDown={appendNewTask}/>

            </div>
        </div>
    );
}

export default Card;