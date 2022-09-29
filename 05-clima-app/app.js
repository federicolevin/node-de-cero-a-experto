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
                const lugarSeleccionado = resultadosCiudad.find(lugar => lugar.id === id);

                // Clima
                
                // Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSeleccionado.nombre);
                console.log('Lat: ', lugarSeleccionado.lat);
                console.log('Lng: ', lugarSeleccionado.lng);
                console.log('Temperatura: ', );
                console.log('Mínima: ', );
                console.log('Máxima: ', );
                break;
        
            default:
                break;
        }

        if (opt !== 0) await pausa();
    } while (opt !== 0);
};

main();