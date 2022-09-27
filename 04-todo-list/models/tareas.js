const Tarea = require("./tarea");

class Tareas {
    _listadoDeTareas = {};

    constructor() {
        this._listadoDeTareas = {};
    }

    creaerTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listadoDeTareas[tarea.id] = tarea;
    }
}

module.exports = Tareas;