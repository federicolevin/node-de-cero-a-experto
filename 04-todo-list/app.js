require('colors');

const { guardarTareas, leerTareas } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async() => {
    let opt = '';
    const tareas = new Tareas();
    const tareasArchivo = leerTareas();

    if (tareasArchivo) {
        tareas.cargarTareasFromArray(tareasArchivo);
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArray);
                tareas.toggleCompletadas(ids);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArray);
                if (id !== '0') {
                    const confirmacion = await confirmar('Seguro que queres borrar la tarea?');
                    if (confirmacion) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada');
                    }
                }
                break;
            default:
                break;
        }

        guardarTareas(tareas.listadoArray);

        await pausa();
    } while (opt !== '0')
    
};

main();