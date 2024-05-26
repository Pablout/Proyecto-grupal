// 5.	Diseñar un algoritmo que resuelva la siguiente expresión matemática: x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))

//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  a=0,b=0,c=0,resultado=0
// Los calculos o procesos que se hacen con las variables
// Proceso:  resultado=((Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2)) + (Math.sqrt(Math.pow(a, 3)) / (a * b + c))
// La informacion de las variables procesadas
// Salida:  escribir "La respuesta es ",resultado

const read = require("prompt-sync")()
const write = console.log

function matemática(){
    let a=0,b=0,c=0,resultado=0
    write("ingrese un valor para A")
    a=parseInt(read())
    write("ingrese un valor para B")
    b=parseInt(read())
    write("ingrese un valor para C")
    c=parseInt(read())
    sen=0
    cos=0 
    trunc=0
    resultado=((Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2)) + (Math.sqrt(Math.pow(a, 3)) / (a * b + c))
    write("La respuesta es ",resultado)

}
matemática()