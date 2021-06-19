const Intern = require("../lib/intern");


test("checks if intern object was created", () => {
    const intern = new Intern('shenandoah');

    expect(intern.getSchool()).toBe('shenandoah');
});