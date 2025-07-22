// 70.- Crea una función que calcule el factorial de un número dado. Explora diferentes sintaxis de funciones para resolver el ejercicio.

// Función simple

    let resultado = 1;
    let n = 5;

function receiveSimple(){

    for (let i=2; i<=n; i++){

        resultado *= i;

    }

    return resultado;

}

console.log(`Número Factorial es 5*4*3*2*1:`, receiveSimple());

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función parametros

resultado = 1;

function receiveParameters(n){

    for (let i=2; i<=n; i++){

        resultado *= i;
    }

    return resultado;
}

console.log(`Número Factorial es 5*4*3*2*1:`, receiveParameters(5));

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funcion Anónima

resultado = 1;

n = 5;

const resultAnonymous = function(){

    for (let i=2; i<=n; i++){

        resultado = resultado * i;

    }

    return resultado;

}

console.log(`Número Factorial es 5*4*3*2*1:`, resultAnonymous());

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones Flecha

resultado = 1;

n = 5;

const resultArrow = () =>{

    for (let i=2; i<=n; i++){

        resultado = resultado * i;

    }

    return resultado;

}

console.log(`Número Factorial es 5*4*3*2*1:`, resultArrow());

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Retorno de Valores

function resultReturnValues(){

    let resultado = 1;

    let n = 5;

    for (let i=2; i<=n; i++){

        resultado *= i;

    }

    return resultado;

}

console.log(`Número Factorial es 5*4*3*2*1:`, resultReturnValues(5));

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------