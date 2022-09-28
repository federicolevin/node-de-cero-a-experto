const { leerInput } = require("./hekpers/inquirer");

const main = async() => {
    const texto = await leerInput('Ingresar: ');
    console.log(texto);
};

main();