// 13.	Dado 5 nombres almacenarlo en un arreglo y luego presentar cada nombre del arreglo desde el ultimo al primero sin usar ciclos.

//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:   numero=0(leer), nombre = [6](proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso:   Si (numero>=0 && numero<=6)Entonces
//       nombre[0]="Juan"
//       nombre[1]="Maria"
//       nombre[2]="Pedro"
//       nombre[3]="Ana"
//       nombre[4]="Luis"
//       Nombres = nombre[numero]
//             escribir "El numero", numero, "El nombre",Nombres
//        sino
//        escribir "Número de día inválido. Por favor, ingrese un número del 0 al 5.")
//        FinSi
// La informacion de las variables procesadas
// Salida: 
const read = require("prompt-sync")()
const write = console.log

function nombres() {
    let numero=0
    let nombre = [6]
    write("ingrese un numero")
    numero=parseFloat(read())
    if (numero>=0 && numero<=6){
        nombre[0]="Juan"
        nombre[1]="Felipe"
        nombre[2]="Pedro"
        nombre[3]="Maria"
        nombre[4]="Fernanda"
        Nombres = nombre[numero]
        write("El numero", numero, "El nombre",Nombres)
    }else{
        write("Número de día inválido. Por favor, ingrese un número del 0 al 5.")
    }
        write("gracias por consultar")
    }
    nombres()