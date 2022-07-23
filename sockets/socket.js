
// importamos el io desde el index
const {io} = require('../index');

// Mensajes de Sockets. cliente es la computadores que se conecta al socket
io.on('connection', client => {
  
    console.log('Cliente Conectado (desde JS)');
  
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
  