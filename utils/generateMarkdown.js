// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "Dan Looten License":
      return `![Dan Looten Badge](./assets/lootBadge.PNG)`;
    case "Trilogy Insurance License":
      return `![Trilogy Insurance](./assets/TrilogyEdBadge.PNG)`;
    case "Washinton University License":
      return `![Washinton University](./assets/washu-log.PNG)`;
    default:
      return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "Dan Looten License":
      return `[www.d-loot.github.io/Portfolio/](https://d-loot.github.io/Portfolio/)`;
    case "Trilogy Insurance License":
      return `[Trilogy Ed](https://www.trilogyed.com/)`;
    case "Washinton University License":
      return `[Washinton University](https://wustl.edu/)`;
    default:
      return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case "Dan Looten License":
      return `© 2021 Dan Looten Web Development. Confidential and Proprietary. All Rights Reserved.`;
    case "Trilogy Insurance License":
      return `© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.`;
    case "Washinton University License":
      return `© 2021 Washinton University. Confidential and Proprietary. All Rights Reserved.`;
    default:
      return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Contact](#contact)
- [License](#license)

## Description

${data.projectDescription}

## Installation Instructions

${data.instalInst}

## Usage Information

${data.usageInfo}

## Contribution Guidelines

${data.contributeInfo}

## Test Instructions

${data.testInst}

## Questions?

GitHub: [https://github.com/${data.ghName}/](https://github.com/${data.ghName}/)

Email: [${data.email}](mailto:${data.email})

## License

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
