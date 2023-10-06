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
function conversionDecimal() {
    let num;

    do {
        num = parseInt(prompt("Por favor introduce un numero entero :"));
    } while (isNaN(num));

  //  let n2 = pasarABinari(num);
   let n8 = pasarAOctal(num);
    //let n16 = pasarAHex(num);  
}

function pasarAOctal(num){
    let cociente;
    let resto;
    let resultado="";
   // let dividendo = Math.floor(num/8);
    while( num > 0){
        resto = Math.floor(num%8)+"";
        num = Math.floor(num/8);    
        resultado =`${resto}${resultado}`;
    }
    console.log("El resultado en octal es " + resultado);
}