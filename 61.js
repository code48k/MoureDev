// 61.- Crea una función que reciba dos números y devuelva su suma. Explora diferentes sintaxis de funciones para resolver el ejercicio.

// Función simple

let resultadoSimple;

function functionSimple(){

    resultadoSimple = 43 + 91;

}

functionSimple();

console.log(resultadoSimple);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función parametros

let resultadoParameters;

function functionParameters(a, b){

      resultadoParameters = a + b;

}

functionParameters(35, 21);

console.log(resultadoParameters);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funcion Anónima

let resultadoAnonymous;

const functionAnonymous = function(){

  resultadoAnonymous = 13 + 31;

}

functionAnonymous();

console.log(resultadoAnonymous);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones Flecha

let resultadoArrow;

const functionArrow = (values1, values2) =>{
    resultadoArrow = values1 + values2;
    
}

functionArrow(21, 31);

console.log(resultadoArrow);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones de order superior

function operar(x, y, operacion) {

  return operacion(x, y);

}

const sumar = (a, b) => a + b;

const multiplicar = (a, b) => a * b;

console.log(operar(3, 4, sumar)); 

console.log(operar(3, 4, multiplicar));  

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Retorno de Valores

function functionReturnValues(a, b){

    return a + b;

}

console.log(functionReturnValues(20, 11));

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------