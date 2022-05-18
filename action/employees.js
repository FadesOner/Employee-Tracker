const { connect } = require("../db/connection")

async function viewEmployees(){

    const connection = await connect();


    const result = await connection.execute("SELECT * FROM employee");

    
    return result[0];

}

module.exports = {
    viewEmployees
}