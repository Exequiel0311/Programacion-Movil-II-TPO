import express from 'express';
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
    res.send("Hola Mundo");
});

app.listen(1000,()=>{
console.log(`Servidor corriendo en https://localhots:3000`);
})