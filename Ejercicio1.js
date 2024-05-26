// 1. Algoritmo que transforme de grados Celsius a Fahrenheit
//ANALISIS DEL REQUERIMIENTO
//Formula para conversion de Celsius a Fahrenheit F=Celsius* 9/5 +32
//ENTRADA: celsius=0.0, fahrenheit=0.0 
//PROCESO: fahrenheit=celsius*9/5 +32
//SALIDA: Mostrar el mensaje Temperatura en Fahrenheit
const read = require('prompt-sync')();
const write = console.log

function temperatura(){
    let gradosCelsius=0,gradosFahrenheit=0
    write ("Ingrese la temperatura en grados celsius °C:")
    gradosCelsius =parseInt(read())
    gradosFahrenheit = 32 + (gradosCelsius * 9/5)
    write ("La temperatura en grados fahrenheit es: ",gradosFahrenheit,"°F")
    }
    
    temperatura()