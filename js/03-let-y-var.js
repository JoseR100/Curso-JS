'use strict'
// Pruebas con Var es una variable global

var numero = 40;
console.log(numero); // valor 40

//alt + 123 {}
if(true){
    var numero = 50;
    console.log(numero); // valor 50
}
console.log(numero); // valor 50

// Pruebas con let se usa como una variable local en el bloque 
var texto = "Curso JS victorroblesweb.es"
console.log(texto); // valor js

if(true){
    let texto = "Curso Laravel victorroblesweb.es";
    console.log(texto); // valor laravel 5
}
console.log(texto); // valor js
