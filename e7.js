class Calculadora {
    dividir(a, b, callback) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            const error = new Error("Ambos argumentos deben ser números");
            callback(error, null);
            return;
        }
        
        if (b === 0) {
            const error = new Error("División por cero no permitida");
            callback(error, null);
        } else {
            const resultado = a / b;
            callback(null, resultado);
        }
    }
}


const calculadora = new Calculadora();

function manejarResultado(error, resultado) {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Resultado:", resultado);
    }
}


calculadora.dividir(10, 2, manejarResultado); 


calculadora.dividir(10, 0, manejarResultado);


calculadora.dividir(10, 'a', manejarResultado); 
