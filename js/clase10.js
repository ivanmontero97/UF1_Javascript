// Demanar a l'usuari any1 [2000-2050] , any2 [2000-2050] dir el primer any entre les dues que comença en dimecres.
function anyDimecres(){
    var input1 = parseInt(prompt("Por favor introduce el año 1 (entre 2000-2050) :"));
    var input2 = parseInt(prompt("Por favor introduce el año 2 (entre 2000-2050) :"));
     
    var any1 = new Date(input1);
    var any2 = new Date(input2);
    var anyMenor = Math.min(input1,input2);
    var anyMayor = Math.max(input1,input2);
    var intervaloSinMiercoles= false;

    for( var year = anyMenor ; year <= anyMayor ;year++)
    {
    var pruebaYear = new Date(year,0,1);
    var pruebaDay = pruebaYear.getDay();

    if(pruebaDay == 3){
    alert("El primer año que empieza en miércoles es : " + year);
    intervaloSinMiercoles = true;
    break;
    }
    
    }
    if(intervaloSinMiercoles){
        alert("No hay ningún año en el intervalo que comienze por miercoles");
    }

}
// ir si una paraula introducida es pentavocalica (Contiene las 5 vocales)
//Mejor hacerlo por expresion regular expr=/[aàáäeèéëiíìïoòóöuúùü]/gi ; La g es de global , pilla todo el texto. La i es Keysensitive (le da igual mayus que min)
function comprobarParaulaPentavocalica(){
    var input = prompt("Introduce una palabra :");
   
    var vocals = [/[aàáä]/gi,/[eèéë]/gi,/[iíìï]/gi,/[oòóö]/gi,/[uúùü]/gi] ;
   
    for(var i=0; i < vocals.length;i++){
        if(input.match(vocals[i])){
            continue;
        } else {
            alert(" No es una palabra pentavolica");
            return;
        }
    }
    alert("La palabra :" + input + " es pentavolica");
}