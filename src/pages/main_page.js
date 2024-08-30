import React, { useState } from 'react';
import './main_page.css';
import Section from "../components/Section.js";

// js file specific to build the main page and its architeture

function LoadMainPage() {

    const [sections, setSections] = useState([]);
    
    const appendNewSection = () => {
        console.log(...sections);
        setSections(s => [...s, <Section key={s.length} />]);
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

        <div id='section-holder'>
            {sections}
        </div>
    </div>

    </div>
    );
}

export default LoadMainPage;