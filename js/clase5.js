//Una compañia telefonica cobra 10 centimos por llamada y 5 centimos por minuto
//Pide las horas , minutos y segundos y di el coste la llamada

function llamadaTelf()
{   
    //Inputs
    let tiempo = [
         parseInt(prompt("Introduce las horas : ")), //[0]
         parseInt(prompt("Introduce las minutos : ")), //[1]
         parseInt(prompt("Introduce los segundos : ")) //[2]
    ]

    //Pasar todo a minutos
    let horasAMinutos = Math.floor(tiempo[0]*60) ;
    let segundosMinuto = Math.floor(tiempo[2]/60);
    let minutosTotales = tiempo[1] + horasAMinutos + segundosMinuto ;

    //Calculo del importe total
    let ImporteTotalCentimos = 10 + (minutosTotales * 5);
    let ImporteEuros = Math.floor(ImporteTotalCentimos/100);
    let ImporteCentimos = Math.floor(ImporteTotalCentimos%100);

    //Resultado
    console.log( "El importe total es de " + ImporteEuros + " euros y " + ImporteCentimos + " centimos");
}

//Programa que pide 3 numeros al usuario y los devuele en hexadecimal y representando un color RGB.
function colorRGB(){
    
}

// Pedir al usuario ( nº Filas y columnas) crear a la página html una tabla dinámica que muestre los números (fila y columna).
// tr = document.createElement("tr");
//tr.appendChild(td);



