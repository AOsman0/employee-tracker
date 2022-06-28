console.log("hello from node ");

// require my sql
const mysql = require("mysql2");

// require inquirer
const inquirer = require("inquirer");

// Hard code a connection

const database = mysql.Connection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "company_db",
});
