class ManejadorAsincronico {

    async funcionAsincronica1(valor) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(valor * 2);
            }, Math.random() * 1000); 
        });
    }

   
    async funcionAsincronica2(valor) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(valor ** 2);
            }, Math.random() * 1000); 
        });
    }

    async funcionAsincronica3(valor) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(valor / 2);
            }, Math.random() * 1000); 
        });
    }

   
    async ejecutarEnParalelo(valor) {
        try {
            
            const resultados = await Promise.all([
                this.funcionAsincronica1(valor),
                this.funcionAsincronica2(valor),
                this.funcionAsincronica3(valor)
            ]);

          
            const [resultado1, resultado2, resultado3] = resultados;
            console.log("Resultados:", resultado1, resultado2, resultado3);
        } catch (error) {
            console.error("Error:", error.message);
        }
    }
}

const manejador = new ManejadorAsincronico();
manejador.ejecutarEnParalelo(3); 
