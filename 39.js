// 39.- Usa un switch para mostrar en que estación del año nos encontramos dependiendo del valor de una variable "mes".

let mes = "Marzo";
let estacion;

switch(mes){
    case "Enero":
        estacion = `Estamos en el mes de ${mes} y es Invierno.`;
        break;
    case "Febrero":
        estacion = `Estamos en el mes de ${mes} y es Invierno.`;
        break;
    case "Marzo":
        estacion = `Estamos en el mes de ${mes} y es Invierno hasta el 21 de Marzo, porque a partir de esa fecha sería Primavera.`;
        break;
    case "Abril":
        estacion = `Estamos en el mes de ${mes} y es Primavera.`;
        break;
    case "Mayo":
        estacion = `Estamos en el mes de ${mes} y es Primavera.`;
        break;
    case "Junio":
        estacion = `Estamos en el mes de ${mes} y es Primavera hasta el 21 de Junio, porque a partir de esa fecha sería Verano.`;
        break;
    case "Julio":
        estacion = `Estamos en el mes de ${mes} y es Verano.`;
        break;
    case "Agosto":
        estacion = `Estamos en el mes de ${mes} y es Verano.`;
        break;
    case "Septiembre":
        estacion = `Estamos en el mes de ${mes} y es Verano hasta el 21 de Septiembre, porque a partir de esa fecha sería Otoño.`;
        break;
    case "Octubre":
        estacion = `Estamos en el mes de ${mes} y es Otoño.`;
        break;
    case "Noviembre":
        estacion = `Estamos en el mes de ${mes} y es Otoño.`;
        break;
    case "Diciembre":
        estacion = `Estamos en el mes de ${mes} y es Otoño hasta el 21 de Diciembre, porque a partir de esa fecha sería Invierno.`;
        break;  
    default:
        estacion = "El mes introducido es incorrecto";
}

console.log(estacion);