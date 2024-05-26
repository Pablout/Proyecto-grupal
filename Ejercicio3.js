// 3.	Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética

// Entrada: Leer las 4 variables
 // Proceso: Calcular el producto, suma y media aritmética
// Salida: Imprimir los resultados


const read = require("prompt-sync")()
const write = console.log

function calcularOperaciones() {

    const variable1 = parseFloat(read("Ingrese el primer numero: "))
    const variable2 = parseFloat(read("Ingrese el segundo numero: "))
    const variable3 = parseFloat(read("Ingrese el tercer numero: "))
    const variable4 = parseFloat(read("Ingrese el cuarto numero: "))

    
    const producto = variable1 * variable2 * variable3 * variable4
    const suma = variable1 + variable2 + variable3 + variable4
    const media = suma / 4

    write("El producto de los numeros es:", producto)
    write("La suma de los numeros es:", suma)
    write("La media aritmética de los numeros es:", media)
}

calcularOperaciones()
