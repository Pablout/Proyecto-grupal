// 3.	Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética

// Entrada: Leer las 4 variables
 // Proceso: Calcular el producto, suma y media aritmética
// Salida: Imprimir los resultados


const read = require("prompt-sync")()
const write = console.log

function calcularOperaciones() {

    const variable1 = parseFloat(read("Ingrese la primera variable: "))
    const variable2 = parseFloat(read("Ingrese la segunda variable: "))
    const variable3 = parseFloat(read("Ingrese la tercera variable: "))
    const variable4 = parseFloat(read("Ingrese la cuarta variable: "))

    
    const producto = variable1 * variable2 * variable3 * variable4
    const suma = variable1 + variable2 + variable3 + variable4
    const media = suma / 4

    write("El producto de las variables es:", producto)
    write("La suma de las variables es:", suma)
    write("La media aritmética de las variables es:", media)
}

calcularOperaciones()
