const fs = require('fs');

const archivo = './db/data.json';

const guardarTareas = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerTareas = () => {
    if (!fs.existsSync(archivo)) {
        return null;
    }

    const tareas = fs.readFileSync(archivo, { encoding: 'utf-8' });
    return JSON.parse(tareas);
};

module.exports = {
    guardarTareas,
    leerTareas
}