require('colors');

const { guardarTareas, leerTareas } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
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
                console.log(tareas.listadoArray);
                // console.log(tareas._listadoDeTareas);
                break;
            default:
                break;
        }

        guardarTareas(tareas.listadoArray);

        await pausa();
    } while (opt !== '0')
    
};

main();