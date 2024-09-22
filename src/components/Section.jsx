import '../components_styles/Section.css';
import GhostCard from './GhostCard.jsx';
import Card from "./Card.jsx";
import React, {useEffect, useState} from 'react';
import {getUniqueId, askConfirmation } from '../utils/utils.js';
import userEvent from '@testing-library/user-event';

function Section({ section, updateSection, deleteSection }) {

    const [copySection, setCopySection] = useState({...section});
    const [cards, setCards] = useState(copySection.cards);
    const [isHidden, setIsHidden] = useState(true);
    const [sectionTitle, setTitle] = useState(copySection.title);

    useEffect(
        () => {
            updateSection(copySection);
        },
        [copySection]
    );

    useEffect(
        () => {
            setCopySection(cs => ({...cs, cards : cards}));
        },
        [cards]
    );

    useEffect(
        () => {
            setCopySection(cs => ({...cs, title : sectionTitle}));
        },
        [sectionTitle]
    );

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
    }
    
    function appendNewCard() {
        setCards(c => [...c, {id : getUniqueId(), title : "Title", tasks : []}]);
    }

    function updateCard(updatedCard) {
        setCards(c => c.map(card =>
            card.id === updatedCard.id ? updatedCard : card
        ));
    }

    function deleteCard(deletedCard) {
        if(!askConfirmation("card"))
            return;
        setCards(c => c.filter(card => card.id !== deletedCard.id));
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
