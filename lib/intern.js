const Employee = require("./employee");

class Intern extends Employee {
        constructor(school = '') {
        super(school);
         
        this.school = school;
        }

        
        getSchool(){
            return this.school
};
    };


module.exports = Intern;