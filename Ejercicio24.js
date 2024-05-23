// 24.	Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos

// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  arreglo = [5](leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:
// arreglo[0]=(read())
// arreglo[1]=(read())
// arreglo[2]=(read())
// arreglo[3]=(read())
// arreglo[4]=(read()) cantidadElementos = cadena.length
// La informacion de las variables procesadas
// Salida: escribir "La cantidad de elementos que tiene la cadena es:",cantidadElementos


const read = require('prompt-sync')();
const write = console.log;

function cadenanumero(){
    let arreglo = [5]
    write("Ingrese 5 numero para la cadena y saber cual es la cantidad de elemetos")
    arreglo[0]=(read())
    arreglo[1]=(read())
    arreglo[2]=(read())
    arreglo[3]=(read())
    arreglo[4]=(read())
    
    cantidadElementos = arreglo.length
    write("La cantidad de elementos que tiene la cadena es:",cantidadElementos)
    }
    cadenanumero()