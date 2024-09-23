import React, { useEffect, useState } from 'react';
import importpng from "../resources/import.png";
import exportpng from "../resources/export.png";
import './main_page.css';
import Section from "../components/Section.jsx";
import { getUniqueId, askConfirmation, saveProject, saveFile, getSavedProject, getSavedFile } from '../utils/utils.js';

// js file specific to build the main page and its architeture

function LoadMainPage() {

    const [currentProject, setCurrentProject] = useState(getSavedProject); // Makes currentProject only load when mounting
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

    function handleProjectFileLoad() {
        console.log("Starting");
        getSavedFile().then((project) => {
            console.log("All went fine");
            setSections((s) => (project == null ? s : project));
        }).catch((err) => {
            console.log("Somehting went wrong\nError: ", err);
        });
    }

    function eraseProject() {
        const confirmation = window.confirm("Do you really want to erase this project?");
        if(!confirmation)
            return;
        const wantToSaveLocally = window.confirm("Would you like to save it locally?");
        if(wantToSaveLocally)
            saveFile(sections);
        setSections(s => []);
    }

    return (
    <div className='container'>
        <nav>
            <button title="Export file" onClick={e => saveFile(sections)}>
                <img className="icon" src={exportpng} alt="Export project"></img>
            </button>
            <button title="Import file" onClick={handleProjectFileLoad}>
                <input type="file" id="localProjectInput" accept='.json' style={{display: "none"}} />
                <img className="icon" src={importpng} alt="Import project"></img>
            </button>
            <h2 title='Erase Project' id='project_eraser' onClick={eraseProject}>X</h2>
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