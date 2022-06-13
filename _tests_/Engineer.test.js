const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
   
     // testing get name
    it('test getName', () => {
        const name = "Stephen";
        const engineer = new Engineer(name);
        expect(engineer.getName()).toBe(name);

    });

    // testing get id
    it('test getId', () => {
        const id = "01";
        const engineer = new Engineer("Stephen", id);
        expect(engineer.getId()).toBe(id)

    });

    // testing get email
    it('test getEmail', () => {
        const email = "fudgetown@gmail.com";
        const engineer = new Engineer("Stephen", "01", email);
        expect(engineer.getEmail()).toBe(email);
    });

    // testing get role
    it('test get role', () => {
        const role = 'Engineer';
        const engineer = new Engineer("Stephen", "01", "fudgetown@gmail.com", role)
        expect(engineer.getRole()).toBe(role);

    });
 // testing get github
    it('test getGithub', () => {
        const github = "stephenfudge";
        const engineer = new Engineer("Stephen", "01", "fudgetown@gmail.com", github);
        expect(engineer.getGithub()).toBe(github);
    });
});