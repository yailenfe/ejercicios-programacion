// Escriba un programa que pregunte primero si se quiere calcular el área de un triángulo o la de un círculo. Si se contesta que se quiere calcular el área de un triángulo (escribiendo T o t), el programa tiene que pedir entonces la base y la altura y escribir el área. Si se contesta que se quiere calcular el área de un círculo (escribiendo C o c), el programa tiene que pedir entonces el radio y escribir el área.

// Se recuerda que el área de un triángulo es base por altura dividido por 2 y que el área de un círculo es Pi (aproximadamente 3,141592) por el radio al cuadrado
const prompt = require("prompt-sync")();
console.log(`Choose a geometric figure: 
a)Triangle
b)Circumference`);

const figureChoosen = prompt(
	"Which figure do you want to calculate (Write T or C)?"
);

if (figureChoosen.toLowerCase() === "t") {
	const base = Number(prompt("Write the base:"));
	const height = Number(prompt("Write the height:"));
	const areaTriangle = (base * height) / 2;
	console.log(
		`A base triangle ${base} and height ${height} it has an area of ${areaTriangle}`
	);
} else if (figureChoosen.toLowerCase() === "c") {
	const radius = Number(prompt("Write the radius:"));
	const PI = 3.141592;
	const areaCircumference = PI * (radius * radius);
	console.log(`A circle of radius ${radius}it has an area of ${areaCircumference}`);
}
