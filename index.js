const express = require('express');
const path = require('path');
require('dotenv').config();


// App de express
const app = express();


// Creamos el servidor de Sockets en Node
const server = require('http').createServer(app);
const io = require('socket.io')(server);


// Mensajes de Sockets. cliente es la computadores que se conecta al socket
io.on('connection', client => {
  
  console.log('Cliente Conectado (desde JS)');

  // escuchar el mensaje desde el cliente
  client.on('mensaje', payload => {

    console.log('Mensaje !!!', payload); // ojo payload ya no se usa
    io.emit('mensaje', {admin:'Nuevo mensaje'})

  });






  client.on('disconnect', () => {
    console.log('Cliente Desconectado (desde JS)');
  });

});
// server.listen(3000);


// Path publico 
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));



server.listen(process.env.PORT, ( err ) => {

    if(err) throw new Error(err);

    console.log('Servidor corriendo en puerto !!!!!', process.env.PORT);

});