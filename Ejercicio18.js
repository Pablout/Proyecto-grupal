// 18.	Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra

// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  caracter = 0
// Los calculos o procesos que se hacen con las variables
// Proceso: Si(caracter >= "a" && caracter<= "ab") Entonces
//             Escribir "El caracter de la cadena es de una letra"
//             Escribir "caracter"
//          Sino
//             Escribir"El caracter de la cadena no es de una letra"
//          FinSi
// La informacion de las variables procesadas
// Salida: 

const read = require('prompt-sync')();
const write = console.log;


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


