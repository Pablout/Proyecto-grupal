// 14.	Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección

// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:   direcciones(leer), direccion = [5](proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso:          
//       } direccion[0]="Avenida primavera"
//        direccion[1]="Avenida 20 de marzo"
//        direccion[2]="Avenida febres cordero"
//        direccion[3]="Avenida 12 de julio"
//        direccion[4]="Avenida 13 de octubre"
// La informacion de las variables procesadas
// Salida: Escribir "la primera direccion",direccion[0]
//         Escribir "la segunda direccion",direccion[2]
//         Escribir "la tercera direccion",direccion[4]



const read = require("prompt-sync")()
const write = console.log

function direcCarac() {
    let direccion = read("Ingrese una dirección: ")
    console.log("Dirección:", direccion)
    console.log("Primer carácter:", direccion[0])
    
    let longitud = direccion.length
    let caracterMedio = longitud % 2 === 0 ? direccion[(longitud / 2) - 1] : direccion[(longitud - 1) / 2];
    console.log("Carácter del medio:", caracterMedio)
    
    console.log("Último carácter:", direccion[longitud - 1])
}

direcCarac()

