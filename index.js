const fs = require('fs');
const inquire = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const createHTML = require('./src/createHTML');
const teamArray = [];

const ManagerQuestions = () => {
    return inquire.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id?",
            
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
           
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            
        }

    ]).then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    });
}

const EmployeeInfo = () => {
    return inquire.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ["Engineer", "Intern"]
        },

        {
            type: 'input',
            name: 'name',
            message: "What is the name of your employee?",
           
        },

        {

            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the employee's ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email:",
           
        },

        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's Github username:",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's Github username!");
                };
            }
        },

        {
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's school name:",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's school!")
                }
            }
        },

        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Would you like to add another team member?",
            default: false
        }

    ])
    
    .then(employeeData => {
        let {name, id, email, role, github, school, confirmEmployeeInfo} = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if (confirmEmployeeInfo) {
            return EmployeeInfo(teamArray);

        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("👐  team profile SUCCESSFUL! click on the index.html file in this directory")
        }
    })
};

ManagerQuestions()
.then(EmployeeInfo)
.then(teamArray => {
    return createHTML(teamArray);

}).then(pageHTML => {
    return writeFile(pageHTML);

}).catch(err => {
    console.log(err);
});