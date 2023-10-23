// Obtener un nº al azar entre 1-100 . Se trata de que el usuario lo adivine. Si acierta se le mostrará "Obtenido en n intentos".
//  Si introduzco un 0 se pintará "Game Over" y se saldrá. Si falla se le dirá menor o mayor . Si introduzco algún valor invalido 
//  no pasa NamedNodeMap(se sigue) pero se cuenta un intento más.

function adivinarNumero() {

    var randomNumber = Math.floor((Math.random() * 100 + 1));
    var contador = 0;
    console.log(randomNumber);

    do {
        contador++;
        input = parseInt(prompt("Introduce un número y adivina el resultado :"));
        
        if (input == 0) {
            alert(`GAME OVER . Has hecho ${contador} intentos`);
            break;
        } else if (input < randomNumber) {
            console.log("Tu número es menor que el random Number");
        } else if (input > randomNumber){
            console.log(" Tu número es mayor que el random Number");
        }
    } while (input != randomNumber)
    console.log(` Enhorabuena has acertado , ${randomNumber} era el número que buscabas. Has hecho ${contador} intentos`);
    console.log(randomNumber);
}


