function isoceles() {
    const input1 = document.getElementById("inputTrianguloA");
    const input2 = document.getElementById("inputTrianguloB");
    const input3 = document.getElementById("inputTrianguloC");
    const a = Number(input1.value);
    const b = Number(input2.value);
    const c = Number(input3.value);

        if(((a != b) && (a != c) && (b != c)) || ((a == b) && (a == c))) {
            alert("No es un triángulo isóceles");

        }
        else if((a == b) && (a != c)) {
            
            h = Math.sqrt(Math.pow(a, 2) - Math.pow(c / 2,2));
            alert("h = " + h);
        }
        else if((a == c) && (a != b)) {
            
            h = Math.sqrt(Math.pow(a, 2) - Math.pow(b / 2,2));
            alert("h = " + h);
        }
        else if((b == c) && (a != c)) {
            
            h = Math.sqrt(Math.pow(b, 2) - Math.pow(a / 2,2));
            alert("h = " + h);
        }
            
 
}