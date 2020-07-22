// MODULE.EXPORTS??????
//function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  # Description
  ${data.description}
  ## Table of Contents
  ${data.table}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ### Contributions
  ${data.contributions}
  ### Tests
  ${data.tests}
  ### Questions
  ${data.questions}`;
}

module.exports = generateMarkdown;
