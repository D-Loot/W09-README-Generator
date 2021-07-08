// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeSelection = function(licenseType){
    switch(licenseType){
      case "Dan Looten License":
        return ``;
      case "Trilogy Insurance License":
        return ``;
      case "Washinton University License":
        return ``;
      default "none":
        return ``;
    }
  }
  return badgeSelection
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const linkSelection = function(licenseType){
    switch(licenseType){
      case "Dan Looten License":
        return ``;
      case "Trilogy Insurance License":
        return ``;
      case "Washinton University License":
        return ``;
      default "none":
        return ``;
    }
  }
  return linkSelection
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const sectionSelection = function(licenseType){
    switch(licenseType){
      case "Dan Looten License":
        return `---

        © 2021 Dan Looten Web Development. Confidential and Proprietary. All Rights Reserved.`;
      case "Trilogy Insurance License":
        return `---

        © 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.`;
      case "Washinton University License":
        return `---

        © 2021 Washinton University. Confidential and Proprietary. All Rights Reserved.`;
      default "none":
        return ``;
    }
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Contact](#contact)
- [License](#license)

## Description

## Installation Instructions

## Usage Information

## Contribution Guidelines

## Test Instructions

## Contact

## License

`;
}

module.exports = generateMarkdown;
