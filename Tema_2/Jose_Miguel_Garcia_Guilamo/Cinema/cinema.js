// Definir el tamaño de la matriz de butacas
const N = 10; // Número de filas y columnas

// Función para inicializar la matriz de butacas
function setup() {
    let idContador = 1; // Iniciar el contador de IDs en 1 (los humanos no empezamos a contar desde 0)
    let butacas = [];

    for (let i = 0; i < N; i++) {
        // Nueva fila
        let fila = [];
        for (let j = 0; j < N; j++) {
            // Nuevo asiento
            fila.push({
                id: idContador++,
                estado: false // Estado inicial libre
            });
        }
        butacas.push(fila);
    }
    return butacas;
}

const suggest = (butacas, asientos) => {
    let numeroFilas = butacas.length; 
    
    if (asientos > numeroFilas) {
        return new Set(); // 
    }

    for (let i = numeroFilas - 1; i >= 0; i--) { 
        let consecutivos = [];
        for (let j = 0; j < numeroFilas; j++) {
            if (!butacas[i][j].estado) {
                consecutivos.push(butacas[i][j].id);
                if (consecutivos.length === asientos) {
                    return new Set(consecutivos); 
                }
            } else {
                consecutivos = []; 
            }
        }
    }

    return new Set(); 
}

// Inicializar la matriz
let butacas = setup();
const prueba1 = suggest(butacas, 3); 
const prueba2 = suggest(butacas, 11); 

// Imprimir la matriz
console.log(butacas);
console.log("Asientos disponibles",prueba1);
console.log("Asientos disponibles",prueba2);

