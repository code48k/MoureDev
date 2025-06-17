// 60.- Haz un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 40. Usa diferentes bucles tanto while, do while y for!.

const numeros = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

const vacio = [];

for (let buclfr = 0; buclfr<numeros.length; buclfr++){

    if (numeros[buclfr] >= 40){

        vacio.push(numeros[buclfr]);
    }

}

    console.log(vacio);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
