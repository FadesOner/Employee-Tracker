const { connect } = require("../db/connection")
const inquirer = require('inquirer');

async function viewEmployees(){

    const connection = await connect();

    const result = await connection.execute("SELECT * FROM employee");

    return result[0];
}

async function addEmployee(){
    const connection = await connect();
    return inquirer
    .prompt([
        {
            name: "first_name",
            type: "input",
            message: "What is the employee's first name?"
    }, {
            name: "last_name",
            type: "input",
            message: "What is the employee's last name?"
    }, {
            name: "role_id",
            type: "input",
            message: "What is the employee's role id?"
    }, {
            name: "manager_id",
            type: "input",
            message: "What is your manager's id?",
    }]).then(
    async function(answer){
        const result = connection.execute("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", [answer.first_name, answer.last_name, parseInt(answer.role_id), parseInt(answer.manager_id)]);
        return "Employee Created Successfully";
    }
)
}
       
async function delEmployee(){
    const connection = await connect();
    return inquirer
    .prompt([
        {
            name: "first_name",
            type: "input",
            message: "What is the employee's first name?"
        }, {
            name: "last_name",
            type: "input",
            message: "What is the employee's last name?"
        }
    ]).then(
        async function(answer){
            const result = connection.execute("DELETE FROM employee WHERE (first_name =?) AND (last_name =?)", [answer.first_name, answer.last_name]);
            return "Employee Deleted Successfully";
        }
        )
    }

    async function updateEmployee(){
        const connection = await connect();
        return inquirer
        .prompt([
            {
                name: "employee_id",
            type: "input",
            message: "What is the employee's ID ?"
        }, {
            name: "manager_id",
            type: "input",
            message: "What is the employee's new manager ID?"
            }
        ]).then(
            async function(answer){
                const result = connection.execute("UPDATE employee SET manager_id = ? WHERE id =?", [parseInt(answer.manager_id), parseInt(answer.employee_id)]);
                return "Employee Manager has been Successfully Updated ";
            }
            )
        }

module.exports = {
    viewEmployees,
    addEmployee,
    delEmployee,
    updateEmployee
}