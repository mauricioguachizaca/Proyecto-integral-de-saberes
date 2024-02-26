const mongoose = require('mongoose');

const medidorSchema = new mongoose.Schema({
   nombredispositivo: {
      type: String,
      required: true,
      trim: true
   },
   cantidad: {
      type: Number, // Se cambia a Number para representar la cantidad
      required: true,
      trim: true
   },
   potencia: {
      type: Number, // Se cambia a Number para representar la potencia en vatios
      required: true,
      trim: true
   },
   tiempodeuso: {
      type: Number, // Se cambia a Number para representar el tiempo de uso diario en horas
      required: true,
      trim: true
   },
   numerodeuso: {
      type: Number, // Se cambia a Number para representar el número de días de uso al mes
      required: true,
      trim: true 
   },
   usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true
   }
});


module.exports = mongoose.model('Medidor', medidorSchema);
