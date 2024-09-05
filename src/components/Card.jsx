import { useState } from "react";
import delete_icon from "../resources/delete_icon.png";
import "./Card.css";

function Card({ card, updateCard }) {

    const [title, setTitle] = useState(card.title);
    const [taskWriter, setTaskWriter] = useState("");
    const [tasks, setTasks] = useState(card.content);

    function handleTitleWriting(event) {
        const newTitle = event.target.value;
        setTitle(t => newTitle);
        updateCard({...card, title: newTitle});
    }

    function appendNewTask(event) {
        if(event.key !== "Enter")
            return;

        const newTask = event.target.value;
        setTasks(t => [...t, {id: t.length, taskName : newTask, completed : false}]);
    }

    function enterPress(event) {
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

    return (
        <div className="card">
            <header>
                <input type="text" value={title} onChange={handleTitleWriting} onKeyDown={enterPress}/>
                <button className="delete-button">
                    <img src={delete_icon}></img>
                </button>
            </header>
            <div className="task-holder">

                {/* {tasks.map(task =>
                (<Task task={task} updateTask={updateTask} key={tasks.length}
                />))} */}

                <input type="text" value={taskWriter} onChange={handleTaskWriter} onKeyDown={appendNewTask}/>

            </div>
        </div>
    );
}

function Task({ task, updateTask }) {

    return (
        <div className="task-item">
            <input type="checkbox" value={task.completed} />
            <p value={task.taskName}></p>
            <button className="task-item-deleter">
                <img src={delete_icon} alt="Delete" />
            </button>
        </div>
    )
}

export default Card;