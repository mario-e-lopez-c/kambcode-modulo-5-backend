async function esperarSegundos(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    })
}

export default esperarSegundos;