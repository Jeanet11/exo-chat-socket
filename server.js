
const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var socket = require('socket.io');
var ent = require('ent');
var encode = require('ent/encode');
var decode = require('ent/decode');
var server = app.listen(8080);


var io = socket(server);app.use(express.static('public'));//Action sur la connection

io.on('connection', function(socket){
   socket.on('chat message', function(msg){
       io.emit('chat message', msg);;
       // console.log('message: ' + msg);
   })
   // console.log(encode('hello', { special: { l: true } }));

   console.log('User has connected');
   //Action à la deconnection
   socket.on('disconnect', function(){
       console.log('User is disconnected !')
   })
})


