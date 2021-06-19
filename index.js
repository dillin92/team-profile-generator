const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require('./lib/employee');

//User Prompt
const promptUser = () => {
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team member's name?",
            validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team member's id?",
            validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the team member's email address?",
            validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the team member's github username?",
            validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
        },       
         {
            type: "list",
            name: "role",
            message: "What is this team member's role in the company?",
            choices:  ["Intern",  "Engineer", "Manager"],
            validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
        },

        
    ])
    .then(data => {
        switch(data.role) {
            case "Intern":
                promptIntern()
                .then(data => {
                    console.log(data)
                })
            
               
        }
    });
  
    
   
};


function promptIntern (){
    return inquirer.prompt([
       { 
        type: 'input',
        name: 'school',
        message: "What is the team member's school?",
        validate: (value) => {if(value){return true} else {return "Please enter a value to continue"}}
    }]);

};

promptUser();
