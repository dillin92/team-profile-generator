const Intern = require("../lib/intern");


test("checks if getSchool returns school value", () => {
    const intern = new Intern('shenandoah');

    expect(intern.getSchool()).toBe('shenandoah');
});

