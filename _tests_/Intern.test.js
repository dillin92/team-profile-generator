const Intern = require("../lib/intern");


test("checks if getSchool returns school value", () => {
    const intern = new Intern('dillin', '123456', 'asdf', 'asdf','shenandoah');

    expect(intern.getSchool()).toBe('shenandoah');
});

