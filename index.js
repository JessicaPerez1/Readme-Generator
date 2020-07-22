//DEPENDENCIES
//fs - for file writing
const fs = require("fs");
//inquirer - for terminal prompts
const inquirer = require("inquirer");
//generate markdown
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project in a few lines.",
    name: "description",
  },
  {
    type: "input",
    message: "Include the table of contents.",
    name: "table",
  },
  {
    type: "input",
    message:
      "What type of installation is needed for your project to work properly?",
    name: "installation",
  },
  {
    type: "input",
    message: "How to use your project?",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "What license(s) did you use?",
    name: "license",
    choices: [
      "MIT",
      "ISC",
      "PostgreSQL License",
      "Mozilla Public License 2.0",
      "Academic Free License v3.0",
    ],
  },
  {
    type: "input",
    message: "Who contributed to this project?",
    name: "contributions",
  },
  {
    type: "input",
    message: "How to test this project?",
    name: "tests",
  },
  {
    type: "input",
    message: "Do you have any questions?",
    name: "questions",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

//function to initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
    var markdownData = generateMarkdown(response);
    writeToFile("README.md", markdownData);
  });
}

//function call to initialize program
init();
