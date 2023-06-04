const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should create a new Employee instance", () => {
    const employee = new Employee("Ben", 66, "Ben@fakemail.com");

    expect(employee.name).toBe("Ben");
    expect(employee.id).toBe(66);
    expect(employee.email).toBe("Ben@fakemail.com");
  });

  it("should return the name of the Employee", () => {
    const employee = new Employee("Ben", 66, "Ben@fakemail.com");

    expect(employee.getName()).toBe("Ben");
  });

  it("should return the ID of the Employee", () => {
    const employee = new Employee("Ben", 66, "Ben@fakemail.com");

    expect(employee.getId()).toBe(66);
  });

  it("should return the email of the Employee", () => {
    const employee = new Employee("Ben", 66, "Ben@fakemail.com");

    expect(employee.getEmail()).toBe("Ben@fakemail.com");
  });

  it("should return 'Employee' as the role of the Employee", () => {
    const employee = new Employee("Ben", 66, "Ben@fakemail.com");

    expect(employee.getRole()).toBe("Employee");
  });
});
