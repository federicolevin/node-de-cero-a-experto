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

    listadoCompleto() {
        this.listadoArray.forEach( (tarea, i) => {
            const idx = `${i+1}`.green;
            const estado = (tarea.completadoEn) ? 'Completado'.green : 'Pendiente'.red;
            console.log(`${idx}. ${tarea.descripcion} :: ${estado}`);
            i++;
        });
    }
}

module.exports = Tareas;