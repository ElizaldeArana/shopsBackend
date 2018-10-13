const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const datos = require('./dataBase');
const modelo = require('./catalogoRopa');
const dbName = 'secondhand';

mongoose.open(`mongodb://localhost/${dbName}`)
var Modelo = mongoose.model('itemsSchema', modelo)
Modelo.create(datos, (err, result) => {
  if(err)
    throw err;
  mongoose.connection.close();
})
