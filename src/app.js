import express from 'express';
import cors from 'cors';
import connection from './database/connection.js';
import usuariosRoutes from './routes/usuarios.routes.js'
import 'dotenv/config';


const app = express();
app.use(cors());

const variable = process.env.VALOR_DATO;
console.log(variable);
const PORT = process.env.PORT || 3000;

app.use('/usuarios', ruterUsuario);


// app.use(express.json());

// const [rows] = await connection.query(
//     "SELECT * FROM usuarios"
// );
//  const rows = 
//      {
//          id: 1,
//          nombre: "Juan",
//          email: "corre@corres"
//      }
//  console.log(rows);


app.get('/', async (req, res) => {
    const [rows] = await connection.query(
        "SELECT * FROM usuarios"
    );
    // const [rows] = 
    // {
    //     id: 1,
    //     nombre: "Juan",
    //     email: "corre@corres"
    // }
    res.json(rows);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en https://localhost:${PORT}}`);
})