const inquirer = require('inquirer');
const mysql = require('mysql2');
const { viewDepartments } = require('./action/department');
const { viewEmployees } = require('./action/employees');
const { viewRoles } = require('./action/roles');


const PORT = process.env.PORT || 3001;




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
                "Update Employee Role", 
                "Update Employee Manager",
                "Search for Employees by Manager", 
                "Search for Employees by department",
                "Remove Department", 
                "Remove Role",
                "Remove Employee",
                "Calculate Payroll", 
                "exit" 
            ]
        }).then(async function(answers){

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
            







            if(answers.action === 'exit'){
                process.exit();
            }




            // recursive function
            return init();

        });
    }


    init();