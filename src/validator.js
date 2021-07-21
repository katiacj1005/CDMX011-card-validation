// Este archivo controla la logica
const validator = {
    "isValid": function(cNumero) {

        /* inveretir números con un array*/
        const array = Array.from(cNumero).map(Number); /* metodo para crear un arreglo de mi parametro*/
        console.log(array);

        const volteado = array.reverse();
        console.log(volteado);

        /* Codigo luhn */
        let suma = 0; /*verifica que la suma final sea 0 */


        for (let i = 0; i < volteado.length; i++) {
            if (i % 2 === 1) {
                let multiplicar = volteado[i] * 2
                console.log(multiplicar)
                if (multiplicar >= 10) {
                    let resultadoFinal = multiplicar - 9
                    suma += resultadoFinal
                } else {
                    suma += multiplicar;
                    console.log(suma);
                }
            } else /*condicional para posiciones pares*/ {
                suma += volteado[i]; //sumamos el valor exacto de las posiciones pares//
                console.log(suma);
            }
        }

        /*suma de pares+impares*/

        let resultado = suma % 10; //nueva variable para resultado final de la operación// 
        if (resultado === 0) {
            return true;
        } else {
            return false;
        }
    },

    /*   maskify: function(hideNum) {
           console.log(hideNum)
           if (originalNum <= 4) {
               return hideNum
           } else {
               let cardNumber = Array.from(hideNum)
               for (let i = 0; i < hideNum.length - 4; i++) {
                   cardNumber[i] = "#"
               }
               let finalNum = cardNumber.join("")
               return finalNum*/
    maskify: function(mask) {
        let miArray = Array.from(mask) //definir arreglo
        let longArray = mask.lengt; //longitud del arreglo
        if (longArray <= 4) { //Si la longitud del arreglo es igual o menor a 4
            return miArray //devuelve el arreglo 
        } else {
            for (let i = 0; i < miArray.length - 4; i++) {
                miArray[i] = '#' //Si no, devolvera el array enmascarado con #, excepto los ultimos cuatro digitos
            }
            let masknumber = miArray.join(""); //Con .joing hago que mi arreglo no este dividido o separado al mostrarlo
            return masknumber;
        }
    }

}


export default validator



/* llamar maskify #enmascarado  
    validator.maskify(numberMask)&& validator.isValid(numberMask);
    let hideNum = validator.maskify(numberMaskify);
    let resultIsValid = validator.isValid(numberMask);
    if(resultIsValid){
        result.innerHTML= "resultadoFinal" + hideNum + "</br> es válida";
        } else {
            result.innerHTML="resultadoFinal" + hideNum +"</br> es invalida"; 

        } 

/*
    const numberMask = validator.maskify(validar);
    if (result == true) {
        const mask = document.getElementById("validarNumber").value = numbermask
        document.getElementById("resultadoFinal").innerHTML = ("Número de tarjeta válido" + mask)
    }
    //de lo contrario hacer: //
    else {
        const mask = document.getElementById("validarNumero").value = numberMask
        document.getElementById("resultadoFinal").innerHTML = ("Número de tarjeta inválido" + mask)

    }
    */