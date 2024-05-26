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
   
        let horasTrabajadas=0
            write ("Ingrese el número de horas trabajadas en la semana: ")
        horasTrabajadas=parseInt(read())
    
        pagoHoraNormal=5
        horasNormales=40
        porcentajeSeguroSocial=0.10
    
        if (horasTrabajadas >= horasNormales) {
        sueldo = horasTrabajadas * pagoHoraNormal
        sueldoSobretiempo = horasTrabajadas - horasNormales
        }else{
        sueldo = horasNormales * pagoHoraNormal
        horasExtra = horasTrabajadas - horasNormales
        sueldoSobretiempo = horasExtra * pagoHoraNormal * 2
        }
        
        ingresoTotal = sueldo + sueldoSobretiempo
        seguroSocial = ingresoTotal * porcentajeSeguroSocial
        sueldoNeto = ingresoTotal - porcentajeSeguroSocial
    
        write("Horas trabajadas: ", horasTrabajadas)
        write("Horas extra trabajadas: ", sueldoSobretiempo,"Horas")
        write("Ingreso total: $", ingresoTotal)
        write("Seguro social (IESS): $", seguroSocial)
        write("Sueldo neto a recibir: $", sueldoNeto)
    }
    

calcularSueldo()
