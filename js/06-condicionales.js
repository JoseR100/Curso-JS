/*var year = 2018;

//Navegacion

if(year != 2016){
console.log("El año no es 2016 realmente es: " + year);

}

// AND

if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era postmoderna");
}

// OR alt + 124

if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("AND no registrado");

}
*/

'use strict'

// Condicional IF
// Si A es igual a B entonces haz algo

var edad = 33;
var nombre = 'David Suarez';

/*
// Operadores relaciones 
Mayor: >
Menor: <
Mayor o igual >=
Menor o igual <=
Igual: ==
Distinto o diferente: !=
 */

 if (edad >= 18){
     console.log(nombre+ "tiene" +edad+ "años, es mayor de edad");
     if(edad == 33){
         console.log('Todavia eres millenial');
     }else if (edad>=70){
         console.log('Ya no eres milenial');    
     }
 }else{
        //Es menor de edad
        console.log(nombre+ "tiene" +edad+" años, es menor de edad");
 }       

 // Operadores Logicos

 /* AND (Y): &&
    OR (o): ||
    negacion: !
    */

    // Negacion

    var year = 2018
    if(year != 2016){
        console.log("El año no es 2016"+ year);
    }

    // and 

    if (year >= 200 && year <= 2020){
        console.log("Estamos en la era actual");
    }else{
        console.log("Estamos en la era post moderna");
    }    
        
    // OR

    if (year == 2008 || (year == 2018 && year == 2028)){
        console.log("El año acaba en 8");
    }else{
        console.log("Año no registrado");
    }

