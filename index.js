const inquirer = require ('inquirer')
const fs = require('fs');
const {generateHtmlPage} = require('./src/generateHTML')
const Employee = require('./lib/Employee');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = []


const managerQuestions = [
  {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter team members office number (Required): ',
      default: '1',
      validate: officeNumber => {
          if (officeNumber) {
              return true;
          } else {
              console.log('Please enter the office number!');
              return false;
          }
      },  
  },
]

const engineerQuestions = [
  {
  type: 'input',
  name: 'githubName',
  message: 'Enter team members GitHub username (Required): ',
  default: 'carternadain',
  validate: githubName => {
      if (githubName) {
          return true;
      } else {
          console.log('Please enter the GitHub username!');
          return false;
      }
  },  
}, 
]

const internQuestions = [
  {
      type: 'input',
      name: 'schoolName',
      message: 'Enter team members school name (Required): ',
      default: 'University of Arizona',
      validate: schoolName => {
          if (schoolName) {
              return true;
          } else {
              console.log('Please enter the school name!');
              return false;
          }
      },  
  },  
]

const baseEmployeeQuestions = [
  {
      type: 'input',
      name: 'employeeName',
      message: 'Enter employees name' ,
      default: 'Carter',
      validate: employeeName => {
          if (employeeName) {
              return true;
          } else {
              console.log('Please enter the employees name here!');
              return false;
          }
      },  
    },

  {
      type: 'input',
      name: 'employeeId',
      message: 'Enter team managers name (Required): ',
      default: '1',
  
    },

  {
      type: 'input',
      name: 'employeeEmail',
      message: 'Enter team managers email (Required): ',
      default: 'teammanager@email.com',
      
      },  

]