const inquirer = require('inquirer');
const mysql = require('mysql2');
const { viewDepartments, addDeparment, delDeparment } = require('./action/department');
const { viewEmployees, addEmployee, delEmployee, updateEmployee } = require('./action/employees');
const { viewRoles, addRole, delRole, updateRole } = require('./action/roles');

const PORT = process.env.PORT || 3001;

// initial prompt to start the app, to select use the arrows
function init() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Departments", 
                "View All Roles", 
                "View All Employees", 
                "Add Department", 
                "Add Role",
                "Add Employee",
                "Remove Department", 
                "Remove Role",
                "Remove Employee",
                "Update Employee Role", 
                "Update Employee Manager",
                "exit" 
            ]
        }).then(async function(answers){
// if the anwers are iqual to the the options will open that funtion and the console table will show the table
            if(answers.action === 'View All Departments'){
                const departments = await viewDepartments();
                console.table(departments);
            }
            if(answers.action === 'View All Roles'){
                const roles = await viewRoles();
                console.table(roles);
            }
            if(answers.action === 'View All Employees'){
                const employees = await viewEmployees();
                console.table(employees);
            }
            if(answers.action === 'Add Department'){
                const newDepartment = await addDeparment();
                console.table(newDepartment);
            }
            if(answers.action === 'Remove Department'){
                const rmDepartment = await delDeparment();
                console.table(rmDepartment);
            }
            if(answers.action === 'Add Role'){
                const newRole = await addRole();
                console.table(newRole);
            }
            if(answers.action === 'Remove Role'){
                const rmRole = await delRole();
                console.table(rmRole);
            }
            if(answers.action === 'Add Employee'){
                const newEmployee = await addEmployee();
                console.table(newEmployee);
            }
            if(answers.action === 'Remove Employee'){
                const rmEmployee = await delEmployee();
                console.table(rmEmployee);
            }
            if(answers.action === 'Update Employee Manager'){
                const upEmployee = await updateEmployee();
                console.table(upEmployee);
            }
            if(answers.action === 'Update Employee Role'){
                const upRole = await updateRole();
                console.table(upRole);
            }
            // this will close the app 
            if(answers.action === 'exit'){
                process.exit();
            }

            // recursive function will call the questions everytime to click or finish an option
            return init();

        });
    }


    init();