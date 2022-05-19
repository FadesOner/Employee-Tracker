const mysql = require('mysql2/promise');

function connect(){
    return mysql.createConnection(
        {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Fades4434.",
        database: "employees"
    });
}

module.exports = {
    connect
}
// by creating a connection i will be able to connect all the files in a easier way.
