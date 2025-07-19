// 64.- Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas. Explora diferentes sintaxis de funciones para resolver el ejercicio.

// Función simple

let cadena = [
    "¡Hola, soy Javascript",
    "¡He cambiado a PHP lenguaje de servidor!!!",
    "¡Ahora soy Java!!!...",
    "¡Me convertido en el famoso .NET!!!...",
    "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."
];

function receiveArraySimple(){

    let newArray = [];

    for (let i=0; i<cadena.length; i++){

        newArray.push(cadena[i].toUpperCase());
    }

    return newArray;
}

let resultSimple = receiveArraySimple();

console.log(resultSimple);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función parametros

function receiveArrayParameters(str){

    let newArray = [];

    for (let i=0; i<str.length; i++){

        newArray.push(str[i].toUpperCase());
    }

    return newArray;
}

let resultParameters = receiveArrayParameters([
    "¡Hola, soy Javascript",
    "¡He cambiado a PHP lenguaje de servidor!!!",
    "¡Ahora soy Java!!!...",
    "¡Me convertido en el famoso .NET!!!...",
    "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."]);

console.log(resultParameters);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funcion Anónima

cadena = [
    "¡Hola, soy Javascript",
    "¡He cambiado a PHP lenguaje de servidor!!!",
    "¡Ahora soy Java!!!...",
    "¡Me convertido en el famoso .NET!!!...",
    "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."
];

const resultArrayAnonymous = function(){

    let newArray = [];

    for (let i=0; i<cadena.length; i++){

        newArray.push(cadena[i].toUpperCase());

    }

    return newArray;

} 

let resultadoAnonymous = resultArrayAnonymous();

console.log(resultadoAnonymous);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones Flecha

cadena = [
    "¡Hola, soy Javascript",
    "¡He cambiado a PHP lenguaje de servidor!!!",
    "¡Ahora soy Java!!!...",
    "¡Me convertido en el famoso .NET!!!...",
    "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."
];

const resultArrayArrow = () => {

    let newArray = [];

    for (let i=0; i<cadena.length; i++){

        newArray.push(cadena[i].toUpperCase());

    }

    return newArray;

} 

let resultArrow = resultArrayArrow();

console.log(resultArrow);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Retorno de Valores

function resultArrayReturnValues(str){

    let newArray = [];

    for (let i=0; i<str.length; i++){
        
        newArray.push(str[i].toUpperCase());
    }

    return newArray;
}

let resultReturnValues = resultArrayReturnValues([
    "¡Hola, soy Javascript",
    "¡He cambiado a PHP lenguaje de servidor!!!",
    "¡Ahora soy Java!!!...",
    "¡Me convertido en el famoso .NET!!!...",
    "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."]);

console.log(resultReturnValues); 

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------