// 2.	Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número

    // Entrada: Leer un número entero
    // Proceso: Obtener el doble y el triple del número
   // Salida: Presentar el doble y el triple del número
const read = require("prompt-sync")()
const write = console.log

function obtenerDobleTriple() {
    const numero = parseInt(read("Ingrese un número entero: "))
    
    const doble = numero * 2
    const triple = numero * 3

    write("El doble del número es:", doble)
    write("El triple del número es:", triple)
}

obtenerDobleTriple()
