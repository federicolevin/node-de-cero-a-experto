const express = require('express');
const path = require('path');
const app = express();
const port = 7080;

app.set('view engine', 'hbs');

// Servir contenido estatico
app.use(express.static('public/templated-roadtrip'));

app.get('/', (request, response) => {
    response.render('home');
});

app.get('/elements', (request, response) => {
    response.sendFile(path.join(__dirname, '/public/templated-roadtrip/elements.html'));
});

app.get('/generic', (request, response) => {
    response.sendFile(path.join(__dirname, '/public/templated-roadtrip/generic.html'));
});

app.get('*', (request, response) => {
    response.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`06-webserver listening at http://localhost:${port}`);
});