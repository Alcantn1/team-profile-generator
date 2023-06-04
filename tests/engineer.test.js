const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("should create a new Engineer instance", () => {
    const engineer = new Engineer("Adam", 22, "Adam@fakemail.com", "AdamRulez");

    expect(engineer.getName()).toBe("Adam");
    expect(engineer.getId()).toBe(22);
    expect(engineer.getEmail()).toBe("Adam@fakemail.com");
    expect(engineer.getGithub()).toBe("AdamRulez");
  });

  it("should return 'Engineer' as the role of the Engineer", () => {
    const engineer = new Engineer("Adam", 22, "Adam@fakemail.com", "AdamRulez");

    expect(engineer.getRole()).toBe("Engineer");
  });
});
