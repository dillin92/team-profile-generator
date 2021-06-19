const Employee = require("../lib/employee");


test("checks if employee object was created", () => {
    const employee = new Employee('dillin', '123456', 'asdf', 'asdf');

    expect(typeof(employee)).toBe("object");
});

test("checks if I get the name from the constructor", () => {
    const employee = new Employee('dillin', '123456', 'asdf', 'asdf');

    expect(employee.name).toBe('dillin');
});

test("checks if getName returns name value", () => {
    const employee = new Employee('dillin', '123456', 'asdf', 'asdf');

    expect(employee.getName()).toBe('dillin');
});