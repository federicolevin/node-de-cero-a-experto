const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .argv;

console.clear();
// console.log(argv);

crearArchivo(argv.base, argv.listar)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado.`))
    .catch(err => console.log(err));