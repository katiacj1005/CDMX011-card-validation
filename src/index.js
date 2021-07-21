import validator from './validator.js';
// desde aqui controlas todo el DOM
// mediante un document.... acceder al id del input e imprimir su valor en consola
document.getElementById("validar").addEventListener("click", numberTarjeta);

function numberTarjeta() {
    const numeroElement = document.getElementById("tarjeta"); //trae el número de tarjeta que escribimos en el imput
    console.log(numeroElement)

    const cNumero = numeroElement.value
    const result = validator.isValid(cNumero)
    console.log(result)

    /* llamar maskify #enmascarado*/
    const numberMask = validator.maskify(cNumero);

    if (result == true) {
        // document.getElementById("validarNumber").value = numbermask
        document.getElementById("resultadoFinal").innerHTML = "Número de tarjeta válido" + numberMask
    } else {
        // document.getElementById("").value = numberMask
        document.getElementById("resultadoFinal").innerHTML = "Número de tarjeta inválido" + numberMask
    }

}