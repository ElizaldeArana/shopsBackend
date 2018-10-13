const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const itemsSchema = new Schema({
  tipo : String,
  uso: String,
  etiqueta: [String],
  talla: String,
  descripcion: String,
  precio: Number,
  genero: String,
  uso: String,
  color: String,
  imagen: String
});

const clothes = mongoose.model('Clothes', itemsSchema);


module.exports = clothes;
