// var voteSchema = new mongoose.Schema({ ip: 'String' }); 
// var choiceSchema = new mongoose.Schema({ text: String, votes: [voteSchema] }); exports.PollSchema = new mongoose.Schema({ question: { type: String, required: true }, choices: [choiceSchema] });

'use strict'

const mongoose = require('mongoose')

var usuarioSchema = mongoose.Schema({
    email: {type:String,unique: true,lowercase: true},
    alias:String,
    nombre: String,
    password: String,
    created: { 
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('usuario',usuarioSchema)