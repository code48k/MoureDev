let frase = "Soy muy bueno programando cada día que pasa lo hago mejor";

let numeroVocales = "";

let i = 0;

while (i<frase.length){

let letra = frase[i].toLowerCase(); 

        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){

        numeroVocales++;

}

i++;

}

console.log("Número de vocales: " + numeroVocales);
