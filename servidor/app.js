'use strict'


//Body parser
const bodyParser = require('body-parser')
//express
const express= require('express')
const app = express()
const api = require('./rutas/rutas')


//body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/login',(req,res)=>{
    res.render(login)
})

app.use('/api',api)






app.get('/hola/:name',(req,res)=> {
    res.send({message: 'hola ${name}'})
    
})


module.exports = app