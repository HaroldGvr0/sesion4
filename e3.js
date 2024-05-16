class MultiplicadorCallback {
    multiplicar(a, b, callback) {
        if (typeof a === 'number' && typeof b === 'number') {
            const resultado = a * b;
            callback(null, resultado);
        } else {
            const error = new Error("Ambos argumentos deben ser números");
            callback(error, null);
        }
    }
}

const multiplicador = new MultiplicadorCallback();

function manejarResultado(error, resultado) {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Resultado:", resultado);
    }
}

multiplicador.multiplicar(3,'a', manejarResultado);

