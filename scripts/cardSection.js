import variables from "./connectors.js";
//---- Main creation functions ----//

// Creates a new section for card placement
function createSection() {
    variables.sections_div.appendChild(new Section());
}

// Creates a new card
function createCard(section) {
    section.appendChild(new Card());
}

// Creates a checkmark to each objective line in a card
function createCheckmark(event, input_node, content_node) {

    if(event.key != "Enter" || !input_node.value)
        return;

    content_node.insertBefore(new ToDoMarker(input_node.value), input_node);
    input_node.value = "";

}

// Sets the focus to the content of the card
function setFocus(content, event) {
    if (!event.target.closest('.card_header')) {
        content.focus();
    }
}

// Unfocus the titles inputs when hit enter
function blurTitle(title_node, event) {

    if(event.key == "Enter")
        title_node.blur();
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

    if(window.confirm("Do you really wish to delete this?"))
        node.remove();
}

// ---- Card classes ---- //

class Card {

    card = document.createElement("div"); // Will hold all the elements togheter in a card
    header = document.createElement("div");
    title = document.createElement("h3");
    delete_button = document.createElement("button");
    delete_img = document.createElement("img");
    content = document.createElement("div");
    content_input = document.createElement("input");

    constructor() {
        
        // Adding the classes

        this.card.classList = "card";
        this.header.classList = "card_header";
        this.title.classList = "card_title";
        this.delete_button.classList = "card_delete_button";
        this.content.classList = "card_content";
        this.content_input.classList = "content_input";

        // Adding attributes

        this.card.spellcheck = false;
        this.title.contentEditable = "true";
        this.title.addEventListener("keypress", e => blurTitle(this.title, e));
        this.delete_button.addEventListener("click", e => deleteNode(this.card));
        this.content_input.addEventListener("keypress", e => createCheckmark(e, this.content_input, this.content));
        
        this.card.addEventListener("click", e => setFocus(this.content_input, e));

        this.title.innerHTML = "No Title";
        this.delete_img.src = "./resources/icons/delete_icon.png";

        // Grouping nodes

        this.delete_button.appendChild(this.delete_img);

        this.header.appendChild(this.title);
        this.header.appendChild(this.delete_button);

        this.content.appendChild(this.content_input);

        this.card.appendChild(this.header);
        this.card.appendChild(this.content);

        return this.card;

    }

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

        // Grouping everything

        this.header.appendChild(this.title);
        this.header.appendChild(this.extender);

        this.delete_button.appendChild(this.delete_img);

        this.holder.appendChild(this.delete_button);
        this.holder.appendChild(new GhostCard(this.holder));

        this.section.appendChild(this.header);
        this.section.appendChild(this.holder);

        // Giving attributes

        this.section.spellcheck = false;
        this.title.contentEditable = "true";
        this.title.addEventListener("keypress", e => blurTitle(this.title, e));
        this.extender.addEventListener("click", e => alterVisibility(this.holder, this.extender));
        this.delete_button.addEventListener("click", e => deleteNode(this.section));

        this.title.innerHTML = "No Title";
        this.extender.innerHTML = ">";
        this.delete_img.src = "./resources/icons/delete_icon.png";

        return this.section;
    }

}

class ToDoMarker {

    checkbox = document.createElement("button");
    p = document.createElement("p");
    holder = document.createElement("div");

    constructor(text) {

        // Adding the css classes

        this.checkbox.classList = "checkbox";
        this.p.classList = "ToDo_text";
        this.holder.classList = "checkbox_holder";

        // Adding attributes

        this.checkbox.type = "checkbox";

        this.p.innerHTML = text;

        //grouping everything

        this.holder.appendChild(this.checkbox);
        this.holder.appendChild(this.p);

        return this.holder;

    }
}

export default{
    createSection
};