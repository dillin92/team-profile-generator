const Employee = require("../lib/employee");


test("checks if employee object was created", () => {
    const employee = new Employee('dillin', '123456', 'asdf', 'asdf');

    expect(typeof(employee)).toBe("object");
});

test("checks if getName() returns name value", () => {
    const employee = new Employee('dillin', '123456', 'asdf', 'asdf');

    expect(employee.name).toBe('dillin');
});

test("checks if getId() returns id value", () => {
    const employee = new Employee('dillin', '123456', 'asdf', 'asdf');

    expect(employee.getId()).toBe('123456');
});

test("checks if getEmail() returns email value", () => {
    const employee = new Employee('dillin', '123456', 'asdf', 'asdf');

    expect(employee.getEmail()).toBe('asdf');
});

test("checks if getRole() returns role value", () => {
    const employee = new Employee('dillin', '123456', 'asdf', 'Intern');

    expect(employee.getRole()).toBe('Intern');
});