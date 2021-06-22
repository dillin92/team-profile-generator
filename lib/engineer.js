const Employee = require("./employee");


class Engineer  extends Employee {
    constructor(github = '') {
    super(github);
     
    this.github = github;
    }

    
    getGithub(){
        return this.github
};
};

module.exports = Engineer;