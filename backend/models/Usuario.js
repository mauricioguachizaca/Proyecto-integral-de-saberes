const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true 
    },
    apellido:{
          type:String,
          require: true,
          trim: true 
    },
    cedula:{
        type:String,
        require:true,
        trim: true, 
        unique: true, 
    },
    correo:{
        type:String,
        require:true,
        trim: true,
        unique: true,
    },
    provincia:{
        type:String,
        require:true,
        trim: true,
    },
    nombreusuario:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        trim:true
    }

});

module.exports = mongoose.model('Usuario', usuarioSchema);