// 63.- Crea una funcion que reciba un string y devuelva el número de vocales que contiene. Explora diferentes sintaxis de funciones para resolver el ejercicio.

// Función simple

let cadena = "¡Hola, chicos soy JavasCript!...";

function resultVocalSimple(){

    let contador = 0;

    for (let i=0; i<cadena.length; i++){

        let frase = cadena[i].toLowerCase();

        if(frase === "a" || frase === "e" || frase === "i" || frase === "o" || frase === "u"){
            contador++;
        }
    }

console.log(`Números de vocales introducidas: ${contador}`);

}

resultVocalSimple();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función parametros

function resultVocalParameters(str){
    let contador = 0;

    for (let i=0; i<str.length; i++){

        let frase = str[i].toLowerCase();

        if (frase === "a" || frase === "e" || frase === "i" || frase === "o" || frase === "u"){
            contador++;
        }
    }
 
console.log(`Números de vocales introducidas: ${contador}`);

}

resultVocalParameters("¡He cambiado a PHP lenguaje de servidor!!!");

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funcion Anónima

cadena = "¡Ahora soy Java!!!...";

const resultAnonymous = function(){

    let contador = 0;

    for (let i=0; i<cadena.length; i++){
        
        let frase = cadena[i].toLowerCase();

        if(frase === "a" || frase === "e" || frase === "i" || frase === "o" || frase === "u"){

            contador++;
        }

    }

    console.log(`Números de vocales introducidas: ${contador}`);

}

resultAnonymous();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones Flecha

cadena = "¡Me convertido en el famoso .NET!!!...";

const resultArrow = () => {

    let contador = 0;

    for (let i=0; i<cadena.length; i++){
        
        let frase = cadena[i].toLowerCase();

        if(frase === "a" || frase === "e" || frase === "i" || frase === "o" || frase === "u"){

            contador++;
        }

    }

    console.log(`Números de vocales introducidas: ${contador}`);

}

resultArrow();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Retorno de Valores

cadena = "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!...";

function resultReturnValues(){
    
    let contador = 0;

    for (let i=0; i<cadena.length; i++){

        let frase = cadena[i].toLowerCase();

        if(frase === "a" || frase === "e" || frase === "i" || frase === "o" || frase === "u"){

            contador++;
        }
    }

    return `Números de vocales introducidas: ${contador}`;

}

let resultado = resultReturnValues();
console.log(resultado);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------