const mysql = require('mysql2/promise') //Se usa la dependencia de MYSQL2 que instalamos

require('dotenv').config();

async function conexion() {
    const db = await mysql.createConnection({ //Pedimos datos establecidos en el env por medio de una pool
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT)
    });
    return db;
}

module.exports = conexion;