// 58.- Usa un bucle para invertir una cadena de texto. Usa diferentes bucles tanto while, do while y for!.

let cadena = "Hola, mi nombre es Juan";

let cadenarevertida = "";

for (let buclfr = cadena.length-1; buclfr>=0; buclfr--){

    cadenarevertida += cadena[buclfr];

}

console.log(cadenarevertida);