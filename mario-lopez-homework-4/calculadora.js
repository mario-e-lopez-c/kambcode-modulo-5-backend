//calculadora.js

//Se capturan los argumentos desde la línea de comandos (a partir del índice 2)
const args = process.argv.slice(2);

if(args.length !== 3){
    console.log('Uso: node calculadora.js <número1> <operacion> <número2>');
    console.log('Operaciones soportadas: +, -, *, /');
    console.log('Si usas la operacion multiplicación, por favor escribe el asterisco dentro de comillas ');

    process.exit(1); //salimos del proceso si hay un error
}
//extraemos los valores
const num1 = parseFloat(args[0]);
const operacion = args[1];
const num2 = parseFloat(args[2]);

//Verificamos que los numeros sean válidos
if(isNaN(num1) || isNaN(num2)) {
    console.log('Por favor, introduce números válidos.');
    process.exit(1);
}

//Función para realizar la operación
const calcular =(num1, operacion, num2) => {
    switch(operacion){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0){
                return 'Error: División por cero';
            }
            return num1 / num2;
        default:
            return 'Operación no soportada. Usa +, -, *, /';
    }
};

//Llamamos a la función y mostramos el resutlado
const resultado = calcular(num1, operacion, num2);
console.log('Resultado: ', resultado);