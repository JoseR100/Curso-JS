'use strict'

// Parametros REST y Spread
// resto_de_frutas solo un producto
//  todos los productos los pone en un array ...resto_de_frutas
// alt + 91 [] alt + 93

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

var frutas = ["Naranjas", "Manzanas"]
listadoFrutas( ...frutas, "Sandia", "Pera", "Melon", "Coco");
