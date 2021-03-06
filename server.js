const inquirer = require("inquirer");
const  generatePage  = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');
const Employee = require('./lib/employee');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
let employees = [];



// initialize app
const initApp = () =>{
    return inquirer.prompt ([
        {
        type: 'list',
        name: 'start',
        message: 'Do you want to add an employee?',
        choices: ['Yes', 'No']
        }
    ]).then(data => {
        if(data.start === 'Yes'){
            return promptUser();
        } else {
             let pageHTML =  generatePage(employees);
             writeFile(pageHTML);
             copyFile();
        }
    })
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
                        let intern = new Intern(newName, newId, newEmail, newRole, newSchool);
                  
                        employees.push(intern);
            
                        initApp();
                    })
                break;

            case "Engineer":
                promptEngineer()
                    .then(data => {

                        let newGithub = data.github;
                        let engineer = new Engineer(newName, newId, newEmail, newRole, newGithub);
              
                        employees.push(engineer);
                 
                        initApp();
                    });
                break;

            case "Manager":
                promptManager()
                    .then(data => {
                        let newOfficeNumber = data.office_number;
                        let manager = new Manager(newName, newId, newEmail, newRole, newOfficeNumber);
                        employees.push(manager);
                        initApp();
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

        return initApp();
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
            name: 'office_number',
            message: "What is the team member's office number?",
            validate: (value) => { if (value) { return true } else { return "Please enter a value to continue" } }
        }
    ])
};

initApp();



