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



const read = require("prompt-sync")();
const write = console.log;

function calle() {
    let direccion = [5],direcciones
    write("direccion cualquiera pulse enter")
    direcciones=(read())
        direccion[0]="Avenida primavera"
        direccion[1]="Avenida 20 de marzo"
        direccion[2]="Avenida febres cordero"
        direccion[3]="Avenida 12 de julio"
        direccion[4]="Avenida 13 de octubre"
        write("la primera direccion: ",direccion[0])
        write("la segunda direccion: ",direccion[2])
        write("la tercera direccion: ",direccion[4])
}
    calle()

