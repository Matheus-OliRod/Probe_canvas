import variables from "./connectors.js";
//---- Main creation functions ----//

// Creates a new section for card placement
function createSection() {
    variables.sections_div.appendChild(getSectionTemplate());
}

// Creates a new card
function createCard() {

}

//---- Creates the html and css templates ----//

function getCardTemplate() {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const body = document.createElement("div");

    // Adding attributes to the elements

    card.classList.add = "card";

    title.contentEditable = true;
    body.contentEditable = true;

}

function getSectionTemplate() {
    const section = document.createElement("div");
    const title = document.createElement("h2");
    const card_field = document.createElement("div");
    const expander = document.createElement("p");

    // Adding attributes to the elements

    title.contentEditable = true;

    card_field.appendChild(new GhostCard());

    section.classList = "section";
    expander.classList = "expander";
    title.classList = "title";

    title.innerHTML = "No Title";

    expander.innerHTML = "Show less /\\";
    expander.addEventListener("click", e => alterVisibility(section));

    // Grouping everything and adding to html

    section.appendChild(expander);
    section.appendChild(title);
    section.appendChild(card_field)

    return section;
}

// Creates a checkmark to each objective line in a card
function createCheckmark() {

}

// Expands and hides the visibility of a section
function alterVisibility(section) {
    
    
}

// ---- Card classes ---- //

class Card {

    holder = document.createElement("div");
    header = document.createElement("div");
    title = document.createElement("h3");
    delete_button = document.createElement("button");
    content = document.createElement("div");

}

class GhostCard {

    holder = document.createElement("div");

    constructor() {
        this.holder.innerHTML = "+";
        this.holder.classList = "ghost_card";
        return this.holder;
    }

}

class Section {

    section = document.createElement("div"); // The parent div that will hold all the elements
    header = document.createElement("div"); // Will contain the title and the delete button
    title = document.createElement("h3");
    delete_button = document.createElement("button");
    holder = document.createElement("div"); // Will contain all the cards

    constructor() {
        this.section.classList = "section";
    }

}

export default{
    createCard,
    createSection,
    createCheckmark,
    createGhostCard,
    getCardTemplate,
    getSectionTemplate,
    alterVisibility
};