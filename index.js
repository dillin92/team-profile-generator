const inquirer = require("inquirer");
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');
const Employee = require('./lib/employee');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');

class Team {
    constructor() {
        this.employees = [];
        this.employee;
    }
}

//User Prompt
const promptUser = () => {

    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "What is the team member's name?",
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team member's id?",
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } }
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the team member's email address?",
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } }
        },

        {
            type: "list",
            name: "role",
            message: "What is this team member's role in the company?",
            choices: ["Intern", "Engineer", "Manager"],
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } }
        }


    ]).then(({ name, id, email, role }) => {
        this.employee = new Employee(name, id, email, role);
        let newRole = this.employee.role;
        let newId = this.employee.id;
        let newEmail = this.employee.email;
        let newName = this.employee.name;

        switch (newRole) {
            case "Intern":
                promptIntern()
                    .then(data => {

                        let newSchool = data.school;
                        this.intern = new Intern(newName, newId, newEmail, newRole, newSchool);
                        console.log(this.intern);
                    })
                break;
            case "Engineer":
                promptEngineer()
                    .then(data => {

                        let newGithub = data.github;
                        this.engineer = new Engineer(newName, newId, newEmail, newRole, newGithub);
                        console.log(this.engineer);
                    })
                break;

            case "Manager":
                promptManager()
                    .then(data => {
                        let newOfficeNumber = data.officeNumber;
                        this.manager = new Manager(newName, newId, newEmail, newRole, newOfficeNumber);
                        console.log(this.manager);
                    })
   
        }

    });





};


function promptIntern() {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'school',
            message: "What is the team member's school?",
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } }
        }]);

};

function promptEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: "What is the team member's github username?",
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } }
        }
    ])
};


function promptManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'office-number',
            message: "What is the team member's office number?",
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } }
        }
    ])
};

promptUser()
    .then(employeeData => {


        console.log(employeeData)
    })
// .then(data => {

//     switch(data.role) {
//     case "Intern":
//         promptIntern()
//         .then(data => {
//             console.log(data)
//         })
//         break;
//     case "Engineer":
//         promptEngineer()
//         .then(data => {
//             console.log(data)
//         })
//         break;

//     case "Manager":
//         promptManager()
//         .then(data => {
//             console.log(data)
//         })
//         break;
//     }


// });
// .then(pageHTML => {
//     return writeFile(pageHTML);
// })
// .then(writeFileResponse => {
//     console.log(writeFileResponse)
//     return copyFile();
// })
// .then(copyFileResponse => {
//     console.log(copyFileResponse);
// })
// .catch(err => {
//     console.log(err);
// });
