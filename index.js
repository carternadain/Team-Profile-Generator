const inquirer = require ('inquirer')
const fs = require('fs');
const {generateHtmlPage} = require('./src/generateHTML')

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = [];
const addManager = [
    {
        name: 'role',
        type: 'confirm',
        message: 'Welcome to the Team Profile Generator! Are you ready to begin?',
      },
      {
        name: 'name',
        type: 'input',
        message: 'Please enter the name of the manager:'
      },
      {
        name: 'id',
        type: 'input',
        message: 'What is your employee ID?'
      },
      {
        name: 'email',
        type: 'input',
        message: 'Please enter your email address:'
      },
      {
        name: 'officeNumber',
        type: 'input',
        message: 'What is your office number?'
      },
      {
        name: 'upNext',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
        message: 'What would you like to do next?',
      },
];

// Add new engineer
const addEngineer = [
    {
      name: 'name',
      type: 'input',
      message: "Please enter the name of the engineer:"
    },
    {
      name: 'id',
      type: 'input',
      message: "Please enter the ID of the engineer:"
    },
    {
      name: 'email',
      type: 'input',
      message: "What is the engineer's email address?"
    },
    {
      name: 'github',
      type: 'input',
      message: "Please enter the engineer's Github username:"
    },
    {
      name: 'upNext',
      type: 'list',
      choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
      message: 'What would you like to do next?',
    },
  ];

  // Add intern
  const addIntern = [
    {
      name: 'name',
      type: 'input',
      message: "What is the intern's name?"
    },
    {
      name: 'id',
      type: 'input',
      message: "What is the intern's employee ID?"
    },
    {
      name: 'email',
      type: 'input',
      message: "Please enter the intern's email address:"
    },
    {
      name: 'school',
      type: 'input',
      message: "What college or university does the intern attend?"
    },
    {
      name: 'upNext',
      type: 'list',
      choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
      message: 'What would you like to do next?',
    },
  ];

  ask(addManager);