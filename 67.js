// 67.- Crea una función que reciba un array de números y devuelva la suma de todos los números pares. Explora diferentes sintaxis de funciones para resolver el ejercicio.

// Función simple

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

let newArray = [];

function receiveSimple(){

    for (let i=0; i<array.length; i++){

        if (i % 2 == 0) {
    
            newArray.push(array[i]);

        }

    }

}

receiveSimple();

console.log(newArray);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función parametros

newArray = [];

function receiveParameters(str){

    for (let i=0; i<str.length; i++){

        if (i % 2 == 0){

            newArray.push(str[i]);
        }

    }

}

receiveParameters([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]); // PORQUE EN ESTE CASO FUNCIONA SIN RETURN

console.log(newArray);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funcion Anónima

array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

newArray = [];

const resultAnonymous = function(){

    for (let i=0; i<array.length; i++){

        if (i % 2 == 0){

            newArray.push(array[i]);

        }
    }

}

resultAnonymous();

console.log(newArray);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones Flecha

array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

newArray = [];

const resultArrow = () =>{

        for (let i=0; i<array.length; i++){

        if (i % 2 == 0){

            newArray.push(array[i]);

        }
    }

}

resultArrow();

console.log(newArray);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Retorno de Valores

array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

newArray = [];

function resultReturnValues(){

    for (let i=0; i<array.length; i++){

        if (i % 2 == 0){

            newArray.push(array[i]);
        }
    }

     // PORQUE EN ESTE CASO FUNCIONA SIN RETURN

}

resultReturnValues();

console.log(newArray);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------