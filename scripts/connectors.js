// This file is all about receiving the user inputs and managing its actions
// Most of the functions itself will be in different modules

const section_creator_button = document.getElementById("section_creator_button");
const card_creator_button = document.getElementById("card_creator_button");
const sections_div = document.getElementById("section_manager");

export default {sections_div};

import functions from "./cardSection.js";

section_creator_button.addEventListener("click", e => functions.createSection());