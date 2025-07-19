// 69.- Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso. Explora diferentes sintaxis de funciones para resolver el ejercicio.

// Función simple

let cadena = "¡Hola, soy JavasCript!!!!!";

let cadenaInvertida = "";

function receiveSimple(){

    for (let i = cadena.length; i--;){

        cadenaInvertida += cadena[i];

    }
}

receiveSimple();

console.log(cadenaInvertida);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función parametros

cadenaInvertida = "";

function receiveParameters(str){

    for (let i=str.length; i--;){

        cadenaInvertida += str[i];

    }

}

receiveParameters("¡Hola, soy JavasCript!!!!!");

console.log(cadenaInvertida);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funcion Anónima

cadena = "¡Hola, soy JavasCript!!!!!";

cadenaInvertida = "";

const resultAnonymous = function(){

    for (let i = cadena.length; i--;){

        cadenaInvertida += cadena[i];

    }
}

resultAnonymous();

console.log(cadenaInvertida);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones Flecha

cadena = "¡Hola, soy JavasCript!!!!!";

cadenaInvertida = "";

const resultArrow = () =>{

    for (let i= cadena.length; i--;){

        cadenaInvertida += cadena[i];

    }

}

resultArrow();

console.log(cadenaInvertida);


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Retorno de Valores

cadenaInvertida = "";

function resultReturnValues(str){

    for (let i=str.length; i--;){

        cadenaInvertida += str[i];

    }

    return cadenaInvertida;
}

resultReturnValues("¡Hola, soy JavasCript!!!!!");

console.log(cadenaInvertida);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------