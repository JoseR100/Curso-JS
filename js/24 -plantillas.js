'use strict'

// plantillas de texto

var nombre = prompt("Ingrese tu nombre");
var apellidos = prompt("Ingrese sus apellidos");

// texto = Mi nombre es: "+nombre+ <br/> Mis apellidos son: "+apellidos;
// Faltan comillas alreves 
var texto =
<h1>Hola que tal</h1>
<h3>Mi nombre es: ${nombre}</h3>
<h3>Mis apellidos son: ${$apellidos}</h3> 
 ;


 document.write(texto);