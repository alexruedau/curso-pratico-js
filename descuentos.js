/* const precioOriginal = 100;
const descuento = 15; */



function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}); */

function onClickBotonPrecioDescuento() {
    const inputPrecio = document.getElementById("inputPrecio");
    const precioValue = Number(inputPrecio.value);

    const inputDescuento = document.getElementById("inputDescuento");
    const descuentoValue = Number(inputDescuento.value);

    const precioConDescuento = calcularPrecioConDescuento(precioValue, descuentoValue);

    const resultado = document.getElementById("resultadoEnP");
    resultado.innerText = "El precio con descuento es: " + precioConDescuento;
}