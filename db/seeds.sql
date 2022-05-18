use employees;

INSERT INTO department
    (department_name)
VALUES
    ('Human Resources'),
    ('Marketing'),
    ('Information Technology'),
    ('Accounting');

INSERT INTO employee_role
    (title, salary, department_id)
VALUES
    ('HR Manager', 80000, 1),
    ('HR', 65000, 1),
    ('Marketing Lead', 90000, 2),
    ('Sales', 65000, 2),
    ('IT Engineer', 165000, 3),
    ('Service Desk', 60000, 3),
    ('Account Lead', 100000, 4),
    ('Accountant Junior', 60000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Corina', 'Restrepo', 1, NULL),
    ('Kris', 'Gonzales', 2, 1),
    ('Calvin', 'Harris', 3, NULL),
    ('Steve', 'Aoki', 4, 3),
    ('Benny', 'Benassi', 4, 3),
    ('Boris', 'Brejcha', 5, NULL),
    ('Gus', 'Fring', 6, 5),
    ('Mike', 'Ehrmantraut', 6, 5),
    ('Hector', 'Salamanca', 7, NULL),
    ('Jane', 'Margolis', 7, 8);