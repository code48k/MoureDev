// 64.- Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas. Explora diferentes sintaxis de funciones para resolver el ejercicio.

let cadena = ["¡Hola, soy Javascript", "¡He cambiado a PHP lenguaje de servidor!!!", "¡Ahora soy Java!!!...", "¡Me convertido en el famoso .NET!!!...", "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."];

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

arrayStringParameters(["¡Hola, soy Javascript", "¡He cambiado a PHP lenguaje de servidor!!!", "¡Ahora soy Java!!!...", "¡Me convertido en el famoso .NET!!!...", "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."]);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funcion Anónima

cadena = ["¡Hola, soy Javascript", "¡He cambiado a PHP lenguaje de servidor!!!", "¡Ahora soy Java!!!...", "¡Me convertido en el famoso .NET!!!...", "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."];

const arrayStringAnonymous = function(){

    for (let i=0; i<cadena.length; i++){

        let resultado = cadena[i].toUpperCase();
        console.log([resultado]);
    }

}

arrayStringAnonymous();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones Flecha

cadena = ["¡Hola, soy Javascript", "¡He cambiado a PHP lenguaje de servidor!!!", "¡Ahora soy Java!!!...", "¡Me convertido en el famoso .NET!!!...", "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."];

const resultArrow = () => {

    for (let i =0; i<cadena.length; i++){

        let resultado = cadena[i].toUpperCase();
        console.log([resultado]);
    }

}

resultArrow();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Retorno de Valores

cadena = ["¡Hola, soy Javascript", "¡He cambiado a PHP lenguaje de servidor!!!", "¡Ahora soy Java!!!...", "¡Me convertido en el famoso .NET!!!...", "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."];

function resultReturnValues(cadena){

    let resultado = [];

    for (let i=0; i<cadena.length; i++) {

        resultado.push(cadena[i].toUpperCase());

    }

    return resultado;
}

let totalMayusculas = resultReturnValues(cadena);
console.log(totalMayusculas);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------