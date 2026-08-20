import express from 'express';
import cors from 'cors';
import connection from './database/connection.js';

const app = express();

const [rows] = await connection.query(
    "SELECT * FROM usuarios"
);

console.log(rows);


// app.get('/', (req, res) => {
//     res.send("Hola Mundo");
// });

// app.listen(1000,()=>{
// console.log(`Servidor corriendo en https://localhots:3000`);
// })