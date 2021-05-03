function cambiaValor() {
    var valorInputLongitud_1    =   document.getElementById("input_longitud_1");
    var valorInputLongitud_2    =   document.getElementById("input_longitud_2");
    var valorSelectLongitud_1   =   document.getElementById("select_longitud_1").value;
    var valorSelectLongitud_2   =   document.getElementById("select_longitud_2").value;
    alert("El valor cambio: ["+valorInputLongitud_1+"]["+valorInputLongitud_2+"]["+valorSelectLongitud_1+"]["+valorSelectLongitud_2+"]");


//Suponer que se dio el primer select

if(valorSelectLongitud_1=="kilometro" && valorSelectLongitud_2=="metro"){
    var calculo = valorInputLongitud_1.value  *   1000;
    valorInputLongitud_2.value = calculo;
}
}