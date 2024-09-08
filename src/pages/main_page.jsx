import React, { useState } from 'react';
import importpng from "../resources/import.png";
import exportpng from "../resources/export.png";
import './main_page.css';
import Section from "../components/Section.jsx";
import { getUniqueId, askConfirmation, saveProject, loadProject } from '../utils/utils.js';

// js file specific to build the main page and its architeture

function LoadMainPage() {

    const previousProject = loadProject();
    const [sections, setSections] = useState(previousProject);
   

    function updateSection(updatedSection) {
        setSections(s => s.map(section =>
            section.id === updatedSection.id ? updatedSection : section
        ));
        saveProject(sections);
    }

    function deleteSection(deletedSection) {
        if(!askConfirmation("section"))
            return;
        setSections(s => s.filter(section => section.id !== deletedSection.id));
        saveProject(sections);
    }

    const appendNewSection = () => {
        setSections(s => [...s, {id : getUniqueId(), cards : {}}]);
    }

    return (
    <div className='container'>
        <nav>
            <button title="Export file">
                <img className="icon" src={exportpng} alt="Export project"></img>
            </button>
            <button title="Import file">
                <img className="icon" src={importpng} alt="Import project"></img>
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
            {sections.map(section => (
                <Section key={section.id} section={section} updateSection={updateSection} deleteSection={deleteSection} />
            ))}
        </div>
    </div>

    </div>
    );
}

export default LoadMainPage;