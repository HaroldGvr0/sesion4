class Multiplicador {
    multiplicarPromise(a, b) {
        return new Promise((resolve, reject) => {
            if (typeof a === 'number' && typeof b === 'number') {
                const resultado = a * b;
                resolve(resultado);
            } else {
                reject(new Error("Ambos argumentos deben ser números"));
            }
        });
    }
}

const multiplicador = new Multiplicador();

multiplicador.multiplicarPromise(3, 4)
    .then(resultado => {
        console.log("Resultado:", resultado);
    })