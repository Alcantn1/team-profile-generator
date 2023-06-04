const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should create a new Intern instance", () => {
    const intern = new Intern("Ellie", 12, "Ellie@fakemail.com", "American River College");

    expect(intern.getName()).toBe("Ellie");
    expect(intern.getId()).toBe(12);
    expect(intern.getEmail()).toBe("Ellie@fakemail.com");
    expect(intern.getSchool()).toBe("American River College");
  });

  it("should return 'Intern' as the role of the Intern", () => {
    const intern = new Intern("Ellie", 12, "Ellie@fakemail.com", "American River College");

    expect(intern.getRole()).toBe("Intern");
  });
});
