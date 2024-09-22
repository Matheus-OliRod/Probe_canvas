import React, { useEffect, useState } from 'react';
import importpng from "../resources/import.png";
import exportpng from "../resources/export.png";
import './main_page.css';
import Section from "../components/Section.jsx";
import { getUniqueId, askConfirmation, saveProject, getSavedProject } from '../utils/utils.js';

// js file specific to build the main page and its architeture

function LoadMainPage() {

    const [currentProject, setCurrentPronject] = useState(getSavedProject); // Makes currentProject only load when mounting
    const [sections, setSections] = useState(currentProject);

    // Saves updated sections on every re-render

    useEffect(
        () => {
            saveProject(sections);
        },
        [sections]
    );
   
    /**
     * Takes an section object and update it by its id
     * @param {Object} updatedSection 
     */

    function updateSection(updatedSection) {
        setSections(s => s.map(section =>
            section.id === updatedSection.id ? updatedSection : section
        ));
    }

    /**
     * Takes an section object and delets it by its id
     * @param {Object} deletedSection 
     * @returns 
     */

    function deleteSection(deletedSection) {
        if(!askConfirmation("section"))
            return;
        setSections(s => s.filter(section => section.id !== deletedSection.id));
    }

    /**
     * Creates a new empty section
     */

    function appendNewSection() {
        setSections(s => [...s, {id : getUniqueId(), cards : [], title : "Title"}]);
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