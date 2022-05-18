const { connect } = require("../db/connection")

async function viewRoles(){

    const connection = await connect();


    const result = await connection.execute("SELECT * FROM employee_role");

    
    return result[0];

}

module.exports = {
    viewRoles
}