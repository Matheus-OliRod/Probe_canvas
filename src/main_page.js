import './main_page.css';
import Section from "./Section.js";

// js file specific to build the main page and its architeture

function LoadMainPage() {
    
    function appendNewSection() {
        let section_holder = document.getElementById("section-holder");
        section_holder.appendChild(<Section />);
    }

    return (
    <div id='container'>
        <nav>
            <button title="Export file">
                <img className="icon" src="./export.png" alt="Export project"></img>
            </button>
            <button title="Import file">
                <img className="icon" src="./import.png" alt="Import project"></img>
            </button>
        </nav>
        
        <div id="section-manager">
        <header>
            <button id='section-creator' onClick={appendNewSection}>
                + Create Section
            </button>
            <button id='switch-to-uml'> {'>'} </button>
        </header>

        <div id='section-holder'></div>
        </div>

    </div>
    );
}

export default LoadMainPage;