//Código cuadrado
console.group("cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " centímetros");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " centímetros");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
} 
//console.log("El área del cuadrado es: " + areaCuadrado + " cm²");
console.groupEnd();

//Código triángulo
console.group("triangulos");
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 + " centímetros, " 
    
    + ladoTriangulo2 + " centímetros, "
    + baseTriangulo + " centímetros");


const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: " + alturaTriangulo + " cm"); */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
};
//console.log("El área del triángulo es: " + areaTriangulo + " cm²");

console.groupEnd();


//Código círculo
console.group("círculos");

// Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo + " cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

/* const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + " cm"); */

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
/* const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + " cm"); */

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
/* const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo + " cm"); */

console.groupEnd();
