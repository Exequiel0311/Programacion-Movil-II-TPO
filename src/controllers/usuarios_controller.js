import connection from "../database/connection.js";

export const getUsuarios = async (req, res) => {
    try {
        const [rows] = await connection.query(
            "SELECT * FROM usuarios"
        );
        return res.json(rows);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        return res.status(500).json({ error: "Error al obtener usuarios" });
    }
};

export const crearUsuario = async (req, res) => {
    try {
        const { nombre, email } = req.body;
        const [result] = await connection.query(
            "INSERT INTO usuarios (nombre, email) VALUES (?, ?)",
            [nombre, email]
        );
        return res.status(201).json({ id: result.insertId, nombre, email });
    } catch (error) {
        console.error("Error al crear usuario:", error);
        return res.status(500).json({ error: "Error al crear usuario" });
    }
};

export default { getUsuarios, crearUsuario };