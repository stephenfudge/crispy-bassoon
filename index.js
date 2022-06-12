// creating variables for i will need to call later on
const inquirer = require('inquirer');
const fs = require('fs');


// where the info is for each role
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



const myTeamArray = [];


// manager questions
const managerQuestions = () => {

    return inquirer.prompt([{
        type: "input",
        message: "What is the Manager's name?",
        name: "name"
    }, {
        type: "input",
        message: "What is the Manager's ID number?",
        name: 'id'
    }, {
        type: "input",
        message: "What is the Manager's email address? ",
        name: "email"
    }, {
        type: "input",
        message: "What is the Manager's office number?",
        name: "officeNumber"
    }]).then(managerInfo => {
        const {
            name,
            id,
            email,
            officeNumber
        } = managerInfo;
        const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);

        myTeamArray.push(manager);
        // console.log(manager)
    })
}

const employeeQuestions = () => {
    return inquirer.prompt([{
        type: "list",
        message: "Would you like to add an engineer, an intern or are you finished building the team?",
        choices: ["Engineer", "Intern", "Finsihed"],
        name: "role"
    }]).then(({
        role
    }) => {
        if (role == "Engineer") {
            return inquirer.prompt([{
                type: "input",
                message: "What is the Engineer's name?",
                name: "name"
            }, {
                type: "input",
                message: "What is the Engineer's ID number?",
                name: "id"
            }, {
                type: "input",
                message: "What is the Engineer's email address? ",
                name: "email"
            }, {
                type: "input",
                message: "What is the Engineer's GitHub Username?",
                name: "github"
            }]).then(employeeInfo => {
                const employee = new Engineer(employeeInfo.name, employeeInfo.id, employeeInfo.email, employeeInfo.github)
                myTeamArray.push(...employeeInfo, ...role);

            })
        }
    })
}

managerQuestions()
.then(employeeQuestions());