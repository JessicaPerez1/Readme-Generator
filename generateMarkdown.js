// let tableContentsArr = questions.map((data) => data.name);
// console.log(tableContentsArr);
// let tableContentsLiArr = tableContentsArr.slice(2, 5);
// console.log(tableContentsLiArr);

// function generateLicense(license) {
//   let badges = "";
//   license.forEach(function (element) {
//     badges += `[![License: ${element}](https://img.shields.io/badge/License-${element} - yellow.svg)](https://opensource.org/licenses/${element})
//   `;
//   });
//   return badges;
// }
// ${generateLicense(data.license)}
//  console.log(generateLicense(data.license));

//function to generate markdown for README
function generateMarkdown(data) {
  return `[![License: ${data.license}](https://img.shields.io/badge/License-${
    data.license
  }-lightgrey.svg)](https://opensource.org/licenses/${data.license})

  # ${data.title.toUpperCase()}
    * [Deployed app link:]${data.deployed}

  # Description
  *${data.description}

  ## Table of Contents
  1. [Description](#description)
  2. [Screenshots](#screenshots)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [License](#license)
  6. [Contributing](#contributing)
  7. [Tests](#tests)
  8. [Questions](#questions)

  ## Installation
  *Steps to follow
  
  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ### Contributions
  ${data.contributions}

  ### Tests
  ${data.tests}

  ### Questions
    * [GitHub profile link:](https://github.com/${data.github})
    * [Email:]${data.email}
  `;
}

module.exports = generateMarkdown;
