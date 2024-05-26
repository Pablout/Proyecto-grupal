//7.	Algoritmo que pida dos números y presenta el mayor de los dos siempre y cando el primero sea par y el segundo impar

//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  let numero1=0(leer),numero2=0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:   Si(numero1>numero2)entonces
//                Escribir "El primer numero es mayor"
//                Escribir numero1
//                Escribir numero2
//           Sino
//                Escribir "El primer numero es menor"
//                Escribir numero1
//                Escribir numero2
//           FinSi
//           Si (numero1%2)Entonces
//                Escribir "El primer numero es impar"
//                Escribir numero1
//           Sino
//                Escribir "El primer numero es par"
//                Escribir numero1
//           FinSi
//           Si (numero2%2)Entonces
//                Escribir "El segundo numero es impar"
//                Escribir numero2
//           Sino
//                Escribir "El segundo numero es par"
//                Escribir numero2
//           FinSi
// La informacion de las variables procesadas
// Salida:   escribir "los numeros ingresados son:",numero1,numero2



const read = require("prompt-sync")()
const write = console.log

function encontrarMayor() {
    
    let numero1=0,numero2=0
    write ("Ingrese el primer numero:")
    numero1=parseFloat(read())
    write ("Ingrese el segundo numero:")
    numero2=parseFloat(read())
    if (numero1>numero2){
        write("El primer numero es mayor")
        write(numero1)
        write(numero2)
     }else{
        write("El primer numero es menor")
        write(numero1)
        write(numero2)
    }
    if (numero1%2){
        write("El primer numero es impar")
        write(numero1)
    }else {
        write("El primer numero es par")
        write(numero1)
    }
    if(numero2%2){
        write("El segundo numero es impar")
        write(numero2)
    }else{
        write("El segundo numero es par")
        write(numero2)
    write("los numeros ingresados son:",numero1,numero2)
}
}

encontrarMayor()