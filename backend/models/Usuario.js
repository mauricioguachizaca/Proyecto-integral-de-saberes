const mongoose = require('mongoose');

// Definición del esquema para el modelo 'Usuario'
const usuarioSchema = new mongoose.Schema({
    // Campo 'nombre' de tipo String, requerido y sin espacios en blanco al inicio y al final
    nombre: {
        type: String,
        required: true,
        trim: true 
    },
    // Campo 'apellido' de tipo String, requerido y sin espacios en blanco al inicio y al final
    apellido:{
        type: String,
        required: true,
        trim: true 
    },
    // Campo 'cedula' de tipo String, requerido, sin espacios en blanco al inicio y al final, y único en la colección
    cedula:{
        type: String,
        required: true,
        trim: true, 
        unique: true, 
    },
    // Campo 'correo' de tipo String, requerido, sin espacios en blanco al inicio y al final, y único en la colección
    correo:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    // Campo 'provincia' de tipo String, requerido y sin espacios en blanco al inicio y al final
    provincia:{
        type: String,
        required: true,
        trim: true,
    },
    // Campo 'nombreusuario' de tipo String, requerido, sin espacios en blanco al inicio y al final, y único en la colección
    nombreusuario:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    // Campo 'password' de tipo String, requerido y sin espacios en blanco al inicio y al final
    password:{
        type: String,
        required: true,
        trim: true
    },
});

// Exporta el modelo 'Usuario' basado en el esquema definido
module.exports = mongoose.model('Usuario', usuarioSchema);
