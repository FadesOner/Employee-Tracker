const { connect } = require("../db/connection")
const inquirer = require('inquirer');

async function viewRoles(){

    const connection = await connect();

    const result = await connection.execute("SELECT * FROM employee_role");

    return result[0];
}

async function addRole(){
    const connection = await connect();
    return inquirer
    .prompt([{
        name: "title",
        type: "input",
        message: "What is the name of the new role title?"
    }, {
        name: "salary",
        type: "input",
        message: "What is the yearly salary for this role?"
    }, {
        name: "department_id",
        type: "input",
        message: "What department is this new role under?"
    }]).then(
        async function(answer){
            const result = connection.execute("INSERT INTO employee_role (title, salary, department_id) VALUES (?,?,?)", [answer.title, answer.salary, answer.department_id]);
            return "Role Created Successfully";
        }
    )
}

async function delRole(){
    const connection = await connect();
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the role you would like to delete??'
        }
    ]).then(
        async function(answer){
            const result = connection.execute("DELETE FROM employee_role WHERE title =?", [answer.title]);
            return "Role Deleted Successfully";
        })}

    async function updateRole(){
        const connection = await connect();
        return inquirer
        .prompt([
            {
                name: "employee_id",
            type: "input",
            message: "What is the employee's ID ?"
        }, {
            name: "role_id",
            type: "input",
            message: "What is the employee's new role ID?"
            }
        ]).then(
            async function(answer){
                const result = connection.execute("UPDATE employee SET role_id = ? WHERE id =?", [parseInt(answer.role_id), parseInt(answer.employee_id)]);
                return "The Employee Role has been Updated Successfully";
            }
            )
        }

module.exports = {
    viewRoles,
    addRole,
    delRole,
    updateRole
}