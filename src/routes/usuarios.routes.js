import express from 'express';
import connection from '../database/connection.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const [rows] = await connection.query(
        "SELECT * FROM usuarios");

    res.json(rows);
});

export default router;