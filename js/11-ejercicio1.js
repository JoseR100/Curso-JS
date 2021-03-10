'use strict'

/* Programa que pida dos numeros y que nos diga cual es el mayor y sin son iguales*/
// Parseint para convertir el string a un numero
// PLUS Si los numeros no son un numero o son menores o iguales a cero, no los vuelva a pedir los numeros


var numero1 = parseInt(prompt("Introduce el primer numero", 0));
var numero2 = (prompt("Introduce el segundo numero", 0));

//console.log(numero1, numero2); 

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero2)) {
numero1 = parseInt(prompt("Introduce el primer numero", 0));
numero2 = (prompt("Introduce el segundo numero", 0));
     
}

if(numero1 == numero2){
    alert("Los numeros son iguales");
    
}else if(numero1 > numero2){        
    alert("El numero mayor es" + numero1 );
    alert("El numero mayor es" + numero2 );
}else if (numero2 > numero1){
    alert("El numero mayor es" + numero2 );
    alert("El numero mayor es" + numero1 );
}alert("Introduce numeros correctos")





