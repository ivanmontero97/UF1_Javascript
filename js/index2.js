
function multiplicacionInputPrompt()
{
    let number = prompt("Tabla del ",0);

    for(i=0;i<=10;i++)
    {
       document.getElementById("prueba").innerHTML= `${number} * ${i} =  ${number * i}` ;
    }
}

function InputPrompt()
{
    let varibleaux = prompt( "Tabla del ");
    for(let i=0;i<=10;i++){
        console.log(`${varibleaux} * ${i} = ${varibleaux*i}`);
    }
}

function serieFibonnaci(){
    let variableaux= prompt( "Introduce el número de la serie de serieFibonnaci que quieres serializar :");
    var a = 1;
    var b = 1;
    let suma= 0;
    console.log(0);
    console.log(a);
    console.log(a);

    for(let i = 2;i <= variableaux;i++)
    {     
        suma=a+b;
        console.log(suma);
        a = b;
        b = suma;

    }
}