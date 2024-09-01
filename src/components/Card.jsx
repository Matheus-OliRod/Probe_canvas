import { useState } from "react";
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

    }

    function handleTaskWriting(event) {

    }

    function handleTaskEnter(event) {

    }

    return (
        <div className="Card">
            <header>
                <input type="text" value={title} onChange={handleTitleWriting} onKeyDown={handleTitleEnter}/>
            </header>
        </div>
    );
}

export default Card;