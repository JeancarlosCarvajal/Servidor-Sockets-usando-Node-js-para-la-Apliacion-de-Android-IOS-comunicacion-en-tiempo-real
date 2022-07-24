
// importamos el io desde el index
const {io} = require('../index');
const Bands = require('../models/bands');
const Band = require('../models/band');

// llamamos las clases de bandas
const bands = new Bands();

// anadir una nuewva banda. aqui se crean
bands.addBand( new Band('Queen') );
bands.addBand( new Band('Bon Jovi') );
bands.addBand( new Band('Heroes del Silecio') );
bands.addBand( new Band('Metalica') ); 
bands.addBand( new Band('Mana') ); 

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

    // escuchar el vote-band desde el cliente
    client.on('vote-band', payload => { 
      console.log('Vote por:', payload);  
      bands.voteBand(payload.id);
      io.emit('active-bands', bands.getBands()); // lo emite a todos
      // client.broadcast.emit('active-bands', payload); // lo emite a todos menos el que lo emitio
    });

    // escuchar el add-band desde el cliente
    client.on('add-band', payload => { 
      console.log('add por:', payload);  
      bands.addBand(new Band(payload.name));
      io.emit('active-bands', bands.getBands()); // lo emite a todos
      // client.broadcast.emit('active-bands', payload); // lo emite a todos menos el que lo emitio
    });

    // escuchar el delete-band desde el cliente
    client.on('delete-band', payload => { 
      console.log('delete a:', payload);  
      bands.deleteBand(payload.id);
      io.emit('active-bands', bands.getBands()); // lo emite a todos
      // client.broadcast.emit('active-bands', payload); // lo emite a todos menos el que lo emitio
    });
  
    // // escuchar el emitir-mensaje desde el cliente
    // client.on('emitir-mensaje', payload => { 
    //   console.log('Emitir Mensaje !!!', payload);  
    //   io.emit('emitir-mensaje', payload); // lo emite a todos
    //   // client.broadcast.emit('emitir-mensaje', payload); // lo emite a todos menos el que lo emitio
    // });
  
  
  
  
    client.on('disconnect', () => {
      console.log('Cliente Desconectado (desde JS)');
    });
  
  }); 
  