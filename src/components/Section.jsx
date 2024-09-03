import './Section.css';
import GhostCard from './GhostCard.jsx';
import Card from "./Card.jsx";
import React, {useState} from 'react';

function Section({ sectionId }) {

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
        setCards(c => [...c, <Card delete_self={e => delete_card} id={c.length} key={c.length} />]);
    }

    function delete_card(cardId) {
        setCards(c => c.filter(card => card.id !== cardId));
        console.log(cardId);
        logCards();
        
    }

    function logCards() {
        cards.forEach(c => {
            console.log(c.id);
        });
    }

    function handleEnter(event) {
        if(event.key == "Enter")
            event.target.blur();
    }
    
    return (
        <div className='section'>
            <header className='section-header'>
                <input type='text' value={sectionTitle} onChange={updateSectionTitle} onKeyDown={handleEnter}></input>
                <div className='header-button-group'>
                    <button className='switch-visibility-button' onClick={switchVisibility}><b>{isHidden ? "-" : "+"}</b></button>
                </div>
            </header>
            <div style={{display : isHidden ? "flex" : "none"}} className='content-holder'>
                {cards}
                <GhostCard onClick={appendNewCard}/>
            </div>
        </div>
    );

}

export default Section;
