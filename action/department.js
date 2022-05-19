//this file will content all the functions related to department

const { connect } = require("../db/connection")
const inquirer = require('inquirer');
//this will show everything on the table department
async function viewDepartments(){

    const connection = await connect();

    const result = await connection.execute("SELECT * FROM department");

    return result[0]; //this will prevent for more information to be shown when call the console.table
}
//this will add a new department to the table
async function addDeparment(){
    const connection = await connect();
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'department_name',
            message: 'What is the name of the department?'
        }
    ]).then(
        async function(answer){
            const result = connection.execute("INSERT INTO department (department_name) VALUES (?)", [answer.department_name]);
            return "Department Created Successfully";
        }
    )
}
// this will delete a department from the table
async function delDeparment(){
    const connection = await connect();
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'department_name',
            message: 'What is the name of the department you want to delete??'
        }
    ]).then(
        async function(answer){
            const result = connection.execute("DELETE FROM department WHERE department_name =?", [answer.department_name]);
            return "Department Deleted Successfully";
        }
        )
    }

module.exports = {
    viewDepartments,
    addDeparment,
    delDeparment
}
