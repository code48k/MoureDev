// 55.- Escribe un bucle que cuente el número de vocales en una cadena de texto. Usa diferentes bucles tanto while, do while y for!.

let frase = "Hola, soy Javacript!!!, cada vez aprendo más, Jajaja!!cd.";

let numerovocales1 = 0;
let numerovocales2 = 0;
let numerovocales3 = 0;

for (let buclfr = 0; buclfr<frase.length; buclfr++){

    let letra = frase[buclfr].toLowerCase();

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        numerovocales1++;
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let bucWhle = 0;

while (bucWhle<frase.length){

    let letra = frase[bucWhle].toLowerCase();

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){

        numerovocales2++;
    }

bucWhle++;

}                    

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let bucDoWhle = 0;

do{
    let letra = frase[bucDoWhle].toLowerCase();

        bucDoWhle++;

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){

        numerovocales3++;
    }

} while (bucDoWhle<frase.length)

console.log("Número de vocales introducidas: " + numerovocales1);
console.log("Número de vocales introducidas: " + numerovocales2);
console.log("Número de vocales introducidas: " + numerovocales3);