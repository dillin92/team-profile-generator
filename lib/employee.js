const fs = require('fs');
const inquirer = require('inquirer');

function Employee(name, role, email) {
    this.name = name;
    this.role = role;
    this.email = email;
};

// const promptEmployee = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: "What is the team member's name?",
//             validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
//         },
//     ])
// };

module.exports = Employee;