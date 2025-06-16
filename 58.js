// 58.- Usa un bucle para invertir una cadena de texto. Usa diferentes bucles tanto while, do while y for!.

let cadena = "Hola, mi nombre es Juan";

let cadenarevertida = "";

for (let buclfr = cadena.length-1; buclfr>=0; buclfr--){

    cadenarevertida += cadena[buclfr];

}

console.log(cadenarevertida);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let bucWhle = cadena.length-1;

cadenarevertida = "";

while (bucWhle>=0){

    cadenarevertida += cadena[bucWhle];

  bucWhle--;

}

console.log(cadenarevertida);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let bucDoWhle = cadena.length-1;

cadenarevertida = "";


do {
  
  cadenarevertida += cadena[bucDoWhle];
  
  bucDoWhle--;
}

while (bucDoWhle>=0);

console.log(cadenarevertida);