'use strict'

// Switch

var edad = 29;
var imprime = "";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres un adulto";
    break;
    case 40:
        imprime = "Crisis de los cuarenta";
    break;
    case 75:
        imprime = "Eres ya un anciano";
    break;
    case 25:
        imprime = "Tu eres un neutral";
    break;
    default:
}

console.log(imprime);