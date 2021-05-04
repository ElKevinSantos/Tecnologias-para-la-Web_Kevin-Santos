function cambiaValor() {
    var valorInputLongitud_1    =   document.getElementById("input_longitud_1");
    var valorInputLongitud_2    =   document.getElementById("input_longitud_2");
    var valorSelectLongitud_1   =   document.getElementById("select_longitud_1").value;
    var valorSelectLongitud_2   =   document.getElementById("select_longitud_2").value;

    //alert("El valor cambio: ["+valorInputLongitud_1+"]["+valorInputLongitud_2+"]["+valorSelectLongitud_1+"]["+valorSelectLongitud_2+"]");

switch(valorSelectLongitud_1){
    case "kilometro":
        switch(valorSelectLongitud_2){
            case "kilometro":
            var calculo = valorInputLongitud_1.value  *   1;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "Es el mismo";

            break;
            case "metro":
            var calculo = valorInputLongitud_1.value  *   1000;
    valorInputLongitud_2.value = calculo;
    document.getElementById("formula1").value = "multiplica el valor de longitud por 1000";

    break;
    case "centimetro":
            var calculo = valorInputLongitud_1.value  *   100000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 100000";
            break;
            case "milimetro":
            var calculo = valorInputLongitud_1.value  *   1000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 1e+6";
            break;
            case "micrometro":
            var calculo = valorInputLongitud_1.value  *   1000000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 1e+9";
            break;
            case "nanometro":
            var calculo = valorInputLongitud_1.value  *   1000000000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 1e+12";
            break;
            case "milla":
            var calculo = valorInputLongitud_1.value  /   1.609;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 1.609";
            break;
            case "yarda":
            var calculo = valorInputLongitud_1.value  *   1094;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 1094";
            break;
            case "pie":
            var calculo = valorInputLongitud_1.value  *   3281;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 3281";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  *   39370;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 39370";
            break;
            case "millaNautica":
            var calculo = valorInputLongitud_1.value  *   1.852;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 1.852";
            break;
            default:
    break;
    
        }
        break;

        case "metro":
        switch(valorSelectLongitud_2){
            case "kilometro":
            var calculo = valorInputLongitud_1.value  /   1000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 1000";

            break;
            case "metro":
            var calculo = valorInputLongitud_1.value  *   1;
    valorInputLongitud_2.value = calculo;
    document.getElementById("formula1").value = "Es el mismo";

    break;
    case "centimetro":
            var calculo = valorInputLongitud_1.value  *   100;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 100";
            break;
            case "milimetro":
            var calculo = valorInputLongitud_1.value  *   1000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 1000";
            break;
            case "micrometro":
            var calculo = valorInputLongitud_1.value  *   1000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 1e+6";
            break;
            case "nanometro":
            var calculo = valorInputLongitud_1.value  *   1000000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 1e+9";
            break;
            case "milla":
            var calculo = valorInputLongitud_1.value  /   1609;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 1609";
            break;
            case "yarda":
            var calculo = valorInputLongitud_1.value  *   1.094;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 1.094";
            break;
            case "pie":
            var calculo = valorInputLongitud_1.value  *   3.281;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 3.281";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  *   39.370;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 39.37";
            break;
            case "millaNautica":
            var calculo = valorInputLongitud_1.value  /   1852;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 1852";
            break;
            default:
    break;
    
        }
        break;

        case "centimetro":
        switch(valorSelectLongitud_2){
            case "kilometro":
            var calculo = valorInputLongitud_1.value  /   100000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 100000";

            break;
            case "metro":
            var calculo = valorInputLongitud_1.value  /   100;
    valorInputLongitud_2.value = calculo;
    document.getElementById("formula1").value = "divide el valor de longitud entre 100";

    break;
    case "centimetro":
            var calculo = valorInputLongitud_1.value  *   1;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "Es lo mismo";
            break;
            case "milimetro":
            var calculo = valorInputLongitud_1.value  *   10;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 10";
            break;
            case "micrometro":
            var calculo = valorInputLongitud_1.value  *   10000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 10000";
            break;
            case "nanometro":
            var calculo = valorInputLongitud_1.value  *   10000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 1e+7";
            break;
            case "milla":
            var calculo = valorInputLongitud_1.value  /   160934;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 160934";
            break;
            case "yarda":
            var calculo = valorInputLongitud_1.value  /   91.44;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 91.44";
            break;
            case "pie":
            var calculo = valorInputLongitud_1.value  *   30.48;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 30.48";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  /   2.54;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 2.54";
            break;
            case "millaNautica":
            var calculo = valorInputLongitud_1.value  /   185200;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 185200";
            break;
            default:
    break;
    
        }
        break;

        case "milimetro":
        switch(valorSelectLongitud_2){
            case "kilometro":
            var calculo = valorInputLongitud_1.value  /   1000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 1e+6";

            break;
            case "metro":
            var calculo = valorInputLongitud_1.value  /   1000;
    valorInputLongitud_2.value = calculo;
    document.getElementById("formula1").value = "divide el valor de longitud entre 1000";

    break;
    case "centimetro":
            var calculo = valorInputLongitud_1.value  /   10;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 10";
            break;
            case "milimetro":
            var calculo = valorInputLongitud_1.value  *   1;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "Es lo mismo";
            break;
            case "micrometro":
            var calculo = valorInputLongitud_1.value  *   1000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 1000";
            break;
            case "nanometro":
            var calculo = valorInputLongitud_1.value  *   1000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 1e+6";
            break;
            case "milla":
            var calculo = valorInputLongitud_1.value  /   1609000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 1.609e+6";
            break;
            case "yarda":
            var calculo = valorInputLongitud_1.value  / 914;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 914";
            break;
            case "pie":
            var calculo = valorInputLongitud_1.value  /   305;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 305";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  / 25.4;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 25.4";
            break;
            case "millaNautica":
            var calculo = valorInputLongitud_1.value  /   1852000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 1.852e+6";
            break;
            default:
    break;
    
        }
        break;

        case "micrometro":
        switch(valorSelectLongitud_2){
            case "kilometro":
            var calculo = valorInputLongitud_1.value  /   1000000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 1e+9";

            break;
            case "metro":
            var calculo = valorInputLongitud_1.value  /   1000000;
    valorInputLongitud_2.value = calculo;
    document.getElementById("formula1").value = "divide el valor de longitud entre 1e+6";

    break;
    case "centimetro":
            var calculo = valorInputLongitud_1.value  /   100000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 10000";
            break;
            case "milimetro":
            var calculo = valorInputLongitud_1.value  /   1000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 1000";
            break;
            case "micrometro":
            var calculo = valorInputLongitud_1.value  *   1;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "Es lo mismo";
            break;
            case "nanometro":
            var calculo = valorInputLongitud_1.value  *   1000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 1000";
            break;
            case "milla":
            var calculo = valorInputLongitud_1.value  /   1609000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 1.609e+9";
            break;
            case "yarda":
            var calculo = valorInputLongitud_1.value  /   914400;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 914400";
            break;
            case "pie":
            var calculo = valorInputLongitud_1.value  /   304800;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 304800";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  /   25400;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 25400";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  *   1852000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 1.852e+9";
            break;
            default:
    break;
    
        }
        break;

        case "nanometro":
        switch(valorSelectLongitud_2){
            case "kilometro":
            var calculo = valorInputLongitud_1.value  /   1000000000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 1e+12";

            break;
            case "metro":
            var calculo = valorInputLongitud_1.value  *   1000000000;
    valorInputLongitud_2.value = calculo;
    document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 1e+9";

    break;
    case "centimetro":
            var calculo = valorInputLongitud_1.value  /   10000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 1e+7";
            break;
            case "milimetro":
            var calculo = valorInputLongitud_1.value  /   1000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 1e+6";
            break;
            case "micrometro":
            var calculo = valorInputLongitud_1.value  /   1000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 1000";
            break;
            case "nanometro":
            var calculo = valorInputLongitud_1.value  *   1;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "Es la misma";
            break;
            case "milla":
            var calculo = valorInputLongitud_1.value  /   1609000000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 1.609e+12";
            break;
            case "yarda":
            var calculo = valorInputLongitud_1.value  /   914400000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 9.144e+8";
            break;
            case "pie":
            var calculo = valorInputLongitud_1.value  /   304800000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 3.048e+8";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  /   25400000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 2.54e+7";
            break;
            case "millaNautica":
            var calculo = valorInputLongitud_1.value  /   1852000000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 1.852e+12";
            break;
            default:
    break;
    
        }
        //CUIDADO
        break;

        case "milla":
        switch(valorSelectLongitud_2){
            case "kilometro":
            var calculo = valorInputLongitud_1.value  *   1.609;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 1.609";

            break;
            case "metro":
            var calculo = valorInputLongitud_1.value  *   1609;
    valorInputLongitud_2.value = calculo;
    document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 1609";

    break;
    case "centimetro":
            var calculo = valorInputLongitud_1.value  *   160934;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 160934";
            break;
            case "milimetro":
            var calculo = valorInputLongitud_1.value  *   1609000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 1.609e+6";
            break;
            case "micrometro":
            var calculo = valorInputLongitud_1.value  *   1609000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 1.609e+9";
            break;
            case "nanometro":
            var calculo = valorInputLongitud_1.value  *   1609000000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 1.609e+12";
            break;
            case "milla":
            var calculo = valorInputLongitud_1.value  *   1;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "Es la misma";
            break;
            case "yarda":
            var calculo = valorInputLongitud_1.value  *   1760;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 1760";
            break;
            case "pie":
            var calculo = valorInputLongitud_1.value  *   5280;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 5280";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  *   63360;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 63360";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  /   1.151;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 1.151";
            break;
            default:
    break;
    
        }
        break;

        case "yarda":
        switch(valorSelectLongitud_2){
            case "kilometro":
            var calculo = valorInputLongitud_1.value  /   1094;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 1094";

            break;
            case "metro":
            var calculo = valorInputLongitud_1.value  /   1.094;
    valorInputLongitud_2.value = calculo;
    document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 1.094";

    break;
    case "centimetro":
            var calculo = valorInputLongitud_1.value  *   91.44;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 91.44";
            break;
            case "milimetro":
            var calculo = valorInputLongitud_1.value  *   914;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 914";
            break;
            case "micrometro":
            var calculo = valorInputLongitud_1.value  *   914400;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 914400";
            break;
            case "nanometro":
            var calculo = valorInputLongitud_1.value  *   914400000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 9.144e+8";
            break;
            case "milla":
            var calculo = valorInputLongitud_1.value  /   1760;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 1760";
            break;
            case "yarda":
            var calculo = valorInputLongitud_1.value  *   1;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "Es la misma";
            break;
            case "pie":
            var calculo = valorInputLongitud_1.value  *   3;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 3";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  *   36;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 36";
            break;
            case "millaNautica":
            var calculo = valorInputLongitud_1.value  /   2025;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 2025";
            break;
            default:
    break;
    
        }
        break;

        case "pie":
        switch(valorSelectLongitud_2){
            case "kilometro":
            var calculo = valorInputLongitud_1.value  /   3281;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 3281";

            break;
            case "metro":
            var calculo = valorInputLongitud_1.value  /   3.281;
    valorInputLongitud_2.value = calculo;
    document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 3.281";

    break;
    case "centimetro":
            var calculo = valorInputLongitud_1.value  *   30.48;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 30.48";
            break;
            case "milimetro":
            var calculo = valorInputLongitud_1.value  *   305;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 305";
            break;
            case "micrometro":
            var calculo = valorInputLongitud_1.value  *   304800;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 304800";
            break;
            case "nanometro":
            var calculo = valorInputLongitud_1.value  *   304800000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 3.048e+8";
            break;
            case "milla":
            var calculo = valorInputLongitud_1.value  /   5280;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 5280";
            break;
            case "yarda":
            var calculo = valorInputLongitud_1.value  *   3;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 3";
            break;
            case "pie":
            var calculo = valorInputLongitud_1.value  *   1;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "Es la misma";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  *   12;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 12";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  /   6076;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 6076";
            break;
            default:
    break;
    
        }
        break;

        case "pulgada":
        switch(valorSelectLongitud_2){
            case "kilometro":
            var calculo = valorInputLongitud_1.value  /   39370;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, divide el valor de longitud entre 39370";

            break;
            case "metro":
            var calculo = valorInputLongitud_1.value  /   39.37;
    valorInputLongitud_2.value = calculo;
    document.getElementById("formula1").value = "divide el valor de longitud entre 39.37";

    break;
    case "centimetro":
            var calculo = valorInputLongitud_1.value  *   2.54;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 2.54";
            break;
            case "milimetro":
            var calculo = valorInputLongitud_1.value  *   25.4;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 25.4";
            break;
            case "micrometro":
            var calculo = valorInputLongitud_1.value  *   25400;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 25400";
            break;
            case "nanometro":
            var calculo = valorInputLongitud_1.value  *   25400000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 2.54e+7";
            break;
            case "milla":
            var calculo = valorInputLongitud_1.value  /   63360;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 63360";
            break;
            case "yarda":
            var calculo = valorInputLongitud_1.value  /   36;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 36";
            break;
            case "pie":
            var calculo = valorInputLongitud_1.value  /   12;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "divide el valor de longitud entre 12";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  *   1;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "Es la misma";
            break;
            case "millaNautica":
            var calculo = valorInputLongitud_1.value  *   6076;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 6076";
            break;
            default:
    break;
    
        }
        break;

        case "millaNautica":
        switch(valorSelectLongitud_2){
            case "kilometro":
            var calculo = valorInputLongitud_1.value  *   1.852;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 1.852";

            break;
            case "metro":
            var calculo = valorInputLongitud_1.value  *   1852;
    valorInputLongitud_2.value = calculo;
    document.getElementById("formula1").value = "multiplica el valor de longitud por 1852";

    break;
    case "centimetro":
            var calculo = valorInputLongitud_1.value  *   185200;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 185200";
            break;
            case "milimetro":
            var calculo = valorInputLongitud_1.value  *   1852000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 1.852e+6";
            break;
            case "micrometro":
            var calculo = valorInputLongitud_1.value  *   1852000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 1.852e+9";
            break;
            case "nanometro":
            var calculo = valorInputLongitud_1.value  *   1852000000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "multiplica el valor de longitud por 1.852e+12";
            break;
            case "milla":
            var calculo = valorInputLongitud_1.value  *   1.151;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 1.151";
            break;
            case "yarda":
            var calculo = valorInputLongitud_1.value  *   2025;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 2025";
            break;
            case "pie":
            var calculo = valorInputLongitud_1.value  *   6076;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 6076";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  *   72913;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "para obtener un resultado aproximado, multiplica el valor de longitud por 72913";
            break;
            case "millaNautica":
            var calculo = valorInputLongitud_1.value  *   1;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "Es la misma   ";
            break;
            default:
    break;
    
        }
        break;

        case "kilometro":
        switch(valorSelectLongitud_2){
            case "kilometro":
            var calculo = valorInputLongitud_1.value  *   1;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";

            break;
            case "metro":
            var calculo = valorInputLongitud_1.value  *   1000;
    valorInputLongitud_2.value = calculo;
    document.getElementById("formula1").value = "";

    break;
    case "centimetro":
            var calculo = valorInputLongitud_1.value  *   100000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "milimetro":
            var calculo = valorInputLongitud_1.value  *   1000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "micrometro":
            var calculo = valorInputLongitud_1.value  *   1000000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "nanometro":
            var calculo = valorInputLongitud_1.value  *   1000000000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "milla":
            var calculo = valorInputLongitud_1.value  /   1.609;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "yarda":
            var calculo = valorInputLongitud_1.value  *   1094;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "pie":
            var calculo = valorInputLongitud_1.value  *   3281;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  *   39370;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  *   1.852;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            default:
    break;
    
        }
        break;

        case "kilometro":
        switch(valorSelectLongitud_2){
            case "kilometro":
            var calculo = valorInputLongitud_1.value  *   1;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";

            break;
            case "metro":
            var calculo = valorInputLongitud_1.value  *   1000;
    valorInputLongitud_2.value = calculo;
    document.getElementById("formula1").value = "";

    break;
    case "centimetro":
            var calculo = valorInputLongitud_1.value  *   100000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "milimetro":
            var calculo = valorInputLongitud_1.value  *   1000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "micrometro":
            var calculo = valorInputLongitud_1.value  *   1000000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "nanometro":
            var calculo = valorInputLongitud_1.value  *   1000000000000;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "milla":
            var calculo = valorInputLongitud_1.value  /   1.609;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "yarda":
            var calculo = valorInputLongitud_1.value  *   1094;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "pie":
            var calculo = valorInputLongitud_1.value  *   3281;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  *   39370;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            case "pulgada":
            var calculo = valorInputLongitud_1.value  *   1.852;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula1").value = "";
            break;
            default:
    break;
    
        }
        break;

        
}
}


function cambiaTemperatura() {
    var valorInputTemperatura_1    =   document.getElementById("input_temperatura_1");
    var valorInputTemperatura_2    =   document.getElementById("input_temperatura_2");
    var valorSelectTemperatura_1   =   document.getElementById("select_temperatura_1").value;
    var valorSelectTemperatura_2   =   document.getElementById("select_temperatura_2").value;
    
    switch(valorSelectTemperatura_1){
        case "c":
            switch(valorSelectTemperatura_2){
                case "c":
                var calculo = valorInputTemperatura_2.value * 1;
                valorInputTemperatura_2.value = calculo;
                document.getElementById("formula2").value = "Es el mismo";
                break;

                case "f":
                    var calculo = (valorInputTemperatura_1.value  *   (9/5) )+ 32;
                    valorInputTemperatura_2.value = calculo;
                    document.getElementById("formula2").value = "(°C × 9/5) + 32 = °F";
                    break;
                    
                    case "k":
                var calculo = valorInputTemperatura_1.value  +   273.15;
                valorInputTemperatura_2.value = calculo;
                document.getElementById("formula2").value = "°C + 273.15 = K";
                break;
                               
            }

            break;

            case "f":
                switch(valorSelectTemperatura_2){
                    case "c":
                    var calculo = (valorInputTemperatura_1.value  -   32)* (5/9);
                    valorInputTemperatura_2.value = calculo;
                    document.getElementById("formula2").value = "(°F − 32) × 5/9 = °C";
                    break;
    
                    case "f":
                        var calculo = valorInputTemperatura_1.value  *   1;
                        valorInputTemperatura_2.value = calculo;
                        document.getElementById("formula2").value = "Es el mismo";
                        break;
                        
                        case "k":
                    var calculo = (valorInputTemperatura_1.value  -   32) * (5/9) + 273;
                    valorInputTemperatura_2.value = calculo;
                    document.getElementById("formula2").value = "(°F − 32) × 5/9 + 273.15 =K";
                   
                           break;             
                }
                break;
                case "k":
                    switch(valorSelectTemperatura_2){
                        case "c":
                        var calculo = (valorInputTemperatura_1.value  -   273.15);
                        valorInputTemperatura_2.value = calculo;
                        document.getElementById("formula2").value = "K − 273.15 = °C";
                        break;
        
                        case "f":
                            var calculo = (valorInputTemperatura_1.value  -   273.15)*(9/5) + 32;
                            valorInputTemperatura_2.value = calculo;
                            document.getElementById("formula2").value = "(K − 273.15) × 9/5 + 32 = °F";
                            break;
                            
                            case "k":
                        var calculo = valorInputTemperatura_1.value  *   1;
                        valorInputTemperatura_2.value = calculo;
                        document.getElementById("formula2").value = "Es el mismo";
                        break;
                        
                                          
                    }
                    break;
        }
    
}



function cambiaMasa() {
    var valorInputMasa_1    =   document.getElementById("input_masa_1");
    var valorInputMasa_2    =   document.getElementById("input_masa_2");
    var valorSelectMasa_1   =   document.getElementById("select_masa_1").value;
    var valorSelectMasa_2   =   document.getElementById("select_masa_2").value;

    //alert("El valor cambio: ["+valorInputLongitud_1+"]["+valorInputLongitud_2+"]["+valorSelectLongitud_1+"]["+valorSelectLongitud_2+"]");

switch(valorSelectMasa_1){
    case "ton":
        switch(valorSelectMasa_2){
            case "ton":
            var calculo = valorInputMasa_1.value  *   1;
            valorInputMasa_2.value = calculo;
            document.getElementById("formula3").value = "Es el mismo";

            break;
            case "kil":
            var calculo = valorInputMasa_1.value  *   1000;
            valorInputMasa_2.value = calculo;
            document.getElementById("formula3").value = "multiplica el valor de masa por 1000";

            break;
            case "gra":
            var calculo = valorInputMasa_1.value  *   1000000;
            valorInputMasa_2.value = calculo;
            document.getElementById("formula3").value = "multiplica el valor de masa por 1e+6";

            break;
    
            case "mil":
            var calculo = valorInputMasa_1.value  *   1000000000;
            valorInputMasa_2.value = calculo;
            document.getElementById("formula3").value = "multiplica el valor de masa por 1e+9";

            break;
            case "mic":
            var calculo = valorInputMasa_1.value  *   100000000000;
            valorInputMasa_2.value = calculo;
            document.getElementById("formula3").value = "multiplica el valor de masa por 1e+12";

            break;
            case "tonLar":
            var calculo = valorInputMasa_1.value  /   1.016;
            valorInputLongitud_2.value = calculo;
            document.getElementById("formula3").value = "divide el valor de masa entre 1.016";

            break;
            case "tonCor":
            var calculo = valorInputMasa_1.value  *   1.102;
            valorInputMasa_2.value = calculo;
            document.getElementById("formula3").value = "para obtener un resultado aproximado, multiplica el valor de masa por 1.102";

            break;
            case "sto":
            var calculo = valorInputMasa_1.value  *   157;
            valorInputMasa_2.value = calculo;
            document.getElementById("formula3").value = "para obtener un resultado aproximado, multiplica el valor de masa por 157";

            break;
            case "lib":
            var calculo = valorInputMasa_1.value  *   2205;
            valorInputMasa_2.value = calculo;
            document.getElementById("formula3").value = "multiplica el valor de masa por 2205";

            break;
            case "onz":
            var calculo = valorInputMasa_1.value  *   35274;
            valorInputMasa_2.value = calculo;
            document.getElementById("formula3").value = "multiplica el valor de masa por 35274";

            break;
    
        }
        break;

        case "kil":
            switch(valorSelectMasa_2){
                case "ton":
                var calculo = valorInputMasa_1.value  /   1000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1000";
    
                break;
                case "kil":
                var calculo = valorInputMasa_1.value  *   1;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "es el mismo";
    
                break;
                case "gra":
                var calculo = valorInputMasa_1.value  *   1000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 1000";
    
                break;
        
                case "mil":
                var calculo = valorInputMasa_1.value  *   1000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 1e+6";
    
                break;
                case "mic":
                var calculo = valorInputMasa_1.value  *   100000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = " multiplica el valor de masa por 1e+9";
    
                break;
                case "tonLar":
                var calculo = valorInputMasa_1.value  /   1016;
                valorInputLongitud_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1016";
    
                break;
                case "tonCor":
                var calculo = valorInputMasa_1.value  /   907;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 907";
    
                break;
                case "sto":
                var calculo = valorInputMasa_1.value  /   6.35;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 6.35";
    
                break;
                case "lib":
                var calculo = valorInputMasa_1.value  *   2.205;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = " multiplica el valor de masa por 2.205";
    
                break;
                case "onz":
                var calculo = valorInputMasa_1.value  *   35.274;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 35.274";
    
                break;
        
            }
            break;

            case "kil":
            switch(valorSelectMasa_2){
                case "ton":
                var calculo = valorInputMasa_1.value  /   1000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1e+6";
    
                break;
                case "kil":
                var calculo = valorInputMasa_1.value  /   1000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1000";
    
                break;
                case "gra":
                var calculo = valorInputMasa_1.value  *   1;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "Es el mismo";
    
                break;
        
                case "mil":
                var calculo = valorInputMasa_1.value  *   1000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 1000";
    
                break;
                case "mic":
                var calculo = valorInputMasa_1.value  *   100000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 1e+6";
    
                break;
                case "tonLar":
                var calculo = valorInputMasa_1.value  /   1016000;
                valorInputLongitud_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1.016e+6";
    
                break;
                case "tonCor":
                var calculo = valorInputMasa_1.value  /   907185;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 907185";
    
                break;
                case "sto":
                var calculo = valorInputMasa_1.value  /   6350;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 6350";
    
                break;
                case "lib":
                var calculo = valorInputMasa_1.value  /   454;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 454";
    
                break;
                case "onz":
                var calculo = valorInputMasa_1.value  /   28.35;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 28.35";
    
                break;
        
            }
            break;

            case "mil":
            switch(valorSelectMasa_2){
                case "ton":
                var calculo = valorInputMasa_1.value  /   1000000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1e+9";
    
                break;
                case "kil":
                var calculo = valorInputMasa_1.value  *   1000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1e+6";
    
                break;
                case "gra":
                var calculo = valorInputMasa_1.value  /   1000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1000";
    
                break;
        
                case "mil":
                var calculo = valorInputMasa_1.value  *   1;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "es lo mismo";
    
                break;
                case "mic":
                var calculo = valorInputMasa_1.value  *   1000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 1000";
    
                break;
                case "tonLar":
                var calculo = valorInputMasa_1.value  /   1016000000;
                valorInputLongitud_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1.016e+9";
    
                break;
                case "tonCor":
                var calculo = valorInputMasa_1.value  /   907200000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 9.072e+8";
    
                break;
                case "sto":
                var calculo = valorInputMasa_1.value  *   63500000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 6.35e+6";
    
                break;
                case "lib":
                var calculo = valorInputMasa_1.value  /   453592;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 453592";
    
                break;
                case "onz":
                var calculo = valorInputMasa_1.value  /   28350;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 28350";
    
                break;
        
            }
            break;

            case "mic":
            switch(valorSelectMasa_2){
                case "ton":
                var calculo = valorInputMasa_1.value  /   1000000000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1e+12";
    
                break;
                case "kil":
                var calculo = valorInputMasa_1.value  /   1000000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1e+9";
    
                break;
                case "gra":
                var calculo = valorInputMasa_1.value  *   1000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1e+6";
    
                break;
        
                case "mil":
                var calculo = valorInputMasa_1.value  /   1000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1000";
    
                break;
                case "mic":
                var calculo = valorInputMasa_1.value  *   1;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "es el mismo";
    
                break;
                case "tonLar":
                var calculo = valorInputMasa_1.value  /   1016000000000;
                valorInputLongitud_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1.016e+12";
    
                break;
                case "tonCor":
                var calculo = valorInputMasa_1.value  /   907200000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 9.072e+11";
    
                break;
                case "sto":
                var calculo = valorInputMasa_1.value  /   6350000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 6.35e+9";
    
                break;
                case "lib":
                var calculo = valorInputMasa_1.value  *   453600000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 4.536e+8";
    
                break;
                case "onz":
                var calculo = valorInputMasa_1.value  *   28350000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 2.835e+7";
    
                break;
        
            }
            break;

            case "tonLar":
            switch(valorSelectMasa_2){
                case "ton":
                var calculo = valorInputMasa_1.value  *   1.016;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 1.016";
    
                break;
                case "kil":
                var calculo = valorInputMasa_1.value  *   1016;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 1016";
    
                break;
                case "gra":
                var calculo = valorInputMasa_1.value  *   1016000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 1.016e+6";
    
                break;
        
                case "mil":
                var calculo = valorInputMasa_1.value  *   1016000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 1.016e+9";
    
                break;
                case "mic":
                var calculo = valorInputMasa_1.value  *   1016000000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 1.016e+12";
    
                break;
                case "tonLar":
                var calculo = valorInputMasa_1.value  /   1016000000000;
                valorInputLongitud_2.value = calculo;
                document.getElementById("formula3").value = "es l";
    
                break;
                case "tonCor":
                var calculo = valorInputMasa_1.value  /   907200000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 9.072e+11";
    
                break;
                case "sto":
                var calculo = valorInputMasa_1.value  *   6350000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 6.35e+9";
    
                break;
                case "lib":
                var calculo = valorInputMasa_1.value  *   453600000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 4.536e+8";
    
                break;
                case "onz":
                var calculo = valorInputMasa_1.value  *   28350000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 2.835e+7";
    
                break;
        
            }
            break;

            case "tonCor":
            switch(valorSelectMasa_2){
                case "ton":
                var calculo = valorInputMasa_1.value  *   1.102;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1.102";
    
                break;
                case "kil":
                var calculo = valorInputMasa_1.value  *   907;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 907";
    
                break;
                case "gra":
                var calculo = valorInputMasa_1.value  *   907185;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 907185";
    
                break;
        
                case "mil":
                var calculo = valorInputMasa_1.value  *   907200000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 9.072e+8";
    
                break;
                case "mic":
                var calculo = valorInputMasa_1.value  *   907200000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 9.072e+11";
    
                break;
                case "tonLar":
                var calculo = valorInputMasa_1.value  /   1.12;
                valorInputLongitud_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 1.12";
    
                break;
                case "tonCor":
                var calculo = valorInputMasa_1.value  *  1;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "Es la misma";
    
                break;
                case "sto":
                var calculo = valorInputMasa_1.value  *   143;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 143";
    
                break;
                case "lib":
                var calculo = valorInputMasa_1.value  *   2000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 2000";
    
                break;
                case "onz":
                var calculo = valorInputMasa_1.value  *   32000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 32000";
    
                break;
        
            }
            break;

            case "sto":
            switch(valorSelectMasa_2){
                case "ton":
                var calculo = valorInputMasa_1.value  /   157;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 157";
    
                break;
                case "kil":
                var calculo = valorInputMasa_1.value  *   6.35;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 6.35";
    
                break;
                case "gra":
                var calculo = valorInputMasa_1.value  *   6350;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 6350";
    
                break;
        
                case "mil":
                var calculo = valorInputMasa_1.value  *   6350000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 6.35e+6";
    
                break;
                case "mic":
                var calculo = valorInputMasa_1.value  *   6350000000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 6.35e+9";
    
                break;
                case "tonLar":
                var calculo = valorInputMasa_1.value  /   160;
                valorInputLongitud_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 160";
    
                break;
                case "tonCor":
                var calculo = valorInputMasa_1.value  /   143;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 143";
    
                break;
                case "sto":
                var calculo = valorInputMasa_1.value  *   1;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "es el mismo";
    
                break;
                case "lib":
                var calculo = valorInputMasa_1.value  *   2000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 14";
    
                break;
                case "onz":
                var calculo = valorInputMasa_1.value  *   224;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 224";
    
                break;
        
            }
            break;

            case "lib":
            switch(valorSelectMasa_2){
                case "ton":
                var calculo = valorInputMasa_1.value  /   2205;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 2205";
    
                break;
                case "kil":
                var calculo = valorInputMasa_1.value  /   2.205;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 2.205";
    
                break;
                case "gra":
                var calculo = valorInputMasa_1.value  *   454;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 454";
    
                break;
        
                case "mil":
                var calculo = valorInputMasa_1.value  *   453592;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 453592";
    
                break;
                case "mic":
                var calculo = valorInputMasa_1.value  *   453600000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 4.536e+8";
    
                break;
                case "tonLar":
                var calculo = valorInputMasa_1.value  /   2240;
                valorInputLongitud_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 2240";
    
                break;
                case "tonCor":
                var calculo = valorInputMasa_1.value  /   2000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 2000";
    
                break;
                case "sto":
                var calculo = valorInputMasa_1.value  /   14;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 14";
    
                break;
                case "lib":
                var calculo = valorInputMasa_1.value  *   1;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "Es el mismo";
    
                break;
                case "onz":
                var calculo = valorInputMasa_1.value  *   16;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 16";
    
                break;
        
            }
            break;

            case "onz":
            switch(valorSelectMasa_2){
                case "ton":
                var calculo = valorInputMasa_1.value  /   35274;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 35274";
    
                break;
                case "kil":
                var calculo = valorInputMasa_1.value  /   35.274;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 35.274";
    
                break;
                case "gra":
                var calculo = valorInputMasa_1.value  *   28.35;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 28.35";
    
                break;
        
                case "mil":
                var calculo = valorInputMasa_1.value  *   28350;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 28350";
    
                break;
                case "mic":
                var calculo = valorInputMasa_1.value  *   28350000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "multiplica el valor de masa por 2.835e+7";
    
                break;
                case "tonLar":
                var calculo = valorInputMasa_1.value  /   35840;
                valorInputLongitud_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 35840";
    
                break;
                case "tonCor":
                var calculo = valorInputMasa_1.value  /   32000;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 32000";
    
                break;
                case "sto":
                var calculo = valorInputMasa_1.value  /   224;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 224";
    
                break;
                case "lib":
                var calculo = valorInputMasa_1.value  /   16;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "divide el valor de masa entre 16";
    
                break;
                case "onz":
                var calculo = valorInputMasa_1.value  *   1;
                valorInputMasa_2.value = calculo;
                document.getElementById("formula3").value = "Es el mismo";
    
                break;
        
            }
            break;

            

    }
}