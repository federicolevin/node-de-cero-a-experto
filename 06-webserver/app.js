const express = require('express');
const path = require('path');
const app = express();
const port = 7080;

// Servir contenido estatico
app.use(express.static('public/templated-roadtrip'));

app.get('/elements', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/templated-roadtrip/elements.html'));
});

app.get('/generic', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/templated-roadtrip/generic.html'));
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`06-webserver listening at http://localhost:${port}`);
});