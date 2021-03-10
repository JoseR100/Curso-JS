'use strict'

// Funciones 
// Una funcion es una agrupacion reutilizable de un conjunto de introducciones

// Defino la tabla

function calculadora(){
    // Conjunto de intrucciones a ejecutar
    console.log("suma:"+(10+15));
    console.log("resta:"+(10-15));
    console.log("division:"+(10/15));
    console.log("Multiplicacion:"+(10*15));
    console.log("***************************");

    return "Hola soy la calculadora";

    // Invocar o llamar a la funcion

    calculadora();
    calculadora();

    for (var i = 1; i<= 10; i++){
        console.log(i);
        calculadora(i,8);

    }
}

