class OperacionAsincronica {
    ejecutar(ms, callback) {
        console.log(`Iniciando operación asincrónica que tomará ${ms} milisegundos...`);
        setTimeout(() => {
            const resultado = `Operación completada después de ${ms} milisegundos`;
            callback(null, resultado);
        }, ms);
    }
}

const operacion = new OperacionAsincronica();

function manejarResultado(error, resultado) {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log(resultado);
    }
}

operacion.ejecutar(3000, manejarResultado); 
