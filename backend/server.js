const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const cookieParser = require('cookie-parser')
const apiRoutes = require('./api');
const swaggerSetup = require('./swagger');


const app = express();
app.use(cookieParser());
const PORT = 3000;

const corsOptions = {
  origin: 'http://localhost:5173', // Reemplaza esto con la URL de tu proyecto de React
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Habilita el intercambio de cookies en las solicitudes cruzadas (CORS)
};

app.use(cors(corsOptions));

// Conexión a la base de datos MongoDB usando Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/prueba', {
  useNewUrlParser: true, // Configuración para usar el nuevo analizador de URL de MongoDB
  useUnifiedTopology: true, // Configuración para usar el nuevo motor de detección de servidores de MongoDB
})
.then(() => {
  // Si la conexión es exitosa, se ejecuta este bloque de código
  console.log('Conexión exitosa a la base de datos');

  // Configuración de express para analizar solicitudes JSON
  app.use(express.json());

  // Montar las rutas de la API en el punto de montaje '/api'
  app.use('/api', apiRoutes);

  // Configuración de Swagger para la documentación de la API
  swaggerSetup(app);

  // Iniciar el servidor express y escuchar en el puerto especificado
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
  });
})
.catch(err => console.error('Error al conectar a la base de datos', err));

// Middleware para manejar errores en el servidor
app.use((err, req, res, next) => {
  // Imprimir el stack de error en la consola del servidor
  console.error(err.stack);

  // Responder al cliente con un estado de error 500 (Internal Server Error)
  res.status(500).send('Error del servidor');
});
