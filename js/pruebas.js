function conversionDecimal() {
    let inputDecimal;

    do {
        num = parseInt(prompt("Por favor introduce un numero entero :"));
    } while (isNaN(inputDecimal));

    let n2 = pasarABinari(num);
    let n8 = pasarAOctal(num);
    let n16 = pasarAHex(num);
    let resto = "";
    let aux;

    let arrayBi = [2, n2];
    let arrayOct = [8, n8];
    let arrayHex = [16, n16]

    let arrayBases = [
        arrayBi,
        arrayOct,
        arrayHex
    ];

    for (let i = 0; i < arrayBases.length; i++) {
        dividendo = arrayBases[i][0];
        divisor = arrayBases[i][1];

        while (dividendo >= divisr) {
            if (dividendo > divisor) {
                let cociente = Math.floor(dividendo / divisor);
                let resto = Math.floor(dividendo % divisor) + resto;
                resto += "";
                dividendo = cociente;

            } else {
                aux = 10;
            }
        }
    }
    resto = aux + resto;
    console.log(" En base 2 , el input introducido es " + resto);


    //Pasar a Octal 
    /*  while (cociente >= divisor) {  //dividendo > 0 tambien puede ser condicion del bucle
  
          if (dividendo > divisor) {
  
              cociente = Math.floor(dividendo / divisor);
              resto = Math.floor(dividendo % divisor) + Math.floor(resto)  ;
              dividendo = Math.floor(cociente);
  
          } else {
              cociente = Math.floor(divisor);
          }
          resto += "";
      }
      resto = cociente + resto ;
      console.log("El resultado en octal es : " + resto);
  }*/


    /* function convertirBase() 
    {
        let num;
        do{
            num=parseInt(prompt("Introdueix un nº:"));
        } while (isNaN(num));
    
        let n2 = passarABinari(num);
        let n8= passarAOctal (num);
        let n16 = passar AHex(num);
    
        console.log(\num=${num},n2=${n2},n8=${n8},n16=${n16});*/
}
