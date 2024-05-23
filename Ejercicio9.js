// 9.	Determinar cuánto se  debe pagar por x  cantidad de colas, considerando que si  son menos de 12 colas, el costo por unidad es de $0,25 caso  contrario el precio será  10% menos
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: colas=0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:  Si (colas<=12)Entonces
//               escribir "Si son menos de 12 colas el costo por unidad es de 0.25"
//               precio = colas * 0.25
//           Sino
//               escribir "Si son más de 12 colas el costo por unidad es del 10% menos"
//               precio = colas * 0.10
//           FinSi
// La informacion de las variables procesadas
// Salida: escribir "el total de las colas que pidio es:","$",precio


const read = require("prompt-sync")()
const write = console.log



function calcularCostoColas(){
    let colas=0
    write("ingrese la cantidad de colas que va a comprar ")
    colas=parseInt(read())
    if (colas<=12){
      write("Si son menos de 12 colas el costo por unidad es de 0.25")
      precio = colas * 0.25
    }else{
      write("Si son más de 12 colas el costo por unidad es del 10% menos")
      precio = colas * 10
    }
        write("El costo total a pagar es:"," $", precio)

  }
  calcularCostoColas()