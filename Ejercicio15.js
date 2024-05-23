//15.Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor 
//si es par positivo y el ultimo si es impar negativo.
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: valor=0(aleatorio)
// Los calculos o procesos que se hacen con las variables
// Proceso: numeros.push(parseInt(Math.random() * 100))
//    numeros.push(parseInt(Math.random() * 100))
//    numeros.push(parseInt(Math.random() * 100))
//    numeros.push(parseInt(Math.random() * 100))
//    numeros.push(parseInt(Math.random() * 100))
//    residuo=valor%2
//    Si(residuo==0)Entonces
//       escribir "El primer numero es par: ",valor
//    Sino
//       Escribir "El primer numero es impar: ",valor
//    FinSi
//    si (valor>0)Entonces
//       Escribir "El primer numero es positivo: ",valor
//    Sino
//       Escribir "El primer numero es negativo ",valor
//    FinSi
//    residuos=valor5%3
//    si(residuos==1 )Entonces
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
// Salida: 
function valorAleatorio(){
    let numeros=[]
    valor=parseInt(Math.random() * 100)
    console.log(valor)
    numeros.push(parseInt(Math.random() * 100))
    numeros.push(parseInt(Math.random() * 100))
    numeros.push(parseInt(Math.random() * 100))
    numeros.push(parseInt(Math.random() * 100))
    numeros.push(parseInt(Math.random() * 100))
    console.log(numeros)
    if (numeros [0] > 0 && numeros [0] % 2 ==0) {
        console.log("El primer valor es par positivo:", numeros[0])
    } else  {
        (numeros [4] < 0 && numeros [4] % 3 ==0)
        console.log("El último valor es impar negativo:", numeros[4])
    }
}
valorAleatorio()