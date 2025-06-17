// 52.- Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado. Usa diferentes bucles tanto while, do while y for!. 

let resultado = 0;

for (let buclfr = 0; buclfr<=100; buclfr++){

    resultado += buclfr;

console.log("Resultado con for:", resultado);

}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

resultado = 0;

let buclfr = 0;

while (buclfr<=100){

    resultado += buclfr;

    buclfr++;

console.log("Resultado con while:", resultado);

}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

resultado = 0;

let bucDoWhle = 0;

do{
    resultado += bucDoWhle;

    bucDoWhle++;

    console.log("Resultado con do while:", resultado);
}

while (bucDoWhle<=100);