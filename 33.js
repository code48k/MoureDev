// 33.- Verifica si un número es positivo, negativo o cero e imprime un mensaje.

let a = Math.sign("-10");

if (a == 0){
    console.log("El número es cero");
}

else if (a == +1){
    console.log("El número es positivo");
}

else if (a == -1){
    console.log("El número es negativo");
}

else{
    console.log("No es un numero lo que se ha introducido");
}