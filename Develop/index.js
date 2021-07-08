// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js")
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  "What is the project title? ",
  "Please provide a brief description for the project: ",
  "Please provide installation instructions for this project: ",
  "Please provide any relevant usage information: ",
  "Please provide contribution guidelines: ",
  "Please provide test instructions: ",
  "Please choose a license: ",
  "Please enter your GitHub username: ",
  "Please enter your email: ",
  "What is the file name of the README? "
];


// function writeToFile(fileName, data) {
//   fs.appendFile(fileName, data, (err) => err ? console.error(err) : console.log('Readme file created.')
// }
// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type:"input",
        message: questions[0],
        name: "title",
      },
      {
        type:"input",
        message: questions[1],
        name: "projectDescription",
      },
      {
        type:"input",
        message: questions[2],
        name: "instalInst",
      },
      {
        type:"input",
        message: questions[3],
        name: "usageInfo",
      },
      {
        type:"input",
        message: questions[4],
        name: "contributeInfo",
      },
      {
        type:"input",
        message: questions[5],
        name: "testInst",
      },
      {
        type:"list",
        message: questions[6],
        choices: ["Dan Looten License","Trilogy Insurance License","Washinton University License","none"],
        name: "license",
      },
      {
        type:"input",
        message: questions[7],
        name: "ghName",
      },
      {
        type:"input",
        message: questions[8],
        name: "email",
      },
      {
        type:"input",
        message: questions[9],
        name: "filename",
      },
    ]).then((response) => {
    // console.log(response)
    readmeText = generateMarkdown(response);

// TODO: Create a function to write README file
    fs.writeFile(`${response.filename}.md`,readmeText, function (err) {
      if (err) throw err;
      console.log('Saved!');
    })
    })
  }

  init()