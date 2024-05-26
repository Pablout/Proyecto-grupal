//Ejercicio19. Dada una cadena presentar el primer carácter siempre y cuando sea una vocal.

//Entrada: cadena =[](leer), ver si es una vocal(proceso)
//Proceso: ver si el primer caracter es una vocal o no 
//Salida: presentar el primer caracter si es una vocal

const read = require("prompt-sync")();
const write = console.log

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
     
    
     verificarVocal()