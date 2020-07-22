//DEPENDENCIES
//fs - for file writing
var fs = require("fs");
//inquirer - for terminal prompts
var inquirer = require("inquirer");
//generate markdown
var generateMarkdown = require("generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What isthe title of your project?",
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
// function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
    fs.writeFile("README.md", JSON.stringify(response), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("It works");
    });
  });
}

// function call to initialize program
init();
