DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR (30),
salary DECIMAL NOT NULL,
department_id INT,
FOREIGN KEY (department_id) REFERENCES departments(id)
);


CREATE TABLE employees (
id INT NOT NULL AUTO_INCREMENT,
firstName VARCHAR(30) NOT NULL,
lastName VARCHAR(30) NOT NULL,
roleId INT NOT NULL,
managerId INT,
FOREIGN KEY (roleId) REFERENCES roles (id),
FOREIGN KEY (managerId) REFERENCES employees(id),
PRIMARY KEY(id)
);

