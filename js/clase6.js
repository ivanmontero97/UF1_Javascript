//Programa que pide 3 numeros al usuario y los devuele en hexadecimal y representando un color RGB.
function RGB(){
    $RGB=[
    prompt("INTRODUCE r: "),
    prompt("INTRODUCE g: "),
    prompt("INTRODUCE b: ")
    ]
    //Una vez pedidos mediante los prompt definimos una nueva variable para transformar los numeros de base 10 a hexadecimales mediante la funcion .toString(16)
    let rHexa = parseInt(RGB[0]).toString(16);
    let gHexa = parseInt(RGB[1]).toString(16);
    let bHexa = parseInt(RGB[2]).toString(16);
    
    //Mostramos el resultado
    console.log('#'+rHexa+gHexa+bHexa);
    }
    
    // Pedir al usuario ( nº Filas y columnas) crear a la página html una tabla dinámica que muestre los números (fila y columna).
    // tr = document.createElement("tr");
    //tr.appendChild(td);
function tablaDinamica()
{
    
}
