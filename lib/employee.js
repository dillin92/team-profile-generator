class Employee {
    constructor(name= '') {
        this.name = name;
        this.role = role;
        this.email = email;
    };

    getName(){
        return {
            name: this.name
        }
    };

    getId(){
        return {
            id: this.id
        }
    }

    getRole(){
        return {
            role: this.role
        }
    };

    getEmail(){
        return {
            email: this.email
        }
    };

};


module.exports = Employee;
