
/* Cualquier instruccion que se ponga fuera de las instrucciones se ejecutan
Ejemplo: alert("Hola Mundo"); 

function holaMundo(){
    alert("Hola Mundo del JS 1"); 
    alert("Hola Mundo 2"); 
}
*/
function sumaNumeros(){
    //Aqui a su propiedad
    var primerNumero=   parseInt(document.getElementById("numero1").value);
    var segundoNumero=  parseInt(document.getElementById("numero2").value);
    
    //Aqui a todo el objeto
    var parrafoResultado = document.getElementById("resultado");
    
    var resultado = primerNumero + segundoNumero;

    parrafoResultado.innerHTML = resultado;
 
   // alert(resultado);

    /*alert( "Numero 1: "+ document.getElementById("numero1").value );
    alert( "Numero2: "+ document.getElementById("numero2").value );
    alert( "Parrafo para el resultado: " + document.getElementById("resultado").innerHTML );
    */ //alert("Esta funcion suma los dos numeros");

    
}

function restaNumeros(){
    var resultado = document.getElementById("numero1").value - document.getElementById("numero2").value;
   
    document.getElementById("resultado").innerHTML="Resultado: "+ resultado;  
    //alert("Esta funcion resta los dos numeros");

}

function multiplicaNumeros(){
    var resultado = document.getElementById("numero1").value * document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML="Resultado: "+ resultado;  

    //alert("Esta funcion multiplica los dos numeros");
}

function divideNumeros(){
    var primerNumero = parseInt(document.getElementById("numero1").value);
    var segundoNumero = parseInt(document.getElementById("numero2").value);
    var resultado = document.getElementById("numero1").value / document.getElementById("numero2").value;
    document.getElementById("resultado").innerHTML="Resultado: " + resultado;
    
    //alert("Esta funcion divide los dos numeros");
}
