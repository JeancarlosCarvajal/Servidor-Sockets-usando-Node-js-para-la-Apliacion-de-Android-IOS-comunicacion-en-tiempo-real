
// importamos el io desde el index
const {io} = require('../index');
const Bands = require('../models/bands');
const Band = require('../models/band');

// llamamos las clases de bandas
const bands = new Bands();

// anadir una nuewva banda
bands.addBand( new Band('Queen') );
bands.addBand( new Band('Bon Jovi') );
bands.addBand( new Band('Heroes del Silecio') );
bands.addBand( new Band('Metalica') ); 

// console.log(bands);

// Mensajes de Sockets. cliente es la computadores que se conecta al socket
io.on('connection', client => {
    console.log('Cliente Conectado (desde JS)');
  
    // enviar las bandas a los clientes que se conectan al socket
    client.emit('active-bands', bands.getBands());

    // escuchar el mensaje desde el cliente
    client.on('mensaje', payload => { 
      console.log('Mensaje !!!', payload); 
      io.emit('mensaje', {admin:'Nuevo mensaje II'}); 
    });
  
    // escuchar el emitir-mensaje desde el cliente
    client.on('emitir-mensaje', payload => { 
      console.log('Emitir Mensaje !!!', payload);  
      io.emit('emitir-mensaje', payload); // lo emite a todos
      // client.broadcast.emit('emitir-mensaje', payload); // lo emite a todos menos el que lo emitio
    });
  
  
  
  
    client.on('disconnect', () => {
      console.log('Cliente Desconectado (desde JS)');
    });
  
  }); 
  