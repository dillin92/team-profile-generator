const Employee = require("../lib/employee");
const fs = require('fs');
const jest = require('jest');

test("checks if employee object was created", () => {
    const employee = new Employee('dillin');

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.role).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.any(String));
});

jest.mock('../lib/employee');

console.log(new Employee());