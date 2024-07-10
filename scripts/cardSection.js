import variables from "./connectors.js";
//---- Main creation functions ----//

// Creates a new section for card placement
function createSection() {
    variables.sections_div.appendChild(new Section());
}

// Creates a new card
function createCard(section) {

}

// Creates a checkmark to each objective line in a card
function createCheckmark() {

}

// Expands and hides the visibility of a section
function alterVisibility(holder, extender) {
  
    // showing the holder

    if(holder.style.display == "none") {
        holder.style.display = "flex";
        extender.style.transform = "rotate(0deg)";
    }

    else {
        holder.style.display = "none";
        extender.style.transform = "rotate(90deg)";
    }
    
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
    parent_section; // The section where the ghost card is adding the new card

    constructor(parent_section) {
        this.parent_section = parent_section;

        this.holder.innerHTML = "+";
        this.holder.classList = "ghost_card";
        this.holder.addEventListener("click", e => createCard(parent_section));
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
    delete_img = document.createElement("img");

    constructor() {

        // Setting css classes

        this.section.classList = "section";
        this.header.classList = "section_header";
        this.title.classList = "title";
        this.extender.classList = "expander";
        this.holder.classList = "section_holder";
        this.delete_button.classList = "delete_button";

        this.title.innerHTML = "No Title";
        this.extender.innerHTML = ">";
        this.delete_img.src = "./resources/icons/delete_icon.png";

        // Grouping everything

        this.header.appendChild(this.title);
        this.header.appendChild(this.extender);

        this.delete_button.appendChild(this.delete_img);

        this.holder.appendChild(new GhostCard());
        this.holder.appendChild(this.delete_button);

        this.section.appendChild(this.header);
        this.section.appendChild(this.holder);

        // Giving attributes

        this.title.contentEditable = "true";
        this.extender.addEventListener("click", e => alterVisibility(this.holder, this.extender));
        this.delete_button.addEventListener("click", e => deleteNode(holder));

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