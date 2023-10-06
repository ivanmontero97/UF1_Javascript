//Pedir dos números y ver cual esta mas cerca de 100
function cercaCien(){
    let numero1 = parseInt(prompt("Introduce el primer número : "));
    let numero2 = parseInt(prompt("Introduce el segundo número : "));
    
    let comparacion1 = Math.abs(numero1-100);
    let comparacion2 = Math.abs (numero2-100);

    if(comparacion1 = comparacion2){
        console.log("El valor mas cercano a 100 son ambos numeros ");
    } else if ( comparacion1<comparacion2){
        console.log("El valor mas cercano a 100 es") + numero1;
    } else {
        console.log("El valor mas cercano a 100 es ") + numero2;
    }
  }
  //Pedir al usuario 3 números (hora , minuto y segundos) y mostrar la hora +1 segon
  function pedirHora()
  {
    let hours = parseInt(prompt("Introduce la hora : "));
    let minutes = parseInt(prompt("Introduce el minuto : "));
    let seconds = parseInt(prompt("Introduce el segundo : "));

    let inputDate = new Date();
    
    inputDate.setHours(hours);
    inputDate.setMinutes(minutes);
    inputDate.setSeconds(seconds+1);

    console.log(inputDate.getHours() + " : "+ inputDate.getMinutes() + " : " + inputDate.getSeconds() );
  }
  //Pedir 3 numeros (año , mes y dia ) y comprobar que se trata de una fecha valida
  function fechaValida()
  {
    let any = parseInt(prompt("Introduce el año : ")); //LA VALIDACION DEL AÑO HAY QUE MIRARLA MAS A FONDO PORQUE FECHAS < 1970 SON VALIDAS
    let mes = parseInt(prompt("Introduce el mes : "));
    let dia = parseInt(prompt("Introduce y el dia : "));

    let inputDate = new Date(any,mes,dia);
    
   
    if( inputDate.getFullYear() == any && inputDate.getMonth() == mes && inputDate.getDate()==dia){
        console.log(" Has introducido una fecha valida")
    } else {
        console.log("Has introducido una fecha invalida")
    }

    
     
   
  }