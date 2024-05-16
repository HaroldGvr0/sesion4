class Saludador {
    constructor() {
    }

    saludar(nombre, callback) {
        const saludo = `Hola, ${nombre}`;
        callback(saludo);
    }
}

function mostrarSaludo(mensaje) {
    console.log(mensaje);
}

const saludador = new Saludador();
saludador.saludar("Juan", mostrarSaludo);