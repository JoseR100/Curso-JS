'use strict'

//Arrays, Arreglos, Matrices

var nombre = "Jose Redondo";
var nombres = ["Victor" , "Juan" , "Manolo","Jose",52, true];

var lenguajes = new Array("PHP", "JS", "GO", "JAVA", "C#" );

//console.log(nombres[0]);
//console.log(nombres.length);
/*
var elemento = parseInt(prompt("¿Que elemento del array quieres?", 0));
alert(nombres[elemento]);
if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que" +nombres.length);    
}else{
    alert("El usuario seleccionado es:" +nombres[elemento]);
}*/

document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");
/*
for (var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");

}
*/
/*
lenguajes.forEach((elemento, indice, arr)=>{
document.write("<li>"+indice +" = " +elemento+"</li>");

});
*/

// Recorrer Arreglos
for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>")
}

document.write("</ul>");

// busquedas

var precios = [10, 20, 50, 80, 12];

// var busqueda con function

/*var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP;"    
});*/


// var busqueda con flecha
// some es un metodo que ayuda a comparar si es menor o mayor
var busqueda = precios.some(precio => precio > 12);

console.log(busqueda);