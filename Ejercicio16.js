// 16.	Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.


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

const nombres = []

nombres.push("Juan")
nombres.push("María")
nombres.push("Carlos")


for (let nombre of nombres) {
    const primerCaracter = nombre[0]
    const ultimoCaracter = nombre[nombre.length - 1]
    console.log("Nombre: " + nombre + ", Primer carácter: " + primerCaracter + ", Último carácter: " + ultimoCaracter);

}
