// 58.- Usa un bucle para invertir una cadena de texto. Usa diferentes bucles tanto while, do while y for!.

let cadena = "Hola, mi nombre es Juan";

let cadenarevertida = "";
   
//Itero la cadena de manera inversa

for(let i = cadena.length-1; i>=0; i--)
{
  //Voy concatenando el valor a la cadena resultado
  
  cadenarevertida += cadena[i];
}
console.log(cadenarevertida);