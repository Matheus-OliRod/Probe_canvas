
/* This file is an auxiliary file that will handle some multilocated functions */

/**
 * This function is used to generate ids to all components
 * @returns {string} an unique id
 */

function getUniqueId() {
    return Math.floor((Date.now() * Math.random() *16)).toString(36);
}

/**
 * This function is to verify if it was an accident to delete the component
 * @param {String} object the name of the object you will ask to delete
 * @returns {boolean} if they wanted or not to delete
 */

function askConfirmation(object) {
    let answer = window.confirm("Do you really want to delete this " + object);
    return answer;
}

/**
 * Saves the current project on localhost
 * @param {Object} sections 
 */

async function saveProject(sections) {
    const project = JSON.stringify(sections);
    localStorage.setItem("currentProject", project);
}

/**
 * Creates a .json file with the sections, so you can save the project locally
 * @param {Object} sections 
 */

async function saveFile(sections) {
    const temp = document.createElement("a");
    const data = JSON.stringify(sections);
    const fileName = Date.now() + ".json";
    const file = new Blob([data], {type: "aplication/json"});
    temp.href = URL.createObjectURL(file);
    temp.download = fileName;
    temp.click();
}

function getSavedProject() {
    const project = localStorage.getItem("currentProject");
    return project ? JSON.parse(project) : [];
}

function getSavedFile() {
    return new Promise((resolve, reject) => {
        const fileInput = document.getElementById("localProjectInput");
        console.log("Hello World");
    
        fileInput.onchange = () => {
            console.log("onchange triggered");
            const file = fileInput.files[0];
    
            if(file) {
                const reader = new FileReader();

                console.log("File detected, starting operation...");
    
                reader.onload = function(e) {
                    const content = e.target.result;
                    try {
                        const project = JSON.parse(content);
                        console.log("Got it");
                        resolve(project);
                    }
                    catch(err) {
                        console.log("Error Parsing: ", err.message);
                        reject(null);
                    }
                };
            }

            else {
                console.log("Error: no file selected");
                reject(null);
            }
        };
        fileInput.click();
    });

}

export {
    getUniqueId,
    askConfirmation,
    saveProject,
    saveFile,
    getSavedProject,
    getSavedFile
}