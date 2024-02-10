const mongoose = require('mongoose');

const medidorSchema = new mongoose.Schema({
   nombredispositivo: {
      type: String,
      required: true,
      trim: true
   },
   cantidad: {
      type: Number, // Se cambia a Number para representar la cantidad
      required: true
   },
   potencia: {
      type: Number, // Se cambia a Number para representar la potencia en vatios
      required: true
   },
   tiempodeuso: {
      type: Number, // Se cambia a Number para representar el tiempo de uso diario en horas
      required: true
   },
   numerodeuso: {
      type: Number, // Se cambia a Number para representar el número de días de uso al mes
      required: true
   }
});

module.exports = mongoose.model('Medidor', medidorSchema);
