
//Demanar al usuari un text y un caracter -> decir si el caracter esta contenido en el texto de 2 a 4 veces.
function caracterContenido() {
// Pide al usuario un texto y un carácter
var text = prompt("Introduce un texto:");
var caracter = prompt("Introduce un caracter:");
// Cuentas las veces que esta el carácter en la cadena
var count = 0;
for (var i = 0; i < text.length; i++) {
  if (text.charAt(i) === caracter) {
    count++;
  }
}
// Comprobaciones
if (count >= 2 && count <= 4) {
  console.log("El caracter '" + caracter + "' aparece entre 2 y 4 veces en el texto.");
} else {
  console.log("El caracter '" + caracter + "' no aparece entre 2 y 4 veces en el texto.");
}
};

//Demanar un text { a lúsuari(paraula) i un número } eliminar el caràcter de la paraula correspondent a la posició del demanata- Ejemplo : Hola 2 , hoa
function palabraNumero(){
    // Pide una palabra al usuario
var palabra = prompt("Introduce una palabra:");

// Pide un número que representa la posición del carácter a eliminar
var numero = parseInt(prompt("Introduce un número:"));

// Comprueba si el número es válido (entre 1 y la longitud de la palabra) 
if (numero >= 1 && numero <= palabra.length) {
  //Convierte la palabra en un array de carácteres para manipularlo 
  var paraulaArray = palabra.split('');

  // Elimina el caràcter de la posicion especificada
  paraulaArray.splice(numero - 1, 1);

  // Convierte el array de carácteres de nuevo en una cadena
  var palabraModificada = paraulaArray.join('');

  console.log("Palabra modificada: " + palabraModificada);
} else {
  console.log("El número no es válido . Tiene que estar entre 1 y " + paraula.length);
}
}

//Demanar un text a  l'usuari y mostrar :
/* 
1) Texto en mayusculas.
2) Texto en minusculas
3) Longitud total
4) Número de palabras
5) Las vocales que contiene
6)El número de vocales
7) La frase en n líneas en la que cada línea le falta una letra de alante.

El resultat con -> document.write();
*/
function palabraMultifuncion() {
    var inputText = prompt("Por favor introduce un texto :");
    var mayusText = inputText.toUpperCase;
    console.log(mayusText);
    var minustText = inputText.toLocaleLowerCase;
    console.log(minusText);
    var longitudText = inputText.length
    console.log("La longitud es " + longitudText);
    var numeroDePalabras = inputText.split(" ");
    console.log("El número de palabras es " + numeroDePalabras.length);
     
    // 6 
    //Mejor hacerlo por expresion regular expr=/[aàáäeèéëiíìïoòóöuúùü]/gi ; La g es de global , pilla todo el texto. La i es Keysensitive (le da igual mayus que min)
    // Se usa text.match(expr)
    var vocalA =0;
    var vocalE =0;
    var vocalI =0;
    var vocalO =0;
    var vocalU =0;

   for ( var i =0 ; i<inputText.length ; i ++) {
    
    if (inputText[i] == 'a' || 'A' ){
        vocalA++;
    } else if (inputText[i] == 'e' || 'E' ){
        vocalE++;
    }else if (inputText[i] == 'i' || 'I' ){
        vocalI++;
    }else if (inputText[i] == 'o' || 'O' ){
        vocalO++;
    }else if (inputText[i] == 'e' || 'E' ){
        vocalU++;
    }
    
   }
   
   console.log("Número A "  + contadorA +
   "Número E "  + contadorE +
   "Número I "  + contadorI +
   "Número O "  + contadorO +
   "Número U "  + contadorU
   );
}
//El dia de nitboca Pepe vol saber quan falta per mitjanit . Demana una hora en un format hh:mmm y mete el número de minutos hasta la medianoche. 
//Si la hoes es 00:00 que diga "Feliz año nuevo!" 
//Ex 23:45 -> 15
// 00:01 -> 1439
function horaMediaNoche(){
    
}