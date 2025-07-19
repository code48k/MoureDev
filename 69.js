// 69.- Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso. Explora diferentes sintaxis de funciones para resolver el ejercicio.

// Función simple

let cadena = "¡Hola, soy JavasCript!!!!!";

let cadenaInvertida = "";

function receiveChainSimple(){

    for (let i = cadena.length; i--;){

        cadenaInvertida += cadena[i];

    }
}

receiveChainSimple();

console.log(cadenaInvertida);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función parametros

cadenaInvertida = "";

function receiveArrayParameters(str){

    for (let i=str.length; i--;){

        cadenaInvertida += str[i];

    }

}

receiveArrayParameters("¡Hola, soy JavasCript!!!!!");

console.log(cadenaInvertida);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funcion Anónima

cadena = "¡Hola, soy JavasCript!!!!!";

cadenaInvertida = "";

const resultArrayAnonymous = function(){

    for (let i = cadena.length; i--;){

        cadenaInvertida += cadena[i];

    }
}

resultArrayAnonymous();

console.log(cadenaInvertida);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones Flecha

cadena = "¡Hola, soy JavasCript!!!!!";

cadenaInvertida = "";

const resultArrayArrow = () =>{

    for (let i= cadena.length; i--;){

        cadenaInvertida += cadena[i];

    }

}

resultArrayArrow();

console.log(cadenaInvertida);


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Retorno de Valores

cadenaInvertida = "";

function resultArrayReturnValues(str){

    for (let i=str.length; i--;){

        cadenaInvertida += str[i];

    }

    return cadenaInvertida;
}

resultArrayReturnValues("¡Hola, soy JavasCript!!!!!");

console.log(cadenaInvertida);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------