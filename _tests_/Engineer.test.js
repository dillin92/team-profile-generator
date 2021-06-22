const Engineer = require("../lib/engineer")

test("checks if getGithub returns github value", () => {
    const engineer = new Engineer('dillin92');

    expect(engineer.getGithub()).toBe('dillin92');
});