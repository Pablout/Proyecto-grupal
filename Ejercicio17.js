// 17.	Dada una cadena presentar el primer carácter siempre y cuando sea un digito
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  caracter = 0
// Los calculos o procesos que se hacen con las variables
// Proceso: Si(caracter >= -9 && caracter<= 9) Entonces
//             Escribir "El primer caracter de la cadena es de un solo dígito"
//             Escribir caracter 
//          Sino
//             Escribir"El caracter de la cadena no es de un solo dígito")
//          FinSi
// La informacion de las variables procesadas
// Salida: 


const read = require("prompt-sync")()
const write = console.log

function verificarUnSoloDigito() {
    let caracter = 0
    write("Ingrese un caracter:")
    caracter = parseFloat(read())
    if (caracter >= -9 && caracter<= 9) {
       write( "El caracter de la cadena es un dígito")
       write(caracter)
    } else {
       write ("El caracter de la cadena no es un dígito")
    }
    write("gracias por ingresar")
 }
 
 verificarUnSoloDigito()
