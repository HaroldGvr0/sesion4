class CadenaDePromesas {
    paso1(valorInicial) {
        return new Promise((resolve, reject) => {
            console.log(`Paso 1: Recibido valor inicial: ${valorInicial}`);
            resolve(valorInicial + 1);
        });
    }

    paso2(valor) {
        return new Promise((resolve, reject) => {
            console.log(`Paso 2: Recibido valor: ${valor}`);
            resolve(valor * 2);
        });
    }

    paso3(valor) {
        return new Promise((resolve, reject) => {
            console.log(`Paso 3: Recibido valor: ${valor}`);
            resolve(valor - 3);
        });
    }

    ejecutarCadena(valorInicial) {
        this.paso1(valorInicial)
            .then((resultadoPaso1) => this.paso2(resultadoPaso1))
            .then((resultadoPaso2) => this.paso3(resultadoPaso2))
            .then((resultadoFinal) => {
                console.log(`Resultado final: ${resultadoFinal}`);
            })
            .catch((error) => {
                console.error(`Error en la cadena de promesas: ${error.message}`);
            });
    }
}

const cadena = new CadenaDePromesas();
cadena.ejecutarCadena(5); 
