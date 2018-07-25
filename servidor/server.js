const http = require('http');
const express = require('express');
const app = require('./app')
const config = require('./config');

const mongoose = require('mongoose');

//mongose

mongoose.connect(config.db, function (err) {
    if (err) {throw err; console.log('No conectado, verifique servidor');};
    console.log('exitosamente conectado');
 });


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log(`Server MongoDB running in ${config.db}/`)
});

var server = http.createServer(app).listen(config.port, function() {  
    console.log('server listening on port https://localhost:'+ config.port);
  });
