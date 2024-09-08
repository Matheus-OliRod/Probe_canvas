import { useState } from "react";
import { getUniqueId, askConfirmation} from "../utils/utils.js";
import delete_icon from "../resources/delete_icon.png";
import "../components_styles/Card.css";
import Task from "./Task.jsx";

function Card({ card, updateCard, deleteCard }) {

    const [title, setTitle] = useState(card.title);
    const [taskWriter, setTaskWriter] = useState("");
    const [tasks, setTasks] = useState(card.tasks);

    function handleTitleWriting(event) {
        const newTitle = event.target.value;
        setTitle(t => newTitle);
        updateCard({...card, title: newTitle});
    }

    function appendNewTask(event) {
        if(event.key !== "Enter")
            return;

        const newTask = event.target.value;

        if(newTask.trim() === "")
            return;

        setTasks(t => [...t, {id : getUniqueId(), taskName : newTask, completed : false}]);
        setTaskWriter("");
        updateCard({...card, tasks : tasks});
    }

    function enterPress(event) {
        if(event.key == "Enter")
            event.target.blur();
    }

    function handleTaskWriter(event) {
        const taskText = event.target.value;
        setTaskWriter(tw => taskText);
        console.log(taskText);
    }

    function updateTask(updatedTask) {
        setTasks(t => t.map(task => (
            task.id === updatedTask.id ? updatedTask : task
        )));
        updateCard({...card, tasks : tasks});
    }

    function deleteTask(deletedTask) {
        if(!askConfirmation("task"))
            return;
        setTasks(t => t.filter(task => deletedTask.id != task.id));
        updateCard({...card, tasks : tasks});
    }

    return (
        <div className="card">
            <header>
                <input type="text" value={title} onChange={handleTitleWriting} onKeyDown={enterPress}/>
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