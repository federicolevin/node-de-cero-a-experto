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

    borrarTarea(id = '') {
        if (this._listadoDeTareas[id]) {
            delete this._listadoDeTareas[id];
        }
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
        });
    }

    listarPendientesCompletadas(completadas = true) {
        let i = 1;
        this.listadoArray.forEach( (tarea) => {
            if (completadas && tarea.completadoEn) {
                console.log(`${(i + '.').green} ${tarea.descripcion} :: ${'Completado'.green}`);
                i++;
            } 
            if (!completadas && !tarea.completadoEn) {
                console.log(`${(i + '.').green}. ${tarea.descripcion} :: ${'Pendiente'.red}`);
                i++;
            }
        });
    }

    toggleCompletadas(ids = []) {
        ids.forEach(id => {
            const tarea = this._listadoDeTareas[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArray.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this._listadoDeTareas[tarea.id].completadoEn = null;
            }
        });
    }
}

module.exports = Tareas;