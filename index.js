console.log("hello from node ");

// require my sql
const mysql = require("mysql2");

// require inquirer
const inquirer = require("inquirer");
const createConnection = "../employee-tracker/db/schema.sql";

// Hard code a connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "company_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log(`Connected to the company_db database.`);
});

console.log(database);

const initalQuestions = () =>
  inquirer.prompt([
    {
      // prompt user with what they would like to do
      type: "list",
      name: "option ",
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
  ]);
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
