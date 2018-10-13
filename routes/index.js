const express = require('express');
const router  = express.Router();
let Ropa = require('../models/catalogoRopa.js');
/* GET home page */
router.get('/api/catalogo', async (req, res, next) => {

    //let objetoBusqueda = JSON.parse(parametrosBusqueda);
    let ropa = await Ropa.find()
    console.log(ropa);
    res.json(ropa);

  });

  router.post("/create", (req, res) => {
    Ropa.create(req.body)
    .then(ropa => {
      res.status(200).json(ropa)
    })
  })



module.exports = router;
