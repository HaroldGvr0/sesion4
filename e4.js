class Temporizador {
    retrasarPromesa(ms) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Resuelto después de ${ms} milisegundos`);
            }, ms);
        });
    }
}

const temporizador = new Temporizador();

temporizador.retrasarPromesa(2000).then((mensaje) => {
    console.log(mensaje); 
}).catch((error) => {
    console.error("Error:", error.message);
});
