
// TODO: Include packages needed for this application
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [
{
    type: '',
    message: "",
    name: ""
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.createPromptModule();
    prompt(questions).then()
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
