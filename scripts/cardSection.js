import variables from "./connectors.js";
//---- Main creation functions ----//

// Creates a new section for card placement
function createSection() {
    variables.sections_div.appendChild(new Section());
}

// Creates a new card
function createCard() {

}

// Creates a checkmark to each objective line in a card
function createCheckmark() {

}

// Expands and hides the visibility of a section
function alterVisibility(section) {
    
    
}

// Deletes a specific HTML node and its childs
function deleteNode(node) {
    node.remove();
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
    extender = document.createElement("p");
    holder = document.createElement("div"); // Will contain all the cards
    delete_button = document.createElement("button");

    constructor() {
        
        // Setting css classes

        this.section.classList = "section";
        this.header.classList = "section_header";
        this.title.classList = "title";
        this.extender.classList = "extender";
        this.holder.classList = "section_holder";
        this.delete_button.classList = "delete_button";

        this.title.innerHTML = "No Title";

        // Giving attributes

        this.delete_button.addEventListener("click", e => deleteNode(holder));

        // Grouping everything

        this.header.appendChild(this.title);
        this.header.appendChild(this.extender);

        this.holder.appendChild(new GhostCard());
        this.holder.appendChild(this.delete_button);

        this.section.appendChild(this.header);
        this.section.appendChild(this.holder);

        return this.section;
    }

}

export default{
    Card,
    GhostCard,
    createSection,
    createCheckmark,
    alterVisibility
};