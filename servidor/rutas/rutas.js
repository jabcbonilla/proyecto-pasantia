'use strict'

const express = require('express')
const api = express.Router()
const Cusuario = require('../controladores/Cusuario')


// MEtodos del modelo usuario
api.get('/usuarios',Cusuario.getUsuarios)
api.post('/singup',Cusuario.registrar)
api.get('/singin',Cusuario.Iniciarsesion)


module.exports = api