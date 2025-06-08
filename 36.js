// 36.- Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".

let mes = "Dicimbre";
let estacion;

if (mes === "Enero"){
    estacion = `Estamos en el mes de ${mes} y es Invierno.`;
}

else if (mes === "Febrero"){
    estacion = `Estamos en el mes de ${mes} y es Invierno.`;
}

else if (mes === "Marzo"){
    estacion = `Estamos en el mes de ${mes} y es Invierno hasta el 21 de Marzo, porque a partir de esa fecha sería Primavera.`;
}

else if (mes === "Abril"){
    estacion = `Estamos en el mes de ${mes} y es Primavera.`;
}

else if (mes === "Mayo"){
    estacion = `Estamos en el mes de ${mes} y es Primavera.`;
}

else if (mes === "Junio"){
    estacion = `Estamos en el mes de ${mes} y es Primavera hasta el 21 de Junio, porque a partir de esa fecha sería Verano.`;
}

else if (mes === "Julio"){
    estacion = `Estamos en el mes de ${mes} y es Verano.`;
}

else if (mes === "Agosto"){
    estacion = `Estamos en el mes de ${mes} y es Verano.`;
}

else if (mes === "Septiembre"){
    estacion = `Estamos en el mes de ${mes} y es Verano hasta el 21 de Septiembre, porque a partir de esa fecha sería Otoño.`;
}

else if (mes === "Octubre"){
    estacion = `Estamos en el mes de ${mes} y es Otoño.`;
}

else if (mes === "Noviembre"){
    estacion = `Estamos en el mes de ${mes} y es Otoño.`;
}

else if (mes === "Diciembre"){
    estacion = `Estamos en el mes de ${mes} y es Otoño hasta el 21 de Diciembre, porque a partir de esa fecha sería Invierno.`;
}

else{
        estacion = "El mes introducido es incorrecto";
}

console.log(estacion);