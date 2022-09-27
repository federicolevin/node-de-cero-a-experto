const Tarea = require("./tarea");

class Tareas {
    _listadoDeTareas = {};

    get listadoArray() {
        const listado = [];
        Object.keys(this._listadoDeTareas).forEach(key => {
            listado.push(this._listadoDeTareas[key]);
        });

        return listado;
    }

    constructor() {
        this._listadoDeTareas = {};
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listadoDeTareas[tarea.id] = tarea;
        });
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listadoDeTareas[tarea.id] = tarea;
    }
}

module.exports = Tareas;