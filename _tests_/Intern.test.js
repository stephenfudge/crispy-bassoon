// calls the intern.js file to test
const Intern = require("../lib/Intern");

// creating the testing suite
describe("Intern", () => {

    // testing get name
    it('testing getName', () => {
        const name = "Stephen";
        const intern = new Intern(name);
        expect(intern.getName()).toBe(name);

    });

    // testing get id
    it('testing getId', () => {
        const id = "01";
        const intern = new Intern("Stephen", id);
        expect(intern.getId()).toBe(id)

    });

    // testing get email
    it('testing getEmail', () => {
        const email = "fudgetown@gmail.com";
        const intern = new Intern("Stephen", "01", email);
        expect(intern.getEmail()).toBe(email);
    });

    // testing get role
    it('testing getRole', () => {
        const role = 'Intern';
        const intern = new Intern("Stephen", "01", "fudgetown@gmail.com", role)
        expect(intern.getRole()).toBe(role);

    });

    // testing get school
    it('testing getSchool', () => {
        const school = "U of T";
        const intern = new Intern("Stephen", "01", "fudgetown@gmail.com", school);
        expect(intern.getSchool()).toBe(school);
    });

});