const { connect } = require("../db/connection")

async function viewDepartments(){

    const connection = await connect();

    const result = await connection.execute("SELECT * FROM department");

    return result[0];
}

async function addDeparment(){
    const connection = await connect();
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'department_name',
            message: 'What is the name of the department?'
        }
    ]).then(
        async function(answer){
            const result = connection("INSERT INTO departments (department_name) VALUES (?)");

            return result[0];

        }
    )
    
}

// more dept functions





module.exports = {
    viewDepartments
}
