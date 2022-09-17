console.log('Inicio de programa');

setTimeout(() => {
    console.log('1er timeout');
}, 3000);

setTimeout(() => {
    console.log('2do timeout');
}, 0);

setTimeout(() => {
    console.log('3er timeout');
}, 0);

console.log('Fin de programa');