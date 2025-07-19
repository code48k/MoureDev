// 68.- Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado. Explora diferentes sintaxis de funciones para resolver el ejercicio.

// Función simple

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let empty = [];

function receiveArraySimple(){

    for (let i=0; i<array.length; i++){

        let fillEmpty = empty.push(array[i]);

        let numberSquare = fillEmpty ** 2;

        console.log(numberSquare);

    }

}

receiveArraySimple();