const inquirer = require('inquirer');
const generateHTML = require('./index.js');
const Manager = require('./lib/Manger.js');
const Engineer = require('./lib.Engineer.js');
const Intern = require('./lib/Intern.js');

const team = [];

function PromptManager() {
    console.log('Please enter manager details:');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Name:',
        },
        {
          type: 'input',
          name: 'id',
          message: 'Employee ID:',
        },
        {
          type: 'input',
          name: 'email',
          message: 'Email:',
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'Office Number:',
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        team.push(manager);
        PromptTeamMembers();
      });
  }

function PromptTeamMembers() {
    inquirer
    .Prompt([
        {
            type:'list',
            name:'role',
            message:'Role',
            choices:['engineer', 'Intern'],
        }
    ])
    .then((answers) => {
        if (answers.role === 'Engineer') {
          PromptEngineer();
        } else if (answers.role === 'Intern') {
          PromptIntern();
        } else {
          generateHTML(team);
        }
      });
  }



function PromptEngineer() {
    inquirer
    .Prompt([
        {
            type:'input',
            name: 'name',
            message: ' Name:',
        },
        {
            type:'input',
            name: 'id',
            message: 'Employee ID:',
        },
        {
            type:'input',
            name: 'email',
            message: 'Email:',
        },
        {
            type:'input',
            name: 'github',
            message: 'Github username:',
        }
    ])
    .then((answers) => {
        const engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
        );
        team.push(engineer);
        PromptTeamMembers();
        
    });
}



function PromptIntern() {
    inquirer
    .Prompt([
        {
            type:'input',
            name: 'name',
            message: ' Name:',
        },
        {
            type:'input',
            name: 'id',
            message: 'Employee ID:',
        },
        {
            type:'input',
            name: 'email',
            message: 'Email:',
        },
        {
            type:'input',
            name: 'school',
            message: 'School:',
        },
    ])
    .then((answers) => {
        const intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.github,
            answers.school
        );
        team.push(intern);
        PromptTeamMembers();
});
}



PromptManager();