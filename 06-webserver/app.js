require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public/templated-roadtrip'));

const params = {
    nombre: 'Federico Levin',
    titulo: 'Curso de Node'
}

app.get('/', (request, response) => {
    response.render('home', params);
});

app.get('/elements', (request, response) => {
    response.render('elements', params)
});

app.get('/generic', (request, response) => {
    response.render('generic', params)
});

app.get('*', (request, response) => {
    response.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`06-webserver listening at http://localhost:${port}`);
});