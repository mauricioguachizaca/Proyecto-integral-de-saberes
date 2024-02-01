const mongoose = require('mongoose');


const medidorSchema = new mongoose.Schema({
   
   nombredispositivo:{
    type: String,
    require: true,
    trim: true,
   },
   cantidad:{
    type: Number ,
    require: true,
    trim: true
   },
   potencia:{
    type: Number ,
    require: true,
    trim: true
   },
   tiempodeusu:{
    type: Number ,
    require: true,
    trim: true
   },
   numerodeuso:{
    type: Number ,
    require: true,
    trim: true
   }

})
module.exports = mongoose.model('Medidor', medidorSchema)