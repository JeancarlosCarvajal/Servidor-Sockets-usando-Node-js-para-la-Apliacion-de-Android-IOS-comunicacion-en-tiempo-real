const express = require('express');
const path = require('path');
require('dotenv').config();


// App de express
const app = express();


// Creamos el servidor de Sockets en Node
const server = require('http').createServer(app);
// exportamos el io al archivo de socket para poder exportarlo desde /sockets/sockets.js
module.exports.io = require('socket.io')(server);
// incuimos el archivo de socket que separamos para mayor orden en el proyecto
require('./sockets/socket.js')


// Path publico 
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));



server.listen(process.env.PORT, ( err ) => { 
    if(err) throw new Error(err); 
    console.log('Servidor corriendo en puerto !!!!!', process.env.PORT); 
});