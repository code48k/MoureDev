let frase = "Soy muy bueno programando cada día que pasa lo hago mejor";

let numeroVocales = "";

let i = 0;

do{

let letra = frase[i].toLowerCase(); 

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){

        numeroVocales++;

    }
i++;

}while (i<frase.length);

console.log("Número de vocales: " + numeroVocales);
