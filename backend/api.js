const express = require('express');
const router = express.Router();
const Usuario = require('./models/Usuario');

/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     summary: Obtiene todos los usuarios.
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida correctamente.
 *       500:
 *         description: Error al obtener los usuarios.
 */
router.get('/usuarios', async (req, res) => {
  try {
    const mostrar = await Usuario.find();
    if (mostrar.length === 0) {
      res.json({ mensaje: 'No hay usuarios' });
    } else {
      res.json(mostrar);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al ingresar el usuario' });
  }
});

/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     summary: Crea un nuevo usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               cedula:
 *                 type: string
 *               correo:
 *                 type: string
 *               provincia:
 *                 type: string
 *               nombre de usuario:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario agregado.
 *       500:
 *         description: Nose pudo agregar el usuario.
 */
router.post('/usuarios', async (req, res) => {
  try {
    const { nombre, apellido, cedula, correo, provincia, nombreusuario, password } = req.body;
    const usuario = new Usuario({ nombre, apellido, cedula, correo, provincia, nombreusuario, password });
    await usuario.save();
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Nose pudo agregar el usuario' });
  }
});
/**
 * @swagger
 * /api/usuarios/{nombre}:
 *   get:
 *     summary: Obtiene un usuario por su nombre.
 *     parameters:
 *       - in: path
 *         name: nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del usuario a obtener.
 *     responses:
 *       200:
 *         description: Usuario obtenido correctamente.
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error al obtener el usuario.
 */
router.get('/usuarios/:nombre', async (req, res) => {
  try {
    const { nombre } = req.params;
    const usuario = await Usuario.findOne({ nombre });
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});


/**
 * @swagger
* /api/usuarios/{nombre}:
 *   put:
 *     summary: Actualizar un usuario.
 *     parameters:
 *       - in: path
 *         name: nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del usuario a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               cedula:
 *                 type: string
 *               correo:
 *                 type: string
 *               provincia:
 *                 type: string
 *               nombre de usuario:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               cedula:
 *                 type: string
 *               correo:
 *                 type: string
 *               provincia:
 *                 type: string
 *               nombre de usuario:
 *                 type: string
 *               password:
 *                 type: string
 *       500:
 *         description: Error al cambiar la información del usuario.
 */
router.put('/usuarios/:nombre', async (req, res) => {
  try {
    const { nombre: nombreParam } = req.params;
    const { nombre, apellido, cedula, correo, provincia, nombreusuario, password } = req.body;
    const cambiar = await Usuario.findOneAndUpdate({ nombre: nombreParam }, { nombre, apellido, cedula, correo, provincia, nombreusuario, password }, { new: true });
    res.json(cambiar);
  } catch (error) {
    res.status(500).json({ error: 'Error al cambiar la información del usuario' });
  }
});


/**
 * @swagger
 * /api/usuarios/{nombre}:
 *   delete:
 *     summary: Elimina un usuario existente.
 *     parameters:
 *       - in: path
 *         name: nombre
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del usuario a eliminar.
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente.
 *       500:
 *         description: Error al eliminar el usuario.
 */
router.delete('/usuarios/:nombre', async (req, res) => {
  try {
    const { nombre } = req.params;
    await Usuario.findOneAndRemove({ nombre });
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

module.exports = router;

