// 18.	Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra

// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  caracter = 0
// Los calculos o procesos que se hacen con las variables
// Proceso: Si(caracter >= "a" && caracter<= "ab") Entonces
//             Escribir "El caracter de la cadena es de una letra"
//             Escribir "caracter"
//          Sino
//             Escribir"El caracter de la cadena no es de una letra"
//          FinSi
// La informacion de las variables procesadas
// Salida: 

const read = require("prompt-sync")();
const write = console.log



function verificarUnaSolaLetra() {
    let caracter = " "
    write("Ingrese un caracter:")
    caracter = (read())
    if (caracter >= "a" && caracter<= "ab") {
       write( "El caracter de la cadena es de una letra")
       write(caracter)
    } else {
       write ("El caracter de la cadena no es de una letra")
    }
    
 }
 
 verificarUnaSolaLetra()