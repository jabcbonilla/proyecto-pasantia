'use strict'

const express = require('express')
const api = express.Router()
const Cusuario = require('../controladores/Cusuario')
const Cfuel = require('../controladores/Cfuel')

// MEtodos del modelo usuario
api.get('/usuarios',Cusuario.getUsuarios)
api.get('/singup',Cusuario.registrar)
api.get('/singin',Cusuario.Iniciarsesion)

//metodos del fuel
api.get("/fuel",Cfuel.getfuel)
api.get("/insertfuel",Cfuel.insertfuel)
api.get("/fp", function(req, res){
    res.render("chartbd");
  });


module.exports = api