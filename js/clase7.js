function tablaDeMultiplicar() {
    let param1 = parseInt(prompt("Introduce las filas :"));
    let param2 = parseInt(prompt("Introduce las columna :"));

    
    let tabla = document.createElement("table");
    tabla.border=2;
    let body = document.createElement("body");

    for(let i = 1; i< param1; i++){
        let fila= document.createElement("tr");
        for(let n=1 ; n < param2; n++)
        {
            let columna =document.createElement("td");
            let content = document.createTextNode(i * n);
            columna.appendChild(content);
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }
    body.appendChild(tabla);
    document.body.appendChild(tabla);

}
//Demanar un nombre de archivo al usuario y devolver por consola la extensión del archivo  pista->split
//archiu.txt.exe
function extensionArchivo(){
    let inputTexto = prompt("Por favor introduce el nombre completo incluida la extensión de un archivo(separado por .) : ");
    let arraySplit = inputTexto.split(".");
        console.log( arraySplit[arraySplit.length-1]);
}
//Demanar un text al usuari y decir si tiene el mismo número de "a" que de "b"
function contarLetras(){
    let inputTexto = prompt("Introduce un texto : ");
    let contadorA = 0;
    let contadorB= 0;
   for( i=0; i < inputTexto ; i++){
    
    if( inputTexto[i] == 'a'){
        contadorA ++;
    } 
    if(inputTexto[i] == 'b'){
        contadorB ++;
    }
    
   }

   let comparativa = contadorA == contadorB ? true : false;
   console.log(comparativa);
}
//Demanar 2 cadenes y comprovar si tenen la mateixa longitud