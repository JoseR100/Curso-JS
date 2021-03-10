'use strict'

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["la verdad duele", "la vida es bella", "Gran Torino"];
// Sort Ordena por orden alfabetico 
//peliculas.sort(); 
peliculas.reverse();
console.log(peliculas);

var cine = [categorias, peliculas];
/*
console.log(cine[0][1]);
console.log(cine[1][2]);
*/
/*
var elemento = "";

do{
    elemento = prompt("Introduce la pelicula");
    peliculas.push(elemento);
}while(elemento != "Finish")
*/

//peliculas.pop(); Nota: Pop metodo que elimina el Finish que interrumpe el while y no lo toma en la lista peliculas
//peliculas[0] = undefined; Cambia en el indice a undefined. 

var indice = peliculas.indexOf('Gran Torino');

if(indice > -1){
    peliculas.splice(indice, 1);

}

// join para convertir un array a texto

var peliculas_string = peliculas.join();

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");


console.log(cadena_array);
