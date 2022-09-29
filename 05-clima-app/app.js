require('dotenv').config()

const { inquirerMenu, pausa, leerInput } = require("./hekpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {
    const busquedas = new Busquedas();
    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                // Mostrar mensaje
                const ciudad = await leerInput('Ciudad: ');
                console.log(ciudad);

                // Buscar los lugares
                busquedas.buscarCiudad(ciudad);
                
                // Seleccionar el lugar
                
                // Clima
                
                // Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', );
                console.log('Lat: ', );
                console.log('Lng: ', );
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