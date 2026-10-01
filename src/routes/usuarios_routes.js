import express from 'express';
import { getUsuarios, crearUsuario } from '../controllers/usuarios_controller.js';

const router = express.Router();

router.get('/', getUsuarios);
router.post('/', crearUsuario);

export default router;