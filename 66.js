// 66.- Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos. Explora diferentes sintaxis de funciones para resolver el ejercicio.

let cadena1 = [
    "¡Hola, soy Javascript",
    "¡He cambiado a PHP lenguaje de servidor!!!",
    "¡Ahora soy Java!!!...",
    "¡Me convertido en el famoso .NET!!!...",
    "¡Ahora son Base de Datos MYSQL y también PostgreSQL:!!!..."];

let cadena2 = [
    "17", true, 121, 36, 99];

function receiveArraySimple(){

    let newArray = [];

    for (let i=0; i<cadena1.length; i++){

        newArray.push(cadena1[i]);
        newArray.push(cadena2[i]);

    }

    return newArray;
}

let resultSimple = receiveArraySimple();

console.log(resultSimple);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función parametros

function receiveArrayParameters(str, number){

    


}