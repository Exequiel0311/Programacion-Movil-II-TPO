import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "primera"
});

console.log("Conexion exitosa a MySQL ✔");
export default connection;