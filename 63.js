// 63.- Crea una funcion que reciba un string y devuelva el número de vocales que contiene. Explora diferentes sintaxis de funciones para resolver el ejercicio.

// Función simple

let cadena = "¡Hola, chicos soy JavasCript!...";

function resultadoVocalSimple(){

    let contador = 0;

    for (let i=0; i<cadena.length; i++){

        let frase = cadena[i].toLowerCase();

        if(frase === "a" || frase === "e" || frase === "i" || frase === "o" || frase === "u"){
            contador++;
        }
    }

console.log(`Números de vocales introducidas: ${contador}`);

}

resultadoVocalSimple();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función parametros

function resultadoVocalParameters(str){
    let contador = 0;

    for (let i=0; i<str.length; i++){

        let frase = str[i].toLowerCase();

        if (frase === "a" || frase === "e" || frase === "i" || frase === "o" || frase === "u"){
            contador++;
        }
    }
 
console.log(`Números de vocales introducidas: ${contador}`);

}

resultadoVocalParameters("¡He cambiado a PHP lenguaje de servidor!!!");

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funcion Anónima

cadena = "¡Ahora soy Java!!!...";

const functionAnonymous = function(){

    let contador = 0;

    for (let i=0; i<cadena.length; i++){
        
        let frase = cadena[i].toLowerCase();

        if(frase === "a" || frase === "e" || frase === "i" || frase === "o" || frase === "u"){

            contador++;
        }

    }

    console.log(`Números de vocales introducidas: ${contador}`);

}

functionAnonymous();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones Flecha

cadena = "¡Me convertido en el famoso .NET!!!...";

const functionArrow = () => {

    let contador = 0;

    for (let i=0; i<cadena.length; i++){
        
        let frase = cadena[i].toLowerCase();

        if(frase === "a" || frase === "e" || frase === "i" || frase === "o" || frase === "u"){

            contador++;
        }

    }

    console.log(`Números de vocales introducidas: ${contador}`);

}

functionArrow();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Retorno de Valores