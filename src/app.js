import express from 'express';
import cors from 'cors';
import connection from './database/connection.js';
import usuariosRoutes from './routes/usuarios_routes.js'
import 'dotenv/config';


const app = express();
app.use(cors());

const variable = process.env.VALOR_DATO;
console.log(variable);
const PORT = process.env.PORT || 3000;

app.use('/usuarios', usuariosRoutes);

app.get('/', async (req, res) => {
    const [rows] = await connection.query(
        "SELECT * FROM usuarios"
    );
    res.json(rows);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en https://localhost:${PORT}`);
})