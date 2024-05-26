//Elaborar un menú donde se presente estas 24 opciones de ejercicios con su respectivo número y permita 
// pedir una la opción del ejercicio y presentar la respuesta:

const read = require('prompt-sync')();
const write = console.log
function menu(){
    let arreglo=[25]
    write("MENÚ DE OPCIONES")
    write("1)	Enunciado del Ejerciccio 1")
    write("2)	Enunciado del Ejerciccio 2")
    write("3)	Enunciado del Ejerciccio 3")
    write("4)	Enunciado del Ejerciccio 4")
    write("5)	Enunciado del Ejerciccio 5")
    write("6)	Enunciado del Ejerciccio 6")
    write("7)	Enunciado del Ejerciccio 7")
    write("8)	Enunciado del Ejerciccio 8")
    write("9)	Enunciado del Ejerciccio 9")
    write("10)	Enunciado del Ejerciccio 10")
    write("11)	Enunciado del Ejerciccio 11")
    write("12)	Enunciado del Ejerciccio 12")
    write("13)	Enunciado del Ejerciccio 13")
    write("14)	Enunciado del Ejerciccio 14")
    write("15)	Enunciado del Ejerciccio 15")
    write("16)	Enunciado del Ejerciccio 16")
    write("17)	Enunciado del Ejerciccio 17")
    write("18)	Enunciado del Ejerciccio 18")
    write("19)	Enunciado del Ejerciccio 19")
    write("20)	Enunciado del Ejerciccio 20")
    write("21)	Enunciado del Ejerciccio 21")
    write("22)	Enunciado del Ejerciccio 22")
    write("23)	Enunciado del Ejerciccio 23")
    write("24)	Enunciado del Ejerciccio 24")
    write("ELIJA UN EJERCICIO DEL 1..24")
    arreglo[0]=(read())
    arreglo[1]= "1)	Enunciado del Ejerciccio1"
    arreglo[2]= "2)	Enunciado del Ejerciccio2"
    arreglo[3]= "3)	Enunciado del Ejerciccio3"
    arreglo[4]= "4)	Enunciado del Ejerciccio4"
    arreglo[5]= "5)	Enunciado del Ejerciccio5"
    arreglo[6]= "6)	Enunciado del Ejerciccio6"
    arreglo[7]= "7)	Enunciado del Ejerciccio7"
    arreglo[8]= "8)	Enunciado del Ejerciccio8"
    arreglo[9]= "9)	Enunciado del Ejerciccio9"
    arreglo[10]= "10) Enunciado del Ejerciccio10"
    arreglo[11]= "11) Enunciado del Ejerciccio11"
    arreglo[12]= "12) Enunciado del Ejerciccio12"
    arreglo[13]= "13) Enunciado del Ejerciccio13"
    arreglo[14]= "14) Enunciado del Ejerciccio14"
    arreglo[15]= "15) Enunciado del Ejerciccio15"
    arreglo[16]= "16) Enunciado del Ejerciccio16"
    arreglo[17]= "17) Enunciado del Ejerciccio17"
    arreglo[18]= "18) Enunciado del Ejerciccio18"
    arreglo[19]= "19) Enunciado del Ejerciccio19"
    arreglo[20]= "20) Enunciado del Ejerciccio20"
    arreglo[21]= "21) Enunciado del Ejerciccio21"
    arreglo[22]= "22) Enunciado del Ejerciccio22"
    arreglo[23]= "23) Enunciado del Ejerciccio23"
    arreglo[24]= "24) Enunciado del Ejerciccio24"
    if (arreglo[0]=="1"){
        write("El enunciado del ejercicio 1")
        write(temperatura)
write(" 1.	Algoritmo que transforme de grados Celsius a Fahrenheit")
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  gradosCelsius=0(leer),gradosFahrenheit=0(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: gradosFahrenheit = 32 + (gradosCelsius * 9/5)
// La informacion de las variables procesadas
// Salida: "La temperatura en grados fahrenheit es:"," ",gradosFahrenheit

//LENGUAJE JAVASCRIPT

function temperatura(){
    let gradosCelsius=0,gradosFahrenheit=0
    write ("Ingrese la temperatura en grados celsius °C:")
    gradosCelsius =parseInt(read())
    gradosFahrenheit = 32 + (gradosCelsius * 9/5)
    write ("La temperatura en grados fahrenheit es: ",gradosFahrenheit,"°F")
    }

temperatura()

}else if (arreglo[0]=="2"){
    write("El enunciado del ejercicio 2 ")
    write(obtenerDobleTriple)
 write("2. Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número.")  
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: numero1=0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:  resultado1= numero1 * 2
//           resultado2= numero1 * 3
// La informacion de las variables procesadas
// Salida:  escribir "El doble del numero ingresado es:",resultado1
//          escribir "El triple del numero ingresado es:",resultado2
//LENGUAJE JAVASCRIPT
function obtenerDobleTriple(){
    const numero = parseInt(read("Ingrese un número entero: "))
    
    const doble = numero * 2
    const triple = numero * 3

    write("El doble del número es:", doble)
    write("El triple del número es:", triple)
}
  
    obtenerDobleTriple()
}else if (arreglo[0]=="3"){
    write("El enunciado del ejercicio 3 ")
    write(calcularOperaciones)
write("3.	Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.")
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  numero1=0(leer),numero2=0(leer),numero3=0(leer),numero4=0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: //Producto de las variables
//               producto = numero4 * numero3 * numero2 * numero1
//          //Suma de las variables
//               suma = numero4 + numero3 + numero2 + numero1
//          //Media aritmetica
//               mediaAritmetica = suma/4
// La informacion de las variables procesadas
// Salida:     escribir "La suma de los números es: ",suma
//             escribir "El producto de los numeros es: ",producto
//             escribir "la media aritmetica de los números es: ",mediaAritmetica
//LENGUAJE JAVASCRIPT

function calcularOperaciones(){
    const variable1 = parseFloat(read("Ingrese el primer numero: "))
    const variable2 = parseFloat(read("Ingrese el segundo numero: "))
    const variable3 = parseFloat(read("Ingrese el tercer numero: "))
    const variable4 = parseFloat(read("Ingrese el cuarto numero: "))

    
    const producto = variable1 * variable2 * variable3 * variable4
    const suma = variable1 + variable2 + variable3 + variable4
    const media = suma / 4

    write("El producto de los numeros es:", producto)
    write("La suma de los numeros es:", suma)
    write("La media aritmética de los numeros es:", media)
}

calcularOperaciones()
}else if (arreglo[0]=="4"){
    write("El enunciado del ejercicio 4 ")
    write(convertirPeso)
write(" 4.	Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos")
write("     (nota: una libra equivale a 0.453593 kilogramos)")
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  PesoLibras=0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: kilogramos = PesoLibras * 0.453593
//          gramos = kilogramos - (kilogramos * 1000)
// La informacion de las variables procesadas
// Salida:  escribir "El peso en kilogramos es: ",kilogramos,"kg"
//          escribir "El peso en gramos es: ",gramos,"g"

//LENGUAJE JAVASCRIPT

function convertirPeso(){
    const libras = parseFloat(read("Ingrese el peso en libras: "))

    const kilogramos = libras * 0.453593
    const gramos = (kilogramos - parseInt(kilogramos)) * 1000

    write("El peso en kilogramos es:", parseInt(kilogramos), "kg")
    write("El peso en gramos es:", parseInt(gramos), "g")
}
convertirPeso()

}else if (arreglo[0]=="5"){
    write("El enunciado del ejercicio 5 ")
    write(matemática)
write(" 5.	Diseñar un algoritmo que resuelva la siguiente expresión matemática:")
write("     x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c)) ")
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  a=0,b=0,c=0,resultado=0
// Los calculos o procesos que se hacen con las variables
// Proceso:  resultado=((Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2)) + (Math.sqrt(Math.pow(a, 3)) / (a * b + c))
// La informacion de las variables procesadas
// Salida:  escribir "La respuesta es ",resultado

//LENGUAJE JAVASCRIPT

function matemática(){
    let a=0,b=0,c=0,resultado=0
    write("ingrese un valor para A")
    a=parseInt(read())
    write("ingrese un valor para B")
    b=parseInt(read())
    write("ingrese un valor para C")
    c=parseInt(read())
    sen=0
    cos=0 
    trunc=0
    resultado=((Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2)) + (Math.sqrt(Math.pow(a, 3)) / (a * b + c))
    write("La respuesta es ",resultado)

}
matemática()

}else if (arreglo[0]=="6"){
    write("El enunciado del ejercicio 6 ")
    write(calcularSueldo)
write("6.  Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora.") 
write("    Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan") 
write("    al doble de la hora de la jornada normal. ")
write("    El porcentaje del seguro social(iess) es del 10% del ingreso total.")
write("    Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir.")

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

//LENGUAJE JAVASCRIPT

function calcularSueldo(){
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

}else if (arreglo[0]=="7"){
    write("El enunciado del ejercicio 7 ")
    write(encontrarMayor)
write(" 7. Algoritmo que pida dos números y presenta el mayor de los dos siempre y cando el primero sea par y el segundo impar")
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

//LENGUAJE JAVASCRIPT

function encontrarMayor(){
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

}else if (arreglo[0]=="8"){
    write("El enunciado del ejercicio 8 ")
    write(verificarCaracter)
write(" 8. Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive") 
write("    y sino verificar si es un signo de puntuacion , . ; : y si no presentar solo el carácter.")

//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  caracter=" " (leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: Si (caracter >= 'a' && caracter <= 'z')Entonces
//             escribir"El carácter está comprendido entre las letras a hasta la z."
//          Sino 
//          SI (caracter == "," || caracter == "." || caracter==";" || caracter==":"){
//                 escribir "El carácter es un signo de puntuación."
//          Sino
//                 escribir "El carácter ingresado es:", caracter
//          FinSi
// La informacion de las variables procesadas
// Salida:   escribir "gracias

//LENGUAJE JAVASCRIPT

function verificarCaracter() {
    const caracter = read("Ingrese un carácter: ")

    if (caracter >= 'a' && caracter <= 'z') {
        write("El carácter está comprendido entre las letras a y z.")
    } else if (caracter >= 'A' && caracter <= 'Z') {
        write("El carácter está comprendido entre las letras A y Z.")
    } else if (caracter === ',' || caracter === '.' || caracter === ';' || caracter === ':') {
        write("El carácter es un signo de puntuación: ", caracter)
    } else {
        write("El carácter ingresado es: ", caracter)
    }
}
verificarCaracter()

}else if (arreglo[0]=="9"){
    write("El enunciado del ejercicio 9 ")
    write(calcularCostoColas)
write(" 9.	Determinar cuánto se  debe pagar por x  cantidad de colas, considerando que si  son menos de 12 colas,")
write("     el costo por unidad es de $0,25 caso  contrario el precio será  10% menos")

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

//LENGUAJE JAVASCRIPT

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
}else if (arreglo[0]=="10"){
    write("El enunciado del ejercicio 10 ")
    write(calcularDescuentoYPago)
write(" 10.	El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200,")
write(" Se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares.")
write(" Presentar el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.")

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

//LENGUAJE JAVASCRIPT
function calcularDescuentoYPago(){
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

}else if (arreglo[0]=="11"){
    write("El enunciado del ejercicio 11 ")
    write(diaSemana)
write("11.	Dado un día en numero, presentar el nombre de ese día. Para la solución utilice arreglos.")
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:   dia=0(leer),diasSemana = [6](proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso:   Si(dia>=0 && dia<=6)Entonces
//        diasSemana[0]="Domingo"
//        diasSemana[1]="Lunes"
//        diasSemana[2]="Martes"
//        diasSemana[3]="Miercoles"
//        diasSemana[4]="Jueves"
//        diasSemana[5]="Viernes"
//        diasSemana[6]="Sabado"
//             nombre = diasSemana[dia]
//             escribir "El día", dia, "La semana",nombre
//        sino
//        Escribir "Número de día inválido. Por favor, ingrese un número del 0 al 6."
//        FinSi
// La informacion de las variables procesadas
// Salida: escribir "gracias por consultar"

//LENGUAJE JAVASCRIPT

function diaSemana() {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

    const numeroDia = parseInt(read("Ingrese el número del día (1 para Domingo, 2 para Lunes, etc.): "))
    if (numeroDia >= 1 && numeroDia <= 7) {
        const nombreDia = diasSemana[numeroDia - 1]
        write("El día correspondiente al número", numeroDia, "es", nombreDia)
    } else {
        write("Número de día inválido. Por favor, ingrese un número del 1 al 7.")
    }
    }
    diaSemana()

}else if (arreglo[0]=="12"){
    write("El enunciado del ejercicio 12 ")
    write(Meses)
write("12.	Dado un mes en número, presentar el nombre de ese mes. Para la solución utilice arreglos.")
//BOSQUEJO
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

//LENGUAJE JAVASCRIPT

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

}else if (arreglo[0]=="13"){
    write("El enunciado del ejercicio 13 ")
    write(nombres)
write("13.	Dado 5 nombres almacenarlo en un arreglo y luego presentar")
write("     cada nombre del arreglo desde el ultimo al primero sin usar ciclos.")
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:   nombre1=" "(leer),nombre2=""(leer),nombre3=""(leer),nombre4=""(leer),nombre5=""(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:  
//      nombre6=nombre1
//      nombre7=nombre2
//      nombre8=nombre3
//      nombre9=nombre4
//      nombre10=nombre5
// La informacion de las variables procesadas
// Salida: escribir "El quinto nombre",nombre10
//         escribir "El cuarto nombre",nombre9
//         escribir "El tercer nombre",nombre8
//         escribir"El segundo nombre",nombre7
//         escribir"El primero nombre",nombre6
//LENGUAJE JAVASCRIPT

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

}else if (arreglo[0]=="14"){
    write("El enunciado del ejercicio 14 ")
    write(direcCarac)
write("14.Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección.")
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:   direccion=" "(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:          
//       direccion1=direccion
// La informacion de las variables procesadas
// Salida: Escribir "Primer caracter"," ",direccion1[0]
//         Escribir "Medio caracter", direccion1[direccion1.length / 2]
//         Escribir "Ultimo caracter"," ",direccion1[direccion1.length-1]

//LENGUAJE JAVASCRIPT

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
    
}else if (arreglo[0]=="15"){
    write("El enunciado del ejercicio 15 ")
    write(valorAleatorio)
write("15.Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor")
write("   si es par positivo y el ultimo si es impar negativo.")
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: valor=0(aleatorio)
// Los calculos o procesos que se hacen con las variables
// Proceso: numeros.push(parseInt(Math.random() * 100))
//    numeros.push(parseInt(Math.random() * 100))
//    numeros.push(parseInt(Math.random() * 100))
//    numeros.push(parseInt(Math.random() * 100))
//    numeros.push(parseInt(Math.random() * 100))
//    Si(valor%2==0)Entonces
//       escribir "El primer numero es par: ",valor
//    Sino
//       Escribir "El primer numero es impar: ",valor
//    FinSi
//    si (valor>0)Entonces
//       Escribir "El primer numero es positivo: ",valor
//    Sino
//       Escribir "El primer numero es negativo ",valor
//    FinSi
//    si(valor5%2==0 )Entonces
//       escribir"El ultimo numero es par  ",valor5
//    sino
//       escribir"El ultimo numero es impar  ",valor5
//    FinSi
//    Si(valor5>0)Entonces
//       escribir"El ultimo numero es positivo: ",valor5
//    Sino
//       escribir "El ultimo numero es negativo ",valor5 
//    FinSi
// La informacion de las variables procesadas
// Salida: Escribir "gracias"

//LENGUAJE JAVASCRIPT
function valorAleatorio(){
    let valor=[]
    valor= parseInt(Math.random()*100) 
    valor2= parseInt(Math.random()*100) 
    valor3= parseInt(Math.random()*100) 
    valor4= parseInt(Math.random()*100) 
    valor5= parseInt(Math.random()*100) 
    write(valor)
    write(valor2)
    write(valor3)
    write(valor4)
    write(valor5)
    residuo=valor%2
    if (residuo==0){
        write("El primer numero es par: ",valor)
    }else {
        write("El primer numero es impar: ",valor) 
    } 
    if (valor>0){
        write("El primer numero es positivo: ",valor)
    }else {
    write("El primer numero es negativo ",valor) 
    }
    residuos=valor5%3
    if(residuos==1 ){
        write("El ultimo numero es par  ",valor5)
    }else{
    write("El ultimo numero es impar  ",valor5)
    }
    if (valor5>0){
        write("El ultimo numero es positivo: ",valor5)
    }else {
    write("El ultimo numero es negativo ",valor5) 
    }
}
valorAleatorio()
    
}else if (arreglo[0]=="16"){
    write("El enunciado del ejercicio 16 ")
    write(arreglodenombre)
write("16.	Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.")
write("     cada nombre del arreglo desde el ultimo al primero sin usar ciclos.")
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:   nombres1=" "(leer),nombres2=" "(leer),nombres3=" "(leer), nombre = [3](proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso:     nombre[0]=nombres1
//              nombre[1]=nombres2
//              nombre[2]=nombres3
// La informacion de las variables procesadas
// Salida: escribir ""El primer nombre es: ",nombre[0]"
//         escribir ""El ultimo nombre es: ",nombre[2]"

//LENGUAJE JAVASCRIPT

function arreglodenombre() {
    const nombres = []

    nombres.push("Juan")
    nombres.push("María")
    nombres.push("Carlos")
    
    
    for (let nombre of nombres) {
        const primerCaracter = nombre[0]
        const ultimoCaracter = nombre[nombre.length - 1]
        console.log("Nombre: " + nombre + ", Primer carácter: " + primerCaracter + ", Último carácter: " + ultimoCaracter);
    
    }
}
    arreglodenombre()


}else if (arreglo[0]=="17"){
    write("El enunciado del ejercicio 17 ")
    write(verificarUnSoloDigito)
    write ("17.	Dada una cadena presentar el primer carácter siempre y cuando sea un digito")
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  caracter = 0
// Los calculos o procesos que se hacen con las variables
// Proceso: Si(caracter >= -9 && caracter<= 9) Entonces
//             Escribir "El primer caracter de la cadena es de un solo dígito"
//             Escribir caracter 
//          Sino
//             Escribir"El caracter de la cadena no es de un solo dígito")
//          FinSi
// La informacion de las variables procesadas
// Salida: escribir "gracias por ingresar"

//LENGUAJE JAVASCRIPT

function verificarUnSoloDigito() {
    let caracter = 0
    write("Ingrese un caracter:")
    caracter = parseFloat(read())
    if (caracter >= -9 && caracter<= 9) {
       write( "El caracter de la cadena es un dígito")
       write(caracter)
    } else {
       write ("El caracter de la cadena no es un dígito")
    }
    write("gracias por ingresar")
 }

verificarUnSoloDigito();
}else if (arreglo[0]=="18"){
    write("El enunciado del ejercicio 18 ")
    write(verificarUnaSolaLetra)
    write("18.	Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra")
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  palabra= " "
// Los calculos o procesos que se hacen con las variables
// Proceso:   caracter = palabra.charAt(palabra.length-1)
// Si((caracter=="a" || caracter=="b" || caracter=="c" || caracter=="d" || caracter=="e"|| caracter=="f"
//  || caracter=="g"|| caracter=="h"|| caracter=="i"|| caracter=="j"|| caracter=="k"|| caracter=="l"|| caracter=="m"
//  || caracter=="o"|| caracter=="p"|| caracter=="q"|| caracter=="r"|| caracter=="s"|| caracter=="t"|| caracter=="u"
//  || caracter=="v"|| caracter=="w"|| caracter=="x"|| caracter=="y"|| caracter=="z")) Entonces
//             Escribir "El caracter de la cadena es de una letra"
//             Escribir "caracter"
//          Sino
//             Escribir"El caracter de la cadena no es de una letra"
//             Escribir "caracter"
//          FinSi
// La informacion de las variables procesadas
// Salida: escribir "gracias por ingresar"
//LENGUAJE JAVASCRIPT

function verificarUnaSolaLetra() {
    let palabra = " "
    write("Ingrese un caracter:")
    palabra = (read())
    caracter = palabra.charAt(palabra.length-1)
    if ((caracter=="a" || caracter=="b" || caracter=="c" || caracter=="d" || caracter=="e"|| caracter=="f"
    || caracter=="g"|| caracter=="h"|| caracter=="i"|| caracter=="j"|| caracter=="k"|| caracter=="l"|| caracter=="m"
    || caracter=="o"|| caracter=="p"|| caracter=="q"|| caracter=="r"|| caracter=="s"|| caracter=="t"|| caracter=="u"
    || caracter=="v"|| caracter=="w"|| caracter=="x"|| caracter=="y"|| caracter=="z")) {
       write( "El caracter de la cadena es de una letra")
       write(caracter)
    } else {
       write ("El caracter de la cadena no es de una letra")
       write(caracter)
    }
    write("gracias por ingresar")
 }
 
 verificarUnaSolaLetra()
}else if (arreglo[0]=="19"){
    write("El enunciado del ejercicio 19 ")
    write(verificarVocal)
    write("19.	Dada una cadena presentar el primer carácter siempre y cuando sea una vocal")
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  gradosCelsius=0(leer),gradosFahrenheit=0(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso:   SI (caracter=="a" || caracter=="e" || caracter=="i" || caracter=="o" || caracter=="u") {
//         escribir "es una vocal"
//         escribir "caracter"
//   Sino SI(caracter=="a" || caracter=="b" || caracter=="c" || caracter=="d" || caracter=="e"|| caracter=="f"
//   || caracter=="g"|| caracter=="h"|| caracter=="i"|| caracter=="j"|| caracter=="k"|| caracter=="l"|| caracter=="m"
//   || caracter=="o"|| caracter=="p"|| caracter=="q"|| caracter=="r"|| caracter=="s"|| caracter=="t"|| caracter=="u"
//   || caracter=="v"|| caracter=="w"|| caracter=="x"|| caracter=="y"|| caracter=="z") {
//    escribir "no es una vocal"
//   FinSi
// La informacion de las variables procesadas
// Salida: escribir("gracias")

//LENGUAJE JAVASCRIPT

function verificarVocal() {
   let caracter = ""
   write("Ingrese una vocal:")
   caracter = (read())
   if (caracter=="a" || caracter=="e" || caracter=="i" || caracter=="o" || caracter=="u") {
      write( "es una vocal")
      write(caracter)
   } else if (caracter=="a" || caracter=="b" || caracter=="c" || caracter=="d" || caracter=="e"|| caracter=="f"
   || caracter=="g"|| caracter=="h"|| caracter=="i"|| caracter=="j"|| caracter=="k"|| caracter=="l"|| caracter=="m"
   || caracter=="o"|| caracter=="p"|| caracter=="q"|| caracter=="r"|| caracter=="s"|| caracter=="t"|| caracter=="u"
   || caracter=="v"|| caracter=="w"|| caracter=="x"|| caracter=="y"|| caracter=="z") {
      write("no es una vocal")
   }
}

verificarVocal();
}else if (arreglo[0]=="20"){
    write("El enunciado del ejercicio 20 ")
    write(cadena)
write("20. Dada una cadena presentar el carácter de en medio, siempre y cuando sea un caracte de puntuación: “;” | “:” | “.” | “,” ")
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: cadena1=" "(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:  medio = cadena1.charAt(cadena1.length / 2)
//                  Si (medio == ";:.,") Entonces
//                  escribir "El caracter de Medio es un signo de puntuacion"
//                  escribir medio
//           Sino
//                 escriir "El caracter de en medio no es un signo de puntuacion"
//                 escribir medio
//           FinSi
// La informacion de las variables procesadas
// Salida:  escribir "gracias por ingresar"

//LENGUAJE JAVASCRIPT

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
}else if (arreglo[0]=="21"){
    write("El enunciado del ejercicio 21 ")
    write(compararNumeros)
write("21.	Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo")
//BOSQUEJO
// Analisis de requerimentos:
// Entrada: numero1=""(leer), nombre2=""(leer)
// los datos o variables del problema
// Proceso: Si (nombre1 === nombre2) entonces
//       comparacion="iguales"
//    sino si (nombre1 > nombre2) entonces
//       escribir"el primer nombre es mayor"
//    sino
//       escribir"el segundo nombre es mayor"
//    FinSi
// Los calculos o procesos que se hacen con las variables
// Salida: escribir("gracias por ingresar")

//LENGUAJE JAVASCRIPT

function compararNumeros() {
    let numero1 = 0, numero2 = 0
    write("Ingrese el primer nombre:")
    numero1 = parseFloat(read())
    write("Ingrese el segundo nombre:")
    numero2 = parseFloat(read())
    if (numero1 === numero2) {
       write("Son iguales")
    } else if (numero2 > numero1) {
       write ("el primer numero es mayor")
    } else {
       write("el segundo numero es mayor")
    }
    write("gracias por ingresar")
 }
compararNumeros()

}else if (arreglo[0]=="22"){
    write("El enunciado del ejercicio 22 ")
    write(compararNombres)
    write("22.	Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo")
//BOSQUEJO
// Analisis de requerimentos:
// Entrada: nombre1=""(leer), nombre2=""(leer)
// los datos o variables del problema
// Proceso: Si (nombre1 === nombre2) entonces
//       comparacion="iguales"
//    sino si (nombre1 > nombre2) entonces
//       escribir"el primer nombre es mayor"
//    sino
//       escribir"el segundo nombre es mayor"
//    FinSi
// Los calculos o procesos que se hacen con las variables
// Salida: escribir("gracias por ingresar")

//LENGUAJE JAVASCRIPT

function compararNombres() {
    let nombre1="", nombre2=""
    nombre1 = read("Ingrese el primer nombre: ")
    nombre2 = read("Ingrese el segundo nombre: ")
    if (nombre1 == nombre2) {
        console.log("Los nombres son iguales.")
    } else if (nombre1 < nombre2) {
        console.log("El primer nombre es menor que el segundo.")
    } else {
        console.log("El primer nombre es mayor que el segundo.")
    }
}

compararNombres()

}else if (arreglo[0]=="23"){
    write("El enunciado del ejercicio 23 ")
    write(cadena)
write("23.	Dado una cadena indicar cuantos elementos tiene, sin usar ciclos")
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  cadena=" ",(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: cantidadElementos = cadena.length
// La informacion de las variables procesadas
// Salida: escribir "La cantidad de elementos que tiene la cadena es:",cantidadElementos

//LENGUAJE JAVASCRIPT
function cadena(){
    let cadena= " "
    write("Ingrese algo para la cadena y saber cual es la cantidad de elementos: ")
    cadena =(read())
    cantidadElementos = cadena.length
    write("La cantidad de elementos que tiene la cadena es: ",cantidadElementos)
    }
cadena()

}else if (arreglo[0]=="24"){
    write("El enunciado del ejercicio 24 ")
   write (cadenanumero)
 write("24.	Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos")
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  arreglo = [5](leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:
// arreglo[0]=(read())
// arreglo[1]=(read())
// arreglo[2]=(read())
// arreglo[3]=(read())
// arreglo[4]=(read()) cantidadElementos = cadena.length
// La informacion de las variables procesadas
// Salida: escribir "La cantidad de elementos que tiene la cadena es:",cantidadElementos

//LENGUAJE JAVASCRIPT
function cadenanumero(){
let arreglo = [5]
write("Ingrese 5 numero para la cadena y saber cual es la cantidad de elemetos")
arreglo[0]=(read())
arreglo[1]=(read())
arreglo[2]=(read())
arreglo[3]=(read())
arreglo[4]=(read())

cantidadElementos = arreglo.length
write("La cantidad de elementos que tiene la cadena es:",cantidadElementos)
}
cadenanumero()

}else{
    write("La opcion",arreglo[0],"No existe escoja del 1...24")
}for( i = 0; i < 24; i++){
    write("MENÚ DE OPCIONES")
    write("1)	Enunciado del Ejerciccio 1")
    write("2)	Enunciado del Ejerciccio 2")
    write("3)	Enunciado del Ejerciccio 3")
    write("4)	Enunciado del Ejerciccio 4")
    write("5)	Enunciado del Ejerciccio 5")
    write("6)	Enunciado del Ejerciccio 6")
    write("7)	Enunciado del Ejerciccio 7")
    write("8)	Enunciado del Ejerciccio 8")
    write("9)	Enunciado del Ejerciccio 9")
    write("10)	Enunciado del Ejerciccio 10")
    write("11)	Enunciado del Ejerciccio 11")
    write("12)	Enunciado del Ejerciccio 12")
    write("13)	Enunciado del Ejerciccio 13")
    write("14)	Enunciado del Ejerciccio 14")
    write("15)	Enunciado del Ejerciccio 15")
    write("16)	Enunciado del Ejerciccio 16")
    write("17)	Enunciado del Ejerciccio 17")
    write("18)	Enunciado del Ejerciccio 18")
    write("19)	Enunciado del Ejerciccio 19")
    write("20)	Enunciado del Ejerciccio 20")
    write("21)	Enunciado del Ejerciccio 21")
    write("22)	Enunciado del Ejerciccio 22")
    write("23)	Enunciado del Ejerciccio 23")
    write("24)	Enunciado del Ejerciccio 24")
    write("ELIJA UN EJERCICIO DEL 1..24")
    arreglo[0]=(read())
    arreglo[1]= "1)	Enunciado del Ejerciccio1"
    arreglo[2]= "2)	Enunciado del Ejerciccio2"
    arreglo[3]= "3)	Enunciado del Ejerciccio3"
    arreglo[4]= "4)	Enunciado del Ejerciccio4"
    arreglo[5]= "5)	Enunciado del Ejerciccio5"
    arreglo[6]= "6)	Enunciado del Ejerciccio6"
    arreglo[7]= "7)	Enunciado del Ejerciccio7"
    arreglo[8]= "8)	Enunciado del Ejerciccio8"
    arreglo[9]= "9)	Enunciado del Ejerciccio9"
    arreglo[10]= "10) Enunciado del Ejerciccio10"
    arreglo[11]= "11) Enunciado del Ejerciccio11"
    arreglo[12]= "12) Enunciado del Ejerciccio12"
    arreglo[13]= "13) Enunciado del Ejerciccio13"
    arreglo[14]= "14) Enunciado del Ejerciccio14"
    arreglo[15]= "15) Enunciado del Ejerciccio15"
    arreglo[16]= "16) Enunciado del Ejerciccio16"
    arreglo[17]= "17) Enunciado del Ejerciccio17"
    arreglo[18]= "18) Enunciado del Ejerciccio18"
    arreglo[19]= "19) Enunciado del Ejerciccio19"
    arreglo[20]= "20) Enunciado del Ejerciccio20"
    arreglo[21]= "21) Enunciado del Ejerciccio21"
    arreglo[22]= "22) Enunciado del Ejerciccio22"
    arreglo[23]= "23) Enunciado del Ejerciccio23"
    arreglo[24]= "24) Enunciado del Ejerciccio24"
    if (arreglo[0]=="1"){
        write("El enunciado del ejercicio 1")
        write(temperatura)
        write(" 1.	Algoritmo que transforme de grados Celsius a Fahrenheit")
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada:  gradosCelsius=0(leer),gradosFahrenheit=0(proceso)
        // Los calculos o procesos que se hacen con las variables
        // Proceso: gradosFahrenheit = 32 + (gradosCelsius * 9/5)
        // La informacion de las variables procesadas
        // Salida: "La temperatura en grados fahrenheit es:"," ",gradosFahrenheit
        
        //LENGUAJE JAVASCRIPT
        
        function temperatura(){
            let gradosCelsius=0,gradosFahrenheit=0
            write ("Ingrese la temperatura en grados celsius °C:")
            gradosCelsius =parseInt(read())
            gradosFahrenheit = 32 + (gradosCelsius * 9/5)
            write ("La temperatura en grados fahrenheit es: ",gradosFahrenheit,"°F")
            }
        
        temperatura()
        
        }else if (arreglo[0]=="2"){
            write("El enunciado del ejercicio 2 ")
            write(obtenerDobleTriple)
         write("2. Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número.")  
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada: numero1=0(leer)
        // Los calculos o procesos que se hacen con las variables
        // Proceso:  resultado1= numero1 * 2
        //           resultado2= numero1 * 3
        // La informacion de las variables procesadas
        // Salida:  escribir "El doble del numero ingresado es:",resultado1
        //          escribir "El triple del numero ingresado es:",resultado2
        //LENGUAJE JAVASCRIPT
        function obtenerDobleTriple(){
            const numero = parseInt(read("Ingrese un número entero: "))
            
            const doble = numero * 2
            const triple = numero * 3
        
            write("El doble del número es:", doble)
            write("El triple del número es:", triple)
        }
          
            obtenerDobleTriple()
        }else if (arreglo[0]=="3"){
            write("El enunciado del ejercicio 3 ")
            write(calcularOperaciones)
        write("3.	Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.")
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada:  numero1=0(leer),numero2=0(leer),numero3=0(leer),numero4=0(leer)
        // Los calculos o procesos que se hacen con las variables
        // Proceso: //Producto de las variables
        //               producto = numero4 * numero3 * numero2 * numero1
        //          //Suma de las variables
        //               suma = numero4 + numero3 + numero2 + numero1
        //          //Media aritmetica
        //               mediaAritmetica = suma/4
        // La informacion de las variables procesadas
        // Salida:     escribir "La suma de los números es: ",suma
        //             escribir "El producto de los numeros es: ",producto
        //             escribir "la media aritmetica de los números es: ",mediaAritmetica
        //LENGUAJE JAVASCRIPT
        
        function calcularOperaciones(){
            const variable1 = parseFloat(read("Ingrese el primer numero: "))
            const variable2 = parseFloat(read("Ingrese el segundo numero: "))
            const variable3 = parseFloat(read("Ingrese el tercer numero: "))
            const variable4 = parseFloat(read("Ingrese el cuarto numero: "))
        
            
            const producto = variable1 * variable2 * variable3 * variable4
            const suma = variable1 + variable2 + variable3 + variable4
            const media = suma / 4
        
            write("El producto de los numeros es:", producto)
            write("La suma de los numeros es:", suma)
            write("La media aritmética de los numeros es:", media)
        }
        
        calcularOperaciones()
        }else if (arreglo[0]=="4"){
            write("El enunciado del ejercicio 4 ")
            write(convertirPeso)
        write(" 4.	Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos")
        write("     (nota: una libra equivale a 0.453593 kilogramos)")
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada:  PesoLibras=0(leer)
        // Los calculos o procesos que se hacen con las variables
        // Proceso: kilogramos = PesoLibras * 0.453593
        //          gramos = kilogramos - (kilogramos * 1000)
        // La informacion de las variables procesadas
        // Salida:  escribir "El peso en kilogramos es: ",kilogramos,"kg"
        //          escribir "El peso en gramos es: ",gramos,"g"
        
        //LENGUAJE JAVASCRIPT
        
        function convertirPeso(){
            const libras = parseFloat(read("Ingrese el peso en libras: "))
        
            const kilogramos = libras * 0.453593
            const gramos = (kilogramos - parseInt(kilogramos)) * 1000
        
            write("El peso en kilogramos es:", parseInt(kilogramos), "kg")
            write("El peso en gramos es:", parseInt(gramos), "g")
        }
        convertirPeso()
        
        }else if (arreglo[0]=="5"){
            write("El enunciado del ejercicio 5 ")
            write(matemática)
        write(" 5.	Diseñar un algoritmo que resuelva la siguiente expresión matemática:")
        write("     x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c)) ")
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada:  a=0,b=0,c=0,resultado=0
        // Los calculos o procesos que se hacen con las variables
        // Proceso:  resultado=((Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2)) + (Math.sqrt(Math.pow(a, 3)) / (a * b + c))
        // La informacion de las variables procesadas
        // Salida:  escribir "La respuesta es ",resultado
        
        //LENGUAJE JAVASCRIPT
        
        function matemática(){
            let a=0,b=0,c=0,resultado=0
            write("ingrese un valor para A")
            a=parseInt(read())
            write("ingrese un valor para B")
            b=parseInt(read())
            write("ingrese un valor para C")
            c=parseInt(read())
            sen=0
            cos=0 
            trunc=0
            resultado=((Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2)) + (Math.sqrt(Math.pow(a, 3)) / (a * b + c))
            write("La respuesta es ",resultado)
        
        }
        matemática()
        
        }else if (arreglo[0]=="6"){
            write("El enunciado del ejercicio 6 ")
            write(calcularSueldo)
        write("6.  Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora.") 
        write("    Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan") 
        write("    al doble de la hora de la jornada normal. ")
        write("    El porcentaje del seguro social(iess) es del 10% del ingreso total.")
        write("    Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir.")
        
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
        
        //LENGUAJE JAVASCRIPT
        
        function calcularSueldo(){
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
        
        }else if (arreglo[0]=="7"){
            write("El enunciado del ejercicio 7 ")
            write(encontrarMayor)
        write(" 7. Algoritmo que pida dos números y presenta el mayor de los dos siempre y cando el primero sea par y el segundo impar")
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
        
        //LENGUAJE JAVASCRIPT
        
        function encontrarMayor(){
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
        
        }else if (arreglo[0]=="8"){
            write("El enunciado del ejercicio 8 ")
            write(verificarCaracter)
        write(" 8. Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive") 
        write("    y sino verificar si es un signo de puntuacion , . ; : y si no presentar solo el carácter.")
        
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada:  caracter=" " (leer)
        // Los calculos o procesos que se hacen con las variables
        // Proceso: Si (caracter >= 'a' && caracter <= 'z')Entonces
        //             escribir"El carácter está comprendido entre las letras a hasta la z."
        //          Sino 
        //          SI (caracter == "," || caracter == "." || caracter==";" || caracter==":"){
        //                 escribir "El carácter es un signo de puntuación."
        //          Sino
        //                 escribir "El carácter ingresado es:", caracter
        //          FinSi
        // La informacion de las variables procesadas
        // Salida:   escribir "gracias
        
        //LENGUAJE JAVASCRIPT
        
        function verificarCaracter() {
            const caracter = read("Ingrese un carácter: ")
        
            if (caracter >= 'a' && caracter <= 'z') {
                write("El carácter está comprendido entre las letras a y z.")
            } else if (caracter >= 'A' && caracter <= 'Z') {
                write("El carácter está comprendido entre las letras A y Z.")
            } else if (caracter === ',' || caracter === '.' || caracter === ';' || caracter === ':') {
                write("El carácter es un signo de puntuación: ", caracter)
            } else {
                write("El carácter ingresado es: ", caracter)
            }
        }
        verificarCaracter()
        
        }else if (arreglo[0]=="9"){
            write("El enunciado del ejercicio 9 ")
            write(calcularCostoColas)
        write(" 9.	Determinar cuánto se  debe pagar por x  cantidad de colas, considerando que si  son menos de 12 colas,")
        write("     el costo por unidad es de $0,25 caso  contrario el precio será  10% menos")
        
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
        
        //LENGUAJE JAVASCRIPT
        
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
        }else if (arreglo[0]=="10"){
            write("El enunciado del ejercicio 10 ")
            write(calcularDescuentoYPago)
        write(" 10.	El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200,")
        write(" Se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares.")
        write(" Presentar el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.")
        
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
        
        //LENGUAJE JAVASCRIPT
        function calcularDescuentoYPago(){
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
        
        }else if (arreglo[0]=="11"){
            write("El enunciado del ejercicio 11 ")
            write(diaSemana)
        write("11.	Dado un día en numero, presentar el nombre de ese día. Para la solución utilice arreglos.")
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada:   dia=0(leer),diasSemana = [6](proceso)
        // Los calculos o procesos que se hacen con las variables
        // Proceso:   Si(dia>=0 && dia<=6)Entonces
        //        diasSemana[0]="Domingo"
        //        diasSemana[1]="Lunes"
        //        diasSemana[2]="Martes"
        //        diasSemana[3]="Miercoles"
        //        diasSemana[4]="Jueves"
        //        diasSemana[5]="Viernes"
        //        diasSemana[6]="Sabado"
        //             nombre = diasSemana[dia]
        //             escribir "El día", dia, "La semana",nombre
        //        sino
        //        Escribir "Número de día inválido. Por favor, ingrese un número del 0 al 6."
        //        FinSi
        // La informacion de las variables procesadas
        // Salida: escribir "gracias por consultar"
        
        //LENGUAJE JAVASCRIPT
        
        function diaSemana() {
            const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
        
            const numeroDia = parseInt(read("Ingrese el número del día (1 para Domingo, 2 para Lunes, etc.): "))
            if (numeroDia >= 1 && numeroDia <= 7) {
                const nombreDia = diasSemana[numeroDia - 1]
                write("El día correspondiente al número", numeroDia, "es", nombreDia)
            } else {
                write("Número de día inválido. Por favor, ingrese un número del 1 al 7.")
            }
            }
            diaSemana()
        
        }else if (arreglo[0]=="12"){
            write("El enunciado del ejercicio 12 ")
            write(Meses)
        write("12.	Dado un mes en número, presentar el nombre de ese mes. Para la solución utilice arreglos.")
        //BOSQUEJO
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
        
        //LENGUAJE JAVASCRIPT
        
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
        
        }else if (arreglo[0]=="13"){
            write("El enunciado del ejercicio 13 ")
            write(nombres)
        write("13.	Dado 5 nombres almacenarlo en un arreglo y luego presentar")
        write("     cada nombre del arreglo desde el ultimo al primero sin usar ciclos.")
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada:   nombre1=" "(leer),nombre2=""(leer),nombre3=""(leer),nombre4=""(leer),nombre5=""(leer)
        // Los calculos o procesos que se hacen con las variables
        // Proceso:  
        //      nombre6=nombre1
        //      nombre7=nombre2
        //      nombre8=nombre3
        //      nombre9=nombre4
        //      nombre10=nombre5
        // La informacion de las variables procesadas
        // Salida: escribir "El quinto nombre",nombre10
        //         escribir "El cuarto nombre",nombre9
        //         escribir "El tercer nombre",nombre8
        //         escribir"El segundo nombre",nombre7
        //         escribir"El primero nombre",nombre6
        //LENGUAJE JAVASCRIPT
        
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
        
        }else if (arreglo[0]=="14"){
            write("El enunciado del ejercicio 14 ")
            write(direcCarac)
        write("14.Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección.")
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada:   direccion=" "(leer)
        // Los calculos o procesos que se hacen con las variables
        // Proceso:          
        //       direccion1=direccion
        // La informacion de las variables procesadas
        // Salida: Escribir "Primer caracter"," ",direccion1[0]
        //         Escribir "Medio caracter", direccion1[direccion1.length / 2]
        //         Escribir "Ultimo caracter"," ",direccion1[direccion1.length-1]
        
        //LENGUAJE JAVASCRIPT
        
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
            
        }else if (arreglo[0]=="15"){
            write("El enunciado del ejercicio 15 ")
            write(valorAleatorio)
        write("15.Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor")
        write("   si es par positivo y el ultimo si es impar negativo.")
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada: valor=0(aleatorio)
        // Los calculos o procesos que se hacen con las variables
        // Proceso: numeros.push(parseInt(Math.random() * 100))
        //    numeros.push(parseInt(Math.random() * 100))
        //    numeros.push(parseInt(Math.random() * 100))
        //    numeros.push(parseInt(Math.random() * 100))
        //    numeros.push(parseInt(Math.random() * 100))
        //    Si(valor%2==0)Entonces
        //       escribir "El primer numero es par: ",valor
        //    Sino
        //       Escribir "El primer numero es impar: ",valor
        //    FinSi
        //    si (valor>0)Entonces
        //       Escribir "El primer numero es positivo: ",valor
        //    Sino
        //       Escribir "El primer numero es negativo ",valor
        //    FinSi
        //    si(valor5%2==0 )Entonces
        //       escribir"El ultimo numero es par  ",valor5
        //    sino
        //       escribir"El ultimo numero es impar  ",valor5
        //    FinSi
        //    Si(valor5>0)Entonces
        //       escribir"El ultimo numero es positivo: ",valor5
        //    Sino
        //       escribir "El ultimo numero es negativo ",valor5 
        //    FinSi
        // La informacion de las variables procesadas
        // Salida: Escribir "gracias"
        
        //LENGUAJE JAVASCRIPT
        function valorAleatorio(){
            let valor=[]
            valor= parseInt(Math.random()*100) 
            valor2= parseInt(Math.random()*100) 
            valor3= parseInt(Math.random()*100) 
            valor4= parseInt(Math.random()*100) 
            valor5= parseInt(Math.random()*100) 
            write(valor)
            write(valor2)
            write(valor3)
            write(valor4)
            write(valor5)
            residuo=valor%2
            if (residuo==0){
                write("El primer numero es par: ",valor)
            }else {
                write("El primer numero es impar: ",valor) 
            } 
            if (valor>0){
                write("El primer numero es positivo: ",valor)
            }else {
            write("El primer numero es negativo ",valor) 
            }
            residuos=valor5%3
            if(residuos==1 ){
                write("El ultimo numero es par  ",valor5)
            }else{
            write("El ultimo numero es impar  ",valor5)
            }
            if (valor5>0){
                write("El ultimo numero es positivo: ",valor5)
            }else {
            write("El ultimo numero es negativo ",valor5) 
            }
        }
        valorAleatorio()
            
        }else if (arreglo[0]=="16"){
            write("El enunciado del ejercicio 16 ")
            write(arreglodenombre)
        write("16.	Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.")
        write("     cada nombre del arreglo desde el ultimo al primero sin usar ciclos.")
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada:   nombres1=" "(leer),nombres2=" "(leer),nombres3=" "(leer), nombre = [3](proceso)
        // Los calculos o procesos que se hacen con las variables
        // Proceso:     nombre[0]=nombres1
        //              nombre[1]=nombres2
        //              nombre[2]=nombres3
        // La informacion de las variables procesadas
        // Salida: escribir ""El primer nombre es: ",nombre[0]"
        //         escribir ""El ultimo nombre es: ",nombre[2]"
        
        //LENGUAJE JAVASCRIPT
        
        function arreglodenombre() {
            const nombres = []
        
            nombres.push("Juan")
            nombres.push("María")
            nombres.push("Carlos")
            
            
            for (let nombre of nombres) {
                const primerCaracter = nombre[0]
                const ultimoCaracter = nombre[nombre.length - 1]
                console.log("Nombre: " + nombre + ", Primer carácter: " + primerCaracter + ", Último carácter: " + ultimoCaracter);
            
            }
        }
            arreglodenombre()
        
        
        }else if (arreglo[0]=="17"){
            write("El enunciado del ejercicio 17 ")
            write(verificarUnSoloDigito)
            write ("17.	Dada una cadena presentar el primer carácter siempre y cuando sea un digito")
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada:  caracter = 0
        // Los calculos o procesos que se hacen con las variables
        // Proceso: Si(caracter >= -9 && caracter<= 9) Entonces
        //             Escribir "El primer caracter de la cadena es de un solo dígito"
        //             Escribir caracter 
        //          Sino
        //             Escribir"El caracter de la cadena no es de un solo dígito")
        //          FinSi
        // La informacion de las variables procesadas
        // Salida: escribir "gracias por ingresar"
        
        //LENGUAJE JAVASCRIPT
        
        function verificarUnSoloDigito() {
            let caracter = 0
            write("Ingrese un caracter:")
            caracter = parseFloat(read())
            if (caracter >= -9 && caracter<= 9) {
               write( "El caracter de la cadena es un dígito")
               write(caracter)
            } else {
               write ("El caracter de la cadena no es un dígito")
            }
            write("gracias por ingresar")
         }
        
        verificarUnSoloDigito();
        }else if (arreglo[0]=="18"){
            write("El enunciado del ejercicio 18 ")
            write(verificarUnaSolaLetra)
            write("18.	Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra")
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada:  palabra= " "
        // Los calculos o procesos que se hacen con las variables
        // Proceso:   caracter = palabra.charAt(palabra.length-1)
        // Si((caracter=="a" || caracter=="b" || caracter=="c" || caracter=="d" || caracter=="e"|| caracter=="f"
        //  || caracter=="g"|| caracter=="h"|| caracter=="i"|| caracter=="j"|| caracter=="k"|| caracter=="l"|| caracter=="m"
        //  || caracter=="o"|| caracter=="p"|| caracter=="q"|| caracter=="r"|| caracter=="s"|| caracter=="t"|| caracter=="u"
        //  || caracter=="v"|| caracter=="w"|| caracter=="x"|| caracter=="y"|| caracter=="z")) Entonces
        //             Escribir "El caracter de la cadena es de una letra"
        //             Escribir "caracter"
        //          Sino
        //             Escribir"El caracter de la cadena no es de una letra"
        //             Escribir "caracter"
        //          FinSi
        // La informacion de las variables procesadas
        // Salida: escribir "gracias por ingresar"
        //LENGUAJE JAVASCRIPT
        
        function verificarUnaSolaLetra() {
            let palabra = " "
            write("Ingrese un caracter:")
            palabra = (read())
            caracter = palabra.charAt(palabra.length-1)
            if ((caracter=="a" || caracter=="b" || caracter=="c" || caracter=="d" || caracter=="e"|| caracter=="f"
            || caracter=="g"|| caracter=="h"|| caracter=="i"|| caracter=="j"|| caracter=="k"|| caracter=="l"|| caracter=="m"
            || caracter=="o"|| caracter=="p"|| caracter=="q"|| caracter=="r"|| caracter=="s"|| caracter=="t"|| caracter=="u"
            || caracter=="v"|| caracter=="w"|| caracter=="x"|| caracter=="y"|| caracter=="z")) {
               write( "El caracter de la cadena es de una letra")
               write(caracter)
            } else {
               write ("El caracter de la cadena no es de una letra")
               write(caracter)
            }
            write("gracias por ingresar")
         }
         
         verificarUnaSolaLetra()
        }else if (arreglo[0]=="19"){
            write("El enunciado del ejercicio 19 ")
            write(verificarVocal)
            write("19.	Dada una cadena presentar el primer carácter siempre y cuando sea una vocal")
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada:  gradosCelsius=0(leer),gradosFahrenheit=0(proceso)
        // Los calculos o procesos que se hacen con las variables
        // Proceso:   SI (caracter=="a" || caracter=="e" || caracter=="i" || caracter=="o" || caracter=="u") {
        //         escribir "es una vocal"
        //         escribir "caracter"
        //   Sino SI(caracter=="a" || caracter=="b" || caracter=="c" || caracter=="d" || caracter=="e"|| caracter=="f"
        //   || caracter=="g"|| caracter=="h"|| caracter=="i"|| caracter=="j"|| caracter=="k"|| caracter=="l"|| caracter=="m"
        //   || caracter=="o"|| caracter=="p"|| caracter=="q"|| caracter=="r"|| caracter=="s"|| caracter=="t"|| caracter=="u"
        //   || caracter=="v"|| caracter=="w"|| caracter=="x"|| caracter=="y"|| caracter=="z") {
        //    escribir "no es una vocal"
        //   FinSi
        // La informacion de las variables procesadas
        // Salida: escribir("gracias")
        
        //LENGUAJE JAVASCRIPT
        
        function verificarVocal() {
           let caracter = ""
           write("Ingrese una vocal:")
           caracter = (read())
           if (caracter=="a" || caracter=="e" || caracter=="i" || caracter=="o" || caracter=="u") {
              write( "es una vocal")
              write(caracter)
           } else if (caracter=="a" || caracter=="b" || caracter=="c" || caracter=="d" || caracter=="e"|| caracter=="f"
           || caracter=="g"|| caracter=="h"|| caracter=="i"|| caracter=="j"|| caracter=="k"|| caracter=="l"|| caracter=="m"
           || caracter=="o"|| caracter=="p"|| caracter=="q"|| caracter=="r"|| caracter=="s"|| caracter=="t"|| caracter=="u"
           || caracter=="v"|| caracter=="w"|| caracter=="x"|| caracter=="y"|| caracter=="z") {
              write("no es una vocal")
           }
        }
        
        verificarVocal();
        }else if (arreglo[0]=="20"){
            write("El enunciado del ejercicio 20 ")
            write(cadena)
        write("20. Dada una cadena presentar el carácter de en medio, siempre y cuando sea un caracte de puntuación: “;” | “:” | “.” | “,” ")
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada: cadena1=" "(leer)
        // Los calculos o procesos que se hacen con las variables
        // Proceso:  medio = cadena1.charAt(cadena1.length / 2)
        //                  Si (medio == ";:.,") Entonces
        //                  escribir "El caracter de Medio es un signo de puntuacion"
        //                  escribir medio
        //           Sino
        //                 escriir "El caracter de en medio no es un signo de puntuacion"
        //                 escribir medio
        //           FinSi
        // La informacion de las variables procesadas
        // Salida:  escribir "gracias por ingresar"
        
        //LENGUAJE JAVASCRIPT
        
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
        }else if (arreglo[0]=="21"){
            write("El enunciado del ejercicio 21 ")
            write(compararNumeros)
        write("21.	Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo")
        //BOSQUEJO
        // Analisis de requerimentos:
        // Entrada: numero1=""(leer), nombre2=""(leer)
        // los datos o variables del problema
        // Proceso: Si (nombre1 === nombre2) entonces
        //       comparacion="iguales"
        //    sino si (nombre1 > nombre2) entonces
        //       escribir"el primer nombre es mayor"
        //    sino
        //       escribir"el segundo nombre es mayor"
        //    FinSi
        // Los calculos o procesos que se hacen con las variables
        // Salida: escribir("gracias por ingresar")
        
        //LENGUAJE JAVASCRIPT
        
        function compararNumeros() {
            let numero1 = 0, numero2 = 0
            write("Ingrese el primer nombre:")
            numero1 = parseFloat(read())
            write("Ingrese el segundo nombre:")
            numero2 = parseFloat(read())
            if (numero1 === numero2) {
               write("Son iguales")
            } else if (numero2 > numero1) {
               write ("el primer numero es mayor")
            } else {
               write("el segundo numero es mayor")
            }
            write("gracias por ingresar")
         }
        compararNumeros()
        
        }else if (arreglo[0]=="22"){
            write("El enunciado del ejercicio 22 ")
            write(compararNombres)
            write("22.	Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo")
        //BOSQUEJO
        // Analisis de requerimentos:
        // Entrada: nombre1=""(leer), nombre2=""(leer)
        // los datos o variables del problema
        // Proceso: Si (nombre1 === nombre2) entonces
        //       comparacion="iguales"
        //    sino si (nombre1 > nombre2) entonces
        //       escribir"el primer nombre es mayor"
        //    sino
        //       escribir"el segundo nombre es mayor"
        //    FinSi
        // Los calculos o procesos que se hacen con las variables
        // Salida: escribir("gracias por ingresar")
        
        //LENGUAJE JAVASCRIPT
        
        function compararNombres() {
            let nombre1="", nombre2=""
            nombre1 = read("Ingrese el primer nombre: ")
            nombre2 = read("Ingrese el segundo nombre: ")
            if (nombre1 == nombre2) {
                console.log("Los nombres son iguales.")
            } else if (nombre1 < nombre2) {
                console.log("El primer nombre es menor que el segundo.")
            } else {
                console.log("El primer nombre es mayor que el segundo.")
            }
        }
        
        compararNombres()
        
        }else if (arreglo[0]=="23"){
            write("El enunciado del ejercicio 23 ")
            write(cadena)
        write("23.	Dado una cadena indicar cuantos elementos tiene, sin usar ciclos")
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada:  cadena=" ",(leer)
        // Los calculos o procesos que se hacen con las variables
        // Proceso: cantidadElementos = cadena.length
        // La informacion de las variables procesadas
        // Salida: escribir "La cantidad de elementos que tiene la cadena es:",cantidadElementos
        
        //LENGUAJE JAVASCRIPT
        function cadena(){
            let cadena= " "
            write("Ingrese algo para la cadena y saber cual es la cantidad de elementos: ")
            cadena =(read())
            cantidadElementos = cadena.length
            write("La cantidad de elementos que tiene la cadena es: ",cantidadElementos)
            }
        cadena()
        
        }else if (arreglo[0]=="24"){
            write("El enunciado del ejercicio 24 ")
           write (cadenanumero)
         write("24.	Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos")
        //BOSQUEJO
        // Analisis de requerimentos:
        // los datos o variables del problema
        // Entrada:  arreglo = [5](leer)
        // Los calculos o procesos que se hacen con las variables
        // Proceso:
        // arreglo[0]=(read())
        // arreglo[1]=(read())
        // arreglo[2]=(read())
        // arreglo[3]=(read())
        // arreglo[4]=(read()) cantidadElementos = cadena.length
        // La informacion de las variables procesadas
        // Salida: escribir "La cantidad de elementos que tiene la cadena es:",cantidadElementos
        
        //LENGUAJE JAVASCRIPT
        function cadenanumero(){
        let arreglo = [5]
        write("Ingrese 5 numero para la cadena y saber cual es la cantidad de elemetos")
        arreglo[0]=(read())
        arreglo[1]=(read())
        arreglo[2]=(read())
        arreglo[3]=(read())
        arreglo[4]=(read())
        
        cantidadElementos = arreglo.length
        write("La cantidad de elementos que tiene la cadena es:",cantidadElementos)
        }
        cadenanumero()

}else{
    write("La opcion",arreglo[0],"No existe escoja del 1...24")
}
}
}

menu()