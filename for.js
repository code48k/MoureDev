let frase = "Soy muy bueno programando cada día que pasa lo hago mejor";

let numeroVocales = "";

for (let i =0; i<frase.length; i++){

    let letra = frase[i].toLowerCase(); 

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){

        numeroVocales++;
}
}

console.log("Número de vocales: " + numeroVocales);
