function potencia(){
    let potencia=prompt("introduce la potencia :");
    let exponente=prompt("Introduce el exponente :")
    
    console.time("pow");
   let potenciaResult= Math.pow(potencia,exponente);
   console.log("El resultado con POW es " + potenciaResult);
   console.timeEnd("pow");
    

    let result =1;
    console.time("for");
    for(let x = 1; x <= exponente; x++)
    {
      result *=potencia;
     
    }
    console.log("El resultado con ciclo for es " + result);
    console.timeEnd("for");
}
// Demanar 3 numeros amb un button . Calcular mitja mitjana , major , menor.
function variosCalculos(){
    let numero1 = parseInt(prompt("Introduce el primer número : "));
    let numero2 = parseInt(prompt("Introduce el segundo número : "));
    let numero3 = parseInt(prompt("Introduce el tercer número : "));

    let arrayNumeros = [numero1,numero2,numero3];
    let sumaTotal;
    for(let i of arrayNumeros) sumaTotal += arrayNumeros[i]; 
    
    let media = sumaTotal/arrayNumeros.length;
    
    console.log( "La media es "  + media);

    console.log("La mediana es " + arrayNumeros[1]);
    console.log(" El mayor número es " + arrayNumeros[2]);
    console.log("El menor número es " + arrayNumeros[0]);


}
