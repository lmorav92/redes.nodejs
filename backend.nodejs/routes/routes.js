import  express from 'express';
import { loginIn, signUp } from '../controllers/loginController.js';
import { usuarioRolPaginas } from '../controllers/rolPaginaController.js';
import { createUsuario, deleteUsuario, getAllUsuarios, getUsuario, updateUsuario } from '../controllers/usuarioController.js';

const router = express.Router();

router.get("/usuarios/",getAllUsuarios);
router.get("/usuarios/:id",getUsuario);
router.post("/usuarios/",createUsuario);
router.put("/usuarios/:id",updateUsuario);
router.delete("/usuarios/:id",deleteUsuario);
router.get("/",loginIn);
router.post("/signup/",signUp);
router.get("/rol_paginas/:id",usuarioRolPaginas);

export default router;