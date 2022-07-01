console.log("hello from node ");

// require my sql
const dotenv = require("dotenv");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const { allDepartmentsQuery, allRoles } = require("../utils/queries");
const initDatabase = require("./db");

// Hard code a connection

const initalQuestions = [
  {
    // prompt user with what they would like to do
    type: "list",
    name: "option",
    message: "Please select what you would like to do?",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update an employee role",
      "quit",
    ],
  },
];

const init = async () => {
  const { executeQuery, closeConnection } = await initDatabase({
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,

    host: "localhost",
    user: "root",
    password: "password",
    database: "company_db",
  });
  // setting while loop in init function
  let progress = true;

  while (progress) {
    const { option } = await inquirer.prompt(initalQuestions);

    if (option === "view all departments") {
      const departments = await executeQuery(allDepartmentsQuery);
      console.table(departments);
    }
    if (option === "view all roles") {
      const roles = await executeQuery(allRoles);
      console.table(roles);
    }
    if (option === "view all employees") {
    }
    if (option === "add a role") {
      // add role questions so which role would you like to add
      // ask title , salary, decimals
      // get the 3 answers
      // concate the answers from inquirer
      // const addRole = await executeQuery("INSERT INTO roles (id,title,salary,department_id) VALUES(${answers.id,answers.title} );")
    }
    if (option === "add an employee") {
    }
    if (option === "update an employee role") {
      // the user will tell you update from inquirer
    }
    if (option === "quit") {
      progress = false;
    }
  }
};

init();
// after there questions if the user selects view all departments

// show the user the data from the schema file of all the departments

// if the user selects view all roles
// show the user all the roles in the db

// if the user selects view all employees
// show all employees from db

// if user selects add department
// prompt what department with you like to add
// add the new department in the db

// if user selects add role
// prompt what role  with you like to add
// add the new role  in the db
