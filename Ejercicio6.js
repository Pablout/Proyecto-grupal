// 6.	Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora. Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan al doble de la hora de la jornada normal. El porcentaje del seguro social(iess) es del 10% del ingreso total. Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir.
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: horasTrabajadas=0(leer)
//          pagoHoraNormal=5
//          horasNormales=40
//          porcentajeSeguroSocial=0.10
// Los calculos o procesos que se hacen con las variables
// Proceso: Si (horasTrabajadas >= horasNormales) Entonces
//    sueldo = horasTrabajadas * pagoHoraNormal
//    sueldoSobretiempo = horasTrabajadas - horasNormales
//    Sino
//    sueldo = horasNormales * pagoHoraNormal
//    horasExtra = horasTrabajadas - horasNormales
//    sueldoSobretiempo = horasExtra * pagoHoraNormal * 2
//    FinSi

//    ingresoTotal = sueldo + sueldoSobretiempo
//    seguroSocial = ingresoTotal * porcentajeSeguroSocial
//    sueldoNeto = ingresoTotal - porcentajeSeguroSocial

// La informacion de las variables procesadas
// Salida:     escribir "Horas trabajadas: ", horasTrabajadas
//             escribir "Horas extra trabajadas: ", sueldoSobretiempo,"Horas"
//             escribir "Ingreso total: $", ingresoTotal
//             escribir "Seguro social (IESS): $", seguroSocial
//             escribir "Sueldo neto a recibir: $", sueldoNeto

const read = require("prompt-sync")()
const write = console.log

function calcularSueldo() {
    const salarioPorHora = 5
    const horasJornadaNormal = 40
    const horasExtra = parseFloat(read("Ingrese las horas extra trabajadas: "))
    
    let sueldo = 0, sobretiempo = 0, ingresoTotal = 0, seguroSocial = 0, neto = 0

    sueldo = salarioPorHora * horasJornadaNormal
    if (horasExtra > 0) {
        sobretiempo = salarioPorHora * 2 * horasExtra
    }

    ingresoTotal = sueldo + sobretiempo
    seguroSocial = ingresoTotal * 0.10
    neto = ingresoTotal - seguroSocial

    write("Sueldo: $", sueldo)
    write("Sobretiempo: $", sobretiempo)
    write("Ingreso Total: $", ingresoTotal)
    write("Seguro Social (IESS): $", seguroSocial)
    write("Neto a Recibir: $", neto)
}

calcularSueldo()
