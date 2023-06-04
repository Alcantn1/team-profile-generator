const inquirer = require('inquirer');
const generateHTML = require('.src/generateHTML');
const Manager = require('.lib/Manger.js');
const Engineer = require('.lib.Engineer.js');
const Intern = require('.lib/Intern.js');

const team = [];

function promptManger() {
    inquirer
    .prompt([
        {
            type:'input',
            name: 'name',
            message: ' Name:',
        },
        {
            type:'input',
            name: 'id',
            message: 'Employee ID:',
        }
        {
            type:'input',
            name: 'email',
            message: 'Email:',
        }
        {
            type:'input',
            name: 'officeNumber',
            message: 'Office Number:',
        }
        
    ])
}


function promptEngineer() {
    inquirer
    .prompt([
        {
            type:'input',
            name: 'name',
            message: ' Name:',
        },
        {
            type:'input',
            name: 'id',
            message: 'Employee ID:',
        }
        {
            type:'input',
            name: 'email',
            message: 'Email:',
        }
        {
            type:'input',
            name: 'github',
            message: 'Github username:',
        }
    ])
}


function promptIntern() {
    inquirer
    .prompt([
        {
            type:'input',
            name: 'name',
            message: ' Name:',
        },
        {
            type:'input',
            name: 'id',
            message: 'Employee ID:',
        }
        {
            type:'input',
            name: 'email',
            message: 'Email:',
        }
        {
            type:'input',
            name: 'school',
            message: 'School:',
        }
    ])
}



promptManager();