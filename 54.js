// 54.- Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola. Usa diferentes bucles tanto while, do while y for!.

let myArray = [];

myArray = ["JUANMA", "IVAN", "MARIO", "PEPE", "ANA", "ERIKA", "CARMEN"];

for (let buclfr = 0; buclfr<myArray.length; buclfr++){
    console.log(myArray[buclfr]);

}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let bucWhle = 0;

while (bucWhle<myArray.length){

    console.log(myArray[bucWhle]);
    bucWhle++;

}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let bucDoWhle = 0;

do{
    console.log(myArray[bucDoWhle]);
    bucDoWhle++;

} while (bucDoWhle<myArray.length);