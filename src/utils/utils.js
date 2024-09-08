
/* This file is an auxiliary file that will handle some multilocated functions */

function getUniqueId() {
    return Math.floor((Date.now() * Math.random() *16)).toString(36);
}

function askConfirmation(object) {
    let answer = window.confirm("Do you really want to delete this " + object);
    return answer;
}

export {
    getUniqueId,
    askConfirmation
}