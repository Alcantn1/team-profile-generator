const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should create a new Manager instance", () => {
    const manager = new Manager("Rowan", 1, "Rowan@fakemail.com", 8);

    expect(manager.getName()).toBe("Rowan");
    expect(manager.getId()).toBe(1);
    expect(manager.getEmail()).toBe("Rowan@fakemail.com");
    // expect(manager.getOfficeNumber()).toBe(8);
  });

  it("should return 'Manager' as the role of the Manager", () => {
    const manager = new Manager("Rowan", 1, "Rowan@fakemail.com", 8);

    expect(manager.getRole()).toBe("Manager");
  });
});
