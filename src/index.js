// require my sql
const dotenv = require("dotenv");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const {
  allDepartmentsQuery,
  allRoles,
  allEmployees,
} = require("../utils/queries");
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
      const employees = await executeQuery(allEmployees);
      console.table(employees);
    }
    if (option === "add a role") {
      //departments
      // add role questions so which role would you like to add
      const updatedRoles = [
        {
          type: "input",
          message: "What role do you want to add",
          name: "title",
        },
        {
          type: "input",
          name: "salary",
          message: "What is the salary of this role",
        },
        {
          type: "input",
          name: "department_id",
          message: "Which department do you want to add the new role to",
        },
      ];
      const rolesAnswers = await inquirer.prompt(updatedRoles);

      // concate the answers from inquirer
      const addRole = await executeQuery(
        `INSERT INTO roles (title,salary,department_id) VALUES ` +
          `('${rolesAnswers.title}', ${rolesAnswers.salary}, ${rolesAnswers.department_id})`
      );
    }
    if (option === "add an employee") {
      //departments
      // add role questions so which role would you like to add
      const updateEmployee = [
        {
          type: "input",
          message: "What is the first name of employee you want to add",
          name: "firstName",
        },
        {
          type: "input",
          name: "lastName",
          message: "What is the last name of employee you want to add",
        },
        {
          type: "input",
          name: "role_id",
          message: "What is the role id you want to add",
        },
        {
          type: "input",
          name: "manager_id",
          message: "What is the manager id you want to add",
        },
      ];
      const employeeAnswers = await inquirer.prompt(updateEmployee);

      // concate the answers from inquirer
      const addEmployee = await executeQuery(
        `INSERT INTO employees (firstName,lastName,role_id,manager_id) VALUES ` +
          `('${employeeAnswers.fistName}', '${employeeAnswers.lastName}', ${employeeAnswers.role_id},${employeeAnswers.manager_id})`
      );
    }
    if (option === "add a department") {
      const addDepartment = [
        {
          type: "input",
          message: "What is the department you want to add",
          name: "department_name",
        },
      ];
      const addDepartments = await inquirer.prompt(addDepartment);
      console.log(addDepartments);
      const addAnotherDepartment = await executeQuery(
        `INSERT INTO departments (department_name) VALUES ` +
          `('${addDepartment.department_name}')`
      );
    }
    if (option === "update an employee role") {
      //get all employees
      const getAllEmployees = await executeQuery(allEmployees);
      const getAllRoles = await executeQuery(allRoles);
      // then ask user to select one of employeees
      const questionsUpdate = [
        {
          type: "input",
          message: "What is the first name of employee you want to update",
          name: "firstName",
        },
        {
          type: "input",
          name: "lastName",
          message: "What is the last name of employee you want to add",
        },
        {
          type: "input",
          name: "role_id",
          message: "What is the role id you want to add",
        },
        {
          type: "input",
          name: "manager_id",
          message: "What is the manager id you want to add",
        },
      ];
      const updateAnswers = await inquirer.prompt(questionsUpdate);

      const updateQuery = await executeQuery(
        `UPDATE employees SET role_id = ${updateAnswers.role_id} WHERE manager_id = ${updateAnswers.manager_id}`
      );

      // present user with list of roles.
      // which one they want to update
      //UPDATE employee SET role_id=${inqirer.value} WHERE id=${inquirer.id}
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
