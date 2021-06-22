const Employee = require("./employee");


class Manager  extends Employee {
    constructor(officeNumber = '') {
    super(officeNumber);
     
    this.officeNumber = officeNumber;
    }

    
    getOfficeNumber(){
        return this.officeNumber
};
};

module.exports = Manager;