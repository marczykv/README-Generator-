const inquirer = require('inquirer')
const fs = require('fs');
// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
inquirer
    .prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is your first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is your last name?"
        },
        {
            type: "input",
            name: "age",
            message: "What is your age?"
        }
    ])
    .then((answers) => {


        fs.writeFile('mynewfile3.txt', JSON.stringify(answers), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });


    })
    .catch((error) => {
        console.log(error);
    });