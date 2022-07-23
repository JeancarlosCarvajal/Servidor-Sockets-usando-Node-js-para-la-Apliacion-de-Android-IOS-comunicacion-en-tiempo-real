// Descargar y usar el paquete uuid con el comando npm i uuid... Doc: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require('uuid');
// este uuid va generar un id enorme algo asi como 397413f2-ce5b-4e85-8e4d-8d391ae43b4b

class Band {

    constructor( name = 'no-name' ) {

        this.id = uuidv4(); // se crea identificador unico con el paquete de uuid
        this.name  = name;
        this.votes = 0;

    }
}


// aqui no es igual que el dart. aqui hay que especificar la exportacion
module.exports = Band;