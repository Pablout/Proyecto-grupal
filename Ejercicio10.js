// 10.	El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200, se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares. Presentar el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.

//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  trajes=0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: Si(trajes>=200)Entonces
//              Escribir "Los trajes que tienen un precio superior a 200 se les aplicará un descuento del 10%"
//              descuento = trajes * 0.10
//          sino
//              Escribir "Los trajes que tienen menos de 200 se les aplicara un pago de $10 dolares "
//              descuento = 10
//          FinSi
//          descuento1= trajes - descuento
//          total = trajes + (descuento1 * 0.15)
// La informacion de las variables procesadas
// Salida:  Escribir "cada traje cuesta ","$",trajes
//          Escribir "el descuento es: ",descuento,"%"
//          escribir "El total de los trajes con el iva:","$",total

const read = require("prompt-sync")()
const write = console.log


function calcularDescuentoYPago() {
    const precioBase = parseFloat(read("Ingrese el precio del traje: $"))
    const iva = 0.15

    let descuento = 0, precioConDescuento = 0, pagoConIVA = 0

    if (precioBase > 200) {
        descuento = precioBase * 0.10
    } else {
        descuento = 10
    }

    precioConDescuento = precioBase - descuento
    pagoConIVA = precioConDescuento * (1 + iva)

    write("Precio del traje: $", precioBase)
    write("Descuento aplicado: $", descuento)
    write("Pago (con IVA incluido): $", pagoConIVA)
}

calcularDescuentoYPago()
