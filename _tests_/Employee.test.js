const checkIfEmployee = require("../index");
const Employee = require("../lib/Employee");

test("checks if employee object was created", () => {
    const employee = new Employee;

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.role).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.any(String));
});

jest.mock('../lib/_mocks_/Employee');