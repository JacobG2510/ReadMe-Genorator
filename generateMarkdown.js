// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return "[MIT License](https://opensource.org/licenses/MIT)";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Description
-${data.why}
-${data.problem}
-${data.learn}

##License
-${renderLicense(data.license)}
go to [https://choosealicense.com/](https://choosealicense.com/).
##features
-${data.features}
##credits
-${data.contributors}
-${data.thirdparty}
## questions
any questions you can contact me at ${data.email}.

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
