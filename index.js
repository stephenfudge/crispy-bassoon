// creating variables for things i will need to call later on
const inquirer = require('inquirer');
const fs = require('fs');

// where the info is for each role
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// where the html is being rendered
const renderSite = require('./utils/renderSite');


const teamArray = [];

function startQuestions() {
  managerQuestions();
}

function managerQuestions() {
  inquirer
    .prompt([{
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
    }])
    .then((info) => {
      const manager = new Manager(
        info.name,
        info.id,
        info.email,
        info.officeNumber
      );
      console.log(manager);
      teamArray.push(manager);
      addNewMember();
    });
}

function addNewMember() {
  inquirer
    .prompt([{
      type: "list",
      message: "Would you like to add an engineer, an intern or are you finished building the team?",
      choices: ["Engineer", "Intern", "Finished"],
      name: "role"
    }, ])
    .then((info) => {
      if (info.role === "Engineer") {
        engineerQuestions();
      } else if (info.role === "Intern") {
        internQuestions();
      } else {
        createHTML();
      }
    });
}

function engineerQuestions() {
  inquirer
    .prompt([{
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
    }, ])
    .then((info) => {
      const engineer = new Engineer(info.name, info.id, info.email, info.github);
      console.log(engineer);
      teamArray.push(engineer);
      addNewMember();
    });
}

function internQuestions() {
  inquirer
    .prompt([{
      type: "input",
      message: "What is the Intern's name?",
      name: "name"
    }, {
      type: "input",
      message: "What is the Intern's ID number?",
      name: "id"
    }, {
      type: "input",
      message: "What is the Intern's email address? ",
      name: "email"
    }, {
      type: "input",
      message: "What school does the Intern attend?",
      name: "school"
    }, ])
    .then((info) => {
      const intern = new Intern(info.name, info.id, info.email, info.school);
      console.log(intern)
      teamArray.push(intern);
      addNewMember();
    });
}


startQuestions();


function createHTML() {
  fs.writeFile('index.html', renderSite(teamArray),
    (err) =>
    err ? console.log(err) : console.log('Success!')
  );

}