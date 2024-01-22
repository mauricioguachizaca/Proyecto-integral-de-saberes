const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const apiRoutes = require('./api');
const swaggerSetup = require('./swagger');


const app = express();
const PORT = 3000;

const corsOptions = {
  origin: 'http://localhost:5173', // Reemplaza esto con la URL de tu proyecto de React
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Habilita el intercambio de cookies en las solicitudes cruzadas (CORS)
};

app.use(cors(corsOptions));

mongoose.connect('mongodb://127.0.0.1:27017/prueba', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
    app.use(express.json());
    app.use('/api', apiRoutes);
    swaggerSetup(app); // Configuración de Swagger
    app.listen(PORT, () => {
      console.log(`Servidor iniciado en el puerto ${PORT}`);
    });
  })
  .catch(err => console.error('Error al conectar a la base de datos', err));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error del servidor');
});

