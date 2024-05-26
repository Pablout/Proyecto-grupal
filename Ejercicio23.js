//23.	Dado una cadena indicar cuantos elementos tiene, sin usar ciclos 


// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  cadena=" ",(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: cantidadElementos = cadena.length
// La informacion de las variables procesadas
// Salida: escribir "La cantidad de elementos que tiene la cadena es:",cantidadElementos



const read = require("prompt-sync")()
const write = console.log

function cadena(){
    let cadena= " "
    write("Ingrese algo para la cadena y saber cual es la cantidad de elementos: ")
    cadena =(read())
    cantidadElementos = cadena.length
    write("La cantidad de elementos que tiene la cadena es: ",cantidadElementos)
    }
    cadena()
    
