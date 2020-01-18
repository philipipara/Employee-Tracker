const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


const axios = require("axios");
const Inquirer = require("inquirer");
const Jest = require("jest");
const path = require("path");
const fs = require("fs");

const startQuestion = [
  {
    type: "list",
    message: "Select an option to begin.",
    name: "startQuestion",
    choices: [
      "Add an employee to the team",
      "Create the team HTML page (Add 1 team member first)"
    ]
  }
];

const adminQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your employee id number?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email"
  },

  {
    type: "confirm",
    message: "Are you a manager?",
    name: "position",
    choices: ["Yes", "No"]
  }
];

const questions = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is the employee's ID number?",
    name: "id"
  },
  {
    type: "input",
    message: "What is the employee's email address?",
    name: "email"
  },
  {
    type: "list",
    message: "What is the employee's title?",
    name: "title",
    choices: ["engineer", "intern"]
  }
];

const managerQuestion = [
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNumber"
  }
];

const engineerQuestion = [
  {
    type: "input",
    message: "What is the engineer's GitHUb username?",
    name: "gitname"
  }
];

const internQuestion = [
  {
    type: "input",
    message: "What school does your intern attend?",
    name: "school"
  }
];