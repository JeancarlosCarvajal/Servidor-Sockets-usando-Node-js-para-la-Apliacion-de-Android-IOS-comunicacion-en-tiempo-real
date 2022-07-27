const {io} = require('../index');




// Mensajes de Sockets. cliente es la computadores que se conecta al socket
io.on('connection', client => {
    console.log('Cliente Conectado (desde JS)');
    client.on('disconnect', () => {
        console.log('Cliente Desconectado (desde JS)');
    });



    // escuchar el mensaje desde el cliente
    client.on('mensaje', payload => {
        console.log('Mensaje !!!', payload); // ojo payload ya no se usa
        io.emit('mensaje', {admin:'Nuevo mensaje'});
    });
 

});
// server.listen(3000);