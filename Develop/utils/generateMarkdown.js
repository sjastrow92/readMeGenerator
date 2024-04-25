// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license ==='Apache') {
    return '![License: Apache]([![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license ==='Unlicense'){
    return ''
  }
   if (license ==='MIT'){
    return '![License: MIT]([![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
   }
     if (license ==='Eclipse Public license (EPL)'){
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
     }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return [license](link)`

  ## License
  This project is licensed with ${license}; `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ${data.title}
  ${data.why}
  ${data.problem}
  ${data.learn}
  ${data.install}
  ${data.collaborators}


  ## Table of Contents

  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Features](#features)
  *[Credits](#credits)
  *[Tests](#tests)
  *[Questions](#questions)
  *[How to contribute](#how to contribute)

  ## Installation
  To install this application, please follow the steps below:
  - ${data.install}

  ## Usage
  
  ## Features
  - ${data.contributors}
  - ${data.thirdparty}

  ## Tests
- ${data.test}

# Questions
if you have any questions, you can find my work at [${data.github}](https://github.com/sjastrow92/readMeGenerator).


`;
}

module.exports = generateMarkdown;
