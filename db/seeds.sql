USE company_db;

INSERT INTO departments (department_name) VALUES ("Marketing");
INSERT INTO departments (department_name) VALUES ("IT");
INSERT INTO departments (department_name) VALUES ("Finance");
INSERT INTO departments (department_name) VALUES ("Accounting");
INSERT INTO departments (department_name) VALUES ("HR");

INSERT INTO roles (id,title,salary,department_id) VALUES(1 , "Marketing" , "25000" , 1 );
INSERT INTO roles (id,title,salary,department_id) VALUES(2 , "Marketing" , "25000" , 2 );
INSERT INTO roles (id,title,salary,department_id) VALUES(3 , "IT" , "25000" , 3 );
INSERT INTO roles (id,title,salary,department_id) VALUES(4 , "Accounting" , "25000" , 4);
INSERT INTO roles (id,title,salary,department_id) VALUES(5 , "HR" , "25000" , 5);

INSERT INTO employees (firstName,lastName,role_id,manager_id) VALUES("James" , "Maine" , 1 ,NULL);
INSERT INTO employees (firstName,lastName,role_id,manager_id) VALUES("Josh", "Thomas", 2, NULL);
INSERT INTO employees (firstName,lastName,role_id,manager_id) VALUES("Jack", "White",  3 ,NULL);
INSERT INTO employees (firstName,lastName,role_id,manager_id) VALUES("Lewis", "Fisher", 4, NULL);
INSERT INTO employees (firstName,lastName,role_id,manager_id) VALUES("Bob" , "Smith", 5, NULL);

UPDATE employees SET manager_id=3 WHERE (id= 2);
UPDATE employees SET manager_id=2 WHERE (id= 3);
UPDATE employees SET manager_id =1 WHERE (id= 4);