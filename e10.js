class CombinadorPromesas {
    generarPromesa(tiempo) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Promesa resuelta después de ${tiempo} milisegundos`);
            }, tiempo);
        });
    }
    async combinarPromesas() {
        const promesa1 = this.generarPromesa(2000);
        const promesa2 = this.generarPromesa(3000); 
        const promesa3 = this.generarPromesa(4000); 

        try {
           
            const resultados = await Promise.all([promesa1, promesa2, promesa3]);
            console.log("Todas las promesas se han resuelto:");
            resultados.forEach((resultado, index) => {
                console.log(`Promesa ${index + 1}:`, resultado);
            });
       
            console.log("Acción final ejecutada después de resolver todas las promesas.");
        } catch (error) {
            console.error("Error:", error.message);
        }
    }
}

const combinador = new CombinadorPromesas();
combinador.combinarPromesas();
