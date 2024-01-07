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
      res.json({ mensaje: 'No hay turnos por atender' });
    } else {
      res.json(mostrar);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los turnos' });
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
 *               ID:
 *                 type: string
 *               provincia:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario agregado.
 *       500:
 *         description: Nose pudo agregar el usuario.
 */
router.post('/usuarios', async (req, res) => {
  try {
    const { nombre, apellido, ID, provincia } = req.body;
    const usuario = new Usuario({ nombre, apellido, ID, provincia });
    await usuario.save();
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Nose pudo agregar el usuario' });
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
 *               ID:
 *                 type: string
 *               provincia:
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
 *                   type: string
 *                 apellido:
 *                   type: string
 *                 ID:
 *                   type: string
 *                 provincia:
 *                   type: string
 *       500:
 *         description: Error al cambiar la información del usuario.
 */
router.put('/usuarios/:nombre', async (req, res) => {
  try {
    const { nombre: nombreParam } = req.params;
    const { nombre, apellido, ID, provincia } = req.body;
    const cambiar = await Usuario.findOneAndUpdate({ nombre: nombreParam }, { nombre, apellido, ID, provincia }, { new: true });
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

