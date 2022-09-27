const { v4: uuid } = require('uuid');

class Tarea {
    id = '';
    descripcion = '';
    completadoEn = null;

    constructor(descripcion) {
        this.id = uuid();
        this.descripcion = descripcion;
    }
}

module.exports = Tarea;