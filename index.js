
// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter the title of your project:",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Enter installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter usage information:",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter contribution guidelines:",
    name: "contribution",
  },
  {
    type: "input",
    message: "Enter test instructions:",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose a license for your application:",
    name: "license",
    choices: ["MIT", "Apache-2.0", "GPL-3.0", "None"],
  },
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "username",
  },
  {
    type: "input",
    message: "Enter your email address:",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("README file has been generated successfully!");
      });
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const fileName = 'README.md';
        const data = answers;
        var markdown = generateMarkdown(data);
        writeToFile(fileName, markdown);
        console.log(data)
    })
}

// Function call to initialize app
init();
