'use strict'

/*
1.Pida 6 numeros por pantalla y los meta en u array
2. Mostrar el array entero(Todos sus elementos) en la pagina y akla consola.
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array.
6. Busqueda de un valor Introducido por el usuario, que onos diga si lo encuentra y su indice 
(Se valora el uso de funciones)*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array"+textoCustom+"</h1>");
    document.write("<ul>")
    elementos.forEach((elemento, index) => {
    document.write("<li>"+elemento+"</li>");
});
    document.write("<ul>")
}

// Pedir 6 numeros

var numeros = [];

for(var i = 0; i <= 5; i++){
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}

// Mostrar en el cuerpo de la pagina

/*document.write("<h1>Contenido del array</h1>");
numeros.forEach((numero, index) => {
    document.write("<strong>"+numero+"</strong><br/>");
});*/

// Mostrar array en la consola
console.log(numeros);
mostrarArray(numeros);

// Ordenar y mostrar
// Con este Callback se ordeno del numero menor a mayor

numeros.sort(function(a,b){return a-b});


//Muestra un orden en forma alfabetica
mostrarArray(numeros, 'ordenado')

// invertir y mostrar

numeros.reverse();
mostrarArray(numeros, 'revertido');

// Contar elementos
document.write("<h1>El array tiene : "+numeros.length+ " elementos");

// Busqueda

