const Manager = require('../lib/manager');

 // testing get name
it('test getName', () => {
    const name = "Stephen";
    const manager = new Manager(name);
    expect(manager.getName()).toBe(name);

});

 // testing get id
it('test getId', () => {
    const id = "01";
    const manager = new Manager("Stephen", id);
    expect(manager.getId()).toBe(id)

});

 // testing get email
it('test getEmail', () => {
    const email = "fudgetown@gmail.com";
    const manager = new Manager("Stephen", "01", email);
    expect(manager.getEmail()).toBe(email);
});

 // testing get role
it('test getRole', () => {
    const role = 'Manager';
    const manager = new Manager("Stephen", "01", "fudgetown@gmail.com", role)
    expect(manager.getRole()).toBe(role);

});

 // testing get office number
it('test getOfficeNumber', () => {
    const officeNumber = "stephenfudge";
    const manager = new Manager("Stephen", "01", "fudgetown@gmail.com", officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
});