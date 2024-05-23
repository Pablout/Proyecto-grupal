// 5.	Diseñar un algoritmo que resuelva la siguiente expresión matemática: x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))

//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  a=2,b=3,c=4,resultado=0
// Los calculos o procesos que se hacen con las variables
// Proceso:  resultado=((Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2)) + (Math.sqrt(Math.pow(a, 3)) / (a * b + c))
// La informacion de las variables procesadas
// Salida:  escribir "La respuesta es ",resultado



let a = 2, b = 3, c = 4

const parteEnteraA = parseInt(a)

const moduloA = parteEnteraA % 2

const senoA = Math.sin(a)

const cosenoB = Math.cos(b)

const raizCubicaA = Math.pow(a, 1/3)

const sumaSenCos = senoA + cosenoB

const productoSenCosMod = sumaSenCos * moduloA
const resultadoFinal = productoSenCosMod + (raizCubicaA / (a * b + c))


console.log("El valor de x es:", resultadoFinal)
