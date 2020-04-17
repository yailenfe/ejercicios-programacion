// Escriba un programa que reciba como entrada las longitudes de los dos catetos a y b de un triángulo rectángulo, y que entregue como salida el largo de la hipotenusa c del triangulo, dado por el teorema de Pitágoras: c2=a2+b2.

const prompt = require("prompt-sync")();

const legA = prompt("enter leg a: ");
const legB = prompt("enter leg b: ");

const hypotenuse = Math.sqrt(Math.pow(legA, 2) + Math.pow(legB, 2));

console.log("The hypotenuse is: " + hypotenuse);
