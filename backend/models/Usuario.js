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
    ID:{
        type:String,
        require:true,
        trim: true, 
        unique: true, 
    },
    provincia:{
        type:String,
        require:true,
        trim: true, 
        unique: true, 
    },
});

module.exports = mongoose.model('Usuario', usuarioSchema);