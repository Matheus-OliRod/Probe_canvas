import { useState } from "react";
import delete_icon from "../resources/delete_icon.png";
import "./Card.css";

function Card() {

    const [title, setTitle] = useState("Tasks");
    const [tasks, setTasks] = useState([]);
    const [nextTask, setNextTask] = useState("Task ", tasks.length);

    function handleTitleEnter(event) {
        if(event.key == "Enter")
            event.target.blur();
    }

    function handleTitleWriting(event) {
        setTitle(t => event.target.value);
    }

    function handleTaskWriting(event) {

    }

    function handleTaskEnter(event) {
        if(event.key == "Enter") {
            event.target.blur();
        }
    }

    function delete_self() {
        
    }

    return (
        <div className="card">
            <header>
                <input type="text" value={title} onChange={handleTitleWriting} onKeyDown={handleTitleEnter}/>
                <button className="delete-button" onClick={delete_self}>
                    <img src={delete_icon}></img>
                </button>
            </header>
        </div>
    );
}

export default Card;