const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Hasta que numero multiplicar la base'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base tiene que ser un numero';
        }
        if (isNaN(argv.hasta)) {
            throw 'Hasta tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;