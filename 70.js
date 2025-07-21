// 70.- Crea una función que calcule el factorial de un número dado. Explora diferentes sintaxis de funciones para resolver el ejercicio.

// Función simple

function receiveSimple(){

    let resultado = 1;

    let n = 5;

    for (let i=2; i<=n; i++){

        resultado *= i;

    }

    return resultado;

}

console.log(`Número Factorial es 5*4*3*2*1:`, receiveSimple());

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función parametros

function receiveParameters(n){

    let resultado = 1;

    for (let i=2; i<=n; i++){

        resultado *= i;
    }

    return resultado;
}

console.log(`Número Factorial es 5*4*3*2*1:`, receiveParameters(5));

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funcion Anónima

const resultAnonymous = function(){

    let resultado = 1;

    let n = 5;

    for (let i=2; i<=n; i++){

        resultado = resultado * i;

    }

    return resultado;

}

console.log(`Número Factorial es 5*4*3*2*1:`, resultAnonymous());

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones Flecha

const resultArrow = () =>{

    let resultado = 1;

    let n = 5;

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