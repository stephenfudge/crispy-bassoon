const Employee = require("../lib/Employee");

// creating testing suite
describe("Employee", () => {
    
    // testing get name
    it('testing  getName', () => {
        const name = "Stephen";
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);

    });

     // testing get id
    it('testing getId', () => {
        const id = "01";
        const employee = new Employee("Stephen", id);
        expect(employee.getId()).toBe(id)

    });

    // testing get email
    it('testing getEmail', () => {
        const email = "fudgetown@gmail.com";
        const employee = new Employee("Stephen", "01", email);
        expect(employee.getEmail()).toBe(email);
    });

     // testing get role
    it('testing getRole', () => {
        const role = 'Employee';
        const employee = new Employee("Stephen", "01", "fudgetown@gmail.com", role)
        expect(employee.getRole()).toBe(role);

    });

});