'use strict'

var numero = 444;
var texto1 = " Bienvenido al Curso de JavaScript";
var texto2 = " es muy buen curso";

// var busqueda = texto2.trim();
//console.log(busqueda);
var dato = numero.toString();
    dato = texto1.toLowerCase();
    dato = texto2.toLocaleUpperCase();

// Calcular Longitud

var nombre = "Jose ";
var apellido = "Redondo";
var edad = 27;

// console.log(nombre.lenght);

// Concatenar Unir textos

// var textoTotal = texto1+ " " + texto2;
var textoTotal1 = texto1.concat("" +texto2);
var textoTotal2 = nombre.concat("" +apellido);
var textoTotal3 = nombre.concat("" +edad);

console.log(textoTotal1, textoTotal2, textoTotal3);
console.log(nombre, apellido, edad);