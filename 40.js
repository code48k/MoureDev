// 40.- Usa un switch para mostrar el número de días que tiene un mes dependiendo de la variable del ejercicio 37.

let mes = "Marzo";
let estacion;

switch(mes){
    case "Enero":
        estacion = `Estamos en el mes de ${mes} y es Invierno tiene 31 días.`;
        break;
    case "Febrero":
        estacion = `Estamos en el mes de ${mes} y es Invierno tiene 28 días.`;
        break;
    case "Marzo":
        estacion = `Estamos en el mes de ${mes} y es Invierno hasta el 21 de Marzo, porque a partir de esa fecha sería Primavera tiene 31 días.`;
        break;
    case "Abril":
        estacion = `Estamos en el mes de ${mes} y es Primavera tiene 30 días.`;
        break;
    case "Mayo":
        estacion = `Estamos en el mes de ${mes} y es Primavera tiene 31 días.`;
        break;
    case "Junio":
        estacion = `Estamos en el mes de ${mes} y es Primavera hasta el 21 de Junio, porque a partir de esa fecha sería Verano tiene 30 días.`;
        break;
    case "Julio":
        estacion = `Estamos en el mes de ${mes} y es Verano tiene 31 días.`;
        break;
    case "Agosto":
        estacion = `Estamos en el mes de ${mes} y es Verano tiene 31 días.`;
        break;
    case "Septiembre":
        estacion = `Estamos en el mes de ${mes} y es Verano hasta el 21 de Septiembre, porque a partir de esa fecha sería Otoño tiene 30 días.`;
        break;
    case "Octubre":
        estacion = `Estamos en el mes de ${mes} y es Otoño tiene 31 días.`;
        break;
    case "Noviembre":
        estacion = `Estamos en el mes de ${mes} y es Otoño tiene 30 días.`;
        break;
    case "Diciembre":
        estacion = `Estamos en el mes de ${mes} y es Otoño hasta el 21 de Diciembre, porque a partir de esa fecha sería Invierno tiene 31 díasnode 40.`;
        break;  
    default:
        estacion = "El mes introducido es incorrecto";
}

console.log(estacion);