'use strict'

// Mostrar todos los numeros divisores de un numero introducido en prompt

var numero = parseInt(prompt("mete un numero",1));
// for (la variable, comparacion o condicion, contador )
for(var i = 1; 1 <= numero; i++){

    if(numero%i == 0){
        console.log("Divisor:"+i);
}
}