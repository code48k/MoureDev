// 64.- Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas. Explora diferentes sintaxis de funciones para resolver el ejercicio.

let cadena = ["¡Hola, soy Javascript"];

function arrayStringSimple(){

    for (let i=0; i<cadena.length; i++){

        let frase = cadena[i].toUpperCase();
        let resultado = [frase];
        console.log(resultado);

    }   

}

arrayStringSimple();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función parametros

function arrayStringParameters(str){
    
    for (let i =0; i<str.length; i++){

        let resultado = str[i].toUpperCase();
        console.log([resultado]);
    }
}

arrayStringParameters(["¡He cambiado a PHP lenguaje de servidor!!!"]);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funcion Anónima

cadena = ["¡Ahora soy Java!!!..."];

const arrayStringAnonymous = function(){

    for (let i=0; i<cadena.length; i++){

        let resultado = cadena[i].toUpperCase();
        console.log([resultado]);
    }

}

arrayStringAnonymous();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones Flecha

cadena = ["¡Me convertido en el famoso .NET!!!..."];

const resultArrow = () => {

    for (let i =0; i<cadena.length; i++){

        let resultado = cadena[i].toUpperCase();
        console.log([resultado]);
    }

}

resultArrow();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Retorno de Valores

cadena = ["¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."];

function resultReturnValues(cadena){

    for (let i=0; i<cadena.length; i++) {

        let letra = cadena[i].toUpperCase();

        return letra;

    }
}

let totalVocales = resultReturnValues(cadena);
console.log([totalVocales]);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------