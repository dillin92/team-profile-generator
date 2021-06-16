const fs = require("fs");
const inquirer = require("inquirer");
// const occupationData = process.argv.slice(2,process.argv.length);
const promptEmployee = require("./lib/employee");



const promptUser = () => {
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team member's name?",
            validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
        },
        {
            type: "checkbox",
            name: "role",
            message: "What is this team member's role in the company?",
            choices: [{value: "Intern"}, {value: "Engineer"},{value:"Manager"}],
            validate: (value) => {if(value){return promptEmployee()} else {return "Please enter a value to continue"}}
        }
    ])
};



promptUser();
