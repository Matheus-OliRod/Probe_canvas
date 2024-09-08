import '../components_styles/Section.css';
import GhostCard from './GhostCard.jsx';
import Card from "./Card.jsx";
import React, {useState} from 'react';
import {getUniqueId, askConfirmation } from '../utils/utils.js';

function Section({ section, updateSection, deleteSection }) {

    const [cards, setCards] = useState([]);
    const [isHidden, setIsHidden] = useState(true);
    const [sectionTitle, setTitle] = useState("Title");

    function switchVisibility() {
        setIsHidden(i => !i);
    }
    
    function handleEnter(event) {
        if(event.key == "Enter")
            event.target.blur();
    }

    function handleSectionTitle(event) {
        const newTitle = event.target.value;
        setTitle(t => newTitle);
        updateSection({...section, title : newTitle});
    }
    
    function appendNewCard() {
        setCards(c => [...c, {id : getUniqueId(), title : "Title", tasks : []}]);
        updateSection({...section, cards : cards});
    }

    function updateCard(updatedCard) {
        setCards(c => c.map(card =>
            card.id === updatedCard.id ? updatedCard : card
        ));
        updateSection({...section, cards : cards});
    }

    function deleteCard(deletedCard) {
        if(!askConfirmation("card"))
            return;
        setCards(c => c.filter(card => card.id !== deletedCard.id));
        updateSection({...section, cards : cards});
    }

    return (
        <div className='section'>
            <header className='section-header'>
                <input type='text' value={sectionTitle} onChange={handleSectionTitle} onKeyDown={handleEnter}></input>
                <div className='header-button-group'>
                    <button className='switch-visibility-button' onClick={switchVisibility}><b>{isHidden ? "-" : "+"}</b></button>
                    <button className='delete-button' onClick={e => deleteSection(section)}></button>
                </div>
            </header>
            <div style={{display : isHidden ? "flex" : "none"}} className='content-holder'>
                {cards.map(card => (
                    <Card card={card} key={card.id} updateCard={updateCard} deleteCard={deleteCard} />
                ))}
                <GhostCard onClick={appendNewCard}/>
            </div>
        </div>
    );

}

export default Section;
