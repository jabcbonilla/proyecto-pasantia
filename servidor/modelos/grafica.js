
'use strict'

const mongoose = require('mongoose')

var usuarioSchema = mongoose.Schema({
    nombre: {type:String,unique: true,lowercase: true},
    tipo: String,
    valores: Number[],
    colores: String[],
    detalles: String[],
    opt: {},
});


module.exports = mongoose.model('usuario',usuarioSchema)