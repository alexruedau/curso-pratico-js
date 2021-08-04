//Código cuadrado
console.group("cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
} 
console.groupEnd();


//Código triángulo
console.group("triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
};

console.groupEnd();


//Código círculo
console.group("círculos");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}


//PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


////////////////////////////////
//Interactuamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputBase");
    const a = Number(input1.value);
    const b = Number(input2.value);
    const base = Number(input3.value);

    const perimetro = perimetroTriangulo(a, b, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputBase");
    const a = Number(input1.value);
    const b = Number(input2.value);
    const base = Number(input3.value);

    const perimetro = perimetroTriangulo(a, b, base);
    alert(perimetro);
}

function calcularDiametroCirculo() {
    const input = document.getElementById("inputRadio");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}