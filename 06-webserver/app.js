const http = require('http');

const server = http.createServer((request, response) => {
    response.write('Hola Mundo');
    response.end();
});

server.listen(7080);

console.log('Escuchando el puerto 7080');