const http = require('http');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require ('path')

// levantar el servidor http
app.use(express.static(path.join(__dirname, 'pages')))
app.get('/', function (req,res){
  res.render('index.html')
})
app.get('/ejemplo', function (req,res){
  res.render('ejemplo1.html')
})
app.get('/otro', function (req,res){
  res.render('ejemplo2.html')
})

app.get('/grafica', function (req,res){
  res.render('graficas.html')
})
var server = http.createServer(app).listen(3000, function() {  
  console.log('Express server listening on port https://localhost:3000');
});
