'use strict'

/* Mostrar todos los numeros impares que hay entre dos numeros introducidos por el teclado */


var numero1 = parseInt(prompt("Ingresa tu numero1,", 0));
var numero2 = parseInt(prompt("Ingresa tu numero2,", 0));

while(numero1 < numero2){
    numero1++;
    if(numero1%2 != 0){
        console.log("El"+numero1+"es impar");
    }
}

