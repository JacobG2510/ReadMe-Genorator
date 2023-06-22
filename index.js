
// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require("./generateMarkdown");
const myPackage = require('my-package');
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: "put message:",
    name: "name",   
},
{
    type: 'input',
    message: "put message:",
    name: "name",   
},
{
    type: 'input',
    message: "put message:",
    name: "name",   
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.createPromptModule();
    prompt(questions).then()
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const fileName = 'README.md';
        const data = JSON.stringify(answers, null, 2);
    })
}

// Function call to initialize app
init();
