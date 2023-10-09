// Pedir un numero al usuario(dias) . convertir el numerio de dias a anys , meses y dias. Los meses tienen 30 dias.
function ChangeDayForDate() {
    let inputDay = parseInt(prompt("Introduce los dias : "));

    let resto; //Variable para guardar el resto de las operaciones


    let anys = Math.floor(inputDay / 365) < 0 ? 0 : Math.floor(inputDay / 365);

    resto = Math.floor(inputDay % 365);

    let mesos = Math.floor(resto / 30) < 0 ? 0 : Math.floor(resto / 30);

    resto = Math.floor(resto % 30);

    let dias = Math.floor(resto) < 0 ? 0 : Math.floor(resto);

    console.log("La cantidad de anys es : " + anys + '\n la cantidad de meses es : ' + mesos + '\n la cantidad de dia es :' + dias)
}
//Pedir al usuario los grados centigrados y F , y devolverele el equivalente en F y C
function gradosCF() {
    let inputCF;

    do {
        inputCF = prompt(" Introduce un valor C/F : ");

    } while (inputCF != 'C' && inputCF != 'F');

    let grados = prompt(" Introduce los grados  : ").replace(",", ".");

    //Para pasar de C a F
    if (inputCF == 'C') {
        let conversionF = grados * (9 / 5) + 32;
        console.log(" Los grados C en F son : " + conversionF);
    }
    // Pasar de F a C
    if (inputCF == 'F') {
        let conversionC = (grados - 32) / (9 / 5);
        console.log(" Los grados F en C son : " + conversionC);
    }
}
// Pedir un numero en base 10 . Usando divisiones , restos y bucles. Pasarlo a hexadecimal , octal y binario.
// https://lasmatesfaciles.com/2021/04/28/convertir-decimal-a-octal/

//Esta función pasa un número en base decimal a base binaria , octal y hexadecimal.
function basesNumericas() {

//He hecho el ejercicio con arrays en lugar de hacer 3 funciones para cada tipo de base.

    //Declaracion de variables
    let num = parseInt(prompt("Por favor introduce un numero entero :"));
    let number = [num, num,num]; //Array que almacena 3 veces el mismo input para reiniciar la condicion del while después de cada iteracion del for.
    let resto = [];
    let arrayDivisores = [2, 8, 16]; // Array que almacena los divisores de cada base
    let arraySoluciones=     // Array que almacenará los resultados de las distintas bases.
        [
            `El resultado en binario es ${resultado[0]} `,
            `El resultado en octal es ${resultado[1]}`,
            `El resultado en Hexadecimal es ${resultado[2]}`,
        ];
    
   
    //Logica
    for (let x = 0; x < number.length; x++) {
        number[x];
        let resultado = ["", "", ""]; //Variable que acumular el resultado de cada tipo (binario , octal y hexadecimal)
        while (number[x] > 0) {
            resto[x] = Math.floor(number[x] % arrayDivisores[x]) + ""; //Concatenar para convertir el número en cadena 
            number[x] = Math.floor(number[x] / arrayDivisores[x]);

            //Verificamos si el divisor es  16 , ya que el resultado será diferente si esta en Hex porque hay que asignarselo a letras en un nuevo array.
            if (arrayDivisores[x] == 16) {

                let arrayHex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
                resultado[x] = `${arrayHex[resto[x]]}${resultado[x]}`;

            } else {
                resultado[x] = `${resto[x]}${resultado[x]}`;
            }

        }
        console.log(arraySoluciones[x]);
    }
}






