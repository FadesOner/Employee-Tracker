const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "Fades4434.",
    database: "employees"
});