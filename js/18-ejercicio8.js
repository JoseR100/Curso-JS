'use strict'

// Una calculadora que pida dos numeros por pantalla
/*Si metemos uno mal que lo vuelva a Pedir
Muestre en el cuerpo de la pagina en una a lerta y por la consola el resultado de sumar restar muntiplicar y dividir*/

var numero1 = parseInt(prompt("Ingresa tu numero1,", 0));
var numero2 = parseInt(prompt("Ingresa tu numero2,", 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Introduce el primer numero", 0));
    numero2 = (prompt("Introduce el segundo numero", 0));
}

var resultado = "La suma es:"+(numero1+numero2)+"<br/>"+
                "La resta es:"+(numero1-numero2)+"<br/>"+
                "La multiplicacion es:" +(numero1*numero2)+"<br/>"+
                "La division es:" +(numero1/numero2)+"<br/>"

/* \n salto de linea alt + 92 */                

var resultadoCMD = "La suma es:"+(numero1+numero2)+"<\n>"+
                "La resta es:"+(numero1-numero2)+"<\n>"+
                "La multiplicacion es:" +(numero1*numero2)+"<\n>"+
                "La division es:" +(numero1/numero2)+"<\n>"

document.write(resultado);
alert(resultado);
console.log(resultado);

//https://fsymbols.com/es/teclado/windows/alt-codes/lista/