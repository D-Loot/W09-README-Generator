// TODO: Include packages needed for this application
import generateMarkdown, * from "./utils/generateMarkdown"
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
  "Please enter your email: "
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type:"input",
        message: questions[0],
        name: "title",
      },{
        type:"input",
        message: questions[1],
        name: "projectDescription",
      },{
        type:"input",
        message: questions[2],
        name: "instalInst",
      },{
        type:"input",
        message: questions[3],
        name: "usageInfo",
      },{
        type:"input",
        message: questions[4],
        name: "contributeInfo",
      },{
        type:"input",
        message: questions[5],
        name: "testInst",
      },{
        type:"list",
        message: questions[6],
        choices: ["Dan Looten License","Trilogy Insurance License","Washinton University License","none"]
        name: "license",
      },{
        type:"input",
        message: questions[7],
        name: "ghName",
      },{
        type:"input",
        message: questions[8],
        name: "email",
      }
    ]).then((response) =>
    readmeText = generateMarkdown(response)

// TODO: update the readmeTesxt response to reflect the generateMarkdown
    fs.writeFile("log.txt",readmeText
    )).catch((error) => {
      if (error.isTtyError){


      }else {
        // error message
      }
    })
  }

// Function call to initialize app
init();


const inquirer = require('inquirer');
const fs = require("fs");

// https://www.npmjs.com/package/inquirer

inquirer
  .prompt([
    {
      type:"input",
      message: "Input Test",
      name: "Var1",
    },{
      type:"list",
      message: "List Test",
      choices: ["Jumbo","Large","Standard", "Medium", "Small", "Micro"]
      name: "Var2",
    },{
      type:"rawlist",
      message: "List Test",
      choices: ["Jumbo","Large","Standard", "Medium", "Small", "Micro"]
      name: "Var3",
    }
  ]).then((response) =>
  console.log(`Input: ${response.Var1}`)



  fs.writeFile("log.txt",JSON.stringify(response.Var1)
  )).catch((error) => {
    if (error.isTtyError){

    }else {
      // error message
    }
  })


// GIVEN a command-line application that accepts user input
  // WHEN I am prompted for information about my application repository --------
      // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

  // WHEN I enter my project title -------
      // THEN this is displayed as the title of the README

  // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
      // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

  // WHEN I choose a license for my application from a list of options
      // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

  // WHEN I enter my GitHub username
      // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

//    https://github.com/D-Loot/

  // WHEN I enter my email address
      // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

      // - It will work also for email addresses: <email@example.com> (you may write vaild email links also using [mailto](mailto:email@example.com) as protocol)

  // WHEN I click on the links in the Table of Contents
      // THEN I am taken to the corresponding section of the README

      // # Spoons, a routine tracker

          // ## Table of Contents

          // - [Overview](#overview)
          // - [Built With](#built-with)
          // - [Features](#features)
          // - [Contact](#contact)
          // - [Acknowledgements](#acknowledgements)

          // ## Overview

