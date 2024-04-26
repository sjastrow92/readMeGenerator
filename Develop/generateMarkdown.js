// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "![License: Apache]([![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "Unlicense") {
    return "";
  }
  if (license === "MIT") {
    return "![License: MIT]([![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (license === "Eclipse Public license (EPL)") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  }
  if (license === "IBM") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseMap = {
    Apache: "https://opensource.org/licenses/Apache-2.0",
    Unlicense: "",
    MIT: "https://opensource.org/licenses/MIT",
    "Eclipse Public license (EPL)": "https://opensource.org/licenses/EPL-1.0",
    IBM: "https://opensource.org/licenses/IPL-1.0",
  };

  return licenseMap[license] || "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. 

`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseLink(data.license)}
## Description
${data.description}
${data.title}
${data.why}
${data.problem}
${data.learn}
${data.install}
${data.collaborators}

## Table of Contents
-&nbsp;[Installation](#installation)

-&nbsp;[Usage](#usage)

-&nbsp;[License](#license)

-&nbsp;[Features](#features)

-&nbsp;[Credits](#credits)

-&nbsp;[Tests](#tests)

-&nbsp;[Questions](#questions)

${renderLicenseLink(data.license)}



## Installation
To install this application, please follow the steps below:
- ${data.install}
${renderLicenseSection(data.license)}

## Usage
- ${data.why}
 
## Features
- ${data.collaborators}

## Tests
- ${data.test}

# Questions
if you have any questions, you can find my work at [${data.github}](${
    data.github
  }).


`;
}

module.exports = generateMarkdown;
