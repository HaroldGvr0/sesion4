class Calculadora {
    dividir(a, b) {
        return new Promise((resolve, reject) => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject(new Error("Ambos argumentos deben ser números"));
            } else if (b === 0) {
                reject(new Error("División por cero no permitida"));
            } else {
                resolve(a / b);
            }
        });
    }
}


const calculadora = new Calculadora();


calculadora.dividir(10, 2)
    .then(resultado => {
        console.log("Resultado:", resultado); 
    })
    .catch(error => {
        console.error("Error:", error.message);
    });


calculadora.dividir(10, 0)
    .then(resultado => {
        console.log("Resultado:", resultado);
    })
    .catch(error => {
        console.error("Error:", error.message); 
    });

calculadora.dividir(10, 'a')
    .then(resultado => {
        console.log("Resultado:", resultado);
    })
    .catch(error => {
        console.error("Error:", error.message); 
    });
