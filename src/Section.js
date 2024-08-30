import './Section.css';
import GhostCard from './GhostCard.js';
import React, {useState} from 'react';

function Section() {

    const [cards, setCards] = useState([]);
    const [isHidden, setIsHidden] = useState(true);
    const [sectionTitle, setTitle] = useState("Title");

    function switchVisibility() {
        setIsHidden(i => !i);
    }

    function updateSectionTitle(event) {
        setTitle(t => event.target.value);
    }

    function appendNewCard() {
        
    }
    
    return (
        <div className='section'>
            <header className='section-header'>
                <input type='text' value={sectionTitle} onChange={updateSectionTitle}></input>
                <div className='header-button-group'>
                    <button className='switch-visibility-button' onClick={switchVisibility}><b>{isHidden ? "-" : "+"}</b></button>
                </div>
            </header>
            <div style={{display : isHidden ? "flex" : "none"}} className='content-holder displayer'>
                <GhostCard onClick={appendNewCard}/>
                {cards}
            </div>
        </div>
    );

}

export default Section;
