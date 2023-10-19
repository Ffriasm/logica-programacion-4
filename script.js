const botonDeCalculo = document.getElementById("boton");

botonDeCalculo.addEventListener("click", serieFibo);

function serieFibo() {
    const numero = parseInt(document.getElementById("fibo").value);
    const Serie = [0, 1];
    let inicial = 1;
    let incremento = 0;

    for (let i = 2; i < numero; i++) {
        let numeroNuevo = inicial + incremento;
        Serie.push(numeroNuevo);
        incremento = inicial;
        inicial = numeroNuevo;
    }

    const resultadoEnPantalla = document.getElementById("resultado");
    
    if (numero === 1) {
        resultadoEnPantalla.textContent = `Primer ${numero} número de la serie: [0] !`;
    } else {
        resultadoEnPantalla.textContent = `Primeros ${numero} números de la serie: ${Serie.join(', ')} !`;
    }
}