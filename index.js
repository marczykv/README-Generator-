const inquirer = require('inquirer')
const fs = require('fs');

//  array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description for your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage?"
    },
    {
        type: "list",
        choices: ["MIT", "Apache", "ISC", "GPL", "LGPL", "MPL"],
        name: "license",
        message: "What is the license?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors?"
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions?"
    }, 
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    }
];


inquirer
    .prompt(questions)
    .then((answers) => {
        var readMeText = 
`# ${answers.title}
## Project Description        
${answers.description}

## Table of Contents
- [Description](#project-description)
- [Installation](#installation-instructions)


## Installation Instructions
${answers.installation}

## Additional Questions
GitHub Account [${answers.github}](https://github.com/${answers.github})
Email [${answers.email}](mailto:${answers.email})
        
        `;
        fs.writeFile('generatedreadme.md', readMeText
         , function (err) {
            if (err) throw err;
            console.log('Saved!');
        });


    })
    .catch((error) => {
        console.log(error);
    });