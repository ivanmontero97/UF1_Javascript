//Hacer un programa JS que compruebe si un codigo EAN8 o EAN13 es correcto , tiene que cumplir que EAN8: 25938562 
//(el 2 es de control) 259385 = 2*3+5*1+9*3+8*3+5*!+6*3=88 (fins 90=2) Siempre tiene que llegar al múltiplo de 10 mas cerca del alto 
// La cifra mas a la derecha está calculada según , una fórmula  donde los dígitos en posición impares sonultiplicados por 3 y los pares por uno.

//6583 952 2 -> Correcto
//6583 952 1 -> Incorrecto
//5029 3657 7942 5 -> Correcto
//5129 3657 7942 5 -> Incorrecto
//Si por ejemplo el resultado es 94 el digito de control es 6, porque siempre se acerca al multiplo de 10 mas alto del rango en el que se encuentre
//Pistas addleftZeropadding(code,max) y checkDigitControl(code)
function codigoDeBarras(){
    let input =parseInt( prompt("Introduce un codigo EAN8 o EAN13 y te comprobaré si es correcto : "));
    let result = input.toString().padStart(8,'0')
    if(input.toString.length == 8){
        for(let i=0 ; i<input.toString.length -1 ; i++){
            if(input.toString[i])
        }
    } else if (input.toString.length == 13){
 
    } else if( addleftZeropadding(input) == false){
        return alert("ERRROR : El tamaño del código introducido es mayor del permitido");
    }
}

function addleftZeropadding(input){
    if(input.toString.length > 0 && input.toString.length < 8 )
     return input.toString().padStart(8,'0');
    else if (input.toString > 8 && input.toString < 13)
        return input.toString().padStart(13,'0');
    return false; 
}

function checkDigitControl(){

}