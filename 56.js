// 56.- Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto. Usa diferentes bucles tanto while, do while y for!.

let myArray = [1, 2, 3, 4, 5]; 

let productoBuclfr = 1;

for (let buclfr = 0; buclfr < myArray.length; buclfr++) {

    productoBuclfr *= myArray[buclfr];
}

console.log("Producto con for:", productoBuclfr);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let bucWhle = 0;

let productoBucWhle = 1;

while (bucWhle<myArray.length){

    productoBucWhle = productoBucWhle * myArray[bucWhle];

    bucWhle++;
}

console.log("Producto con while:", productoBucWhle);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let bucDoWhle = 0;

let productoBucDoWhle = 1;

do{
    productoBucDoWhle = productoBucDoWhle * myArray[bucDoWhle];

    bucDoWhle++;

}

while(bucDoWhle<myArray.length);

console.log("Producto con do while:", productoBucDoWhle);