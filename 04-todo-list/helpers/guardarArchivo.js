const fs = require('fs');

const guardarTareas = (data) => {
    const archivo = './db/data.json';

    fs.writeFileSync(archivo, JSON.stringify(data));
};

module.exports = {
    guardarTareas
}