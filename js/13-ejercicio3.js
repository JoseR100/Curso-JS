'use strict'
// Hacer un progra que muestre todos los numeros entre dos numeros introducidos por el usuario


var numero1 = prompt("Ingresa tu numero1,", 0);
console.log(typeof numero1);

var numero2 = prompt("Ingresa tu numero1,", 0);
console.log(typeof numero2);

document.write("<h1>De"+numero1+"a"+numero2+"estan los numeros:</h1>")
for (var i = numero1; i <= numero2; i++) {
    document.write(i+"</br>");


}