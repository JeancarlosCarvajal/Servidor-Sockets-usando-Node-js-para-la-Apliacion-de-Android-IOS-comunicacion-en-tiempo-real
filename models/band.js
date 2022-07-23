// Descargar y usar el paquete uuid con el comando npm i uuid... v6 es la version. Fernando tenia la version 4 v4
const { v6: uuidV6 } = require('uuid');
// este uuid va generar un id enorme algo asi como akjsbcijabsc-aklscbiasbc-jasbhciuasbc


class Band {

    constructor( name = 'no-name' ) {

        this.id = uuidV6(); // se crea identificador unico con el paquete de uuid version 6
        this.name  = name;
        this.votes = 0;

    }
}


// aqui no es igual que el dart. aqui hay que especificar la exportacion
module.exports = Band;