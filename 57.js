// 57.- Escribe un bucle que imprima la tabla de multiplicar del 5. Usa diferentes bucles tanto while, do while y for!.

let numBuclfr = 5;

let tablaMultiplicarBuclfr;

for (let buclfr = 1; buclfr<=10; buclfr++){

    tablaMultiplicarBuclfr = numBuclfr * buclfr;

console.log(tablaMultiplicarBuclfr);

}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let numBucWhle = 5;

let tablaMultiplicarBucWhle;

let bucWhle = 1;

while (bucWhle<=10){

    tablaMultiplicarBucWhle = numBucWhle * bucWhle;

    bucWhle++;
    
    console.log(tablaMultiplicarBucWhle);

}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let numbucDoWhle = 5;

let tablaMultiplicarbucDoWhle;

let bucDoWhle = 1;

do{

    tablaMultiplicarbucDoWhle = numbucDoWhle * bucDoWhle;

    bucDoWhle++;

    console.log(tablaMultiplicarbucDoWhle);

}

while (bucDoWhle<=10);