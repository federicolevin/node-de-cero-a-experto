// setTimeout(() => {
//     console.log('callback');
// }, 1000);

const getUsuarioById = (id, callback) => {
    const user = {
        id,
        nombre: 'Federico'
    }

    setTimeout(() => {
        callback(user)
    }, 1000);
};

getUsuarioById(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});