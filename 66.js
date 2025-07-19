// 66.- Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos. Explora diferentes sintaxis de funciones para resolver el ejercicio.

// Función simple

let array1 = [
    "¡Hola, soy Javascript",
    "¡He cambiado a PHP lenguaje de servidor!!!",
    "¡Ahora soy Java!!!...",
    "¡Me convertido en el famoso .NET!!!...",
    "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."];

let array2 = [
    "17", true, 121, 36, 99];

function receiveArraySimple(){

    let newArray = [];

    for (let i=0; i<array1.length; i++){

        newArray.push(array1[i]);
        newArray.push(array2[i]);

    }

    return newArray;
}

let resultSimple = receiveArraySimple();

console.log(resultSimple);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función parametros

miArray1 = [
    "¡Hola, soy Javascript",
    "¡He cambiado a PHP lenguaje de servidor!!!",
    "¡Ahora soy Java!!!...",
    "¡Me convertido en el famoso .NET!!!...",
    "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."];

miArray2 = [
    "17", true, 121, 36, 99];

function receiveArrayParameters(array1, array2) {

    let newArray = [];

    for (let i=0; i<array1.length; i++){

        newArray.push(array1[i]);
        newArray.push(array2[i]);

    }
    
    console.log(newArray);

}


let resultParameters = receiveArrayParameters(miArray1, miArray2);
console.log(resultParameters);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funcion Anónima

array1 = [
    "¡Hola, soy Javascript",
    "¡He cambiado a PHP lenguaje de servidor!!!",
    "¡Ahora soy Java!!!...",
    "¡Me convertido en el famoso .NET!!!...",
    "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."];

array2 = [
    "17", true, 121, 36, 99];

const resultArrayAnonymous = function(){

    newArray = [];

    for (let i=0; i<array1.length; i++){

        newArray.push(array1[i]);
        newArray.push(array2[i]);

    }

    return newArray;

}

let resultAnonymou = resultArrayAnonymous();

console.log(resultAnonymou);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones Flecha

array1 = [
    "¡Hola, soy Javascript",
    "¡He cambiado a PHP lenguaje de servidor!!!",
    "¡Ahora soy Java!!!...",
    "¡Me convertido en el famoso .NET!!!...",
    "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."];

array2 = [
    "17", true, 121, 36, 99];

const resultArrayArrow = () => {

    let newArray = [];

    for (let i=0; i<array1.length; i++){

        newArray.push(array1[i]);
        newArray.push(array2[i]);

    }

    return newArray;

} 

let resultArrow = resultArrayArrow();

console.log(resultArrow);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Retorno de Valores

miArray1 = [
    "¡Hola, soy Javascript",
    "¡He cambiado a PHP lenguaje de servidor!!!",
    "¡Ahora soy Java!!!...",
    "¡Me convertido en el famoso .NET!!!...",
    "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."
    ];

miArray2 = [
    "17", true, 121, 36, 99
    ];

function resultArrayReturnValues(array1, array2){

    let newArray = [];

    for (let i = 0; i < array1.length; i++) {

        newArray.push(array1[i]);
        newArray.push(array2[i]);
    }

    return newArray;

}

let resultReturnValues = resultArrayReturnValues(miArray1, miArray2);

console.log(resultReturnValues);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------