//Variables que usemos en todas las funciones
/*
function clickDigito(digito) {
    var display     =  document.getElementById("display");
    display.value   =  display.value    +   digito;
}

function presionIgual() {
    var display = document.getElementById("display");
    display.value = eval(display.value);
    
}
function presionaOperador(operador) {
    var display     = document.getElementById()
}
function calculaRaiz() {
    //Obtiene una expresion 
        
    }
}*/
function presionaDigito(digito){
    var display     = document.getElementById("display");
    display.value   =  display.value    +   digito;
}

function presionaPunto(){
    var display     = document.getElementById("display");
    display.value   =  display.value    +   ".";
}

function limpiaDisplay() {
    var display = document.getElementById("display");
    display.value="0";
}

function presionaOperador(operador){
    var display     = document.getElementById("display");
    //Formalmente se deberia de hacer: Si lo ultimo presionado, fue un numero, entonces si se deberia permitir el operador
    display.value   = display.value + operador;
}

function presionaIgual() {
    var display     = document.getElementById("display");
    display.value = eval(display.value);
}

function calculaRaiz(){
    //Obtiene la expreion
    var display     = document.getElementById("display");
    //Evalua la expresion
    var numero      = eval(display.value);
    //Calcular la raiz
    var raiz        = Math.sqrt(numero); //calcular la raiz de numero
    //Desplegar el resultado del calculo
    display.value   = raiz;
}

function calcularLogaritmo(){
    var display = document.getElementById("display");
    display.value = Math.log10(eval(display.value));
}

function calcularLogaritmoNatural(){
    var display = document.getElementById("display");
    display.value =  Math.log(eval(display.value)); 
}

//aqui usamos la funcion prompt para ingresar el otro valor. ejemplo: 5% de 10, el promp es para guardar el 10.
function calcularPorcentaje(){
    var porciento = prompt("Porcentaje de: ", "");
    var display = document.getElementById("display");
    display.value = Math.floor(eval(display.value)*porciento)/100;
}

//aqui usamos la funcion prompt para ingresar el exponente al cual se estara elevando el numero.
function calcularExponente(){
    var exponente = prompt("Exponente: ", "");
    var display = document.getElementById("display");
    display.value = Math.pow(eval(display.value),exponente);
}

function calcularFactorial(){
	var factorial = 1;
        for (var i=1; i <= document.getElementById ("display").value; i++){
            factorial *= i;
        }
 
        display.value = document.getElementById ("display").value = factorial;
}