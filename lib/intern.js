const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, role, school = '') {
    super(name, id, email, role);

    this.school = school;
  }

  getInfo() {
    return {
      name: this.name,
      id: this.id,
      email: this.email,
      role: this.role,
    };
  }


  getSchool() {
    return this.school
  };

};

module.exports = Intern;