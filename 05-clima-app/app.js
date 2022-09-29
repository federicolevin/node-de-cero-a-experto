require('dotenv').config()

const { inquirerMenu, pausa, leerInput, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {
    const busquedas = new Busquedas();
    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                // Mostrar mensaje
                const ciudadABuscar = await leerInput('Ciudad: ');

                // Buscar los lugares
                const resultadosCiudad = await busquedas.buscarCiudad(ciudadABuscar);
            
                // Seleccionar el lugar
                const id = await listarLugares(resultadosCiudad);
                if (id === '0') { continue; }
                const lugarSeleccionado = resultadosCiudad.find(lugar => lugar.id === id);

                // Guardar en DB
                busquedas.agregarHistorial(lugarSeleccionado.nombre);

                // Clima
                const clima = await busquedas.buscarClima(lugarSeleccionado.lat, lugarSeleccionado.lng);
                
                // Mostrar resultados
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSeleccionado.nombre.green);
                console.log('Lat: ', lugarSeleccionado.lat);
                console.log('Lng: ', lugarSeleccionado.lng);
                console.log('Clima: ', clima.desc.green);
                console.log('Temperatura: ', clima.temp);
                console.log('Mínima: ', clima.min);
                console.log('Máxima: ', clima.max);
                break;
            case 2:
                busquedas.historial.forEach((lugar, i) => {
                    const idx = `${i}.`.green;
                    console.log(`${idx} ${lugar}`);
                });
                break;
            default:
                break;
        }

        if (opt !== 0) await pausa();
    } while (opt !== 0);
};

main();