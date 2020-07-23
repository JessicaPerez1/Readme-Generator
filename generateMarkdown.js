//function to generate markdown for README
function generateMarkdown(data) {
  return `[![License: ${data.license}](https://img.shields.io/badge/License-${
    data.license
  }-lightgrey.svg)](https://opensource.org/licenses/${data.license})

  # ${data.title.toUpperCase()}
  * [Deployed app link:](${data.link})

  # Description
  *${data.description}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributions](#contributions)
  6. [Tests](#tests)
  7. [Questions](#questions)

  ## Installation
  *${data.installation}
  
  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ### Contributions
  ${data.contributions}

  ### Tests
  ${data.tests}

  ### Questions
  For any questions about this app or if you'd like to contribute, please refer to my Github page or contact me by email!
  * [${data.github} Github link:](https://github.com/${data.github})
  * ${data.email}

  `;
}

module.exports = generateMarkdown;
