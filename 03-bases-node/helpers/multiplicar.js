const fs = require('fs');

const crearArchivo = async(base = 0) => {
    try {
        console.log('====================');
        console.log(`Tabla del ${base}`);
        console.log('====================');

        let salida = '';
        
        for (let i = 1; i <= 10; i++) {
            salida += (`${base} x ${i} = ${base*i}\n`);
        }
        
        console.log(salida);
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `table-${base}.txt`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};