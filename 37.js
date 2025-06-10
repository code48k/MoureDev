// 37.- Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio 36.

let mes = "Diciembre";
let estacion;

if (mes === "Enero"){
    estacion = `Estamos en el mes de ${mes} y es Invierno tiene 31 días.`;
}

else if (mes === "Febrero"){
    estacion = `Estamos en el mes de ${mes} y es Invierno tiene 28 días.`;
}

else if (mes === "Marzo"){
    estacion = `Estamos en el mes de ${mes} y es Invierno hasta el 21 de Marzo, porque a partir de esa fecha sería Primavera tiene 31 días.`;
}

else if (mes === "Abril"){
    estacion = `Estamos en el mes de ${mes} y es Primavera tiene 30 días.`;
}

else if (mes === "Mayo"){
    estacion = `Estamos en el mes de ${mes} y es Primavera tiene 31 días.`;
}

else if (mes === "Junio"){
    estacion = `Estamos en el mes de ${mes} y es Primavera hasta el 21 de Junio, porque a partir de esa fecha sería Verano tiene 30 días.`;
}

else if (mes === "Julio"){
    estacion = `Estamos en el mes de ${mes} y es Verano tiene 31 días.`;
}

else if (mes === "Agosto"){
    estacion = `Estamos en el mes de ${mes} y es Verano tiene 31 días.`;
}

else if (mes === "Septiembre"){
    estacion = `Estamos en el mes de ${mes} y es Verano hasta el 21 de Septiembre, porque a partir de esa fecha sería Otoño tiene 30 días.`;
}

else if (mes === "Octubre"){
    estacion = `Estamos en el mes de ${mes} y es Otoño tiene 31 días.`;
}

else if (mes === "Noviembre"){
    estacion = `Estamos en el mes de ${mes} y es Otoño tiene 30 días.`;
}

else if (mes === "Diciembre"){
    estacion = `Estamos en el mes de ${mes} y es Otoño hasta el 21 de Diciembre, porque a partir de esa fecha sería Invierno tiene 31 días.`;
}

else{
        estacion = "El mes introducido es incorrecto";
}

console.log(estacion);