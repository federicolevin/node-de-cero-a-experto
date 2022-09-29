const express = require('express');
const app = express();
const port = 7080;

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su propia ruta')
});

app.get('*', (req, res) => {
    res.send('Pagina no encontrada')
});

app.listen(port, () => {
    console.log(`06-webserver listening at http://localhost:${port}`);
});