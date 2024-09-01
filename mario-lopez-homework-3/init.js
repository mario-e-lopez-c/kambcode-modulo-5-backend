import esperarSegundos from './async.js';

async function ejecutar(s) {
    console.log('Esperando ',s,' segundos...');
    await esperarSegundos(s);
    console.log('¡Tiempo de espera ha finalizado!')
}

ejecutar(2);