const express = require('express');
const app = express();
const port = 7080;

// Servir contenido estatico
app.use(express.static('public'));

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su propia ruta')
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`06-webserver listening at http://localhost:${port}`);
});