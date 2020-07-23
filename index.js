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
    message: "Enter the deployed app link:",
    name: "link",
  },
  {
    type: "input",
    message: "Describe your project in a few lines.",
    name: "description",
  },
  {
    type: "input",
    message: "What type of installation is needed for this project?",
    name: "installation",
  },
  {
    type: "input",
    message: "How to use your project?",
    name: "usage",
  },
  {
    type: "list",
    message: "What license did you use?",
    choices: ["MIT", "ISC", "Zlib", "None"],
    name: "license",
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
    message: "What is my Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is my email address?",
    name: "email",
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
    console.log(response);
    var markdownData = generateMarkdown(response);
    writeToFile("./demo/generated-readme.md", markdownData);
  });
}

//function call to initialize program
init();
