
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');

// const { type } = require('os');

const questions = [
   {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title'
   },
   {
    type: 'input',
    message: 'Enter a description for your project',
    name: 'description'
   },
   {
    type: 'input',
    message: 'Enter any installation instructions',
    name: 'install'
   },
   {
    type: 'input',
    message: 'Enter any usage information',
    name: 'usage'
   },

   //license question
   {
    type: 'list',
    message: 'Choose a license for your project',
    name: 'license',
    choices: ['MIT','Apache','GPL v3','Mozilla', 'None']
   },
   {
    type: 'input',
    message: 'List any collaborators for the project',
    name: 'collaborators'
   },
   {
    type: 'input',
    message: 'Enter any test information you had',
    name: 'test'
   },
   {
    type: 'input',
    message: 'Enter your email address',
    name: 'email'
   },
   {
    type: 'input',
    message: 'Enter your Github username',
    name: 'github'
   }

];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('error')
        } else {
            console.log('success')

        }
    })
}


function init() {
    inquirer.prompt(questions)
    .then(function(response){
        const page = generateMarkdown(response)
        writeToFile('./utils/README.md',page)
    })
}

// Function call to initialize app
init();
