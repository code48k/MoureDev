// 61.- Crea una función que reciba dos números y devuelva su suma. Explora diferentes sintaxis de funciones para resolver el ejercicio.

// Función simple

let resultadoFunctionSimple;

function functionSimple(){

    resultadoFunctionSimple = 43 + 91;

}

functionSimple();

console.log(resultadoFunctionSimple);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función parametros

let resultadoFunctionParameters;

function functionParameters(a, b){

      resultadoFunctionParameters = a + b;

}

functionParameters(35, 21);

console.log(resultadoFunctionParameters);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funcion Anónima

let resultadoFunctionAnonymous;

const functionAnonymous = function(){

  resultadoFunctionAnonymous = 13 + 31;

}

functionAnonymous();

console.log(resultadoFunctionAnonymous);


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones Flecha

let resultadoFunctionArrow;

const functionArrow = (values1, values2) =>{
    resultadoFunctionArrow = values1 + values2;

}

functionArrow(21, 31);

console.log(resultadoFunctionArrow);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones de order superior

function operar(x, y, operacion) {

  return operacion(x, y);

}

const sumar = (a, b) => a + b;

const multiplicar = (a, b) => a * b;

console.log(operar(3, 4, sumar));        // 7

console.log(operar(3, 4, multiplicar));  // 12

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Retorno de Valores

function functionReturnValues(a, b){

    return a + b;

}

console.log(functionReturnValues(20, 11));

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------