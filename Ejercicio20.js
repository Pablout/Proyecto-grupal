// 20.	Dada una cadena presentar el carácter de en medio, siempre y cuando sea un caracter de puntuación: “;” | “:” | “.” | “,”
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: cadena1=" "(leer),cadena2=" "(leer),cadena3=" "(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:  Si (cadena2 == "," || cadena2 == "." || cadena2==";" || cadena2==":")Entonces
//                  escribir "La cadena es un caracter de puntuacion"
//                  escribir(cadena2)
//           Sino
//                 escriir "La cadena no es un caracter de puntuacion"
//           FinSi
// La informacion de las variables procesadas
// Salida: 
const read = require('prompt-sync')();
const write = console.log;

function cadena(){
    let cadena1=" ",cadena2=" ",cadena3=" "
    write("ingrese algo para la cadena1")
    cadena1=(read())
    write("ingrese algo para la cadena2")
    cadena2=(read())
    write("ingrese algo para la cadena3")
    cadena3=(read())
    if (cadena2 == "," || cadena2 == "." || cadena2==";" || cadena2==":"){
        write( "La cadena es un caracter de puntuacion")
        write(cadena2)
     } else {
        write ("La cadena no es un caracter de puntuacion")
     }
     write("gracias por ingresar")

}

cadena()


