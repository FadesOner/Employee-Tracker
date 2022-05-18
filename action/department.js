const { connect } = require("../db/connection")

async function viewDepartments(){

    const connection = await connect();


    const result = await connection.execute("SELECT * FROM department");

    
    return result[0];

}

// more dept functions





module.exports = {
    viewDepartments
}