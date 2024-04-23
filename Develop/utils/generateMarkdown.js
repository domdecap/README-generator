
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GPL v3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return ``
  }
}


function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  } else if (license === 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === 'GPL v3') {
    return `https://www.gnu.org/licenses/gpl-3.0`
  } else if (license === 'Mozilla') {
    return `https://opensource.org/licenses/MPL-2.0`
  } else {
    return ``
  }
}


function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `Licensed by MIT. All rights reserved. See license in repo.`
  } else if (license === 'Apache') {
    return `Licensed by Apache. All rights reserved. See license in repo.`
  } else if (license === 'GPL v3') {
    return `Licensed by GNU GPL v3. All rights reserved. See license in repo.`
  } else if (license === 'Mozilla') {
    return `Licensed by Mozilla. All rights reserved. See license in repo.`
  } else {
    return ``
  }
}


function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents

  1. [Description](#description) 
  2. [Installation](#installation) 
  3. [Usage](#usage) 
  4. [Collaborators](#collaborators)
  5. [Tests](#tests) 
  6. [Questions](#questions)
  7. [License](#license)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Collaborators
  ${data.collaborators}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, I can be contacted at ${data.email} by email
  or you can view my Github at ${data.github}

  ## License
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

 


`;
}

module.exports = generateMarkdown;
