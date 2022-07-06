DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE roles (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR (30),
salary DECIMAL NOT NULL,
department_id INT,
FOREIGN KEY (department_id) REFERENCES departments(id),
PRIMARY KEY (id)
);


CREATE TABLE employees (
id INT NOT NULL AUTO_INCREMENT,
firstName VARCHAR(30) NOT NULL,
lastName VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
FOREIGN KEY (role_id) REFERENCES roles (id),
FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL,
PRIMARY KEY (id)
);

