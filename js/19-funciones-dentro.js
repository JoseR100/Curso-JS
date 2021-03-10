// Funciones dentro de otras

'use strict'

function calculadora(numero1, numero2, mostrar = false){
    // Conjunto de instrucciones a ejecutar

    if (mostrar == false){
        console.log("suma:"+(10+15));
        console.log("resta:"+(10-15));
        console.log("division:"+(10/15));
        console.log("Multiplicacion:"+(10*15));
        console.log("***************************");
    }else{
        document.write("suma:"+(10+15));
        document.write("resta:"+(10-15));
        document.write("division:"+(10/15));
        document.write("Multiplicacion:"+(10*15));
        document.write("***************************");
    }

}