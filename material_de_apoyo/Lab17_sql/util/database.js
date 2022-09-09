const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'octopus',
    password: ''
});

module.exports = pool.promise(); // manejo de conexiones con la base de datos.