const fs = require("fs");
const inquirer = require("inquirer");

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
            validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team member's email address?",
            validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
        }
    ])
   
};



promptUser()
.then(data => {
    console.log(data);
});
