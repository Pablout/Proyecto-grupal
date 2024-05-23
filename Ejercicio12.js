// 12.	Dado un mes en número, presentar el nombre de ese mes. Para la solución utilice arreglos
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:   dia=0(leer), Mes= [12](proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso:   Si (numero>=0 && numero<=12)Entonces
//        Mes[0]="Enero"
//        Mes[1]="Febrero"
//        Mes[2]="Marzo"
//        Mes[3]="Abril"
//        Mes[4]="Mayo"
//        Mes[5]="Junio"
//        Mes[6]="Julio"
//        Mes[7]="Agosto"
//        Mes[8]="Septiembre"
//        Mes[9]="Octubre"
//        Mes[10]="Noviembre"
//        Mes[11]="Diciembre"
//        nombre = Mes[numero]
//        Escribir "El día", numero, "La semana",nombre
//     Sino
//        Escribir "Número de día inválido. Por favor, ingrese un número del 0 al 12."
//     FinSi
// La informacion de las variables procesadas
// Salida: escribir "gracias por consultar"
const read = require("prompt-sync")()
const write = console.log

function Meses() {
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

const numeroMes = parseInt(read("Ingrese el número del mes (1 para Enero, 2 para Febrero, etc.): "))
if (numeroMes >= 1 && numeroMes <= 12) {
    const nombreMes = meses[numeroMes - 1]
    write("El mes correspondiente al número", numeroMes, "es", nombreMes)
} else {
    write("Número de mes inválido. Por favor, ingrese un número del 1 al 12.")
}
}
Meses()