//Hacer un programa JS que compruebe si un codigo EAN8 o EAN13 es correcto , tiene que cumplir que EAN8: 25938562 
//(el 2 es de control) 259385 = 2*3+5*1+9*3+8*3+5*!+6*3=88 (fins 90=2) Siempre tiene que llegar al múltiplo de 10 mas cerca del alto 
// La cifra mas a la derecha está calculada según , una fórmula  donde los dígitos en posición impares sonultiplicados por 3 y los pares por uno.

//6583 952 2 -> Correcto Multiplicacion es :88
//6583 952 1 -> Incorrecto
//5029 3657 7942 5 -> Correcto
//5129 3657 7942 5 -> Incorrecto
//Si por ejemplo el resultado es 94 el digito de control es 6, porque siempre se acerca al multiplo de 10 mas alto del rango en el que se encuentre
//Pistas addleftZeropadding(code,max) y checkDigitControl(code)
function codigoDeBarras() {
    let input = parseInt(prompt("Introduce un codigo EAN8 o EAN13 y te comprobaré si es correcto : "));
    let codigoDeBarras = addleftZeropadding(input);
    //Excepción por número de digitos.
    if (codigoDeBarras == false) { return alert("Las cifras introducidas son inválidas . Las cifras no pueden estar por debajo de 0 ni por encima de 13") };
    // Comprobación digito de control
    return checkDigitControl(codigoDeBarras);
}

function addleftZeropadding(input) {
    if (input < 0 || input > 13) {
        return false;
    }
    else if (input.toString().length >= 0 && input.toString().length <= 8) {
        let pad8 = input.toString().padStart(8, '0');
        console.log(pad8);
        return pad8;
    }
    return input.toString().padStart(13, '0');

}

function checkDigitControl(input) {
    let inputString = input.toString();

    let arrayStr = inputString.split('');
    let inputControlNumber = arrayStr[arrayStr.length - 1]; //Control Number dado por el input , puede ser verdadero o falso.
    let contadorMultiplicaciones = 0;
    let debug = "";
    let y = 1;

    for (let x = arrayStr.length - 2; x >= 0; x--) {

        if (y % 2 == 0) {
            let contadorPar = arrayStr[x] * 1;
            contadorMultiplicaciones += contadorPar;
            debug += arrayStr[x] + '*1+'
        } else {
            let contadorImpar = arrayStr[x] * 3;
            contadorMultiplicaciones += contadorImpar;
            debug += arrayStr[x] + '*3+'
        }
        y++;
    }
    //console.log(debug);

    let realControlNumber = 0; //Calculo del numero de control real
    while (Math.floor(contadorMultiplicaciones % 10 != 0)) {
        realControlNumber++;
        contadorMultiplicaciones++;
    }

    let checkControlNumber = realControlNumber == inputControlNumber ? "El código de barras introducido es verdadero " : " El código de barras introducido es erróneo";
    return alert(checkControlNumber);
}