// 58.- Usa un bucle para invertir una cadena de texto. Usa diferentes bucles tanto while, do while y for!.   

let cadena = "Hola, soy Javascript, encantado de conocerte amigo!!!";

let inversionCadena = "";

for (let buclfr = cadena.length-1; buclfr>=0; buclfr--){

    inversionCadena += cadena[buclfr];

}

console.log(inversionCadena);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let bucWhle = cadena.length-1;

inversionCadena = "";

while (bucWhle>=0){

    inversionCadena += cadena[bucWhle];

    bucWhle--;

}

console.log(inversionCadena);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let bucDoWhle = cadena.length-1;

inversionCadena = "";

do {

    inversionCadena += cadena[bucDoWhle];

    bucDoWhle--;

}

while (bucDoWhle>=0);

console.log(inversionCadena);