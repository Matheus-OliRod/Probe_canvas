import './Section.css';
import GhostCard from './GhostCard.js';
import React, {useState} from 'react';

function Section() {

    const [isHidden, setIsHidden] = useState(false);
    const [sectionTitle, setTitle] = useState("Title");

    function switchVisibility(event) {

        if(isHidden) {
            event.target.style.display = "flex";
            setIsHidden(event.target.value = true);
        }

        else {
            event.target.style.display = "none";
            setIsHidden(event.target.value = false);
        }
    }

    function updateSectionTitle(event) {

    }

    function appendNewCard(event) {
        
    }
    
    return (
        <div className='section'>
            <header className='section-header'>
                <input type='text' value={sectionTitle} onChange={updateSectionTitle}></input>
                <div className='header-button-group'>
                    <button className='switch-visibility-button' onClick={switchVisibility}><b>-</b></button>
                </div>
            </header>
            <div className='content-holder'>
                <GhostCard onClick={appendNewCard}/>
            </div>
        </div>
    );

}

export default Section;
