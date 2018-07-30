'use strict'


//Body parser
const bodyParser = require('body-parser')
//express
const express= require('express')
const app = express()
const api = require('./rutas/rutas')
const exphbs = require('express-handlebars')

//body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/login',(req,res)=>{
    res.render(login)
}) 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/api',api)

app.use('/public', express.static('public'));

app.get("/", function(req, res){
    res.render("chart");
  });



app.get('/hola/:name',(req,res)=> {
    res.send({message: 'hola ${name}'})
    
})


module.exports = app