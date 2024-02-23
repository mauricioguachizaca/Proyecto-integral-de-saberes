const express = require('express');
const router = express.Router();
const Usuario = require('./models/Usuario');
const Medidor = require('./models/Medidor')
const bcrypt = require('bcryptjs');
const jwt =  require('jsonwebtoken')

//rutas para usuarios [para sus peticiones]
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
 *     summary: Crea un nuevo usuario y genera un token de autenticación.
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
 *               nombreusuario:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario agregado correctamente y token generado.
 *       400:
 *         description: Datos de usuario duplicados o inválidos.
 *       500:
 *         description: Error al agregar el usuario o al generar el token.
 */
router.post('/usuarios', async (req, res) => {
  try {
    const { nombre, apellido, cedula, correo, provincia, nombreusuario, password } = req.body;

    // Verifica si el correo ya está en uso
    const correoExistente = await Usuario.findOne({ correo });
    if (correoExistente) {
      return res.status(400).json({ message: 'Correo ya registrado' });
    }

    // Verifica si la cédula ya está en uso
    const cedulaExistente = await Usuario.findOne({ cedula });
    if (cedulaExistente) {
      return res.status(400).json({ message: 'Cédula ya registrada' });
    }

    // Verifica si el nombre de usuario ya está en uso
    const usuarioExistente = await Usuario.findOne({ nombreusuario });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'Nombre de usuario ya en uso' });
    }

    // Encripta la contraseña antes de almacenarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea y guarda el nuevo usuario con la contraseña encriptada
    const nuevoUsuario = new Usuario({ nombre, apellido, cedula, correo, provincia, nombreusuario, password: hashedPassword });
    const usuarioGuardado = await nuevoUsuario.save();

    // Genera el token para el nuevo usuario
    jwt.sign({
      id:nuevoUsuario._id,
    },
      "secret123",
    {
      expiresIn: "1d",
    },
      (err, token) => {
    if (err) {
    console.error('Error al generar el token:', err);
    return res.status(500).json({ error: 'Error al generar el token' });
  }
  // Guarda el token en una cookie con nombre 'token'
  res.cookie('token', token, { expires: new Date(Date.now() + 24 * 60 * 60 * 1000), httpOnly: true });
  
  // Usuario agregado correctamente y token generado
  res.status(201).json({ usuario: usuarioGuardado, token });
});

  } catch (error) {
    console.error('Error al agregar el usuario:', error);
    res.status(500).json({ error: 'No se pudo agregar el usuario' });
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
    const cambiar = await Usuario.findOneAndUpdate({ nombre: nombreParam }, { nombre, apellido, cedula, correo, provincia, nombreusuario, password: hashedPassword }, { new: true });
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

//logica de iniciar y cerrar cesion
/**
 * @swagger
 * /api/verificarCredenciales:
 *   post:
 *     summary: Verifica las credenciales del usuario y guarda el token en una cookie.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombreusuario:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Credenciales válidas.
 *       401:
 *         description: Credenciales inválidas.
 *       500:
 *         description: Error en la verificación de credenciales.
 */
router.post('/verificarCredenciales', async (req, res) => {
  try {
    const { nombreusuario, password } = req.body;

    // Busca el usuario en la base de datos por nombre de usuario
    const usuario = await Usuario.findOne({ nombreusuario });

    if (usuario) {
      // Compara la contraseña proporcionada con la almacenada en la base de datos
      const isValidPassword = await bcrypt.compare(password, usuario.password);

      if (isValidPassword) {
        // Credenciales válidas
        const token = createAccessToken({ id: usuario._id });
        res.cookie('token', token,{ expires: new Date(Date.now() + 24 * 60 * 60 * 1000), httpOnly: true });
        res.json({ isValidUser: true });
      } else {
        // Credenciales inválidas
        res.status(401).json({ isValidUser: false });
      }
    } else {
      // Usuario no encontrado
      res.status(401).json({ isValidUser: false });
    }
  } catch (error) {
    console.error('Error al verificar credenciales:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});
/**
 * @swagger
 * /api/cerracredenciales:
 *   post:
 *     summary: Cierra las credenciales del usuario y elimina la cookie del token.
 *     responses:
 *       200:
 *         description: Credenciales cerradas correctamente.
 */
router.post('/cerracredenciales', async (req, res) => {
  try {
    // Elimina la cookie del token
    res.clearCookie('token');
    res.sendStatus(200);
  } catch (error) {
    console.error('Error al cerrar las credenciales:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});
function createAccessToken(payload) {
  return jwt.sign(payload, "secret123", { expiresIn: "1d" });
}
/**
 * @swagger
 * /api/perfiles:
 *   get:
 *     summary: Obtiene los perfiles de usuario.
 *     responses:
 *       200:
 *         description: Perfiles obtenidos correctamente.
 *       401:
 *         description: No hay token, autorización denegada.
 *       403:
 *         description: Token inválido.
 *       500:
 *         description: Error al obtener los perfiles.
 */
router.get('/perfiles', async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "No hay token, autorización denegada" });
    }

    jwt.verify(token, "secret123", async (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Token inválido" });
      }
      
      // Accede a la información del usuario desde decoded
      const usuario = await Usuario.findById(decoded.id);

      if (!usuario) {
        return res.status(400).json({ message: "Usuario no encontrado" });
      }

      return res.json({
        id: usuario._id,
        nombre: usuario.nombre
        // Agrega más propiedades del usuario según tus necesidades
      });
    });
  } catch (error) {
    console.error("Error al obtener los perfiles:", error);
    res.status(500).json({ error: "Error al obtener los perfiles" });
  }
});

// LAS RUTAS DE MEDIDOR [PARA SU APIS]

/**
 * @swagger
 * /api/medidor:
 *   get:
 *     summary: Obtiene información de todos los medidores (protegido por token).
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Información de los medidores obtenida correctamente.
 *       401:
 *         description: No hay token, autorización denegada.
 *       403:
 *         description: Token inválido.
 *       500:
 *         description: Error al obtener la información de los medidores.
 */
router.get('/medidor', verifyToken, async (req, res) => {
  try {
    const medidores = await Medidor.find({
      usuario: req.usuario.id
    });
    res.json(medidores);
  }
   catch (error) {
    console.error("Error al obtener la información de los medidores:", error);
    res.status(500).json({ error: "Error al obtener la información de los medidores" });
  }
});
/**
 * @swagger
 * /api/medidor:
 *   post:
 *     summary: Crea un nuevo medidor.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombredispositivo:
 *                 type: string
 *               cantidad:
 *                 type: number
 *               potencia:
 *                 type: number
 *               tiempodeuso:
 *                 type: number
 *               numerodeuso:
 *                 type: number
 *     responses:
 *       201:
 *         description: Medidor creado correctamente.
 *       500:
 *         description: Error al crear el medidor.
 */
router.post('/medidor', verifyToken, async (req, res) => {
  try {
    const { nombredispositivo, cantidad, potencia, tiempodeuso, numerodeuso } = req.body;
    console.log(req.usuario)
    const nuevoMedidor = new Medidor({ nombredispositivo, cantidad, potencia, tiempodeuso, numerodeuso, usuario: req.usuario.id });
    const medidorGuardado = await nuevoMedidor.save();
    res.status(201).json(medidorGuardado);
  } catch (error) {
    console.error("Error al crear el medidor:", error);
    res.status(500).json({ error: "Error al crear el medidor" });
  }
});
/**
 * @swagger
 * /api/medidor/{id}:
 *   get:
 *     summary: Obtiene información de un medidor por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del medidor.
 *     responses:
 *       200:
 *         description: Información del medidor obtenida correctamente.
 *       404:
 *         description: Medidor no encontrado.
 *       500:
 *         description: Error al obtener la información del medidor.
 */
router.get('/medidor/:id', verifyToken, async (req, res) => {
  try {
    const medidor = await Medidor.findById(req.params.id).populate('usuario');
    if (!medidor) {
      return res.status(404).json({ message: "Medidor no encontrado" });
    }
    res.json(medidor);
  } catch (error) {
    console.error("Error al buscar el medidor:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

/**
 * @swagger
 * /api/medidor/{id}:
 *   delete:
 *     summary: Elimina un medidor por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del medidor a eliminar.
 *     responses:
 *       200:
 *         description: Medidor eliminado correctamente.
 *       404:
 *         description: Medidor no encontrado.
 *       500:
 *         description: Error al eliminar el medidor.
 */
router.delete('/medidor/:id', verifyToken, async (req, res) => {
  try {
    const medidor = await Medidor.findByIdAndDelete(req.params.id);
    if (!medidor) {
      return res.status(404).json({ message: "Medidor no encontrado" });
    }
    res.json({ message: "Medidor eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el medidor:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
/**
 * @swagger
 * /api/medidor/{id}:
 *   put:
 *     summary: Actualiza un medidor por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del medidor a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: number
 *               potencia:
 *                 type: number
 *               tiempodeuso:
 *                 type: number
 *               numerodeuso:
 *                 type: number
 *     responses:
 *       200:
 *         description: Medidor actualizado correctamente.
 *       404:
 *         description: Medidor no encontrado.
 *       500:
 *         description: Error al actualizar el medidor.
 */
router.put('/medidor/:id', verifyToken, async (req, res) => {
  try {
    const medidor = await Medidor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!medidor) {
      return res.status(404).json({ message: "Medidor no encontrado" });
    }

    res.json(medidor);
  } catch (error) {
    console.error("Error al actualizar el medidor:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
/**
 * @swagger
 * /api/verificartoken:
 *   get:
 *     summary: Verifica si el token proporcionado es válido.
 *     description: Verifica si el token proporcionado en las cookies de la solicitud es válido y pertenece a un usuario registrado.
 *     responses:
 *       200:
 *         description: Token válido y usuario encontrado.
 *       401:
 *         description: No se proporcionó ningún token, token inválido o usuario no encontrado.
 *       500:
 *         description: Error interno del servidor al verificar el token.
 */
router.get('/verificartoken', async (req, res) => {
  try {
    const { token } = req.cookies;

    if (!token) return res.status(401).json({ message: "No se proporcionó ningún token" });
    jwt.verify(token, "secret123", async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Token inválido" });
      }

      // Verificar si el usuario existe
      const usuario = await Usuario.findById(decoded.id);
      if (!usuario) {
        return res.status(401).json({ message: "Usuario no encontrado" });
      }

      // Token y usuario válidos
      return res.json({ message: "Token válido", usuario });
    });
  } catch (error) {
    console.error("Error al verificar el token:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
function verifyToken(req, res, next) {
  const token = req.cookies ? req.cookies.token : null;

  if (!token) {
    return res.status(401).json({ message: "No hay token, autorización denegada" });
  }

  jwt.verify(token, "secret123", async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido" });
    }

    // Verificar si el usuario existe
    const usuario = await Usuario.findById(decoded.id);
    if (!usuario) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    // Adjuntar el usuario decodificado al objeto de solicitud
    req.usuario = usuario;
    next();
  });
}
module.exports = router;