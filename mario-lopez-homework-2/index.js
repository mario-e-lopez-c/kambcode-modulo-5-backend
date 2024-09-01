import Chance from 'chance';

const chance = new Chance();

//Generate random data
const nombre = chance.name();
const correo = chance.email();
const fechaNacimiento = chance.birthday();
const telefono = chance.phone();


//imprimir los datos aleatorios generados   
console.log("Datos aleatorios generados: ");
console.log("Nombre: ", nombre);
console.log("Correo electronico: ", correo);
console.log("Fecha de nacimiento: ", fechaNacimiento);
console.log("Telefono: ", telefono);