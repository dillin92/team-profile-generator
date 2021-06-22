const Manager = require("../lib/manager")

test("checks if getOfficeNumber returns office number value", () => {
    const manager = new Manager('(765)217-9757');

    expect(manager.getOfficeNumber()).toBe('(765)217-9757');
});