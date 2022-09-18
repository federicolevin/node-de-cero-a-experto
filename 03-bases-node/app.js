const fs = require('fs');

const tablaDeMultiplicacion = (base) => {
    console.clear();
    console.log('====================');
    console.log(`Tabla del ${base}`);
    console.log('====================');

    let salida = '';
    
    for (let i = 1; i <= 10; i++) {
        // console.log(`${base} x ${i} = ${base*i}`);
        salida += (`${base} x ${i} = ${base*i}\n`);
    }
    
    fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        if (err) throw err;
        console.log(`Table del ${base} creada.`);
    });

    console.log(salida);
};

tablaDeMultiplicacion(10);